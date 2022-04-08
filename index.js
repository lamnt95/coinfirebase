const express = require('express');
const app = express();
const port = 3010;
const path = require('path');

var admin = require('firebase-admin');

var serviceAccount = require('./serviceAccountKey.json');

var fb = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    'https://cryptoogateway-default-rtdb.asia-southeast1.firebasedatabase.app',
});

app.use(express.static('static'));

app.get('/', (req, res) => {
  console.log(fb.name); // '[DEFAULT]'
  var db = admin.database(fb);
  var ref = db.ref('/cache');
  ref.once('value', function (snapshot) {
    console.log(snapshot.val());
  });
  res.send('ok');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
