$(function () {
   $(".highcharts-point").attr("fill","#fff");
   // console.log($(".highcharts-root").attr("viewBox"));
    $(".highcharts-root").attr("viewBox");
    $("tspan").append("°").attr("stroke","");
    // $("text").css({"font-weight":"normal", "fill-weight":"#ffffff", "font-color":"#ffffff", "font-size":"15px"});
    var oLeftFirst = $(".highcharts-color-0").eq(0).offset().left,
        oTopFirst = $(".highcharts-color-0").eq(0).offset().top,
        oLeftlast = $(".highcharts-color-0").eq(6).offset().left,
        oToplast = $(".highcharts-color-0").eq(6).offset().top,
        oLeftFirst1 = $(".highcharts-color-1").eq(0).offset().left,
        oTopFirst1 = $(".highcharts-color-1").eq(0).offset().top,
        oLeftlast1 = $(".highcharts-color-1").eq(6).offset().left,
        oToplast1 = $(".highcharts-color-1").eq(6).offset().top;
    console.log("左 "+oLeftFirst1);
    console.log("上"+oTopFirst);
    // if (oTopFirst > 440){
    //     $("#box").append(`<div class="prominent_left" style="left: ${oLeftFirst-24}px;top: ${oTopFirst+82}px;"></div>`);
    // } else {
    //     $("#box").append(`<div class="prominent_left" style="left: ${oLeftFirst-24}px;top: ${oTopFirst+55}px;"></div>`);
    // }
    // if (oToplast > 440){
    //     $("#box").append(`<div class="prominent_right" style="left: ${oLeftlast+7}px;top: ${oTopFirst-1}px;"></div>`);
    // } else {
    //     $("#box").append(`<div class="prominent_right" style="left: ${oLeftlast+7}px;top: ${oTopFirst-1}px;"></div>`);
    // }
    //
    // if (oTopFirst1 > 480){
    //     $("#box").append(`<div class="prominent_left0" style="left: ${oLeftFirst1-24}px;top: ${oTopFirst1+1}px;"></div>`);
    // } else {
    //     $("#box").append(`<div class="prominent_left0" style="left: ${oLeftFirst1-23}px;top: ${oTopFirst1+2}px;"></div>`);
    // }
    // if (oToplast1 > 480){
    //     $("#box").append(`<div class="prominent_right0" style="left: ${oLeftlast1+7}px;top: ${oToplast1}px;"></div>`);
    // } else {
    //     $("#box").append(`<div class="prominent_right0" style="left: ${oLeftlast1+7}px;top: ${oToplast1}px;"></div>`);
    // }

    // $.ajax({
    //     url: "http://apis.juhe.cn/simpleWeather/query?city=%E8%8B%8F%E5%B7%9E&key=015bb43992f7e0abe6d4c9748734b8cc",
    //     type: "get",
    //     dataType : "jsonp",
    //     contentType: "application/json",
    //     jsonp: "callback",
    //     success: function (data) {
    //         console.log(data.result);
    //         // console.log(data.result.data.date);
    //     },
    //     error: function () {
    //     }
    // });

});