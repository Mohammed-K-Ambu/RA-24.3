const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.send('Hello world!');
});

//Test1
module.exports = app;
