var travel = {
	/**
	* 旅游
	*/
	travelHandle: function (data, callback) {
		var key = data.fun;
		var date = data.date;
		switch (key) {
			// 热门top10的app
			case "hotApp":

				break;
			// 线上热搜索排名top10
			case "hotKeyword":

				break;
			// 热门交通出游方式
			case "hotTraffic":

				break;
			// 沪上热门top10商圈_外地游客
			case "hotBusinessAreaField":

				break;
			// 沪上热门top10商圈_本地游客
			case "hotBusinessAreaLocal":

				break;
			// 沪上热门top20旅游景点_外地游客
			case "hotTrafficField":

				break;
			// 沪上热门top20旅游景点_本地游客
			case "hotTrafficLocal":

				break;
			// 出行热门旅游地top10
			case "hotTravel":

				break;
			// 是否外出情况
			case "sayAtHome":

				break;
			default:
				break;
		}
	}
}

module.exports = travel;