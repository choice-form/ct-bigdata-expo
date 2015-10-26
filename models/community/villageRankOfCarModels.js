// 车型的小区排名
// 请求：villagecode 小区id
// 请求：date 年份或者月份 例如："2015","2015-10", 不传date则返回最新一个月数据
// 返回：当年每个月/某月的数据
var villageRankOfCarModels = {
	code: "000",
	msg: "success",
	result: [
		{
			time: "2015-10",
			villagecode: 20152131121,
			villagename: "徐汇街道",
			eleccarrank: 1,
			highgradecarrank: 2,
			suvcarrank: 3,
			normalcarrank: 4,
			supercarrank: 5,
			businesscarrank: 6
		},
		{
			time: "2015-11",
			villagecode: 20152131121,
			villagename: "徐汇街道",
			eleccarrank: 1,
			highgradecarrank: 2,
			suvcarrank: 3,
			normalcarrank: 4,
			supercarrank: 5,
			businesscarrank: 6
		},
	]
}