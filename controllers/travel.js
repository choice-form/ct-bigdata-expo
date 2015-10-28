var travel = {
	/**
	* 旅游
	*/
	travelHandle: function (data, callback) {
		var key = data.fun, result;
		var date = data.date;
		switch (key) {
			// 热门top10的app
			case "hotApp":
				result = require('../models/travel/hotApp');
				callback(null, result);
				break;
			// 线上热搜索排名top10
			case "hotKeyword":
				result = require('../models/travel/hotKeyword');
				callback(null, result);

				break;
			// 热门交通出游方式
			case "hotTraffic":
				result = require('../models/travel/hotTraffic');
				callback(null, result);

				break;
			// 沪上热门top10商圈_外地游客
			case "hotBusinessAreaField":
				result = require('../models/travel/hotBusinessAreaField');
				callback(null, result);

				break;
			// 沪上热门top10商圈_本地游客
			case "hotBusinessAreaLocal":
				result = require('../models/travel/hotBusinessAreaLocal');
				callback(null, result);
				break;
			// 沪上热门top20旅游景点_外地游客
			case "hotTrafficField":
				result = require('../models/travel/hotTrafficField');
				callback(null, result);
				break;
			// 沪上热门top20旅游景点_本地游客
			case "hotTrafficLocal":
				result = require('../models/travel/hotTrafficLocal');
				callback(null, result);
				break;
			// 出行热门旅游地top10
			case "hotTravel":
				result = require('../models/travel/hotTravel');
				callback(null, result);
				break;
			// 是否外出情况
			case "sayAtHome":
				result = require('../models/travel/sayAtHome');
				callback(null, result);
				break;
			default:
				break;
		}
	}
}

module.exports = travel;