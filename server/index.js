/* DEPENDENCIES */
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
let db = require('../database/index.js');
let save = require('../database/index.js').save;
let Seq = require('../database/index.js').Sequence;

/* INITIALIZE */
//express
var app = express();
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/../client/dist'));
app.use(cors());


//CHANGE THIS!!!!
app.post('/seq', (req, res) => {
  console.log('POST:  ', req.body);
  // Seq.save(res, () => {
  //   res.send(req.body);
  //   res.end();
  // });
  res.end();
});

app.get('/seq', (req, res) => {
  console.log(req);

  res.writeHeader(200);
  res.send('hello world');
  // res.send('Hello World')
});

let port = 1128;
var server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});