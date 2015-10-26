var realty = {
	/**
	* 房产
	* @param {object} data 传的参数
	*/
	realtyHandle: function (data, callback) {
		var key = data.fun, date;
		switch (key) {
			// 小区信息
			case "community":

				break;
			// 小区基础信息
			case "villageInfo":

				break;
			// 小区的房产信息
			case "villageHouseInfo":

				break;
			// 新房
			case "newHouse":

				break;
			// 写字楼
			case "officeBuilding":

				break;
			// 二手房
			case "secondHandHouse":

				break;
			// 商铺
			case "shop":

				break;
			// 出租房
			case "tenementalHouse":

				break;
			// 分房类别的总人数
			case "numOfHouseModels":

				break;
			/////////////全市数据//////////////
			// 关心房产的小区排名
			case "careOfVillageRank":

				break;
			// 全市关心房产的总人数
			case "totalCityNumOfHouse":

				break;
			// 全市关心房产趋势
			case "totalCityNumOfHouseTrend":

				break;
			default:
				break;
		}
	}
}

module.exports = realty;