$(document).ready(function() {
    //控制温度曲线图
    var fruits1 = [],
        fruits2 = [];
    $.ajax({
        url:"https://new.baizhan.net/column/ceshi/tianqi/weather.php",
        type: "GET",
        dataType: "json",
        chache: false,
        success:function (data) {
            var msg = eval(data).result.future;
            $.each(msg,function (index,val) {
                //月份当日
                var aDate1 = msg[index].date,
                    aDate2 = aDate1.indexOf("-",""),
                    aDate3 = aDate1.slice(aDate2).replace("-","").replace("-","/");
                // console.log("日期："+aDate3);
                $(".term .text_date").eq(index).html(aDate3);

                //天气变化
                var aWeather1 = msg[index].weather,
                    aWeather2 =aWeather1.slice(0,5);
                $(".term .change").eq(index).html(aWeather2);

                //获取温度数组
                var atemperature1 = msg[index].temperature,
                    atemperature2 = atemperature1.indexOf("/"),
                    atemperature3 = atemperature1.slice(atemperature2),
                    atemperature4 = atemperature1.replace(atemperature3,"");
                var white1 = msg[index].temperature,
                    white2 = white1.lastIndexOf("/"),
                    white3 = white1.slice(white2),
                    white4 = white3.replace("/","").replace("℃","");

                fruits1.push(parseInt(atemperature4));
                fruits2.push(parseInt(white4));
            });

            //定位城市
            $(".place span").html(data.result.city);

            //根据日期算出后续几天是星期几
            var ogetFullYear = data.result.future[0].date.slice(0,4),   //年份
                ogetMonth = data.result.future[0].date.slice(5,7),      //月份
                ogetDate1 = data.result.future[0].date.slice(8,10),     //日
                ogetDate2 = data.result.future[0].date.slice(8,10),
                ogetDate3 = data.result.future[0].date.slice(8,10),
                year1 = ogetFullYear, month1 = parseInt(ogetMonth)-1, date1 = parseInt(ogetDate1)+2, // 例如：month=6 表示 7 月
                year2 = ogetFullYear, month2 = parseInt(ogetMonth)-1, date2 = parseInt(ogetDate2)+3,
                year3 = ogetFullYear, month3 = parseInt(ogetMonth)-1, date3 = parseInt(ogetDate3)+4,
                dt1 = new Date(year1, month1, date1),
                dt2 = new Date(year2, month2, date2),
                dt3 = new Date(year3, month3, date3),
                dt4 = new Date(),
                weekDay = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
            $(".term .month").eq(2).html(weekDay[dt1.getDay()]);    //后两天
            $(".term .month").eq(3).html(weekDay[dt2.getDay()]);    //后三天
            $(".term .month").eq(4).html(weekDay[dt3.getDay()]);    //后四天
            $(".temperature .date .sameDay").html(weekDay[dt4.getDay()]);   //当天,星期几
            $(".temperature .date span.calendar").html(parseInt(ogetMonth)+"月"+parseInt(ogetDate1)+"日");  //当日
            // console.log("后两天："+weekDay[dt1.getDay()]);
            // console.log("后三天："+weekDay[dt2.getDay()]);
            // console.log("后四天："+weekDay[dt3.getDay()]);

            //湿度，风向，风级,温度,空气质量
            var realtime= data.result.realtime;
            $(".temperature .degree strong").html(realtime.temperature);  //温度
            $(".temperature .degree .climate span").html(realtime.info);
            $(".degree .atmosphere span").html(realtime.aqi);    //空气质量
            $(".humidity span.wind").html(realtime.direct);     //风向
            $(".term span.level").html(realtime.power);     //风级
            $(".humidity span.damp_humidity").html(realtime.humidity+"%");

            var plotOptions = {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                }
            };

            //温度显示在数组里面
            var series =  [
                {
                    // name: 'Tokyo',
                    // data: [27,25,28,32,31]
                    data: []
                },
                {
                    // name: 'New York',
                    // data: [10,13,15,7,21]
                    data: []
                },
            ];
            //数据导入到数组
            for (var i = 0;i < fruits1.length; i++){
                var seriesData1 = series[1].data.push(fruits1[i]);
            }
            for (var j = 0;j < fruits2.length; j++){
                var seriesData2 = series[0].data.push(fruits2[j]);
            }
            // console.log(series[0].data);
            // console.log(series[1].data);

            Highcharts.setOptions({         //定义曲线条颜色
                colors: ['#ffc200', '#03ccfb']
            });
            var json = {};
            json.series = series;
            json.plotOptions = plotOptions;
            $('#wrap').highcharts(json);

            $(".highcharts-point").attr("fill","#fff");
            // console.log($(".highcharts-root").attr("viewBox"));
            $(".highcharts-root").attr("viewBox");
            $("tspan").append("°").attr("stroke","");
            //控制温度曲线图

        }
    });

    //获取农历
    $.ajax({
        url: "https://v.juhe.cn/calendar/day?date=2019-5-30&key=2372cd47b03656f7ed86b18bf632ea23",
        type: "get",
        dataType : "jsonp",
        contentType: "application/json",
        jsonp: "callback",
        success: function (adata) {
            var oLunar = adata.result.data.lunar;
            $(".date .lunar").html(oLunar);
        }
    });
});