const admin = require("firebase-admin");
const adminConfig = {
  credential: admin.credential.cert(require("./FirebaseAdminKey"))
};
admin.initializeApp(adminConfig);
const db = admin.firestore();

/*
Controllers
*/

exports.getGuest = (req, res) => {
  // TODO
  // create Guests collection on the Firebase app

  let guestData = {};

  db.doc(`/guests/${req.params.guestId}`)
    .get()
    .then(doc => {
      if (!doc.exists) {
        throw new Error("Not found");
      } else {
        guestData = doc.data(); // Unpack document snapshot data into an object
        guestData.id = doc.id; // Add the document snapshot ID to the object (otherwise unreachable)
        return res.status(200).res.json(guestData);
      }
    })
    .catch(err => {
      console.error(error);
      if (err.message == "Not found") {
        return res.status(404).json({ error: "Not found" });
      }
      return res.status(500).json({ error: err.code });
    });
};

exports.getAllGuests = (req, res) => {
  // TODO
  // Create guests collection on Firebase dashboard
  let guests = [];

  db.collection("guests")
    .get()
    .then(data => {
      data.forEach(doc => {
        guests.push({
          ...doc.data(), // Unpack all document snapshot data
          guestId: doc.id // Add document ID as well
        });
      });
      return res.status(200).json(guests);
    })
    .catch(err => {
      console.error(error);
      return res.status(500).json({ error: err.code });
    });
};

exports.createGuest = (req, res) => {
  /* TODO
     Create a basic guest with:
     - First Name
     - Last Name
     - Phone Number (optional, has to be solved through the front-end)
    */
  const newGuest = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber
  };

  // TODO Validation

  // Adding new guest
  db.collection("guests")
    .add(newGuest)
    .then(doc => {
      let returnedGuest = newStory;
      returnedGuest.id = doc.id;
      return res.status(201).json(returnedGuest);
    })
    .catch(err => {
      console.error(error);
      return res.status(500).json({
        error: err.code,
        message: "Something went wrong while adding your guest."
      });
    });
};
