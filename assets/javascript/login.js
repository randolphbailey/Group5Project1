// Initialize Firebase
var config = {
    apiKey: "AIzaSyCswD9r_NwpQdqKraJ6hIsgSsJ3V8YuFJo",
    authDomain: "group5project1-540d2.firebaseapp.com",
    databaseURL: "https://group5project1-540d2.firebaseio.com",
    projectId: "group5project1-540d2",
    storageBucket: "group5project1-540d2.appspot.com",
    messagingSenderId: "261770648936"
  };

  firebase.initializeApp(config);

  // Declaring some globals
  var database = firebase.database();
  var latestSearch;
  var favorites = [];



  // Initialize Providers
  var google = new firebase.auth.GoogleAuthProvider();


  $("#login-button").on("click",(e) => {
    e.preventDefault();
    firebase.auth().signInWithPopup(google).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        $("#login-button").remove();
        console.log(user);
        // database logging
        database.ref(user.uid).set({
            name: user.displayName,
            email: user.email,
            favorites: "Add a Favorite Location!"
        })

      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });

  })


  $("#fave-button").on("click", (event) => {
    event.preventDefault();
    latestSearch = $("#fd").val();
    favorites.push(latestSearch);
    console.log(latestSearch);
    var user = firebase.auth().currentUser;
    console.log(user.uid);
    //logging it onto the database
    database.ref(`${user.uid}/favorites`).push(latestSearch);
    for (var i = 0; i < favorites.length; i++) {
        if(favorites[favorites.length-1]) {
            var buttonsHTML = "<button class='dynamic' id = '" + (favorites.length-1) + "'onclick='populate($(this))'>" + latestSearch + "</button>"
            $("#buttons-2").append(buttonsHTML);
            return;
        }
    }
  
})

function populate (val) {
    for(var i = 0; i < favorites.length; i++) {
        if (val.attr("id") == i){
            console.log(favorites[i]);
            $("#fd").val(favorites[i]);
        }
    }
}

console.log("test37");







