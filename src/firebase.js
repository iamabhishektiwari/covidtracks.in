import firebase from "firebase";

var config = {
  apiKey: "AIzaSyA2TLnAgDV7wZxBo5OFt6x9dnDw3QIryXA",
  authDomain: "letsfightback-demo.firebaseapp.com",
  databaseURL: "https://letsfightback-demo.firebaseio.com",
  projectId: "letsfightback-demo",
  storageBucket: "letsfightback-demo.appspot.com",
  messagingSenderId: "337251473238",
  appId: "1:337251473238:web:60f757563a6311aba1e8f7",
  measurementId: "G-V9TH7Q1J08",
};
// Initialize Firebase
export default firebase.initializeApp(config);
