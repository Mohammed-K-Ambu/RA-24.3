const functions = require('firebase-functions');
const app = require('./server'); // Import the express app from server.js

// Expose the express app as a firebase function
exports.app = functions.https.onRequest(app);
