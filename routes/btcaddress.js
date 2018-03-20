const express = require('express');
const router = express.Router();

router.get('/wallet_address', function(req, res, next){
  console.log("1");
});

module.exports = router;
