var child = require('./childSchema.js');

var mongoose = require('mongoose');

var familySchema = mongoose.Schema({
  ec_id: ObjectId,
  mn: String,
  fn: String,
  add: String,
  dob_child: Date,
  m_aadhar: Number,
  f_aadhar: Number,
  phone: Number,
  children: [{type: mongoose.Schema.Types.ObjectId, ref:'child'}]
});

module.exports = mongoose.model('FS', familySchema);
