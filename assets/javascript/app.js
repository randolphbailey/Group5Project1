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

// function createMarker(place) {
//   console.log("place: ");
//   console.log(place);

//   var marker = new google.maps.Marker({
//     map: map,
//     position: place.geometry.location
//   });

//   google.maps.event.addListener(marker, 'click', function() {
//     infowindow.setContent(place.name);
//     infowindow.open(map, this);
//   });
// }

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
      // calling the renderTweets function on our places
      // checks if the city name is given
      if (place.address_components){
        renderTweets(place.name, place.address_components[3].long_name);

      // if not we will just call our function with the name and type of establishment
      } else {
        renderTweets(place.name, place.types[0]);
      }

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
}

/*
END GOOGLE MAPS CODE
*/

// begin twitter code

// this will be called when the user searched a place (either pressing enter or clicking submit)
// i want to only pass into it the name of the city and the name of the business/type of business
// any more specific than that and we tend to not have many tweets that match

var testTemplate = "<div class='col-4 mb-3'><div class='card'><div class='card-body'><h5 class='card-title'>{{tweet.user.screen_name}}</h5><p class='card-text'>{{tweet.text}}</p></div><div class='card-footer'><a href='https://twitter.com/Twitter/status/{{tweet.id_str}}' target='_blank'>Permalink</a></div></div></div>";

function renderTweets(pl, ci){
  $('#container2').tweetie({
    "url": "https://cors-anywhere.herokuapp.com/" + "https://files.sonnyt.com/tweetie/v3/",
    "type": "search",
<<<<<<< HEAD
    "template": "{{tweet.text}}",
=======
    "template": testTemplate,
>>>>>>> 15348737cd1e29ff19fe9083a47058f7f0a0149c
    "dateFormat": "%b %d, %Y",
    "params": {
      "count": 15,
      "q": pl+" "+ci
    }
  });
};
// actualURL: https://twitter.com/MSUMDining/status/1095348050082422785

// https://twitter.com/i/web/status/1095348050082422785
//   end twitterr code