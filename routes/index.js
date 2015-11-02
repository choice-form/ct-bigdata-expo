var express = require('express');
var travel = require('../controllers/travel');
var realty = require('../controllers/realty');
var car = require('../controllers/car');

var router = express.Router();

/* GET home page. */
// get 房产、汽车页面
router.get('/', function (req, res) {
  res.render('main_house', { title: '上海电信大数据区域洞察信息展示 Shanghai Telecom Big Data Area Insight Information Display' });
});

// get 旅游页面
router.get('/realty', function (req, res) {
  res.render('main_house', { title: '上海电信大数据区域洞察信息展示 Shanghai Telecom Big Data Area Insight Information Display' });
});

router.get('/travel', function (req, res) {
  res.render('main_tourism', { title: '上海电信大数据区域洞察信息展示 Shanghai Telecom Big Data Area Insight Information Display' });
});

router.get('/car', function (req, res) {
  res.render('main_car', { title: '上海电信大数据区域洞察信息展示 Shanghai Telecom Big Data Area Insight Information Display' });
});

// post 旅游
router.post('/travel', function (req, res) {
  var rq = req.body;
  travel.travelHandle(rq, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
})

// post 汽车
router.post('/car', function (req, res) {
  var rq = req.body;
  car.carHandle(rq, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
})

// post 房产
router.post('/realty', function (req, res) {
  var rq = req.body;
  realty.realtyHandle(rq, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
})


module.exports = router;
