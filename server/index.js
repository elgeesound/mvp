/* DEPENDENCIES */
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

/* INITIALIZE */
//express
var app = express();
// mongo/mongoose
// const uri = 'mongodb://localhost/mvp';
// mongoose.connect(uri, {
//   useMongoClient: true
// });
// const dbx = mongoose.connection;
// dbx.on('error', console.error.bind(console, 'connection error:'));
// dbx.once('open', (cb) => {
//   console.log('db connected');
//   /* UNCOMMENT TO DROP DB*/
//   // dbx.db.dropDatabase((err, res) => {
//   //   if (err) {console.log(err)};
//   //   console.log('dropped');
//   // });
// });

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: false }));

//CHANGE THIS!!!!
// app.use(express.static(__dirname + '/../client/dist'));


app.get('/', (req, res) => {
  res.send('Hello World')
});

let port = 8080;
var server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});