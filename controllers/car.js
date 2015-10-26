var car = {
	/**
	* 汽车
	* @param {object} data 传的参数
	*/
	carHandle: function (data, callback) {
		var key = data.fun, date;
		switch (key) {
			// 小区信息
			case "community":

				break;
			// 小区基础信息
			case "villageInfo":

				break;
			// 小区的车型信息
			case "villageCarInfo":

				break;
			// 团购汇
			case "autoHome":

				break;
			// 快车网 www.5757car.com
			case "car":

				break;
			// 中国汽车消费网
			case "che":

				break;
			// 车汇网
			case "scar":

				break;
			// 团车网 http://tuanche.com/
			case "tuanche":

				break;
			// 车型的小区排名
			case "villageRankOfCarModels":

				break;
			/////////////全市数据//////////////
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