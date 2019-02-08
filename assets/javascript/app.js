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

  