var JwtStrategy = require('passport-jwt').Strategy;
 
// load up the user model
var User = require('app')
var passport = require('passport');
var jwt         = require('jwt-simple');

module.exports = function(passport) {
  var opts = {};
  opts.secretOrKey = 'asdsadas#$@#$@#$GF';
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.id}, function(err, user) {
          if (err) {
              return done(err, false);
          }
          if (user) {
              done(null, user);
          } else {
              done(null, false);
          }
      });
  }));
};