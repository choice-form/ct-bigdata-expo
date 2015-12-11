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
		var html = template("js-village-rank", { list: result });
		document.getElementById("js-car-village-rank").innerHTML = html;

		$("#js-car-village-rank tr").on("click", function () {
			var villagecode = $(this).attr("data-id");
			console.log(villagecode);
			console.log($("this td"));
			$("#districtarea").html("区 - " + $(this).attr("data-name"));
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
		})
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

getVillageRanking(distArr[0], function (res) {
	console.log(res);
})
var index = distArr.length;
var n = 0;
setInterval(function () {
	$(dists[n+1]).addClass("active");
	$(dists[n]).removeClass("active");
	getVillageRanking(distArr[n]);
	n++;
	if (n >= distArr.length) {
		n = 0;
	}
}, 5000);
