import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAQZJpiBi-0z10cl6S9SGGRsxs7LD-Ox7c",
    authDomain: "feature-godwin-enye.firebaseapp.com",
    databaseURL: "https://feature-godwin-enye.firebaseio.com",
    projectId: "feature-godwin-enye",
    storageBucket: "feature-godwin-enye.appspot.com",
    messagingSenderId: "389658418142",
    appId: "1:389658418142:web:7cd925eaf0f49cae4a9b4f",
    measurementId: "G-54HFP0C8T3"
};


firebase.initializeApp(config);
export const database = firebase.database();

export const insert = details => {
    const userRef = database.ref('users').push();
    return userRef.set(details);
}
