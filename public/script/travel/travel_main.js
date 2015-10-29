/**
 * Created by JaniseSheng on 15-10-28.
 */
var questAjax = function (data,callback) {
  $.ajax({
    url: "/travel",
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

//设置热门关键字搜索
var Travel_SetHotKeyInfo_screen_a = function(date){
  var setInfo = function(res){
    console.log(res);
    var info = res.item;
    var html = template('js-tpl-travel-hotkey-screen-a', {item:info});
    document.getElementById('js-travel-hotkey-screen-a').innerHTML = html;
  };

  questAjax({fun:'hotKeyword',
    date:date},setInfo);
}


//设置热门出行旅游地
var Travel_SethotTravelInfo_screen_a = function(date){
  var setInfo = function(res){
    console.log(res);
    var info = res.item;
    var html = template('js-tpl-travel-hotTravel-screen-a', {item:info});
    document.getElementById('js-travel-hotTravel-screen-a').innerHTML = html;
  };

  questAjax({fun:'hotTravel',
    date:date},setInfo);
}

//设置热门App
var Travel_SethotAppInfo_screen_b = function(date){
  var setInfo = function(res){
    console.log(res);
    var info = res;
    var html = template('js-tpl-travel-hotapp-screen-b', {item:info});
    document.getElementById('js-travel-hotapp-screen-b').innerHTML = html;
  };

  questAjax({fun:'hotApp',
    date:date},setInfo);
}

//是否外出情况
var Travel_SetstayhomeInfo_screen_b = function(date){
  var setInfo = function(res){
    console.log(res);
    var info = res;
    $("#js-travel-stayhome-screen-b > li:eq(0)> h2 ").text(info.pudong);
    $("#js-travel-stayhome-screen-b > li:eq(1)> h2 ").text(info.puxi);
    $("#js-travel-stayhome-screen-b > li:eq(2)> h2 ").text(info.athome);
  };

  questAjax({fun:'stayAtHome',
    date:date},setInfo);
}

var clickEffect = {
  'nav': function () {
    $('nav > a').click(function () {
      $('nav > a').removeClass('active');
      $(this).addClass('active');

      //设置热门关键字搜索, 热门旅游地
      var date = $(this).attr('date');
      Travel_SetHotKeyInfo_screen_a(date);
      Travel_SethotTravelInfo_screen_a(date);
      Travel_SethotAppInfo_screen_b(date);
      Travel_SetstayhomeInfo_screen_b(date);
    });
  }
}


$(document).ready(function () {
  clickEffect.nav();

  //初始化设置热门关键字搜索, 热门旅游地
  var date = $('nav > a').eq(0).attr('date');
  Travel_SetHotKeyInfo_screen_a(date);
  Travel_SethotTravelInfo_screen_a(date);
  Travel_SethotAppInfo_screen_b(date);
  Travel_SetstayhomeInfo_screen_b(date);
});

