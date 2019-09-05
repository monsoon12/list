layui.use(['layer','laydate'], function(){
    var layer = layui.layer;
    var laydate = layui.laydate;

    //选择日期
    laydate.render({
        elem: '#time1'
        // ,type: 'month'
        ,theme: '#3483fb'
    });
    laydate.render({
        elem: '#time2'
        ,type: 'time'
        ,theme: '#3483fb'
    });

    //定义空数组 为提交数据上传做准备
    var oPhonePic1 = new Array([]);
    var oPhonePic2 = new Array([]);
    // console.log(oPhonePic1);
    $('#biaoti-pic-1').bind('change',function(){
        var file = $(this).get(0).files[0];
        var fr = new FileReader();
        var oNamePic = file.name;
        var oNamePic2 = oNamePic.indexOf(".");
        var PicSuffix = oNamePic.slice(oNamePic2);  //获取上传图片的后缀
        fr.readAsDataURL(file);
        fr.onload = function(){
            var aImg = fr.result;
            var myDate = new Date();
            var myFullYear =  myDate.getFullYear(); //获取完整的年份(4位)
            var myMonth = myDate.getMonth(); //获取当前月份(0-11,0代表1月)
            var myHours =  myDate.getHours(); //获取当前小时数(0-23)
            var myMinutes = myDate.getMinutes(); //获取当前分钟数(0-59)
            var mySeconds = myDate.getSeconds(); //获取当前秒数(0-59)
            var myMilliseconds = myDate.getMilliseconds(); //获取当前毫秒数(0-999)
            //以上传时间作为图片名
            oPhonePic2[0] = myFullYear+ "0"+ myMonth + "0"+ myHours + "0"+myMinutes + "0"+ mySeconds + "0"+ myMilliseconds + PicSuffix;
            console.log( run()+ '/'+ oPhonePic2[0]);
            Model_Cropper({
                imgUrl: aImg, // 图片地址 / 或者 base64   注：图片地址(需要在服务器环境下  base64不需要)
                proportion: [1440, 2560], // 宽/高  裁剪and压缩比例  单位px  图片等比例压缩
                confirm: function (result) {   // 裁剪成功后  返回的 事件
                    oPhonePic1[0]  = result.data.blob;               //blob对象存入数组里面
                    // console.log('base64=======',result.data.base64);
                    //result.data.base64  本地图片地址
                    $(".pic-screen-1").empty().append("<img src="+result.data.base64+">");
                    result.close();         // 关闭弹框
                    layer.msg("本地上传成功");
                },

            });
        };

    });

    $('#biaoti-pic-2').bind('change',function(){
        oPhonePic1[1] = $(this).get(0).files[0];        //blob对象存入数组里面
        var file = $(this).get(0).files[0];
        var fr = new FileReader();
        var oNamePic = file.name;
        var oNamePic2 = oNamePic.indexOf(".");
        var PicSuffix = oNamePic.slice(oNamePic2);  //获取上传图片的后缀
        fr.readAsDataURL(file);
        fr.onload = function(){
            var myDate = new Date();
            var myFullYear =  myDate.getFullYear(); //获取完整的年份(4位)
            var myMonth = myDate.getMonth(); //获取当前月份(0-11,0代表1月)
            var myHours =  myDate.getHours(); //获取当前小时数(0-23)
            var myMinutes = myDate.getMinutes(); //获取当前分钟数(0-59)
            var mySeconds = myDate.getSeconds(); //获取当前秒数(0-59)
            var myMilliseconds = myDate.getMilliseconds(); //获取当前毫秒数(0-999)
            //以上传时间作为图片名
            oPhonePic2[1] = myFullYear+ "0"+ myMonth + "0"+ myHours + "0"+myMinutes + "0"+ mySeconds + "0"+ myMilliseconds + PicSuffix;
            var oImg = fr.result;
            $(".pic-screen-2").empty().append("<img src="+oImg+">");
            console.log( run()+ '/'+oPhonePic2[1]);
            layer.msg("本地上传成功");
        };
    });


    // 阻止在input里面按 enter 键 触发提交按钮
    $("input:text").keydown(function (event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if(e && e.keyCode ==13){
            event.preventDefault();
        }
    });


    //发布文章按钮
    var oForm = document.getElementById('form_data');
    console.log(oPhonePic1[0]);
    $(".release-btn").click(function (event) {
        event.preventDefault();
        layer.confirm('确定要发布？', {
            btn: ['是','否'] //按钮
        }, function(){
            $.ajax({
                type: "get",
                url: "http://coop.kaijia.com:98/e/member/qcloud-cos-sts-sdk-master/php/demo/sts_test.php",
                async: false,
                dataType: "json",
                success: function(data) {
                    optionData = data.credentials;
                }
            });

            var cos = new COS({
                SecretId: optionData.tmpSecretId,
                SecretKey: optionData.tmpSecretKey,
                XCosSecurityToken: optionData.sessionToken
            });

            //先判断锁屏图 oPhonePic1[0] 是否是空值
            if (oPhonePic1[0] == ""){
                if (oPhonePic1[1] !== undefined){   //锁屏图 oPhonePic1[0]为空 （没有上传图片）， 原图oPhonePic1[1]有上传图片  执行这段代码
                    console.log("不是undefined");
                    var aUrl = "https://p.ddjk.com/test/"+ run()+ '/'+oPhonePic2[1];  // 腾讯云的链接
                    $("#titlepic").val(aUrl);      // 传输数据给input, 提交时传给后台
                    console.log( $("#titlepic").val());
                    //下面是上传的部分
                    cos.putObject({
                        Bucket: 'jun4-com-1251443711',
                        Region: 'ap-shanghai',
                        Key: 'test/' + run() + '/' + oPhonePic2[1],
                        StorageClass: 'STANDARD',
                        Body: oPhonePic1[1], // 上传文件对象 或 Blob对象
                        onProgress: function(progressData) {
                            // console.log("progressData", JSON.stringify(progressData));
                        }
                    }, function(err, data) {
                        // console.log(err || data);
                        if (data.statusCode == 200) {
                            console.log("上传成功");
                            layer.msg('发布成功');
                            oForm.submit();
                        } else {
                            layer.msg("上传失败");
                            // oForm.submit();
                        }
                    });
                    return false
                }

                if (oPhonePic1[1] === undefined) {       //锁屏图 oPhonePic1[0]为空 （没有上传图片）， 原图oPhonePic1[1]也为空时（没有上传图片），点击发布提交
                    // oForm.submit();
                    layer.msg('没有上传图片');
                    return false
                }
            }

            //锁屏图或者原始图都上传图片，或者单独锁屏上传图片了    执行这段代码
            for (var key in oPhonePic1) {
                if (oPhonePic1[key] !== undefined  ) {
                    var aUrl1 = "https://p.ddjk.com/test/"+ run()+ '/'+oPhonePic2[key];  // 腾讯云的链接
                    $(".pic_"+key).val(aUrl1);        // 传输数据给input, 提交时传给后台
                    console.log( $(".pic_"+key).val());

                    //下面是上传的部分
                    cos.putObject({
                        Bucket: 'jun4-com-1251443711',
                        Region: 'ap-shanghai',
                        Key: 'test/' + run() + '/' + oPhonePic2[key],
                        StorageClass: 'STANDARD',
                        Body: oPhonePic1[key], // 上传文件对象 或 Blob对象
                        onProgress: function(progressData) {
                            // console.log("progressData", JSON.stringify(progressData));
                        }
                    }, function(err, data) {
                        // console.log(err || data);
                        if (data.statusCode == 200) {
                            console.log("上传成功");
                            layer.msg('发布成功');
                            oForm.submit();
                        } else {
                            layer.msg("上传失败");
                        }
                    });
                }
            }
            // oForm.submit();

        }, function(){
            layer.msg('取消成功');
        });
    });


    //取消按钮
    $("#articlepub .cancel-btn").click(function (event) {
        event.preventDefault();
        layer.confirm('确定要取消？', {
            btn: ['是','否'] //按钮
        }, function(){
            $(".label_color").remove();     //清除动态添加的标签
            $(".pic-file").empty();         //清除 上传的图片
            oForm.reset();
            layer.msg('已清除');
        }, function(){
            layer.msg('取消成功');
        });
    });
    //保存草稿
    $("#articlepub .draft-btn").click(function (event) {
        event.preventDefault();
        layer.confirm('确定要保存草稿？', {
            btn: ['是','否'] //按钮
        }, function(){
            oForm.submit();
            layer.msg('已存草稿');
        }, function(){
            layer.msg('取消成功');
        });
    });


    function run() {
        var time = new Date(); //获取系统当前时间
        var year = time.getFullYear();
        var month = time.getMonth() + 1;
        var date = time.getDate(); //系统时间月份中的日
        var day = time.getDay(); //系统时间中的星期值
        var weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
        var week = weeks[day]; //显示为星期几
        var hour = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();
        if(month < 10) {
            month = "0" + month;
        }
        if(date < 10) {
            date = "0" + date;
        }
        if(hour < 10) {
            hour = "0" + hour;
        }
        if(minutes < 10) {
            minutes = "0" + minutes;
        }
        if(seconds < 10) {
            seconds = "0" + seconds;
        }

        var newsTime = year + '-' + month + '-' + date;
        return newsTime
    }

    //下拉列表有一些默认值，覆盖
    $(".select_center_2 .SelectVal b").empty().append("二级标签（最多选择三个）");
    $(".select_center_3 .SelectVal b").empty().append("请选择");
    $(".select_center_3 .SelectVal span").empty();
    $(".select_1,.select_2,.select_3").val("");
});

// 下拉列表 必须依靠JQ 1.8， 重新定义 $ 为 jQuery 避免 低版本插件冲突
var jQuery = $.noConflict(true);
$(document).ready(function() {
    jQuery('.select_1').UCFormSelect();
    jQuery('.select_2').UCFormSelect();
    jQuery('.select_3').UCFormSelect();
    jQuery('.select_b .SelectVal b').css("display","inline-block");
    jQuery('.select_b .SelectVal span').css("display","none");
    jQuery('.select_b .SelectList dd').on('click',function () {
        jQuery('.select_b .SelectVal span').css("display","inline-block");
        jQuery('.select_b .SelectVal b').css("display","none");
    })


});