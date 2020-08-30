import firebase from 'firebase/app';
import 'firebase/messaging';

var firebaseConfig = {
    apiKey: "AIzaSyBd53UCrt5GBLswUSiTv6KtIOx8R10tCYI",
    authDomain: "expense-tracker-396c5.firebaseapp.com",
    databaseURL: "https://expense-tracker-396c5.firebaseio.com",
    projectId: "expense-tracker-396c5",
    storageBucket: "expense-tracker-396c5.appspot.com",
    messagingSenderId: "101607589009",
    appId: "1:101607589009:web:4ff3b4ea88a09222a6ab30"
};

firebase.initializeApp(firebaseConfig);
 const messaging = firebase.messaging();

export function initNotification() {
    
    Notification.requestPermission().then((permission) => {
        console.log(permission)
        if (permission === "granted") {
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN")
                    console.log(currentToken);
                } else {
                    console.log('No Instance ID token available. Request permission to generate one.');

                }
            }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
            });
        }
    }) 
}