var realty = {
	/**
	* 房产
	* @param {object} data 传的参数
	*/
	realtyHandle: function (data, callback) {
		var key = data.fun, villageCode, date, result;
		if (data.villageCode) {
			villageCode = data.villageCode;
		}
		if (data.date) {
			date = data.date;
		}
		switch (key) {
			// 小区信息
			case "community":
				result = require('../models/community/community');
				callback(null, result);
				break;
			// 小区基础信息
			case "villageInfo":
				result = require('../models/community/villageInfo');
				callback(null, result);
				break;
			// 小区的房产信息
			case "villageHouseInfo":
				result = require('../models/community/villageHouseInfo');
				callback(null, result);
				
				break;
			// 新房
			case "newHouse":
				result = require('../models/realty/newHouse');
				callback(null, result);

				break;
			// 写字楼
			case "officeBuilding":
				result = require('../models/realty/officeBuilding');
				callback(null, result);

				break;
			// 二手房
			case "secondHandHouse":
				result = require('../models/realty/secondHandHouse');
				callback(null, result);

				break;
			// 商铺
			case "shop":
				result = require('../models/realty/shop');
				callback(null, result);
				break;
			// 出租房
			case "tenementalHouse":
				result = require('../models/realty/tenementalHouse');
				callback(null, result);
				break;
			// 分房类别的总人数
			case "numOfHouseModels":
				result = require('../models/community/numOfHouseModels');
				callback(null, result);
				break;
			/////////////全市数据//////////////
			// 关心房产的小区排名
			case "careOfVillageRank":
				result = require('../models/community/careOfVillageRank');
				callback(null, result);
				break;
			// 全市关心房产的总人数
			case "totalCityNumOfHouse":
				result = require('../models/community/totalCityNumOfHouse');
				callback(null, result);
				break;
			// 全市关心房产趋势
			case "totalCityNumOfHouseTrend":
				result = require('../models/community/totalCityNumOfHouseTrend');
				callback(null, result);
				break;
			default:
				break;
		}
	}
}

module.exports = realty;