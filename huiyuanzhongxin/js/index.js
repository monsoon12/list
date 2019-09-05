layui.use(['layer'], function(){
    var iframe = document.getElementsByTagName("iframe")[0];
    iframe.onload=function(){       //获取首页iframe里面的元素
        var iframeDocument =  iframe.contentWindow.document,
            oArticle = iframeDocument.querySelector(".release-1"),
            oSuoping = iframeDocument.querySelector(".release-2"),
            oSp = document.querySelector(".suoping"),
            oFabu = document.querySelector(".fabu");

        oArticle.onclick = function() {
            oFabu.onclick();
        };
        oSuoping.onclick = function(){
            oSp.onclick();
        };
    };

    $(".shouye").click(function () {
        $(".home").click();
    });
    $(".user-btn").click(function () {
        xadmin.add_tab('用户管理','whole.html');
    });

    $(".fabu,.suoping").click(function () {
        var oThis =$(".layui-tab-title li.layui-this").index();
        //点击左侧导航栏 发布文章按钮 刷新对应iframe 页面
        var iframe1 = document.getElementsByTagName("iframe")[oThis];
        var iframeDocument =  iframe1.contentWindow.document;
        iframeDocument.location.reload();
    });

    window.onload = function(){
        var myDate = new Date();
        var mytime = myDate.toLocaleTimeString(); //获取当前时间
        // console.log(mytime);
        //修复左侧导航刷新，右侧显示对应栏目
        $(".data-manage,.shouye,.sub-menu li").click(function () {
            var oThisLengt = $(".layui-tab-title li.layui-this").prevAll().length;
            sessionStorage.setItem("data", oThisLengt);                 //点击左侧数据统计按钮 获取右侧顶部导航对应按钮位置
        });

        if(sessionStorage.getItem("isReload")){     //页面被刷新
            // console.log("页面被刷新");
            var oThisLengt = $(".layui-tab-title li").length;
            // console.log(oThisLengt);
            if (oThisLengt === 1) $(".home").click();       //顶部导航关闭到只剩一个时执行
            var oGetItem = sessionStorage.getItem("data");      //储存点击导航时的数据
            $(".layui-tab-title li").eq(oGetItem).click();
        }else{
            sessionStorage.setItem("isReload", true);   //首次被加载
            $(".home").click();                            //首次打开页面显示在首页
            sessionStorage.setItem("time", mytime);
        }
        var oGetTime = sessionStorage.getItem("time");
        console.log("首次打开页面时间：    "+oGetTime);

    };

    //修复点击顶部导航栏 左边跳转对应的栏目
    $(".layui-tab-title").on("click","li",function () {
        var oThis = $(this).index();
        // console.log(oThis);
        sessionStorage.setItem("data", oThis);
        var oText = $(this).text().replace("ဆ","");
        var oText2 = $(this).text().indexOf("我的首页");
        switch (true) {
            case oText === "文章管理":
                var oClass = $("#nav .news-manage").parent().attr("class");
                if (oClass !== "open") {$(".news-manage").click();}     //判断是否同一个栏目下，是的话不会关闭左侧栏目
                $(".wz-manage").click();
                break;
            case oText === "锁屏管理":
                var oClass = $("#nav .news-manage").parent().attr("class");
                if (oClass !== "open") {$(".news-manage").click();}
                $(".sp-manage").click();
                break;
            case oText === "账号信息":
                var oClass = $("#nav .personal").parent().attr("class");
                if (oClass !== "open") {$(".personal").click();}
                $(".information").click();
                break;
            case oText === "用户管理":
                var oClass = $("#nav .personal").parent().attr("class");
                if (oClass !== "open") {$(".personal").click();}
                $(".user-btn").click();
                break;
            case oText === "发布文章":
                var oClass = $("#nav .news-content").parent().attr("class");
                if (oClass !== "open") {$(".news-content").click();}
                $(".fabu").click();
                //点击顶部导航栏 发布文章按钮 刷新iframe 页面
                var iframe1 = document.getElementsByTagName("iframe")[oThis];
                var iframeDocument =  iframe1.contentWindow.document;
                iframeDocument.location.reload();
                break;
            case oText === "发布锁屏":
                var oClass = $("#nav .news-content").parent().attr("class");
                if (oClass !== "open") {$(".news-content").click();}
                $(".suoping").click();
                //点击顶部导航栏 发布文章按钮 刷新iframe 页面
                var iframe1 = document.getElementsByTagName("iframe")[oThis];
                var iframeDocument =  iframe1.contentWindow.document;
                iframeDocument.location.reload();
                break;
            case oText2 !== (-1):
                $("#nav li a").removeClass("active");
                $(".shouye").addClass("active");
                break;
            case oText === "数据统计":
                $(".data-manage").click();
                break;
            default:
                layer.msg("栏目不对应");
        }
    });
});
