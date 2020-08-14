const express = require("express");
const route = express.Router();

//getting my experiences as an object
//do not need a function call sign such as ()
const experiences = require("../controller/experiences");
route.route("/experiences").get(experiences.getExperiences);

//Send mail to gmail for the feedback
const sendFeedbackEmail = require("../controller/sendFeedbackEmail");
route.route("/sendFeedbackEmail").post(sendFeedbackEmail.feedbackHandle);

//getting slideshow data
const slidesData = require("../controller/slidesData");
route.route("/slidesData").get(slidesData.getSlidesData);

//getting membership data from Realtime Database of Firstbase
const membership = require("../controller/db/membership");
route.route("/membership").get(membership.membership);

module.exports = route;
