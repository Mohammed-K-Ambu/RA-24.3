const functions = require('firebase-functions');
const app = require('./server'); // Import your Express app

// Export the Express app as a Firebase Function
exports.app = functions.https.onRequest(app);
