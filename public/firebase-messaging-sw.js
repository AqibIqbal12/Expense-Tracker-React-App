importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyBd53UCrt5GBLswUSiTv6KtIOx8R10tCYI",
    authDomain: "expense-tracker-396c5.firebaseapp.com",
    databaseURL: "https://expense-tracker-396c5.firebaseio.com",
    projectId: "expense-tracker-396c5",
    storageBucket: "expense-tracker-396c5.appspot.com",
    messagingSenderId: "101607589009",
    appId: "1:101607589009:web:4ff3b4ea88a09222a6ab30"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
firebase.messaging();