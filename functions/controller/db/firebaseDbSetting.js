require("dotenv").config();

// The Firebase Admin SDK to access the Firebase Database.
const admin = require("firebase-admin");
const serviceAccount = require("./node-kh-firebase-adminsdk-oy7r8-8c6a09d788.json");
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

// const serviceAccount = {
//   type: process.env.TYPE,
//   project_id: process.env.PROJECT_ID,
//   private_key_id: process.env.PRIVATE_KEY_ID,
//   private_key: process.env.PRIVATE_KEY,
//   client_email: process.env.CLIENT_EMAIL,
//   client_id: process.env.CLIENT_ID,
//   auth_uri: process.env.AUTH_URI,
//   token_uri: process.env.TOKEN_URI,
//   auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
//   client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
// };

// Google Cloud Store setting
const { Storage } = require("@google-cloud/storage");
const gcs = new Storage({
  projectId: "node-kh",
  keyFilename: { serviceAccount },
});

admin.initializeApp(firebaseConfig);
const db = admin.firestore();
const storage = admin.storage();
const auth = admin.auth();

module.exports = { db: db, auth: auth, gcs: gcs, storage: storage };
