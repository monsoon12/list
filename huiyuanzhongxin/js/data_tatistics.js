layui.use(['form', 'layer','laydate','laypage'], function(){
    var layer = layui.layer;
    var laydate = layui.laydate;
    var laypage = layui.laypage;
    laypage.render({
        elem: 'opage' //注意，这里是 ID
        ,count: 100 //数据总数，从服务端得到
        ,limit: 2   //每页多少条数据
        ,prev:'上一页'
        ,next:'下一页'
        ,first: 1     //首页
        ,theme: '#3c98f9'

    });

    //时间选择
    laydate.render({
        elem: '#time1'
        // ,type: 'month'
        ,theme: '#3c98f9'
    });
    laydate.render({
        elem: '#time2'
        // ,type: 'time'
        ,theme: '#3c98f9'
    });

    
    var aDate = new Date();
    var aYear = aDate.getFullYear();
    var aMonth = aDate.getMonth()+1;
     function getLastDay(aYear,aMonth){
        var new_date = new Date(aYear,aMonth,0);
        //这里传入的0代表获取上一个月的最后一天；如果传1，则获得当月的第一天；
        return new_date.getDate();
    }

    var myDate = new Date;
    var year = myDate.getFullYear(); //获取当年
    var mon = myDate.getMonth() + 1; //获取当月
    var time = myDate.getDate();     //获取当日
    var oRadio = $(this).prev().val();
    var myDate2 = new Date(year, mon, time-oRadio);
    var oTime1 = time-oRadio;

    //默认 昨天日期
    var aMon1 = mon-1;
    if (Number(oTime1) < Number(0)) {
        var time1 = getLastDay(aYear,aMonth)+oTime1;
        var oValue1 = $("#time1").val(year+"-"+mon+"-"+time);
        var oValue2 = $("#time2").val(year+"-"+aMon1+"-"+time1);
        $("#time1").attr("value",oValue1);
        $("#time2").attr("value",oValue2);
        return false
    }
    var oValue1 = $("#time1").val(year + "-" + mon + "-" + time);
    var oValue2 = $("#time2").val(year + "-" + mon + "-" + (time - 1));
    $("#time1").attr("value",oValue1);
    $("#time2").attr("value",oValue2);

    //获取7日，14日，30日点击事件
    $(".layui-form-radio").click(function () {
        var myDate = new Date;
        var year = myDate.getFullYear(); //获取当年
        var mon = myDate.getMonth() + 1; //获取当月
        var time = myDate.getDate();     //获取当日
        var oRadio = $(this).prev().val();
        var myDate2 = new Date(year, mon, time-oRadio);
        var oTime1 = time-oRadio;
        switch(true){
            case Number(oRadio) === Number(1):            //昨天日期
                var aMon1 = mon-1;
                    if (Number(oTime1) < Number(0)) {
                        var time1 = getLastDay(aYear,aMonth)+oTime1;
                        var oValue1 = $("#time1").val(year+"-"+mon+"-"+time);
                        var oValue2 = $("#time2").val(year+"-"+aMon1+"-"+time1);
                        $("#time1").attr("value",oValue1);
                        $("#time2").attr("value",oValue2);
                        return false
                    }
                var oValue1 = $("#time1").val(year+"-"+mon+"-"+time);
                var oValue2 = $("#time2").val(year+"-"+mon+"-"+(time-1));
                $("#time1").attr("value",oValue1);
                $("#time2").attr("value",oValue2);
                break;
            case Number(oRadio) === Number(7):          //前7天
                var aMon2 = mon-1;
                    if (Number(oTime1) < Number(0)) {
                        var time2 = getLastDay(aYear,aMonth)+oTime1;
                        var oValue1 = $("#time1").val(year+"-"+mon+"-"+time);
                        var oValue2 = $("#time2").val(year+"-"+aMon2+"-"+time2);
                        $("#time1").attr("value",oValue1);
                        $("#time2").attr("value",oValue2);
                        return false
                    }
                var oValue1 = $("#time1").val(year+"-"+mon+"-"+time);
                var oValue2 = $("#time2").val(year+"-"+mon+"-"+(time-7));
                $("#time1").attr("value",oValue1);
                $("#time2").attr("value",oValue2);
                break;
            case Number(oRadio) === Number(14):         //前14天
                var aMon2 = mon-1;
                    if (Number(oTime1) < Number(0)) {
                        var time2 = getLastDay(aYear,aMonth)+oTime1;
                        var oValue1 = $("#time1").val(year+"-0"+mon+"-"+time);
                        var oValue2 = $("#time2").val(year+"-0"+aMon2+"-"+time2);
                        // console.log(time);
                        $("#time1").attr("value",oValue1);
                        $("#time2").attr("value",oValue2);
                        return false
                    }
                var oValue1 = $("#time1").val(year+"-"+mon+"-"+time);
                var oValue2 = $("#time2").val(year+"-"+mon+"-"+(time-14));
                console.log(oValue1);
                $("#time1").attr("value",oValue1);
                $("#time2").attr("value",oValue2);
                break;
            case Number(myDate2.getDate()-1) === Number(time):      //前一个月
                var aMon3 = mon-1;
                    if (Number(aMon3) === Number(1)){
                        var oYear = year-1;
                        var oValue1 = $("#time1").val(oYear+"-"+mon+"-"+time);
                        var oValue2 = $("#time2").val(oYear+"-"+aMon3+"-"+time);
                        $("#time1").attr("value",oValue1);
                        $("#time2").attr("value",oValue2);
                        return false
                    }
                var oValue1 = $("#time1").val(year+"-"+mon+"-"+time);
                var oValue2 = $("#time2").val(year+"-"+aMon3+"-"+time);
                $("#time1").attr("value",oValue1);
                $("#time2").attr("value",oValue2);
                break;
            default:
                layer.msg('日期错误');
        }
    });


    Histogram();
    //柱状图
    function Histogram() {      //概述
        var chart = Highcharts.chart('container', {
            title: {
                text: ''
                ,align: 'left'
                ,x: -30
                ,style: {
                    color: '#FF00FF',
                    fontWeight: 'bold',
                }
            },
            xAxis: {
                categories: ['推荐量', '阅读量', '内容量', '分享量', '收藏量', '点赞量']
            },
            series: [{
                type: 'column',
                colorByPoint: true,
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0],
                showInLegend: false

            }]
            , colors: ['#9981ff','#FF00FF','#4fff84','#ff6baa','#ffbb29','#3239ff'] //定义曲线条颜色
            ,credits: {
                enabled: false
            },
        });
    }

    //线条图
    function OChart_1() {   //文章分析
        var myChart = echarts.init(document.getElementById('main1'));
        // 指定图表的配置项和数据
        var option = {
            grid: {
                top: '5%',
                right: '1%',
                left: '1%',
                bottom: '10%',
                containLabel: true
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                data: ['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                name:'用户量',
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

        //线条图按钮
        $("#card-body .flow-btn span").click(function () {
            $(this).siblings("span").removeClass("on");
            $(this).addClass("on");
        });
    }

    //线条图
    function OChart_2() {       //锁屏分析
        var myChart = echarts.init(document.getElementById('main2'));
        // 指定图表的配置项和数据
        var option = {
            grid: {
                top: '5%',
                right: '1%',
                left: '1%',
                bottom: '10%',
                containLabel: true
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                data: ['2019-08-01','2019-08-02','2019-08-03','2019-08-04','2019-08-05','2019-08-06','2019-08-07']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                name:'用户量',
                data: [1820, 2932, 901, 3934, 1290, 1330, 720],
                type: 'line',
                smooth: true
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

        //线条图按钮
        $("#card-body .flow-btn span").click(function () {
            $(this).siblings("span").removeClass("on");
            $(this).addClass("on");
        });
    }


    //固定导航条
    var oriosTop = $(".layui-input-block").offset().top;
    $(window).scroll( function(){
        var scrollValue=$(window).scrollTop();
        if (scrollValue >= oriosTop){
            $(".layui-input-block").addClass("nav-fixed");
        } else {
            $(".layui-input-block").removeClass("nav-fixed");
        }
    });

    //点击顶部栏目 触发调取对应数据
    $(".layui-nav li").click(function () {
       var oDataName = $(this).attr("data-name");
       switch (true) {
           case oDataName === "gs" :
               $(".aggregate-column-2,.aggregate-column-3").hide();
               $(".aggregate-column-1").show();
               Histogram();
               // console.log(1);
               break;
           case oDataName === "wz" :
               $(".aggregate-column-1,.aggregate-column-3").hide();
               $(".aggregate-column-2").show();
               OChart_1();
               // console.log(2);
               break;
           case oDataName === "sp" :
               $(".aggregate-column-1,.aggregate-column-2").hide();
               $(".aggregate-column-3").show();
               OChart_2();
               break;
           default:
               layer.msg('日期错误')
       }
    });
});


