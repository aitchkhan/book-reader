// grab the things we need
var mongoose = require('mongoose');
 
// load up the user model
 


mongoose.Promise = Promise;
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: { type: String,trim: true },
  username: { type: String, required: true, unique: true,lowercase: true, trim: true },
  password: { type: String, required: true },
 /* admin: Boolean,
  location: String,
  meta: {
    age: { type: Number, min: 18, max: 65 },
    website: String
  },
  created_at:  { type: Date, default: Date.now },
  updated_at:  { type: Date, default: Date.now },*/
});


// on every save, add the date
/*userSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();
  
  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

});*/

/*userSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};*/


// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
