var child = require('../schemas/childSchema.js');
var family = require('../schemas/familySchema.js');
var vaccine = require('../schemas/vaccineSchema.js');

exports.regFam = function(req, res) {
  var fam = new family({mn: req.body.mn, fn: req.body.fn, add: req.body.add,
                        dob_child: req.body.dob_child, m_aadhar: req.body.m_aadhar,
                        f_aadhar: req.body.f_aadhar, children: req.body.children});
  fam.save(function(err, regFamData) {
    if(err){
      console.log(err);
      res.send({message: "Error occured during registering new family! Exiting now ..."});
    } else {
      //assign mongoDB_id of the family to its ec_id
      res.send(regFamData);
      res.redirect('/register-child/regFamData.ObjectId'); //check
    }
  });
};

exports.regChild = function(req, res) {
  family.findById(req.params.ec_id, function(err, fam) {
    if(err){
      console.log(err);
      res.send({message: "Family not found with ID: "+req.params.ec_id});
    }
    var ch = new child({ ec_id: req.body.ec_id, last_vacc_date: req.body.last_vacc_date,
                          last_vacc_type: req.body.last_vacc_type, history: req.body.history});
    ch.save(function(err, regChildData) {
      if(err) {
        console.log(err);
        res.send({message: "Error occured during registering new child. Exiting now..."});
      } else {
        res.send(regChildData);
      }
    });
  });
};

utkarshvermaa
adminRights!

exports.vaccinate = function(req, res){
  family.findById(req.params.p_id, function(err, ch) {
    if(err){
      console.log(err);
      res.send({message: "Error finding family with ID: "+req.params.p_id});
    }
    if(!ch){
      res.send({message: "Child not found with ID: "+req.params.p_id});
    }

    ch.last_vacc_date = Date.now;
    ch.last_vacc_type = req.body.last_vacc_type;
    var newhist = {vacc_id: 'update from dictionary',
                  vacc_type: ch.last_vacc_type,
                  vacc_dose: 'update from dictionary',
                  vacc_date: ch.last_vacc_date
    };
    ch.update(
      {p_id: req.params.p_id}
      {$push: {history: newhist} }
    )
  });
};
