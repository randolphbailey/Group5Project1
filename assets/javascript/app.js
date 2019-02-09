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

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

  // Firebase UI setup
  ui.start('#firebaseui-auth-container', {
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID
    ],
    // Other config options...
  });

  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return false;
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'redirect',
    signInSuccessUrl: "https://www.google.com",
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ]
  };
  

firebase.initializeApp(config);

// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);

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



