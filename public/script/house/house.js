$(function () {

})

function queryAjax(data, callback) {
	$.ajax({
		url: "/realty",
		data: data,
		dataType: "json",
		type: "post",
		success: function (res) {
			callback(res);
		}
	})
}