import * as firebase from 'firebase';
const firebaseConfig = {
   apiKey: "AIzaSyAIZX-bucuNCDH5LyaCkP-7Rmf9bvNfAAg",
   authDomain: "chat-50f6d.firebaseapp.com",
   databaseURL: "https://chat-50f6d.firebaseio.com",
   projectId: "chat-50f6d",
   storageBucket: "chat-50f6d.appspot.com",
   messagingSenderId: "646913578938",
   appId: "1:646913578938:web:6244bb88fb107765ab6f83",
   measurementId: "G-M9W1VCXS62"
};

firebase.initializeApp(firebaseConfig);

export default firebase;