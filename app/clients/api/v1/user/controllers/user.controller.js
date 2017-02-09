'use strict';

var User = require('../models/User');


module.exports = {
  getUser,
  index,
  createUser,
  updateUser,
  deleteUser
};




function getUser(req, res, next) {

  let payload = {
      userId: req.get('id')
  };

  var query = User.findOne({_id: payload.userId});
  var promise = query.exec();

  promise
  .then(function (user) {
     res.json(user)
  })
  .catch(function(err){
    res.json(err)
    console.log('error:', err);
  });
 
}

function index(req, res, next) {

  var query = User.find();
  var promise = query.exec();

  promise
  .then(function (user) {
     res.json(user)
  })
  .catch(function(err){
    res.json(err)
    console.log('error:', err);
  });

}

function createUser(req, res, next) {

  let newuser = new User({
        name: req.body.name,
    username: req.body.username,
    password: req.body.password 
  });
  
  var promise = newuser.save();
      promise
      .then(function (doc) {
        getUserByUsername(newuser.username)
        .then((user)=>res.json({user}))
        .catch(function(error){

          res.json({error})
        });
      })
      .catch(function(error){
          res.json({error}) 
      }); 
}

function getUserByUsername(userName){

  return User.findOne({username: userName}).exec();
}

function insertUser(user){
  return user.save.exec();
}


/*
createUser(req, res, next).then(
  User.findOne({username: req.body.username}, function (err, userObj) {
       res.json(userObj);
    });
  );
*/


function updateUser(req, res, next) {

  let payload = {
      userId: req.get('id')
  };

  var query = User.findOne({_id: payload.userId});
  var promise = query.exec();

  promise 
  .then(function (user) {
    
      user.location = 'uk'; //update location
      user.save()
      .then(function(user){
          res.json({user})  
      })
      .catch(function(err){
          res.json({err})    
      });
      
  })
  .catch(function(err){
    res.json({err})
    console.log('error:', err);
  });

/*
  User.findById(payload.userId, function(err, user) {
  if (err) throw err;

  // change the users location
  user.location = 'uk';

  // save the user
  user.save(function(err) {
    if (err) throw err;

    console.log('User successfully updated!');
  });

});*/


  
}

function deleteUser(req, res, next) {

  let payload = {
      userId: req.get('id')
  };

  var query = User.findOne({_id: payload.userId});
  var promise = query.exec();

  promise 
  .then(function (user) {
    
      user.remove()
      .then(function(user){
          res.json("successfully deleted")  
      })
      .catch(function(err){
          res.json("Unable to delete")    
      });
      
  })
  .catch(function(err){
     res.json("Record not found")    
    console.log('error:', err);
  });


}


