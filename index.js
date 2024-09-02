const functions = require('firebase-functions');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Catch-all handler for any other routes
app.get('*', (req, res) => {
  res.status(404).send('Page not found');
});

exports.app = functions.https.onRequest(app);
