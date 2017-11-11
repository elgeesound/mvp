const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

// mongo/mongoose
const uri = 'mongodb://localhost/mvp'
mongoose.connect(uri, {
  useMongoClient: true,
  promiseLibrary: require('bluebird')
}).then(() => console.log('database connected'))
    .catch((err) => console.log(err));
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

let save = (data) => {
  sequence.save((err, seq) => {
    if (err) { throw err };
    console.log('Successful Save')
  });
};

module.exports.save = save;