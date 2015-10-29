$(function () {
	clickEffect.district();
	// clickEffect.row();
})

function queryAjax(data, callback) {
	$.ajax({
		url: "/car",
		data: data,
		dataType: "json",
		type: "post",
		success: function (res) {
			callback(res);
		}
	})
}


var clickEffect = {
	district: function () {
		$('.district').click(function () {
			var addressValue = $(this).attr("name");
			$('.district').removeClass('active');
			$(this).addClass('active');

			$('.screen_toggle').removeClass('active');
			$(addressValue).addClass('active');

			var addresstext = $(this).text();
			console.log(addresstext);
			$('#districttext').text(addresstext);
		});

	},
	row: function () {
		$('.row').click(function () {
			$('.row').removeClass('active');
			$(this).addClass('active');
		});

	}
}

