const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // Ensure the path is correct

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://test-yogi-b3f03.firebaseio.com" // Replace with your Firebase project URL
});

const db = admin.firestore();
module.exports = db;
