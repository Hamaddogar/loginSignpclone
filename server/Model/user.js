 const mongoose = require('mongoose');
 var bcrypt = require('bcrypt-nodejs');
   const userSchema = mongoose.Schema({
     firstName:String,
     lastName:String,

    email:String,
    
    Password:String

   })
    
   userSchema.pre('save', function (next) {
    var user = this;
    var SALT_FACTOR = 5;
  
    if (!user.isModified('Password')) return next();
  
    bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
      if (err) return next(err);
  
      bcrypt.hash(user.Password, salt, null, function (err, hash) {
        if (err) return next(err);
        user.Password = hash;
        next();
      });
    });
  });
  userSchema.methods.verifyPassword = function (Password, cb) {
    bcrypt.compare(Password, this.Password, function (err, isVaild) {
      if (err) return cb(err);
      cb(null, isVaild);
    });
  };
  const User = mongoose.model('SignUp', userSchema);

  module.exports = User;