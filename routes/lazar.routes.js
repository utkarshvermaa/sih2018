module.exports = function(app) {

  var lazar = require('../controllers/lazar.controller.js');

  app.put('/register-child/:ec_id', lazar.regChild);

  app.post('/register-family', lazar.regFam);

  app.put('/vaccinate/:p_id', lazar.vaccinate);

  app.delete('/undo-vaccinate/:p_id', lazar.undo);
}
