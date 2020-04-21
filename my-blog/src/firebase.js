import  * as firebase from 'firebase'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDxVLmcEL5OZKW6oQLMWqfkVQy_SXTxFEY",
    authDomain: "blog-2de9c.firebaseapp.com",
    databaseURL: "https://blog-2de9c.firebaseio.com",
    projectId: "blog-2de9c",
    storageBucket: "blog-2de9c.appspot.com",
    messagingSenderId: "536887199835",
    appId: "1:536887199835:web:52193cbb4bc61f6c01177e",
    measurementId: "G-2Y015EQ19M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const database = firebase.database().ref('/notes');

  export const auth = firebase.auth();
  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  

  