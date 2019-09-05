$(function () {
    layui.use(['laypage','laydate','form'] ,function(){
        var laypage = layui.laypage;
        var laydate = layui.laydate;
        var form = layui.form;

        laydate.render({
            elem: '#time-1'
            ,theme: '#3483fb'
        });
        laydate.render({
            elem: '#time-2'
            ,theme: '#3483fb'
        });
        laydate.render({
            elem: '#time-3'
            ,theme: '#3483fb'
        });
        laydate.render({
            elem: '#time-4'
            ,theme: '#3483fb'
        });

        laypage.render({
            elem: 'opage' //注意，这里是 ID
            ,count: 100 //数据总数，从服务端得到
            ,limit: 2   //每页多少条数据
            ,prev:'上一页'
            ,next:'下一页'
            ,first: 1     //首页
            ,theme: '#3483fb'

        });

        //导航点击显示对应栏目
        $(".nav ul li").click(function () {
            $(this).siblings("li").find("a").removeClass("current");
            $(this).find("a").addClass("current");
            var oName = $(this).find("a").attr("name");
            // console.log(oName);
            switch (Number(oName)) {
                case  Number(1):
                    var oLength1 = $(".main ul li").css("display","block").length;
                    // console.log(oLength1);
                    laypage.render({
                        elem: 'opage' //注意，这里是 ID
                        ,count: oLength1 //数据总数，从服务端得到
                        ,limit: 10   //每页多少条数据
                        ,prev:'上一页'
                        ,next:'下一页'
                        ,first: 1     //首页
                        ,theme: '##3483fb'
                    });
                    // console.log(1);
                    break;
                case Number(2):
                    var oLength2 = $(".main ul li.pending").css("display","block").siblings().css("display","none").length;
                    laypage.render({
                        elem: 'opage' //注意，这里是 ID
                        ,count: oLength2 //数据总数，从服务端得到
                        ,limit: 10   //每页多少条数据
                        ,prev:'上一页'
                        ,next:'下一页'
                        ,first: 1     //首页
                        ,theme: '##3483fb'
                    });
                    console.log(2);
                    break;
                case Number(3):
                    var oLength3 = $(".main ul li.draft").css("display","block").siblings().css("display","none").length;

                    laypage.render({
                        elem: 'opage' //注意，这里是 ID
                        ,count: oLength3 //数据总数，从服务端得到
                        ,limit: 10   //每页多少条数据
                        ,prev:'上一页'
                        ,next:'下一页'
                        ,first: 1     //首页
                        ,theme: '##3483fb'
                    });
                    console.log(3);
                    break;
                case Number(4):
                    var oLength4 = $(".main ul li.release").css("display","block").siblings().css("display","none").length;
                    laypage.render({
                        elem: 'opage' //注意，这里是 ID
                        ,count: oLength4 //数据总数，从服务端得到
                        ,limit: 10   //每页多少条数据
                        ,prev:'上一页'
                        ,next:'下一页'
                        ,first: 1     //首页
                        ,theme: '##3483fb'
                    });
                    break;
                case Number(5):
                    var oLength5 = $(".main ul li.fail").css("display","block").siblings().css("display","none").length;
                    laypage.render({
                        elem: 'opage' //注意，这里是 ID
                        ,count: oLength5 //数据总数，从服务端得到
                        ,limit: 10   //每页多少条数据
                        ,prev:'上一页'
                        ,next:'下一页'
                        ,first: 1     //首页
                        ,theme: '##3483fb'
                    });
                    break;
                case Number(6):
                    var oLength6 = $(".main ul li.recovery").css("display","block").siblings().css("display","none").length;
                    laypage.render({
                        elem: 'opage' //注意，这里是 ID
                        ,count: oLength6 //数据总数，从服务端得到
                        ,limit: 10   //每页多少条数据
                        ,prev:'上一页'
                        ,next:'下一页'
                        ,first: 1     //首页
                        ,theme: '##3483fb'
                    });
                    break;
                default:
                    console.log('判断出错')
            }
        });

        //点击删除 弹窗是否删除
        $(".main li .delete-file").click(function () {
            layer.confirm('确定要删除？', {
                btn: ['是','否'] //按钮
            }, function(){

                layer.msg('删除成功');
            }, function(){
                layer.msg('取消成功');
            });
        });

        //导航移入显示字体颜色
        $(".nav-cloumn li a").hover(function () {
            if ($(this).is(".current"))return false;
            $(this).css("color","#3483fb");
        },function () {
            if ($(this).is(".current")){
                $(this).css("color","#fff");
            };
            $(this).css("color","#aeaeae");
        });

        //顶部悬浮
        var oriosTop = $(".nav").offset().top;
        $(window).scroll( function(){
            var scrollValue=$(window).scrollTop();
            if (scrollValue >= oriosTop){
                $(".nav").addClass("nav-fixed");
            } else {
                $(".nav").removeClass("nav-fixed");
            }
        });
    });
});