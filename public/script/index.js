/* global BMap */
require([], function () {
	"use strict";
	var map = new BMap.Map('map');
	map.centerAndZoom("上海");
	map.addControl(new BMap.MapTypeControl());
	map.setCurrentCity("上海");


	$.ajax({
		url: "/travel",
		data: {
			fun: "hotapp",
			date: "2015-10-01"
		},
		type: "post",
		dataType: "json",
		success: function (res) {
			console.log(res);
		}
	})
})