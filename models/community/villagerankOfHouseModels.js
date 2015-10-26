// 分房型的小区排名
// 请求：villagecode 小区id
// 请求：date 年份或者月份 例如："2015","2015-10", 不传date则返回最新一个月数据
// 返回：当年每个月/某月的数据
var villagerankOfHouseModels = {
	code: "000",
	msg: "success",
	result: [
		{
			time: "2015-10",
			villagecode: 20152313,
			villagename: "徐汇小区",
			carenewrank: 1,
			caresecondhandrank: 2,
			carerentrank: 3,
			careofficerank: 6,
			careshoprank: 1,
			carerenovationrank: 4,
			carefinancerank: 5
		},
		{
			time: "2015-11",
			villagecode: 20152313,
			villagename: "徐汇小区",
			carenewrank: 1,
			caresecondhandrank: 2,
			carerentrank: 3,
			careofficerank: 6,
			careshoprank: 1,
			carerenovationrank: 4,
			carefinancerank: 5
		},
	]
}
