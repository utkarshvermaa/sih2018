var mongoose = require('mongoose');

var vaccineSchema = mongoose.Schema({
  age: String,
  vacc: String,
  doses: Number,
  tag: String,
  price: Number
});

module.exports = mongoose.model('VS', vaccineSchema);
