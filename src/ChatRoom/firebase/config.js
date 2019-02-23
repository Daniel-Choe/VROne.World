import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyBk9SG5mq8sEHBCB5lLSTpUzLElfCKKyIQ",
  authDomain: "vroneworld-59c03.firebaseapp.com",
  databaseURL: "https://vroneworld-59c03.firebaseio.com",
  projectId: "vroneworld-59c03",
  storageBucket: "vroneworld-59c03.appspot.com",
  messagingSenderId: "378982286977"
};

firebase.initializeApp(config);

export default firebase;
