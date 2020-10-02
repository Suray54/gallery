import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyCvTJ_w0Jrdt4Cy4XviajSQhM-sQXGi_mM",
  authDomain: "gallery-80432.firebaseapp.com",
  databaseURL: "https://gallery-80432.firebaseio.com",
  projectId: "gallery-80432",
  storageBucket: "gallery-80432.appspot.com",
  messagingSenderId: "743512798317",
  appId: "1:743512798317:web:dd3ee88536f5b569cc3b64",
  measurementId: "G-0T96DW7VHC",
};
//code here
firebase.initializeApp(config);
export const projectFirestore = firebase.firestore();
export const projectStorage = firebase.storage();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export default firebase;
