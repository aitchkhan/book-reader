'use strict';


var express = require('express');
var router = express.Router();



/*const controller = require('./auth.controller');*/

/*router.get('/login/:social', controller.login);
*/

var controller = require('./controllers/user.controller');
router.get('/:id', controller.getUser); //return user by id

router.get('/', controller.index); // return all users

router.post('/', controller.createUser); //create user
router.put('/:id', controller.updateUser);
//router.patch('/:id', controller.patch);
router.delete('/:id', controller.deleteUser);
/*

router.get('/', function(req, res){
	res.send('GET route on things.');
});

router.get('/:id', function(req, res){
    res.send('The id you specified is ' + req.params.id);
});

router.post('/', function(req, res){
	res.send('POST route on things.');
});

router.put('/', function(req, res){
	res.send('PUT route on things.');
});

router.delete('/:id', function(req, res){
	res.send('DELETE route on things.');
});*/
//export this router to use in our index.js
module.exports = router;




