import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCovEjdWEYkWcqlfl2Xd8OVA-HvcQ79M1k",
    authDomain: "clone2-e1ec1.firebaseapp.com",
    databaseURL: "https://clone2-e1ec1.firebaseio.com",
    projectId: "clone2-e1ec1",
    storageBucket: "clone2-e1ec1.appspot.com",
    messagingSenderId: "718517684310",
    appId: "1:718517684310:web:044cb270b2c0e7f57f93f7",
    measurementId: "G-02XL9L9483"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };