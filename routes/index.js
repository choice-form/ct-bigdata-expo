var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function (req, res) {
  res.render('main', { title: 'Express' });
});


// post 旅游
router.post('/travel', function (req, res) {
  var rq = req.body;
  console.log(rq);
  res.send(rq);
})


module.exports = router;
