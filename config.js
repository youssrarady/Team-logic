// config.js
const firebaseConfig = {
  apiKey: "AIzaSyDYoBEnXt1XR2rgt5Gqk2D4kqrUhjW1jlc",
  authDomain: "tygdg-df316.firebaseapp.com",
  projectId: "tygdg-df316",
  storageBucket: "tygdg-df316.firebasestorage.app",
  messagingSenderId: "875602628317",
  appId: "1:875602628317:web:f1f13b923e0ec8ee105534",
  measurementId: "G-YMM398DEXH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();