import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCDLuERDuSmwKghaEffvX_aAkgDJwVn6a8",
    authDomain: "react-firebase-a64a5.firebaseapp.com",
    databaseURL: "https://react-firebase-a64a5.firebaseio.com",
    projectId: "react-firebase-a64a5",
    storageBucket: "react-firebase-a64a5.appspot.com",
    messagingSenderId: "375659794847",
    appId: "1:375659794847:web:e90532204e853efca06daa",
    measurementId: "G-ZHTHN4DMTR"
};

const firebaseConf = firebase.initializeApp(config);
export default firebaseConf;