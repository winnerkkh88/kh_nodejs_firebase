// Import frebase Database Setting Information
const firebaseDbSetting = require("./firebaseDbSetting");

// Use the db object of firebaseDbSetting
const db = firebaseDbSetting.db;

//Create member data here

//Read membership data
exports.membership = (req, res) => {
  db.collection("memberList")
    .orderBy("id", "asc")
    .get()
    .then((snapshot) => {
      const memberList = [];
      snapshot.forEach((doc) => {
        const memberInfo = doc.data();
        memberList.push(memberInfo);
      });
      res.send(memberList);
    })
    .catch((error) => {
      throw new Errow(error);
    });
};

//Update membership data here

//Delete membership data here
