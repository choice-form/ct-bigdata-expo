var request = require("request");
var config = require('../config');

var url = "http://" + config.ip + ":" + config.post + "/";

var realty = {
	/**
	* 房产
	* @param {object} data 传的参数
	*/
	realtyHandle: function (data, callback) {
		var key = data.fun, q, result;
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
			// 新房
			case "newHouse":
				// result = require('../models/realty/newHouse');
				// callback(null, result);
				q = url + "newhouse" + "?" + "code=" + encodeURI(data.villagecode);
				request.get(q, function (err, res, body) {
					if (err) {
						callback(err);
					} else {
						callback(null, body);
					}
				})
				break;
			// 写字楼
			case "officeBuilding":
				// result = require('../models/realty/officeBuilding');
				// callback(null, result);
				q = url + "officebuilding" + "?" + "code=" + encodeURI(data.villagecode);
				request.get(q, function (err, res, body) {
					if (err) {
						callback(err);
					} else {
						callback(null, body);
					}
				})
				break;
			// 二手房
			case "secondHandHouse":
				// result = require('../models/realty/secondHandHouse');
				// callback(null, result);

				q = url + "secondhandhouse" + "?" + "code=" + encodeURI(data.villagecode);
				request.get(q, function (err, res, body) {
					if (err) {
						callback(err);
					} else {
						callback(null, body);
					}
				})
				break;
			// 商铺
			case "shop":
				// result = require('../models/realty/shop');
				// callback(null, result);
				q = url + "shop" + "?" + "code=" + encodeURI(data.villagecode);
				request.get(q, function (err, res, body) {
					if (err) {
						callback(err);
					} else {
						callback(null, body);
					}
				})
				break;
			// 出租房
			case "tenementalHouse":
				// result = require('../models/realty/tenementalHouse');
				// callback(null, result);
				q = url + "tenementalhouse" + "?" + "code=" + encodeURI(data.villagecode);
				request.get(q, function (err, res, body) {
					if (err) {
						callback(err);
					} else {
						callback(null, body);
					}
				})
				break;
			// // 分房类别的总人数
			// case "numOfHouseModels":
			// 	result = require('../models/community/numOfHouseModels');
			// 	callback(null, result);
			// 	break;
			// 关心房产的小区排名
			case "careOfVillageRank":
				// result = require('../models/realty/careOfVillageRank');
				// callback(null, result);
				q = url + "careofhouserank" + "?" + "name=" + encodeURI(data.administrativearea);
				request.get(q, function (err, res, body) {
					if (err) {
						callback(err);
					} else {
						callback(null, body);
					}
				})
				break;
			// 新房、二手房、出租房、写字楼、商铺 指标
			case "realtyInfo":
				// result = require('../models/realty/realtyInfo');
				// callback(null, result);
				q = url + "realtyinfo" + "?" + "name=" + encodeURI(data.administrativearea);
				request.get(q, function (err, res, body) {
					if (err) {
						callback(err);
					} else {
						callback(null, body);
					}
				})
				break;
			// 房价最近一年趋势 （房价为新房+二手房均价格）
			case "totalCityPriceOfHouseTrend":
				// result = require('../models/realty/totalCityPriceOfHouseTrend');
				// callback(null, result);
				q = url + "totalcitynumofhouse" + "?";
				request.get(q, function (err, res, body) {
					if (err) {
						callback(err);
					} else {
						callback(null, body);
					}
				})
				break;
			// 统计全市房产类型新房、二手房、出租房、写字楼、商铺的top1 所对应的小区信息
			case "totalCityRealtyTypeTopOne":
				// result = require('../models/realty/totalCityRealtyTypeTopOne');
				// callback(null, result);
				q = url + "totalcityrealtytypetopone" + "?";
				request.get(q, function (err, res, body) {
					if (err) {
						callback(err);
					} else {
						callback(null, body);
					}
				})
				break;
			// 全市关心房产的相关数据
			case "totalCityNumOfHouse":
				// result = require('../models/realty/totalCityNumOfHouse');
				// callback(null, result);
				q = url + "totaldatacityofhouse" + "?";
				request.get(q, function (err, res, body) {
					if (err) {
						callback(err);
					} else {
						callback(null, body);
					}
				})
				break;
			// 全市关心房产的相关数据（add for sxx）
			case "totalDataCityOfHouse":
				// result = require('../models/realty/totalDataCityOfHouse');
				// callback(null, result);
				q = url + "totaldatacityofhouse" + "?";
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

module.exports = realty;
