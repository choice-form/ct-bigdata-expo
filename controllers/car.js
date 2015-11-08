var request = require("request");
var config = require('../config');

var url = "http://" + config.ip + ":" + config.post + "/";

var car = {
	/**
	* 汽车
	* @param {object} data 传的参数
	*/
	carHandle: function (data, callback) {
		var key = data.fun, q, result;
		// if (data.administrativearea) {
		// 	var administrativearea = data.administrativearea;
		// }
		// if (data.villagecode) {
		// 	var villagecode = data.villagecode;
		// }
		switch (key) {
			// 小区基础信息
			case "villageInfo":
				// result = require('../models/villageInfo');
				// callback(null, result);
				q = url + "villageinfo" + "?" + "code=" + encodeURI(data.villagecode);
				request.get(q, function (err, res, body) {
					if (err) {
						callback(err);
					} else {
						callback(null, body);
					}
				})
				break;
			// // 车型的小区排名
			// case "villageRankOfCarModels":

			// 	break;
			// 关心汽车的小区排名
			case "careOfCarRank":
				// result = require('../models/car/careOfCarRank');
				// callback(null, result);
				q = url + "careofcarrank" + "?" + "name=" + encodeURI(data.administrativearea);
				request.get(q, function (err, res, body) {
					if (err) {
						callback(err);
					} else {
						callback(null, body);
					}
				})
				break;
			// 国拍相关信息
			case "guopaiInfo":
				// result = require('../models/car/guopaiInfo');
				// callback(null, result);
				q = url + "guopaiinfo" + "?";
				request.get(q, function (err, res, body) {
					if (err) {
						callback(err);
					} else {
						callback(null, body);
					}
				})
				break;
			// 小区的车型信息
			case "villageCarInfo":
				// result = require('../models/car/villageCarInfo');
				// callback(null, result);
				q = url + "villagecarinfo" + "?" + "code=" + encodeURI(data.villagecode);
				request.get(q, function (err, res, body) {
					if (err) {
						callback(err);
					} else {
						callback(null, body);
					}
				})
				break;
			// 关心汽车的总人数
			case "totalNumOfCar":
				// result = require('../models/car/totalNumOfCar');
				// callback(null, result);
				// q = url + "numofcarmodels" + "?";
				// request.get(q, function (err, res, body) {
				// 	if (err) {
				// 		callback(err);
				// 	} else {
				// 		callback(null, body);
				// 	}
				// })
				break;
			// 全市分车型的总人数
			case "numOfCarModels":
				// result = require('../models/car/numOfCarModels');
				// callback(null, result);
				q = url + "numofcarmodels" + "?";
				request.get(q, function (err, res, body) {
					if (err) {
						callback(err);
					} else {
						callback(null, body);
					}
				})
				break;
			// 全市热门团购网车型
			case "hotTuangouCar":
				// result = require('../models/car/hotTuangouCar');
				// callback(null, result);
				q = url + "hottuangoucar" + "?";
				request.get(q, function (err, res, body) {
					if (err) {
						callback(err);
					} else {
						callback(null, body);
					}
				})
				break;
			// 全市车牌拍卖人数趋势与访问国拍网人数趋势
			case "paipaiTrend":
				// result = require('../models/car/paipaiTrend');
				// callback(null, result);
				q = url + "paipaitrend" + "?";
				request.get(q, function (err, res, body) {
					if (err) {
						callback(err);
					} else {
						callback(null, body);
					}
				})
				break;
			// 
			case "totalCareOfcarType":
				q = url + "totalcareofcartype" + "?" + "type=" + encodeURI(data.type);
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
module.exports = car;