/*
START GOOGLE MAPS CODE
*/
var searchBox, query;

$("#submit").on("click", function() {
  searchBox = $("#fd").val();
  $("#fd").val("");
});


//define some global variables requried by Google API
var map;
var service;
var infowindow;

function createMarker(place) {
  console.log("place: ");
  console.log(place);

  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

//Main function that Google API will look for and run on page load
//Most code related to the map should go inside this function
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 30.266350, lng: -97.744267},
    zoom: 13,
    mapTypeId: 'roadmap'
  });

  // Create the search box and link it to the UI element.
  var input = document.getElementById('fd');
  var searchBox = new google.maps.places.SearchBox(input);


  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {

    var places = searchBox.getPlaces();

    geocodeLatLng(places[0].place_id, places[0].name, geocoder);

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      // console.log(place);

      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });

    map.fitBounds(bounds);
  });

   // create geocoder object
   var geocoder = new google.maps.Geocoder;

}

   // geocoding function that takes in placeID
   function geocodeLatLng(ourPlaceID, ourPlaceName, geocoder){

    geocoder.geocode({"placeId": ourPlaceID}, function(results, status) {
      // getting the city name if it is available
      // calling render tweets function on either place name and city name
      // or just place name if city name is undefined
      if (results[0].address_components[3] != undefined){
        var searchCity = results[0].address_components[3].long_name;
        var searchTerm = ourPlaceName+" "+searchCity;
        renderTweets(searchTerm);
      } else {
        renderTweets(ourPlaceName);
      }          
    });

  }


/*
END GOOGLE MAPS CODE
*/

// begin twitter code

// this will be called when the user searched a place (either pressing enter or clicking submit)
// i want to only pass into it the name of the city and the name of the business/type of business
// any more specific than that and we tend to not have many tweets
var testTemplate = '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">{{tweet.text}}</p>&mdash; {{tweet.user.name}} ({{tweet.user.screen_name}}) <a href="https://twitter.com/{{tweet.user.screen_name}}/status/{{tweet.id_str}}?ref_src=twsrc%5Etfw">{{tweet.created_at}}</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';

function renderTweets(s){
  console.log('called');
  $('#tweets').tweetie({
    "url": "https://cors-anywhere.herokuapp.com/" + "https://files.sonnyt.com/tweetie/v3/",
    "type": "search",
    "template": testTemplate,
    "dateFormat": "%b %d, %Y",
    "params": {
      "count": 15,
      "q": s
    }
  }, function() {
    console.log("Finished");
  });
};
//   end twitterr code
