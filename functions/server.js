const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
  res.send('Hello world!');
});

const server = app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
//Test1
module.exports = server;
