// Import frebase Database Setting Information
const firebaseDbSetting = require("./firebaseDbSetting");

// Use the db object of firebaseDbSetting
const db = firebaseDbSetting.db;

// Create(POST) member data here
// prettier-ignore
exports.createMembership = (req, res) => {
  const {id, firstName, lastName, birthday, gender, email, phoneNumber, job, city, country, comment, regDate} = req.body.memberInfo
  const picture = (req.body.memberInfo.picture !== undefined) ? req.body.memberInfo.picture : "";
  db.collection("memberList")
    .doc(id)
    .set({id, picture, firstName, lastName, birthday, gender, email, phoneNumber, job, city, country, comment, regDate})
    .then(()=>{
      res.send();
    })
    .catch((error) => {
      throw new Errow(error);
    });
};

// Read(GET) membership data
exports.readMembership = (req, res) => {
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

// prettier-ignore
// Update(UPDATE) membership data here
exports.updateMembership = (req, res) => {
  const {id, firstName, lastName, birthday, gender, email, phoneNumber, job, city, country, comment, picture} = req.body.updatedInfo
  db.collection("memberList").doc(id).update({
    firstName, lastName, birthday, gender, email, phoneNumber, job, city, country, comment, picture
  }).then(() => {
      res.send();
    })
    .catch((error) => {
      throw new Errow(error);
    });
};

// Delete(DELETE) membership data here
exports.deleteMembership = (req, res) => {
  db.collection("memberList")
    .doc(req.body.key.id)
    .delete()
    .then(() => {
      res.send();
    })
    .catch((error) => {
      throw new Error(error);
    });
};
