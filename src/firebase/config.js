import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDbsEFm_fSG17RcpRVagruOZrfRoLYMYk4",
  authDomain: "firegram-65fdc.firebaseapp.com",
  databaseURL: "https://firegram-65fdc.firebaseio.com",
  projectId: "firegram-65fdc",
  storageBucket: "firegram-65fdc.appspot.com",
  messagingSenderId: "952737376856",
  appId: "1:952737376856:web:7862381ed24334f95ab82d",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();

const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
