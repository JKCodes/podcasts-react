var express = require('express');
var router = express.Router();

router.get('/:term', function(req, res, next) {

  var term = req.params.term

  res.json({
    confirmation: 'success',
    term: term
  });

});

module.exports = router;
