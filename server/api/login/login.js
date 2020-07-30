const express = require("express");
const User = require('../../Model/user')
var bcrypt = require('bcrypt-nodejs');
const router = express.Router();


router.post('/login', (req, res) => {

  User.findOne({
    email: req.body.email,

  }).then((user) => {
    if (user) {
      bcrypt.compare(req.body.Password, user.Password, (err, result) => {
        if (result) {
          res.json({ success: true, data: user });
        }
        else {
          return res.json({ success: false, data: "password  is not Found" });
        }

      })


    } else {
      return res.json({ success: false, data: "User  is not Found" });
    }
  });
})







module.exports = router;