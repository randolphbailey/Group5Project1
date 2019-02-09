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


  var google = new firebase.auth.GoogleAuthProvider();
  var twitter = new firebase.auth.TwitterAuthProvider();
  var facebook = new firebase.auth.FacebookAuthProvider();
  var github = new firebase.auth.GithubAuthProvider();


  $("#google-button").on("click",() => {
    firebase.auth().signInWithPopup(google).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log("Sign in successful");
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

  $("#facebook-button").on("click", () => {
    firebase.auth().signInWithPopup(facebook).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
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

  $("#twitter-button").on("click", () => {
    firebase.auth().signInWithPopup(twitter).then(function(result) {
        // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
        // You can use these server side with your app's credentials to access the Twitter API.
        var token = result.credential.accessToken;
        var secret = result.credential.secret;
        // The signed-in user info.
        var user = result.user;
        // ...
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

  $("#github-button").on("click", () => {
    firebase.auth().signInWithPopup(github).then(function(result) {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
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
  








