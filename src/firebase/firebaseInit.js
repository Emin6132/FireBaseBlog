import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDMmPgt9D0PuB-LV2V87qGBtQs_p2jFpp8",
    authDomain: "fir-blog-c429f.firebaseapp.com",
    projectId: "fir-blog-c429f",
    storageBucket: "fir-blog-c429f.appspot.com",
    messagingSenderId: "1096306238402",
    appId: "1:1096306238402:web:a6b79b6b660074292b2c5b"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timesapp = firebase.firestore.FieldValue.serverTimestamp;

  export {timesapp};
  export default firebaseApp.firestore();