import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyArEU3VdUswjw4INNWXno0uY40mC1PG7pM",
    authDomain: "vroneworld.firebaseapp.com",
    databaseURL: "https://vroneworld.firebaseio.com",
    projectId: "vroneworld",
    storageBucket: "vroneworld.appspot.com",
    messagingSenderId: "965926543486"
};

firebase.initializeApp(config);

export default firebase;
