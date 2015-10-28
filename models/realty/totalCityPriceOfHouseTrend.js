// 房价最近一年趋势 （房价为新房+二手房均价格）
// 请求：
// 返回：最新的数据 从1月到最新的数据（月）
var priceOfCityHouseTrend = {
	code: "000",
	msg: "success",
	result: {
		//月份
		time: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		// 价格
		price: [1231, 1231, 5345, 65467, 68444, 2342, 123, 4635],
	}
}

module.exports = priceOfCityHouseTrend;