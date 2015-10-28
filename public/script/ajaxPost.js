$.ajax({
  url: "/realty",
  data: { fun: "villageInfo"},
  type: "post",
  dataType: "json",
  success: function (res) {
    console.log(res);
  }
})

