/**
 * Created by JaniseSheng on 15-10-28.
 */

function questAjax(data,callback) {
  $.ajax({
    url: "/car",
    data: data,
    type: "post",
    dataType: "json",
    success: function (res) {
      callback(res);
    }
  })
}


/*var data = {
 title: '标签',
 list: ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他']
 };*/
/*questAjax('hotKeyword', function (res) {
 var html = template('js-Hotkeyword', res.result);
 document.getElementById('js-tourism-Hotkeyword').innerHTML = html;
 })*/


//设置房产 全是信息
var setData = {
  setDataCity : function(data){
    var ajaxDate = function(res){
      console.log(res);
    }
    questAjax(data,ajaxDate);
  }
}


//设置全区县数据


var clickEffect = {
  'district': function () {
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

  'row': function () {
    $('.row').click(function () {
      $('.row').removeClass('active');
      $(this).addClass('active');
    });

  }
}

$(document).ready(function () {
  clickEffect.district();
  clickEffect.row();

  //页面加载模式获取全市房产数据
  setData.setDataCity({
    fun: "careOfCarRank"
  });
});


