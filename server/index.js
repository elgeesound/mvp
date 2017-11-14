/* DEPENDENCIES */
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
var cors = require('cors');


var db = require('../database/index.js');
var seq = require('./routes/sequence.js').seq;
var save = require('../database/index.js').save;


/* INITIALIZE */
//express
var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(__dirname + '/../client/dist'));
app.use(cors());

// console.log('this is seq', seq);

app.use('/api/seq', seq);

app.get('/', (req, res) => {
  // console.log('REQUEST', req.body);
  // res.send(JSON.stringify('hello world'));
});

app.post('/', (req, res) => {
  console.log('it works');
  res.end();
})

// app.use((req, res, next) => {
//   let err = new Error ('Not Found');
//   err.status = 404;
//   next(err);
// });

// app.use((err, req, res, next) => {
//   res.locals.message = err.message;
//   res.status(err.status);
//   res.render('error');
// });


let port = 3000;
var server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});