var express = require('express');
var userModel = require('../models/user'); 
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var userDetails = new userModel({
    name: 'akshitha',
    email: 'akshi@gmail.com',
    password: 'akshi@123',
  });

  try{
    userDetails.save().then(function(req){
      res.render('index', { title: 'User Data Inserted' });
         
    });
  }
  catch(err){
    throw error;
  }  
  });
  router.post('/register', function(req, res, next) {
 
    var userDetails = new userModel({
      name: req.body.Name,
      email: req.body.Email,
      password: req.body.Password,
      
    });
   
    userDetails.save().then(doc=>{
      res.status(201).json({
          message:"Inserted Successfully",
          results:doc
      });
  })
  .catch(err=>{
      res.json(err);
  });
   
    
  });

module.exports = router;
