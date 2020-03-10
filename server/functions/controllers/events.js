const { db } = require("../util/admin");

// Validators

const { hasProperties, validateEventData } = require("../util/validators");

/*
Controllers
*/

exports.getEvent = (req, res) => {
  let eventData = {};

  db.doc(`/events/${req.params.eventId}`)
    .get()
    .then(doc => {
      if (!doc.exists) {
        throw new Error("Not found");
      }
      eventData = doc.data(); // Unpack document snapshot data into an object
      eventData.eventId = doc.id; // Add the document snapshot ID to the object (otherwise unreachable)
      return res.status(200).json(eventData);
    })
    .catch(err => {
      console.error(err);
      if (err.message == "Not found") {
        return res.status(404).json({ error: "Not found" });
      }
      return res.status(500).json({
        error: err.code,
        message: "Something went wrong while fetching event's data."
      });
    });
};

exports.getAllEvents = (req, res) => {
  let events = [];

  db.collection("events")
    .where("authorId", "==", req.user.userHandle)
    .get()
    .then(data => {
      data.forEach(doc => {
        events.push({
          ...doc.data(), // Unpack all document snapshot data
          eventId: doc.id // Add document ID as well
        });
      });
      return res.status(200).json(events);
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({
        error: err.code,
        message: "Something went wrong while fetching event list."
      });
    });
};

exports.createEvent = (req, res) => {
  // 1st validation: request data (required fields must not be undefined)
  const requiredFields = ["name", "slug", "type"];

  const { validReq, reqErrors } = hasProperties(req.body, requiredFields);
  if (!validReq) return res.status(400).json(reqErrors);

  // Init event's object
  const newEvent = {
    eventId: req.body.slug,
    authorId: req.user.userHandle,
    slug: req.body.slug,
    name: req.body.name,
    type: req.body.type,
    createdAt: new Date().toISOString(),
    invitedGuests: 0,
    confirmedGuests: 0
  };

  // 2nd validation: user input
  const { valid, errors } = validateEventData(newEvent);
  if (!valid) return res.status(400).json(errors);

  // Query
  db.doc(`/events/${newEvent.slug}`)
    .get()
    // Validate if event exists in DB
    .then(doc => {
      if (doc.exists) {
        throw new Error("Slug is taken.");
      }
      return db.doc(`/events/${newEvent.slug}`).set(newEvent);
    })
    .then(() => {
      return res.status(201).json(newEvent);
    })
    .catch(err => {
      console.error(err);
      if (err.message === "Slug is taken.") {
        return res
          .status(400)
          .json({ error: err.code, message: "This slug is already taken." });
      } else {
        return res.status(500).json({ error: err.code });
      }
    });
};

exports.updateEvent = (req, res) => {
  // TODO Step 1 slug verification only based on delivered data:
  // -> if there is a piece of data -> verify it
  // myabe there is a way to define schema//verification style function
  // which will add only data that matches keys that are allowed (Schema style)
  // and check for type as well!

  // 1st validation: request data (required fields must not be undefined)
  const requiredFields = ["name", "slug", "type"];

  const { validReq, reqErrors } = hasProperties(req.body, requiredFields);
  if (!validReq) return res.status(400).json(reqErrors);

  // Init event's object
  const updatedEvent = {
    ...req.body
  };

  // 2nd validation: user input
  const { valid, errors } = validateEventData(updatedEvent);
  if (!valid) return res.status(400).json(errors);

  // Query
  db.doc(`/events/${updatedEvent.slug}`)
    .get()
    // Validate if event exists in DB
    .then(doc => {
      if (!doc.exists) {
        throw new Error("Not found.");
      }
      return db.doc(`/events/${updatedEvent.slug}`).update(updatedEvent);
    })
    .then(() => {
      return res.status(201).json(updatedEvent);
    })
    .catch(err => {
      console.error(err);
      if (err.message === "Not found.") {
        return res.status(400).json({
          error: err.code,
          message: "Event with that ID doesn't exist."
        });
      } else {
        return res.status(500).json({
          error: err.code,
          message: "Something went wrong while updating this event."
        });
      }
    });
};

// Delete an event controller
exports.deleteEvent = (req, res) => {
  const document = db.doc(`/events/${req.params.eventId}`);

  document
    .get()
    .then(doc => {
      if (!doc.exists) {
        throw new Error("Not found.");
      }
      if (doc.data().authorId !== req.user.userHandle) {
        throw new Error("Unauthorized action.");
      } else {
        return document.delete();
      }
    })
    .then(() => {
      res.json({ message: "Event deleted successfully." });
    })
    .catch(err => {
      console.error(err);
      if (err.message === "Not found.") {
        return res
          .status(404)
          .json({ error: err.code, message: "Event not found." });
      } else if (err.message === "Unauthorized action.") {
        return res
          .status(403)
          .json({ error: err.code, message: "Unauthorized action." });
      } else {
        return res.status(500).json({
          error: err.code,
          message: "Something went wrong while deleting this event."
        });
      }
    });
};
