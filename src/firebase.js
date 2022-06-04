// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDEwRws4s3puU1QdlotCvbKCDGJF14g6Ss",
    authDomain: "unichat-9ecef.firebaseapp.com",
    projectId: "unichat-9ecef",
    storageBucket: "unichat-9ecef.appspot.com",
    messagingSenderId: "866324100362",
    appId: "1:866324100362:web:dab8c8e2c2366d2037f6f3",
    measurementId: "G-80JXJD5XQL"
  }).auth();