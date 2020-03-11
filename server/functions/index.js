const functions = require("firebase-functions");
const app = require("express")();
const { db } = require("./util/admin");

// Middleware
const FirebaseAuth = require("./util/FirebaseAuth");

// Controllers
const {
  getAllStories,
  getStory,
  postStory,
  deleteStory,
  postComment,
  likeStory,
  unlikeStory
} = require("./controllers/stories");

const {
  signup,
  login,
  uploadImage,
  addUserDetails,
  getAuthenticatedUser
} = require("./controllers/users");

const {
  getGuest,
  getAllGuests,
  createGuest,
  updateGuest,
  deleteGuest
  // TODO Invitations as separate element?
} = require("./controllers/guests");

const {
  getEvent,
  getAllEvents,
  createEvent,
  // TODO Update event
  deleteEvent
} = require("./controllers/events");

/*
User routes
*/
app.post("/signup", signup);
app.post("/login", login);
app.post("/user/image", FirebaseAuth, uploadImage);
app.post("/user", FirebaseAuth, addUserDetails);
app.get("/user", FirebaseAuth, getAuthenticatedUser);

/*
Event routes
*/
app.get("/events", FirebaseAuth, getAllEvents);
// TODO Add maybe AUTH option for getEvent?
app.get("/event/:eventId", getEvent);
app.post("/event", FirebaseAuth, createEvent);
// TODO updateEvent
// app.post("/event/:eventId", updateEvent);
app.delete("/event/:eventId", FirebaseAuth, deleteEvent);

/*
Guest routes
*/
app.get("/:eventId/guests", FirebaseAuth, getAllGuests);
app.get("/guest/:guestId", getGuest);
app.post("/guest", FirebaseAuth, createGuest);
app.post("/guest/:guestId", FirebaseAuth, updateGuest);
app.delete("/guest/:guestId", FirebaseAuth, deleteGuest);

/* 
Story routes
*/
app.get("/stories", getAllStories);
app.get("/story/:storyId", getStory);
app.post("/story", FirebaseAuth, postStory);
app.delete("/story/:storyId", FirebaseAuth, deleteStory);
app.post("/story/:storyId/comment", FirebaseAuth, postComment);
app.get("/story/:storyId/like", FirebaseAuth, likeStory);
app.get("/story/:storyId/unlike", FirebaseAuth, unlikeStory);

/*
Export API
*/
exports.api = functions.region("europe-west1").https.onRequest(app);

exports.createNotificationOnLike = functions
  .region("europe-west1")
  .firestore.document("likes/{id}")
  .onCreate(snapshot => {
    db.doc(`/story/${snapshot.data().storyId}`)
      .get()
      .then(doc => {
        if (doc.exists) {
          return db.doc(`/notifications/${snapshot.id}`).set({
            createdAt: new Date().toISOString(),
            recipient: doc.data().userHandle,
            sender: snapshot.data().userHandle,
            type: "like",
            read: false,
            storyId: doc.id
          });
        }
      })
      .then(() => {
        return;
      })
      .catch(err => {
        console.error(err);
        return;
      });
  });

exports.deleteNotificationOnUnlike = functions
  .region("europe-west1")
  .firestore.document("comments/{id}")
  .onDelete(snapshot => {
    db.doc(`/notifications/${snapshot.id}`)
      .delete()
      .then(() => {
        return;
      })
      .catch(err => {
        console.error(err);
        return;
      });
  });

exports.createNotificationOnComment = functions
  .region("europe-west1")
  .firestore.document("comments/{id}")
  .onCreate(snapshot => {
    db.doc(`/story/${snapshot.data().storyId}`)
      .get()
      .then(doc => {
        if (doc.exists) {
          return db.doc(`/notifications/${snapshot.id}`).set({
            createdAt: new Date().toISOString(),
            recipient: doc.data().userHandle,
            sender: snapshot.data().userHandle,
            type: "comment",
            read: false,
            storyId: doc.id
          });
        }
      })
      .then(() => {
        return;
      })
      .catch(err => {
        console.error(err);
        return;
      });
  });
