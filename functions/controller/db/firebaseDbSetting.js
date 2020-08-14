require("dotenv").config();

// The Firebase Admin SDK to access the Firebase Database.
const admin = require("firebase-admin");

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID,
};

admin.initializeApp(firebaseConfig);
const db = admin.firestore();
const auth = admin.auth();

module.exports = { db: db, auth: auth };
