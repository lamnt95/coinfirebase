const express = require('express');
const app = express();
const port = 3010;
const path = require('path');

var admin = require('firebase-admin');

var serviceAccount = require('./serviceAccountKey.json');

const fb = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    'https://cryptoogateway-default-rtdb.asia-southeast1.firebasedatabase.app',
});

app.use(express.static('static'));

app.get('/', (req, res) => {
  console.log(fb.name); // '[DEFAULT]'
  const db = admin.getDatabase();
  res.send('ok');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
