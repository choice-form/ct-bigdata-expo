/**
 * Created by JaniseSheng on 15-10-28.
 */
var Travel_Date;//市区

var questAjax = function (data,callback) {
  $.ajax({
    url: "/realty",
    data: data,
    type: "post",
    dataType: "json",
    success: function (res) {
      if(res.code!=='000'){
        throw Error("接口："+data.fun + " 错误！");
        throw Error(res.msg);
        return;
      }
      callback(res.result);
    }
  })
}



//设置线上热门搜索
var Travel_HotkeySelect_screen_a  = function(){
  var setInfo = function(res){
    var info =  res;
    console.log(info);
    var html = template('js-tpl-travel-screen-a', {item:info});
    document.getElementById('js-travel-screen-a').innerHTML = html;
  }
  questAjax({
    fun: "hotKeyword"
  },setInfo);
}

var clickEffect = {
  'district': function () {
    $('.district').click(function () {
      var addressValue = $(this).attr("name");
      $('.district').removeClass('active');
      $(this).addClass('active');

      $('.screen_toggle').removeClass('active');
      $(addressValue).addClass('active');

      House_addresstext = $(this).text();

      if(House_addresstext=='全市'){
        House_SetAllCityInfo_screen_a();
      }else {
        House_SetAreaInfo_screen_a(House_addresstext);
      }
    });

  },

  'row': function () {
    $('.row').click(function(){
      $('#tab-1 .row').removeClass('active');
      $(this).addClass('active');
      var code = $(this).attr('date-id');
      console.log(code);
      House_SetAreaInfo_screen_b(code);
    })
  }
}

$(document).ready(function () {
  //clickEffect.district();

  //页面加载模式获取全市房产数据
  Travel_HotkeySelect_screen_a();
});


