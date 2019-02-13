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
  var searchArray = [];
  var favoritesArray = [];


  // Initialize Providers
  var google = new firebase.auth.GoogleAuthProvider();


  $("#google-button").on("click",(e) => {
    e.preventDefault();
    firebase.auth().signInWithPopup(google).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        $("#google-button").remove();
        $("#letslogin").text("Welcome " + user.displayName + "!");
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

  $("#submit").on("click", (event) => {
    event.preventDefault();
    var value = $("#fd").val();
    searchArray.push(value);
  })

  $("#favorite").on("click", (event) => {
    event.preventDefault();
    var latestSearch = searchArray[(searchArray.length - 1)];
    favoritesArray.push(latestSearch);
    var user = firebase.auth().currentUser;
    console.log(user.uid);
    //logging it onto the database
    database.ref(`${user.uid}/favorites`).push(latestSearch)

    database.ref(`${user.uid}/favorites`).on("child_added", (child) => {
        console.log(child.val());
        var buttonsHTML = "<button class='btn' id=" + child.val() + ">" + child.val() + "</button>"
        $("#button-div").append(buttonsHTML);
    })

})

$("button").on("click", () => {
    var id = $(this).attr("id");
    console.log(id);
})











