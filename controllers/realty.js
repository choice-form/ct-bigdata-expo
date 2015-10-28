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
			// 小区基础信息
			case "villageInfo":
				result = require('../models/villageInfo');
				callback(null, result);
				break;
			// // 小区的房产信息
			// case "villageHouseInfo":
			// 	result = require('../models/community/villageHouseInfo');
			// 	callback(null, result);

				// break;
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
			// // 分房类别的总人数
			// case "numOfHouseModels":
			// 	result = require('../models/community/numOfHouseModels');
			// 	callback(null, result);
			// 	break;
			// 关心房产的小区排名
			case "careOfVillageRank":
				result = require('../models/realty/careOfVillageRank');
				callback(null, result);
				break;
			// 新房、二手房、出租房、写字楼、商铺 指标
			case "realtyInfo":
				result = require('../models/realty/realtyInfo');
				callback(null, result);
				break;
			// 房价最近一年趋势 （房价为新房+二手房均价格）
			case "priceOfCityHouseTrend":
				result = require('../models/realty/priceOfCityHouseTrend');
				callback(null, result);
				break;
			// 统计全市房产类型新房、二手房、出租房、写字楼、商铺的top1 所对应的小区信息
			case "totalCityRealtyTypeTopOne":
				result = require('../models/realty/totalCityRealtyTypeTopOne');
				callback(null, result);
				break;
			// 全市关心房产的相关数据
			case "totalCityNumOfHouse":
				result = require('../models/realty/totalCityNumOfHouse');
				callback(null, result);
				break;
      // 全市关心房产的相关数据（add for sxx）
      case "totalDataCityOfHouse":
        result = require('../models/realty/totalDataCityOfHouse');
        callback(null, result);
        break;
			default:
				break;
		}
	}
}

module.exports = realty;
