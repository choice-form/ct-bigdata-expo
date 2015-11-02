/* global BMap */
/* global template */
/**
 * Created by JaniseSheng on 15-10-28.
 */
var House_addresstext;//市区

var villageArr = [];

//弹出层
var poplab = $(".screen_popup_house");
poplab.removeClass("active");

var questAjax = function (data, callback) {
  $.ajax({
    url: "/realty",
    data: data,
    type: "post",
    dataType: "json",
    success: function (res) {
      // if (res.code != '0') {
      //   throw Error("接口：" + data.fun + " 错误！");
      //   throw Error(res.msg);
      //   return;
      // }
      callback(res.result);
    }
  })
}

//显示弹出层
function showPopLab(item) {
  console.log(item);
  questAjax({ fun: "realtyInfo", villagecode: item.villagecode }, function (res) {
    poplab.addClass("active");
    console.log(res);
    var html = template("js-realtyinfo-type", { list: res });
    $(".popup_house_list").html(html);
    var html1 = template("js-realtyinfo-body", { list: res });
    $(".popup_house_content").html(html1);
    $(".popup_house_content ul>li:eq(0)").addClass("active");
  })

}

//设置房产全市信息数据
function House_SetAllCityInfo_screen_a(map) {
  var setInfo = function (res) {
    var House_info_All = res;
    //设置日期
    var time = House_info_All.time;
    $('#tab-1 .time').text(time);
    //新房数量
    var newhouseNum = House_info_All.newhouse.num;
    $('#js-realty-screen-a > li:eq(0) > .data-column:eq(0) h1').html(newhouseNum + "<span>套</span>");
    //新房平均价格
    var newhouseAvgprice = House_info_All.newhouse.avgprice;
    $('#js-realty-screen-a > li:eq(0) > .data-column:eq(1) h1').html(newhouseAvgprice + "<span>元</span>");

    //二手房数量
    var secondhandhouseNum = House_info_All.secondhandhouse.num;
    $('#js-realty-screen-a > li:eq(1) > .data-column:eq(0) h1').html(secondhandhouseNum + "<span>套</span>");
    //二手房平均价格
    var secondhandhouseAvgprice = House_info_All.secondhandhouse.avgprice;
    $('#js-realty-screen-a > li:eq(1) > .data-column:eq(1) h1').html(secondhandhouseAvgprice + "<span>元</span>");

    //出租房数量
    var tenementalhouseNum = House_info_All.tenementalhouse.num;
    $('#js-realty-screen-a > li:eq(2) > .data-column:eq(0) h1').html(tenementalhouseNum + "<span>套</span>");
    //出租房平均价格
    var tenementalhouseAvgprice = House_info_All.tenementalhouse.avgprice;
    $('#js-realty-screen-a > li:eq(2) > .data-column:eq(1) h1').html(tenementalhouseAvgprice + "<span>元</span>");

    //商铺数量
    var shopNum = House_info_All.shop.num;
    $('#js-realty-screen-a > li:eq(3) > .data-column:eq(0) h1').html(shopNum + "<span>套</span>");
    //商铺平均价格
    var shopAvgprice = House_info_All.shop.avgprice;
    $('#js-realty-screen-a > li:eq(3) > .data-column:eq(1) h1').html(shopAvgprice + "<span>元</span>");

    //写字楼数量
    var officebuildingNum = House_info_All.officebuilding.num;
    $('#js-realty-screen-a > li:eq(4) > .data-column:eq(0) h1').html(officebuildingNum + "<span>套</span>");
    //写字楼平均价格
    var officebuildingAvgprice = House_info_All.officebuilding.avgprice;
    $('#js-realty-screen-a > li:eq(4) > .data-column:eq(1) h1').html(officebuildingAvgprice + "<span>元</span>");
    console.log(House_info_All);

  }

  questAjax({
    fun: "totalDataCityOfHouse"
  }, setInfo);
  
  // 统计全市房产类型新房、二手房、出租房、写字楼、商铺的top1 所对应的小区信息
  questAjax({ fun: "totalCityRealtyTypeTopOne" }, function (res) {
    console.log("统计全市房产类型新房、二手房、出租房、写字楼、商铺的top1 所对应的小区信息");
    console.log(res);

    map.clearOverlays();
    // 添加各房型对应小区的坐标到地图上
    var newHouse = {}, secondHandHouse = {}, officeBuilding = {}, shop = {}, tenementtalHouse = {};
    var pointArr = []
    if (res.newhouse.villagename) {
      newHouse.point = new BMap.Point(res.newhouse.villagecentlngb, res.newhouse.villagecentlatb)
      newHouse.marker = new BMap.Marker(newHouse.point);
      map.addOverlay(newHouse.marker);
      newHouse.marker.setAnimation(BMAP_ANIMATION_BOUNCE);
      newHouse.label = new BMap.Label(res.newhouse.villagename, { offset: new BMap.Size(20, -10) });
      newHouse.marker.setLabel(newHouse.label);
      //添加侦听
      newHouse.marker.addEventListener("click", function () {
        showPopLab(res.newhouse)
      });
      pointArr.push(newHouse.point);
    }
    if (res.secondhandhouse.villagename) {
      secondHandHouse.point = new BMap.Point(res.secondhandhouse.villagecentlngb, res.secondhandhouse.villagecentlatb)
      secondHandHouse.marker = new BMap.Marker(secondHandHouse.point);
      map.addOverlay(secondHandHouse.marker);
      secondHandHouse.marker.setAnimation(BMAP_ANIMATION_BOUNCE);
      secondHandHouse.label = new BMap.Label(res.secondhandhouse.villagename, { offset: new BMap.Size(20, -10) });
      secondHandHouse.marker.setLabel(secondHandHouse.label);
      //添加侦听
      secondHandHouse.marker.addEventListener("click", function () {
        showPopLab(res.secondhandhouse)
      });
      pointArr.push(secondHandHouse.point);
    }
    if (res.officebuilding.villagename) {
      officeBuilding.point = new BMap.Point(res.officebuilding.villagecentlngb, res.officebuilding.villagecentlatb)
      officeBuilding.marker = new BMap.Marker(officeBuilding.point);
      map.addOverlay(officeBuilding.marker);
      officeBuilding.marker.setAnimation(BMAP_ANIMATION_BOUNCE);
      officeBuilding.label = new BMap.Label(res.officebuilding.villagename, { offset: new BMap.Size(20, -10) });
      officeBuilding.marker.setLabel(officeBuilding.label);
      //添加侦听
      officeBuilding.marker.addEventListener("click", function () {
        showPopLab(res.officebuilding)
      });
      pointArr.push(officeBuilding.point);
    }
    if (res.shop.villagename) {
      shop.point = new BMap.Point(res.shop.villagecentlngb, res.shop.villagecentlatb)
      shop.marker = new BMap.Marker(shop.point);
      map.addOverlay(shop.marker);
      shop.marker.setAnimation(BMAP_ANIMATION_BOUNCE);
      shop.label = new BMap.Label(res.shop.villagename, { offset: new BMap.Size(20, -10) });
      shop.marker.setLabel(shop.label);
      //添加侦听
      shop.marker.addEventListener("click", function () {
        showPopLab(res.shop)
      });
      pointArr.push(shop.point);
    }
    if (res.tenementalhouse.villagename) {
      tenementtalHouse.point = new BMap.Point(res.tenementalhouse.villagecentlngb, res.tenementalhouse.villagecentlatb)
      tenementtalHouse.marker = new BMap.Marker(tenementtalHouse.point);
      map.addOverlay(tenementtalHouse.marker);
      tenementtalHouse.marker.setAnimation(BMAP_ANIMATION_BOUNCE);
      tenementtalHouse.label = new BMap.Label(res.tenementalhouse.villagename, { offset: new BMap.Size(20, -10) });
      tenementtalHouse.marker.setLabel(tenementtalHouse.label);
      //添加侦听
      tenementtalHouse.marker.addEventListener("click", function () {
        showPopLab(res.tenementalhouse)
      });
      pointArr.push(tenementtalHouse.point);
    }
    //调整地图视野
    console.log(pointArr);
    // map.setViewport(pointArr);
  })
  
  // 房价最近一年趋势
  questAjax({ fun: "totalCityPriceOfHouseTrend" }, function (res) {
    console.log("房价最近一年趋势");
    console.log(res);

    var opt = {
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        // x: 100,
        y: 100,
        // x2: 20,
        y2: 100
      },
      legend: {
        data: ['房价']
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: res.time.reverse()
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '房价',
          type: 'line',
          // stack: '总量',
          data: res.price.reverse()
        }
      ]
    };

    var chart = echarts.init(document.getElementById("chartHouse_A"));
    chart.setTheme(myTheme);
    chart.setOption(opt);
  })
}

