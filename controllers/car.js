var car = {
	/**
	* 汽车
	* @param {object} data 传的参数
	*/
	carHandle: function (data, callback) {
		var key = data.fun, date, result;
		switch (key) {
			// 小区基础信息
			case "villageInfo":
				result = require('../models/villageInfo');
				callback(null, result);
				break;
			// 车型的小区排名
			case "villageRankOfCarModels":

				break;
			// 关心汽车的小区排名
			case "careOfCarRank":

				break;
			// //关心汽车的总人数
			case "totalNumOfCar":

				break;
			default:
				break;
		}
	}
}
module.exports = car;