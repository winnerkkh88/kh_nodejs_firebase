"use strict";

const nodemailer = require("nodemailer");

//To use custom env variable
require("dotenv").config();

exports.feedbackHandle = async (req, res, next) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GOOGLE_ID, // generated ethereal user
      pass: process.env.GOOGLE_PASSWORD, // generated ethereal password
    },
  });

  try {
    // send mail with defined transport object
    await transporter.sendMail({
      from: `KH React.js Portfolio <${process.env.GOOGLE_ID}@gmail.com>`, // sender address
      to: `winnerkkh88@gmail.com`, // list of receivers
      subject: "KH React.js Portfolio Feedback Email", // Subject line
      html: `<body style="margin: 0; padding: 0;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td style="padding: 10px 0 30px 0;">
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="600"
              style="border: 1px solid #cccccc; border-collapse: collapse;"
            >
              <tr>
                <td
                  align="center"
                  bgcolor="#70bbd9"
                  style="padding: 40px 0 30px 0; color: #153643; font-size: 28px; font-weight: bold; font-family: Arial, sans-serif;"
                >
                  <img
                    src= "https://firebasestorage.googleapis.com/v0/b/node-kh.appspot.com/o/images%2Fnodemailer%2FFeedbackEmail.png?alt=media&token=ac834106-8a60-47e4-a70d-7539f25e4990"
                    alt="Feedback Email"
                    width="300"
                    height="230"
                    style="display: block;"
                  />
                </td>
              </tr>
              <tr>
                <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td style="color: #153643; font-family: Arial, sans-serif; font-size: 24px;">
                        <b>
                          Feedback from ${req.body.name} (${req.body.email})
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                        ${req.body.feedback}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>`,
    });
    res.send();
  } catch (error) {
    console.log("Error: " + error);
  }
};
