let seqSchema = new Schema({
  index: Number,
  updated: { type: Date, default: Date.now },
  sequence: []
});


let Seq = mongoose.model('Seq', seqSchema);

module.exports.Seq = Seq;