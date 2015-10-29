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

var Travel_SetAllCityInfo_screen_a = function(){
  var setInfo = function(res){
    console.log(res)
  };

  questAjax({fun:'hotKeyword'},setInfo);
}

$(document).ready(function () {
  Travel_SetAllCityInfo_screen_a();
});

