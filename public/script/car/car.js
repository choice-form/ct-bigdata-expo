/* global template */
$(function () {

	var map = new BMap.Map("map");
	map.centerAndZoom("上海", 11);
	map.addControl(new BMap.MapTypeControl());

	map.enableScrollWheelZoom(true);
	clickEffect.district();
	clickEffect.row();
})

function queryAjax(data, callback) {
	$.ajax({
		url: "/car",
		data: data,
		dataType: "json",
		type: "post",
		success: function (res) {
			if (res.code !== "000") {
				throw Error("接口：" + data.fun + " 错误！")
				throw Error(res.msg);
			}
			callback(res.result);
		}
	})
}

var clickEffect = {
	district: function () {
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
					$("#visitNum").html(res.vistguopainetnum +"<span>户</span>");		
				})
				// 关心的汽车车型
				queryAjax({fun:"numOfCarModels"},function(res){
					console.log("关心的汽车车型")
					console.log(res);
					
				});
				// 热门团购车型
				queryAjax({fun:"hotTuangouCar"},function(res){
					console.log("热门团购车型")
					console.log(res);
				})
			} else {
				// careOfCarRank
				// 小区排名
				data = {
					fun: "careOfCarRank",
					administrativearea: addresstext + "区",
				};
				queryAjax(data, function (result) {
					console.log(addresstext + "区" + "关系汽车的小区排名")
					console.log(result);
					var html = template("js-village-rank", { list: result });
					document.getElementById("js-car-village-rank").innerHTML = html;

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
							var html = template("js-careofbradntop10", { list: res.careofbradntop10 });
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
							myChart.setOption(option);
						})


					})
				})
			}
		});

	},

	row: function () {
		$('.row').click(function () {
			$('.row').removeClass('active');
			$(this).addClass('active');
		});

	}
}

