var request = require("request");
var config = require('../config');
var moment = require('moment');
var url = "http://" + config.ip + ":" + config.post + "/";

var travel = {
	/**
	* 旅游
	*/
	travelHandle: function (data, callback) {
		var key = data.fun, q;
		switch (key) {
			// 热门top10的app
			case "hotApp":
				// result = require('../models/travel/hotApp');
				// callback(null, result);
				q = url + "hotapp" + "?" + "date=" + data.date;
				request.get(q, function (err, res, body) {
					if (err) {
						callback(err);
					} else {
						callback(null, body);
					}
				})
				break;
			// 线上热搜索排名top10
			case "hotKeyword":
				// result = require('../models/travel/hotKeyword');
				// callback(null, result);
				q = url + "hotkeyword" + "?" + "date=" + data.date;
				request.get(q, function (err, res, body) {
					if (err) {
						callback(err);
					} else {
						callback(null, body);
					}
				})
				break;
			// 热门交通出游方式
			case "hotTraffic":
				// result = require('../models/travel/hotTraffic');
				// callback(null, result);
				q = url + "hottraffic" + "?" + "date=" + data.date;
				request.get(q, function (err, res, body) {
					if (err) {
						callback(err);
					} else {
						callback(null, body);
					}
				})
				break;
			// 沪上热门top10商圈_外地游客
			case "hotBusinessAreaField":
				// result = require('../models/travel/hotBusinessAreaField');
				// callback(null, result);
				q = url + "businesshottrafficfield" + "?" + "date=" + data.date;
				request.get(q, function (err, res, body) {
					if (err) {
						callback(err);
					} else {
						callback(null, body);
					}
				})
				break;
			// 沪上热门top10商圈_本地游客
			case "hotBusinessAreaLocal":
				// result = require('../models/travel/hotBusinessAreaLocal');
				// callback(null, result);
				q = url + "businesshottrafficlocal" + "?" + "date=" + data.date;
				request.get(q, function (err, res, body) {
					if (err) {
						callback(err);
					} else {
						callback(null, body);
					}
				})
				break;
			// 沪上热门top20旅游景点_外地游客
			case "hotTrafficField":
				// result = require('../models/travel/hotTrafficField');
				// callback(null, result);
				q = url + "hottrafficfield" + "?" + "date=" + data.date;
				request.get(q, function (err, res, body) {
					if (err) {
						callback(err);
					} else {
						callback(null, body);
					}
				})
				break;
			// 沪上热门top20旅游景点_本地游客
			case "hotTrafficLocal":
				// result = require('../models/travel/hotTrafficLocal');
				// callback(null, result);
				q = url + "hottrafficlocal" + "?" + "date=" + data.date;
				request.get(q, function (err, res, body) {
					if (err) {
						callback(err);
					} else {
						callback(null, body);
					}
				})
				break;
			// 出行热门旅游地top10
			case "hotTravel":
				// result = require('../models/travel/hotTravel');
				// callback(null, result);
				q = url + "hottravel" + "?" + "date=" + data.date;
				request.get(q, function (err, res, body) {
					if (err) {
						callback(err);
					} else {
						callback(null, body);
					}
				})
				break;
			// 是否外出情况
			case "stayAtHome":
				// result = require('../models/travel/stayAtHome');
				// callback(null, result);
				q = url + "stayathome" + "?" + "date=" + data.date;
				request.get(q, function (err, res, body) {
					if (err) {
						callback(err);
					} else {
						callback(null, body);
					}
				})
				break;
			default:
				break;
		}
	}
}

module.exports = travel;
