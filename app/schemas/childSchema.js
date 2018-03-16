var mongoose = require('mongoose');

var childSchema = mongoose.Schema({
  p_id: ObjectId,
  ec_id: String,
  last_vacc_type: String,
  last_vacc_date: Date,
  history: [{
    vacc_id: String,
    vacc_type: String,
    vacc_dose: String,
    vacc_date: Date
  }]
});

module.exports = mongoose.model('CS', childSchema);
