// 全市关心房产的相关数据
// 请求：
// 返回：最新的数据
var totalCityNumOfHouse = {
	code: "000",
	msg: "success",
	result: {
		time: "50周",
		newhouse:{
			// 房屋数量
			num:14562,
			// 平均价格
			avgprice:31000
		},
		secondhandhouse:{
			num:1231,
			avgprice:12341
		},
		tenementalhouse:{
			num:1231,
			avgprice:12341
		},
		officebuilding:{
			num:1231,
			avgprice:12341
		},
		shop:{
			num:1231,
			avgprice:12341
		}
	}
}

module.exports = totalCityNumOfHouse;
