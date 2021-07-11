import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCZ2nw0W-coD9O8hiyYATIiS1mPrQcm6XQ",
    authDomain: "jakfoodqueue.firebaseapp.com",
    projectId: "jakfoodqueue",
    storageBucket: "jakfoodqueue.appspot.com",
    messagingSenderId: "225447994158",
    appId: "1:225447994158:web:ba9f0c0171de3f878dd0bf",
    measurementId: "G-PXGGBKRDBP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;