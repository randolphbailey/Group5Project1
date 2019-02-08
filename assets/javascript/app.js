// Initialize Firebase
var config = {
    apiKey: "AIzaSyCswD9r_NwpQdqKraJ6hIsgSsJ3V8YuFJo",
    authDomain: "group5project1-540d2.firebaseapp.com",
    databaseURL: "https://group5project1-540d2.firebaseio.com",
    projectId: "group5project1-540d2",
    storageBucket: "",
    messagingSenderId: "261770648936"
};
firebase.initializeApp(config);

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