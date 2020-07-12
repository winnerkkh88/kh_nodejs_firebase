const express = require("express");
const route = express.Router();

//geting my experiences as an object
const experiences = require("../controller/experiences");
//do not need a function call sign such as ()
route.route("/experiences").get(experiences.getExperiences);

//Send mail to gmail for the feedback
const sendFeedbackEmail = require("../controller/sendFeedbackEmail");
route.route("/sendFeedbackEmail").post(sendFeedbackEmail.feedbackHandle);

module.exports = route;
