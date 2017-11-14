const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const Seq = require('../../database/models/Sequence.js').Seq;
var save = require('../../database/index.js').save;




router.get('/', (req, res, next) => {
  console.log(req.body,'INSIDE SEQUENCe')
  res.send('Exprezz');
});

router.post('/', (req, res, next) => {
  console.log('req', req.body);
  // Seq.create(req.body, (err, res) => {
  //   if (err) return next(err);
  //   res.json(res)
  // })
  res.send('hello word');
});


module.exports.seq = router;