/**
 * Created by JaniseSheng on 15-10-28.
 */
var House_addresstext;//市区

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

//设置房产全市信息数据
var House_SetAllCityInfo_screen_a  = function(){
  var setInfo = function(res){
     var House_info_All =  res;
    //设置日期
    var time = House_info_All.time;
    $('#tab-1 .time').text(time);
    //新房数量
    var newhouseNum = House_info_All.newhouse.num;
    $('#js-realty-screen-a > li:eq(0) > .data-column:eq(0) h1').html(newhouseNum+"<span>套</span>");
    //新房平均价格
    var newhouseAvgprice = House_info_All.newhouse.avgprice;
    $('#js-realty-screen-a > li:eq(0) > .data-column:eq(1) h1').html(newhouseAvgprice+"<span>元</span>");

    //二手房数量
    var secondhandhouseNum = House_info_All.secondhandhouse.num;
    $('#js-realty-screen-a > li:eq(1) > .data-column:eq(0) h1').html(secondhandhouseNum+"<span>套</span>");
    //二手房平均价格
    var secondhandhouseAvgprice = House_info_All.secondhandhouse.avgprice;
    $('#js-realty-screen-a > li:eq(1) > .data-column:eq(1) h1').html(secondhandhouseAvgprice+"<span>元</span>");

    //出租房数量
    var tenementalhouseNum = House_info_All.tenementalhouse.num;
    $('#js-realty-screen-a > li:eq(2) > .data-column:eq(0) h1').html(tenementalhouseNum+"<span>套</span>");
    //出租房平均价格
    var tenementalhouseAvgprice = House_info_All.tenementalhouse.avgprice;
    $('#js-realty-screen-a > li:eq(2) > .data-column:eq(1) h1').html(tenementalhouseAvgprice+"<span>元</span>");

    //商铺数量
    var shopNum = House_info_All.shop.num;
    $('#js-realty-screen-a > li:eq(3) > .data-column:eq(0) h1').html(shopNum+"<span>套</span>");
    //商铺平均价格
    var shopAvgprice = House_info_All.shop.avgprice;
    $('#js-realty-screen-a > li:eq(3) > .data-column:eq(1) h1').html(shopAvgprice+"<span>元</span>");

    //写字楼数量
    var officebuildingNum = House_info_All.officebuilding.num;
    $('#js-realty-screen-a > li:eq(4) > .data-column:eq(0) h1').html(officebuildingNum+"<span>套</span>");
    //写字楼平均价格
    var officebuildingAvgprice = House_info_All.officebuilding.avgprice;
    $('#js-realty-screen-a > li:eq(4) > .data-column:eq(1) h1').html(officebuildingAvgprice+"<span>元</span>");
    console.log(House_info_All);

  }
  questAjax({
    fun: "totalDataCityOfHouse"
  },setInfo);
}

//点击区县，设置房产其他区县信息数据
var House_SetAreaInfo_screen_a  = function(cityname){
  var setInfo = function(res){
    var info =  res;
    var html = template('js-tpl-gridhouse-screen-a', {item:info});
    document.getElementById('js-gridhouse-screen-a').innerHTML = html;
    clickEffect.row();//添加居委点击事件

    //点击市，screen——b自动默认显示第一个居委的信息
    var code = $('#tab-1 [date-id]').eq(0).attr('date-id');
    House_SetAreaInfo_screen_b(code);
    console.log(info);
  };
  questAjax({
    fun: "careOfVillageRank",
    administrativearea:cityname+'区'
  },setInfo);
}

//点击小区居委的时候 显示列表信息
var House_SetAreaInfo_screen_b  = function(realtyId){
  var setInfo = function(res){
    var info =  res;
    //设置小区标题
    var townName = info.villagename;
    console.log(townName);
    $('#house #districttext').text(House_addresstext+'区 -'+townName);

    //设置小区户数
    var familyNum = info.villagehouseholds;
    console.log(familyNum);
    $('#house .chartHouse > .chart:eq(0) > h1').html(familyNum+"<span>户</span>");
    console.log(info);
  };
  questAjax({
    fun: "villageInfo",
    villagecode:realtyId
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
  clickEffect.district();

  //页面加载模式获取全市房产数据
  House_SetAllCityInfo_screen_a();
});


