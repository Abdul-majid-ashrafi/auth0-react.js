const express = require('express');
const secured = require('../middleware');
const router = express.Router();

/* GET user profile. */
router.get('/user', secured(), function (req, res, next) {
  const { _raw, _json, ...userProfile } = req.user;
  res.send({
    userProfile: JSON.stringify(userProfile, null, 2)
    // title: 'Profile page'
  });
});

module.exports = router;
