/* global template */

var villageArr = [];

function queryAjax(data, callback) {
	$.ajax({
		url: "/car",
		data: data,
		dataType: "json",
		type: "post",
		success: function (res) {
			// if (res.code !== "000") {
			// 	throw Error("接口：" + data.fun + " 错误！")
			// 	throw Error(res.msg);
			// }
			callback(res.result);
		}
	})
}

// 获取小区信息
function getVillage(item, cb) {
	queryAjax({ fun: "villageInfo", villagecode: item.villagecode }, function (res) {
		cb(null, res);
	})
}

// 小区的车型信息
function getvillageCarInfo(item) {
	queryAjax({ fun: "villageCarInfo", villagecode: item.villagecode }, function (res) {
		console.log("小区的车型信息");
		console.log(res);
		//
		$(".popup_car_title > p:eq(0)").html(item.villagename);
		// poplab.addClass("active");
		var html = template("js-hotkeyword", { list: res.soufangkeyword.split(",") });
		$(".popup_ca_content").html(html);
	})
}
//关系汽车的小区排名
function getVillageRanking(addresstext, callback) {
	// 小区排名
	var data = {
		fun: "careOfCarRank",
		administrativearea: function () {
			if (addresstext === "崇明") {
				return "崇明县"
			} else if (addresstext === "浦东") {
				return "浦东新区"
			} else {
				return addresstext + "区";
			}
		} ()
		// addresstext + "区",
	};

	queryAjax(data, function (result) {
		console.log(addresstext + "区" + "关系汽车的小区排名")
		console.log(result);
		// var html = template("js-village-rank", { list: result });
		// document.getElementById("js-car-village-rank").innerHTML = html;
		var village = result[0];
		// $("#js-car-village-rank tr").on("click", function () {
		// 	var villagecode = $(this).attr("data-id");
		// 	console.log(villagecode);
		// 	console.log($("this td"));
		// 	$("#districtarea").html("区 - " + $(this).attr("data-name"));

		// })
		if (callback) {
			callback(result);
		}
	})
}
//小区内关心的车型人数比例
function getCareOfCarOfNum(villagecode, callback) {

}

//小区内关心的车辆品牌
function getCareOfCar(villageCode, callback) {
	var data1 = {
		fun: "villageCarInfo",
		villagecode: villageCode
	};
	queryAjax(data1, function (res) {
		console.log("小区汽车信息");
		console.log(res);
		// res.careofbradntop10
		// 小区内关心的车辆品牌（top10）
		var html = template("js-careofbradntop10",
			{ list: res.careofbradntop10.split(",") });
		$("#js-car-careofbradntop10").html(html);
		// 小区内关系的车型人数比例
		var option = {
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			legend: {
				// orient: 'vertical',
				// x: 'left',
				data: ['电动车', '高端车', 'SUV', '中小型车', '跑车', '商务车']
			},
			calculable: true,
			series: [
				{
					name: '关系的车型人数比例',
					type: 'pie',
					radius: '55%',
					center: ['50%', '50%'],
					data: [
						{ value: res.eleccarnum, name: '电动车' },
						{ value: res.highgradecarnum, name: '高端车' },
						{ value: res.suvcarnum, name: 'SUV' },
						{ value: res.normalcarnum, name: '中小型车' },
						{ value: res.supercarnum, name: '跑车' },
						{ value: res.businesscarunm, name: '商务车' }
					]
				}
			]
		};

		var myChart = echarts.init(document.getElementById("chartCar_C"));
		myChart.setTheme(myTheme);
		myChart.setOption(option);
	})
}

$(".district.active").hide();
var dists = $(".district");

var distArr = function () {
	var arr = [];
	for (var i = 1; i < dists.length; i++) {
		var element = dists[i];
		arr.push(element.innerHTML);
	}
	return arr;
} ();

var index = distArr.length;
var n = 0;
setInterval(function () {
	$(dists[n + 1]).addClass("active");
	$(dists[n]).removeClass("active");
	getVillageRanking(distArr[n], function (res) {
		var village = res[0];
		console.log(village);
		getCareOfCar(village.villagecode);
		$("#districttext").html(distArr[n]);
		$("#districtarea").html("区 - " + village.villagename);
		n++;
		if (n >= distArr.length) {
			n = 0;
		}
	});
}, 5000);
