/* global template */
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
      // if(res.code!=='000'){
      //   throw Error("接口："+data.fun + " 错误！");
      //   throw Error(res.msg);
      //   return;
      // }
      if(res.result){
        callback(res.result);
      }else{
        callback(res.items)
      }
    }
  })
}

//设置热门关键字搜索
var Travel_SetHotKeyInfo_screen_a = function(date){
  var setInfo = function(res){
    console.log(res);
    var info = res[res.length-1].item;
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
    var info = res[res.length-1].item;
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
    var info = res[res.length-1];
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
    var info = res[res.length-1];
    $("#js-travel-stayhome-screen-b > li:eq(0)> h2 ").text(info.pudong);
    $("#js-travel-stayhome-screen-b > li:eq(1)> h2 ").text(info.puxi);
    $("#js-travel-stayhome-screen-b > li:eq(2)> h2 ").text(info.athome);
  };

  questAjax({fun:'stayAtHome',
    date:date},setInfo);
}

// 沪上热门top20旅游景点(本地游客)
function hotTrafficLocal(date){
  questAjax({fun:"hotTrafficLocal",date:date},function(res){
    var info = res[res.length-1];
    console.log("沪上热门top20旅游景点(本地游客)");
    console.log(info)
    var opt = {
        tooltip : {
            trigger: 'axis'
        },
        grid: {
            x: 120,
            y: 30,
            x2: 40,
            y2: 30,
        },
        legend: {
            data:['人数']
        },
        calculable : true,
        xAxis : [
            {
                type : 'value',
                // boundaryGap : [0, 0.01]
            }
        ],
        yAxis : [
            {
                type : 'category',
                data : info.scenic.reverse(),
                axisLabel:{
                    interval:0
                }
            }
        ],
        series : [
            {
                name:'人数',
                type:'bar',
                data:info.people.reverse()
            }
        ]
    };

    var chart = echarts.init(document.getElementById("chartTourism_A"));
    chart.setTheme(myTheme);
    chart.setOption(opt);
  })
}

// 沪上热门top20旅游景点(外地游客)
function hotTrafficField(date){
  questAjax({fun:"hotTrafficField",date:date},function(res){
    var info = res[res.length-1];
    console.log("沪上热门top20旅游景点(外地游客)");
    console.log(info)
    var opt = {
        tooltip : {
            trigger: 'axis'
        },
        grid: {
            x: 120,
            y: 30,
            x2: 40,
            y2: 30,
        },
        legend: {
            data:['人数']
        },
        calculable : true,
        xAxis : [
            {
                type : 'value',
                // boundaryGap : [0, 0.01]
            }
        ],
        yAxis : [
            {
                type : 'category',
                data : info.scenic.reverse(),
                axisLabel:{
                    interval:0
                }
            }
        ],
        series : [
            {
                name:'人数',
                type:'bar',
                data:info.people.reverse()
            }
        ]
    };

    var chart = echarts.init(document.getElementById("chartTourism_B"));
    chart.setTheme(myTheme);
    chart.setOption(opt);
  })
}

// 热门交通旅游方式
function hotTraffic(date){
  questAjax({fun:"hotTraffic",date:date},function(res){
    var info = res[res.length-1];
    console.log("热门交通旅游方式");
    console.log(info);
    var opt = {
          tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            data:['飞机','高速','火车']
          },
          calculable : true,
          series : [
            {
                name:'热门交通旅游方式',
                type:'pie',
                radius : '60%',
                center: ['50%', '50%'],
                data:[
                    {value:info.byairplane[0], name:'飞机'},
                    {value:info.bycar[0], name:'高速'},
                    {value:info.bytrain[0], name:'火车'},
                ]
            }
          ]
      };

    var chart = echarts.init(document.getElementById("chartTourism_E"));
    chart.setTheme(myTheme);
    chart.setOption(opt);
  })
}
// 沪上热门top10商圈-本地游客
function hotBusinessAreaLocal(date){
  questAjax({fun:"hotBusinessAreaLocal",date:date},function(res){
    var info = res[res.length-1];
    console.log("沪上热门top10商圈-本地游客");
    console.log(info);
        var opt = {
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['人数']
        },
        calculable : true,
        xAxis : [
            {
                type : 'value',
                // boundaryGap : [0, 0.01]
            }
        ],
        yAxis : [
            {
                type : 'category',
                data : info.businessarea.reverse()
            }
        ],
        series : [
            {
                name:'人数',
                type:'bar',
                data:info.people.reverse()
            }
        ]
    };
    var chart = echarts.init(document.getElementById("chartTourism_C"));
    chart.setTheme(myTheme);
    chart.setOption(opt);
  });
}
// 沪上热门top10商圈-外地游客
function hotBusinessAreaField(date){
  questAjax({fun:"hotBusinessAreaField",date:date},function(res){
    var info = res[res.length-1];
    console.log("沪上热门top10商圈-外地游客");
    console.log(info);
        var opt = {
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['人数']
        },
        calculable : true,
        xAxis : [
            {
                type : 'value',
                // boundaryGap : [0, 0.01]
            }
        ],
        yAxis : [
            {
                type : 'category',
                data : info.businessarea.reverse()
            }
        ],
        series : [
            {
                name:'人数',
                type:'bar',
                data:info.people.reverse()
            }
        ]
    };
    var chart = echarts.init(document.getElementById("chartTourism_D"));
    chart.setTheme(myTheme);
    chart.setOption(opt);
  });
}

var clickEffect = {
  nav: function () {
    $('nav > a').click(function () {
      $('nav > a').removeClass('active');
      $(this).addClass('active');
    });
  }
}

template.helper("dateFormat", function (data) {
  return moment(data).format("MM月DD日");
})

$(document).ready(function () {
//   var month = moment().format("YYYY-MM");
  var month = "2015-10";
  // 生成日期
  questAjax({fun:'stayAtHome',date:month},function(res){
      console.log(res[0].date);
      var days = res[0].date
      var html = template("js-date",{list:days});
      $("#js-travel-date").html(html);
      var length = days.length;
      var n = 0;
      setInterval(function(){
        var date = days[n];
        if(n === 0){
            $($(".time")[length-1]).removeClass('active');
        }else{
           $($(".time")[n-1]).removeClass('active');
        }
        $($(".time")[n]).addClass('active');
        Travel_SetHotKeyInfo_screen_a(date);
        Travel_SethotTravelInfo_screen_a(date);
        n++;
        if(n>=length){
            n = 0;
        }
      },5000);
    });
});

