// 关心汽车的小区排名
// 请求：administrativearea 行政区，当值为"all"时表示请求全市的数据，例如："黄浦区" / "all"
// 返回：最新数据 top 10
var careOfCarRank = {
	code: "000",
	msg: "success",
	result: [
		{
			time: "50周",
			villagecode: 215032432,
			villagename: "徐汇街道",
			villagerank: 1,
			villagecareofcarnum: 242435
		},
		{
			time: "50周",
			villagecode: 215032432,
			villagename: "闵行街道",
			villagerank: 2,
			villagecareofcarnum: 242435
		},
	]
}

module.exports = careOfCarRank;