//点击区县，设置房产其他区县信息数据
var House_SetAreaInfo_screen_a = function (cityname, map) {
  var setInfo = function (res) {
    var info = res;
    var html = template('js-tpl-gridhouse-screen-a', { item: info });
    document.getElementById('js-gridhouse-screen-a').innerHTML = html;
    clickEffect.row();//添加居委点击事件

    //点击市，screen——b自动默认显示第一个居委的信息
    var code = $('#tab-1 [date-id]').eq(0).attr('date-id');
    House_SetAreaInfo_screen_b(code);
    console.log(info);
    
    // 地图显示小区坐标
    map.clearOverlays();
    async.map(info, getVillage, function (err, res) {
      console.log(res);
      villageArr = res;
      map.clearOverlays();
      for (var i = 0; i < villageArr.length; i++) {
        villageArr[i].point = new BMap.Point(villageArr[i].villagecentlngb, villageArr[i].villagecentlatb);
        villageArr[i].marker = new BMap.Marker(villageArr[i].point);
        map.addOverlay(villageArr[i].marker);
        villageArr[i].marker.setAnimation(BMAP_ANIMATION_BOUNCE);
        var label = new BMap.Label(villageArr[i].villagename);
        villageArr[i].marker.setLabel(label);
        (function (village, i) {
          villageArr[i].marker.addEventListener("click", function () {
            showPopLab(village);
          })
        })(villageArr[i], i)
      }
    })
  };
  questAjax({
    fun: "careOfVillageRank",
    administrativearea: function () {
      if (cityname === "全市") {
        return "all";
      } else {
        return cityname + "区";
      }
    } ()
  }, setInfo);
}
// 获取小区信息
function getVillage(item, cb) {
  questAjax({ fun: "villageInfo", villagecode: item.villagecode }, function (res) {
    cb(null, res);
  })
}

