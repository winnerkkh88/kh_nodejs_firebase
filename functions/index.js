const functions = require("firebase-functions");
const router = require("./route/router");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

app.use(router);

//Routes
//app.get()

//Create

//Read

//Update
//Delete

//Export the api to Firebase Cloud Functions
exports.app = functions.https.onRequest(app);
