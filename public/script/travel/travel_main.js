/**
 * Created by JaniseSheng on 15-10-28.
 */


function questAjax (fun,callback){
  $.ajax({
    url: "/travel",
    data: {
      fun: fun
    },
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


questAjax('hotKeyword',function(res){
  var html = template('js-tpl-travel-screen-a', res.result);
  document.getElementById('js-travel-screen-a').innerHTML = html;
})
