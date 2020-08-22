const functions = require("firebase-functions");
const router = require("./route/router");
const express = require("express");
const cors = require("cors");
const app = express();

// Automatically allow cross-origin requests
// Cross Domain Issue
// Enable Cross Origin Resource Sharing (CORS)
// This would enable CORS for all resources on this firebase node server.
app.use(function (req, res, next) {
  cors({ origin: true });
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(router);

//Export the api to Firebase Cloud Functions
exports.app = functions.https.onRequest(app);
