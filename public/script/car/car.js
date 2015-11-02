/* global template */

var villageArr = [];

//弹出层
var poplab = $(".screen_popup_car");
poplab.removeClass("active");
$(function () {

	var map = new BMap.Map("map");
	map.centerAndZoom("上海", 11);
	map.addControl(new BMap.MapTypeControl());

	map.enableScrollWheelZoom(true);
	clickEffect.district(map);
	clickEffect.row();
})

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
		poplab.addClass("active");
		var html = template("js-hotkeyword", { list: res.soufangkeyword.split(",") });
		$(".popup_ca_content").html(html);
	})
}


var clickEffect = {
	district: function (map) {
		$('.district').click(function () {
			var data;
			var addressValue = $(this).attr("name");
			$('.district').removeClass('active');
			$(this).addClass('active');

			$('.screen_toggle').removeClass('active');
			$(addressValue).addClass('active');

			var addresstext = $(this).text();
			console.log(addresstext);
			$('#car #districttext').html(addresstext);
			if (addresstext === "全市") {
				// 关系汽车的小区排名
				queryAjax({ fun: "careOfCarRank", administrativearea: "all" }, function (info) {
					console.log("关系汽车的小区排名");
					console.log(info);
					// 地图显示小区坐标
					map.clearOverlays();
					async.map(info, getVillage, function (err, res) {
						console.log(res);
						villageArr = res;
						map.clearOverlays();
						for (var i = 0; i < villageArr.length; i++) {
							villageArr[i].point = new BMap.Point(villageArr[i].villagecentlngb, villageArr[i].villagecentlatb);
							villageArr[i].marker = new BMap.Marker(villageArr[i].point);
							map.addOverlay(villageArr[i].marker);
							villageArr[i].marker.setAnimation(BMAP_ANIMATION_BOUNCE);
							var label = new BMap.Label(villageArr[i].villagename);
							villageArr[i].marker.setLabel(label);

							(function (village, i) {
								// villageArr[i].marker.
								villageArr[i].marker.addEventListener("click", function (e) {
									// console.log(e);
									console.log(village);
									getvillageCarInfo(village);
								})
							})(villageArr[i], i)
						}
					})
				})
				// 全市关心汽车的总人数
				queryAjax({ fun: "totalNumOfCar" }, function (res) {
					console.log("全市关心汽车的总人数")
					console.log(res);
					$("#careOfCarNum").html(res.peoplenum + "<span>户</span>");
				})
				// 车牌拍卖人数
				queryAjax({ fun: "guopaiInfo", villagecode: "all" }, function (res) {
					console.log("车牌拍卖户数");
					console.log(res);
					$("#careOfPaipaiNum").html(res.paipainun + "<span>户</span>");
					$("#visitNum").html(res.vistguopainetnum + "<span>户</span>");

				})
				// 关心的汽车车型
				queryAjax({ fun: "numOfCarModels" }, function (res) {
					console.log("关心的汽车车型")
					console.log(res);
					var html = template("js-careoftype", res);
					$("#js-car-careoftype").html(html);
				});
				// 热门团购车型
				queryAjax({ fun: "hotTuangouCar" }, function (res) {
					console.log("热门团购车型")
					console.log(res);
					$(".data-car > div > span").html(res.time + "月");

					var carArr = [];
					for (var i = 0; i < 5; i++) {
						var car = {};
						car.type = res.cartype[i];
						car.num = res.num[i];
						carArr.push(car);
					}
					var html = template("js-hottuangou", { list: carArr });
					$("#js-car-hottuangou").html(html);

				});
				// 全市车牌拍卖人数趋势与访问国拍网人数趋势
				queryAjax({ fun: "paipaiTrend" }, function (res) {
					console.log("全市车牌拍卖人数趋势与访问国拍网人数趋势");
					console.log(res);

					var opt = {
						tooltip: {
							trigger: 'axis'
						},
						legend: {
							data: ['访问国拍网人数', '拍牌人数']
						},
						calculable: true,
						xAxis: [
							{
								type: 'category',
								boundaryGap: false,
								data: res.date
							}
						],
						yAxis: [
							{
								type: 'value'
							}
						],
						series: [
							{
								name: '访问国拍网人数',
								type: 'line',
								smooth: true,
								itemStyle: { normal: { areaStyle: { type: 'default' } } },
								data: res.visit
							},
							{
								name: '拍牌人数',
								type: 'line',
								smooth: true,
								itemStyle: { normal: { areaStyle: { type: 'default' } } },
								data: res.auction
							}
						]
					};

					var chart = echarts.init(document.getElementById("chartCar_B"));
					chart.setTheme(myTheme);
					chart.setOption(opt);
				})
			} else {
				// careOfCarRank
				// 小区排名
				data = {
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
					var html = template("js-village-rank", { list: result });
					document.getElementById("js-car-village-rank").innerHTML = html;

					// 地图显示小区坐标
					map.clearOverlays();
					async.map(result, getVillage, function (err, res) {
						console.log(res);
						villageArr = res;
						map.clearOverlays();
						for (var i = 0; i < villageArr.length; i++) {
							villageArr[i].point = new BMap.Point(villageArr[i].villagecentlngb, villageArr[i].villagecentlatb);
							villageArr[i].marker = new BMap.Marker(villageArr[i].point);
							map.addOverlay(villageArr[i].marker);
							villageArr[i].marker.setAnimation(BMAP_ANIMATION_BOUNCE);
							var label = new BMap.Label(villageArr[i].villagename);
							villageArr[i].marker.setLabel(label);

							(function (village, i) {
								// villageArr[i].marker.
								villageArr[i].marker.addEventListener("click", function (e) {
									// console.log(e);
									console.log(village);
									getvillageCarInfo(village);
								})
							})(villageArr[i], i)
						}
					})

					$("#js-car-village-rank tr").on("click", function () {
						var villagecode = $(this).attr("data-id");
						console.log(villagecode);
						var data = {
							fun: "guopaiInfo",
							villagecode: villagecode
						};
						// guoapiInfo
						queryAjax(data, function (result) {
							console.log("国拍信息");
							console.log(result);
							// *** 小区访问拍牌页面，关心车险电话数量
							$("#vistppnum").html(result.vistppnum + "<span>人</span>");
							$("#caretelepinsurance").html(result.caretelepinsurance + "<span>次</span>");
						})
						var data1 = {
							fun: "villageCarInfo",
							villagecode: villagecode
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
											{ value: res.businesscarnum, name: '商务车' }
										]
									}
								]
							};

							var myChart = echarts.init(document.getElementById("chartCar_C"));
							myChart.setTheme(myTheme);
							myChart.setOption(option);
						})
					})
					$($("#js-car-village-rank tr")[1]).trigger("click");
				})
			}
		});
		$($('.district')[0]).trigger("click");
	},

	row: function () {
		$('.row').click(function () {
			$('.row').removeClass('active');
			$(this).addClass('active');
		});
	},

	removePopupcar: function () {
		poplab.removeClass("active");
	},
}