//点击小区居委的时候 显示列表信息
var House_SetAreaInfo_screen_b = function (realtyId) {

  questAjax({ fun: "villageInfo", villagecode: realtyId }, function (res) {
    var info = res;
    //设置小区标题
    var townName = info.villagename;
    console.log(townName);
    $('#house #districttext').text(House_addresstext + '区 -' + townName);

    //设置小区户数
    var familyNum = info.femalenum + info.malenum + info.unknownnum;
    console.log(familyNum);
    $('#house .chartHouse > .chart:eq(0) > h1').html(familyNum + "<span>户</span>");
    console.log(info);
    
    // 男女比例
    var propOpt = {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data: ['男性', '女性']
      },
      calculable: true,
      series: [
        {
          name: '男女比例',
          type: 'pie',
          radius: '60%',
          center: ['50%', '50%'],
          data: [
            { value: res.malenum, name: '男性' },
            { value: res.femalenum, name: '女性' },
          ]
        }
      ]
    };

    var propChart = echarts.init(document.getElementById("chartHouse_C"));
    propChart.setTheme(myTheme);
    propChart.setOption(propOpt);
    // 年龄分布
    var distOpt = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['年龄分布']
      },
      grid: {
        x: 45,
        y: 45,
        x2: 20,
        y2: 45
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          data: ['0-18', '19-25', '26-30', '31-35', '36-40', '41-45', '46-50', '51-55', '56-60', '61-']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '年龄分布',
          type: 'bar',
          data: [res.num018, res.num1925, res.num2630, res.num3135, res.num3640, res.num4145, res.num4650, res.num5155, res.num5660, res.num610],
        }
      ]
    };

    var distChart = echarts.init(document.getElementById("chartHouse_B"));
    distChart.setTheme(myTheme);
    distChart.setOption(distOpt);
    
    // 距离地铁站距离
    var undergroundOpt = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['小区离地铁的距离']
      },
      grid: {
        x: 150,
        // y: 100,
        x2: 20,
        y2: 45
      },
      calculable: true,
      xAxis: [
        {
          type: 'value',
          boundaryGap: [0, 0.01]
        }
      ],
      yAxis: [
        {
          type: 'category',
          data: [res.villagearoundmetro1.split(",")[1], res.villagearoundmetro2.split(",")[1], res.villagearoundmetro3.split(",")[1], res.villagearoundmetro4.split(",")[1], res.villagearoundmetro5.split(",")[1]]
        }
      ],
      series: [
        {
          name: '小区离地铁的距离',
          type: 'bar',
          data: [res.villagenearestdist1, res.villagenearestdist2, res.villagenearestdist3, res.villagenearestdist4, res.villagenearestdist5]
        }
      ]
    };

    var undergroundChart = echarts.init(document.getElementById("chartHouse_D"));
    undergroundChart.setTheme(myTheme);
    undergroundChart.setOption(undergroundOpt);
  });
}

var clickEffect = {
  district: function (map) {
    $('.district').click(function () {
      var addressValue = $(this).attr("name");
      $('.district').removeClass('active');
      $(this).addClass('active');

      $('.screen_toggle').removeClass('active');
      $(addressValue).addClass('active');

      House_addresstext = $(this).text();

      if (House_addresstext == '全市') {
        House_SetAllCityInfo_screen_a(map);
      } else {

        House_SetAreaInfo_screen_a(House_addresstext, map);
      }
    });

  },

  row: function () {
    $('.row').click(function () {
      $('#tab-1 .row').removeClass('active');
      $(this).addClass('active');
      var code = $(this).attr('date-id');
      console.log(code);
      House_SetAreaInfo_screen_b(code);
    })
  }
}



$(document).ready(function () {
  
  //弹出层
  $(".popup_background").on("click", function () {
    poplab.removeClass("active");
  })
  $(".popup_house_content").on("click", function () {
    poplab.removeClass("active");
  })

  var map = new BMap.Map("map");
  map.centerAndZoom("上海", 11);
  map.addControl(new BMap.MapTypeControl());

  clickEffect.district(map);

  //页面加载模式获取全市房产数据
  House_SetAllCityInfo_screen_a(map);
});


