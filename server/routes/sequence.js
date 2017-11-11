const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Seq = require('../../database/models/Sequence.js').Seq;


router.get('/', (req, res, next) => {
  res.send('ALL IS GOOD IN THE WORLD');
});



module.exports = router;