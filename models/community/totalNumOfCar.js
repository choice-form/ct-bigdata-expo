//关心汽车的总人数
// 请求：date 年份或者月份 例如："2015","2015-10", 不传date则返回最新一个月数据
// 返回：当年每个月/某月的数据
var totalNumOfCar = {
	code:"000",
	msg:"success",
	result:{
		time:["2015-08","2015-09","2015-10"],
		peoplenum:[324234,2313,352352]
	}
}

module.exports = totalNumOfCar;