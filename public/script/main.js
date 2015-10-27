
var tabSwitch = {
  'house': function () {
    $('.tabs > .panel').css('display', 'none');
    $('#tab-1').css('display', 'block');

    $('.tabs > .tab-item > li').removeClass('active');
    $('.tabs > .tab-item > li').eq(0).addClass('active');
  },
  'tourism': function () {
    $('.tabs > .panel').css('display', 'none');
    $('#tab-2').css('display', 'block');

    $('.tabs > .tab-item > li').removeClass('active');
    $('.tabs > .tab-item > li').eq(1).addClass('active');
  },
  'car': function () {
    $('.tabs > .panel').css('display', 'none');
    $('#tab-3').css('display', 'block');

    $('.tabs > .tab-item > li').removeClass('active');
    $('.tabs > .tab-item > li').eq(2).addClass('active');
  }
}

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


  'time': function () {
    $('.time').click(function () {
      var addressValue = $(this).attr("name");
      $('.time').removeClass('active');
      $(this).addClass('active');
    });

  },

  'tablist': function () {
    $('.tablist').click(function () {
      var nameValue = $(this).attr("name");
      console.log('you choice : ' + nameValue);
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
  clickEffect.time();
  clickEffect.tablist();
  clickEffect.row();

});

