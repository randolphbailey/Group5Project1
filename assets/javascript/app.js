// begin twitter code

var searchCity = "austin";
var searchBusiness = "el arroyo"

console.log($('#container2').tweetie({
    "url": "https://cors-anywhere.herokuapp.com/" + "https://files.sonnyt.com/tweetie/v3/",
    "type": "search",
    "template": "{{tweet.text}}<br>",
    "dateFormat": "%b %d, %Y",
    "params": {
      "count": 15,
      "q": "el arroyo austin"
    }
  }));

//   end twitterr code


/*
GOOGLE MAPS CODE
*/

var map;
var service;

function initMap() {
//Set Austin latitude and longitude
var austin = new google.maps.LatLng(30.27,-97.74);

//Initialize map
map = new google.maps.Map(document.getElementById('map'), {
center: austin,
zoom: 10
});

//Initialize Places functionality
service = new google.maps.places.PlacesService(map);
}

/*
END GOOGLE MAPS CODE
*/
// begin twitter code
var searchCity = "austin";
var searchBusiness = "el arroyo"

console.log($('#container2').tweetie({
    "url": "https://cors-anywhere.herokuapp.com/" + "https://files.sonnyt.com/tweetie/v3/",
    "type": "search",
    "template":  "<li>{{tweet.created_at}} - {{tweet.text}}</li>",
    "dateFormat": "%b %d, %Y",
    "params": {
      "count": 15,
    //   "q": "the clay pit",
    //   "q": "austin"
      "q": "el arroyo austin"
    }
  }));



