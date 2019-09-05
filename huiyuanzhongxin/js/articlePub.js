(function () {
    layui.use(['layer','laydate','form'], function(){
        var layer = layui.layer;
        var laydate = layui.laydate;
        var form = layui.form;
        var ue = UE.getEditor('editor');

        // var formData = new FormData($("#uploadForm")[0]);
        // formData.append("name","titlepic");
        // formData.append("name","titlepic1");

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

        form.on('select(choice)', function(data){
            var oThis = $(this).index();
            if (oThis === 0){
                $("input.classification_input").val("");
                layer.msg("请选择标签", {icon: 6,anim: 6});
                $("input.sources_input").val("");
                return false
            }
            // $("input.sources_input").val(data.value);
            // $(".choice_bottom .layui-unselect").css("color","#797979");
        });


        //缩略图 动态创建
        $(".layui-form-radio").click(function () {
            var  oThis =$(this).index();
            switch (true) {
                case oThis === 5:
                    var aLength = $("#sl-pic .pic-file").length;
                    // console.log(aLength);
                    if (aLength >= 3){
                        $(".addpic5").remove();
                        return false
                    }
                    for (var i = 3; i< 5; i++){
                        $("#sl-pic .pic-content").append("<label class=\"ormv addpic"+i+"\" for=\"biaoti-pic-"+i+"\"><div class=\"pic-file pic-"+i+" \"><span class=\"iconfont icon-tupian\"></span></div></label>");
                    }
                    break;
                case oThis === 7:
                    var aLength = $("#sl-pic .pic-file").length;
                    // console.log(aLength);
                    for (var i = 3; i< 6; i++){
                        $(".addpic"+i+"").remove();
                        $("#sl-pic .pic-content").append("<label class=\"ormv addpic"+i+"\" for=\"biaoti-pic-"+i+"\"><div class=\"pic-file pic-"+i+" \"><span class=\"iconfont icon-tupian\"></span></div></label>");
                    }
                    break;
                default:
                    for (var i = 3; i< 6; i++){
                        $(".addpic"+i).remove();
                    }
            }
        });

        //定义空数组 为提交数据上传做准备
        var oPhonePic1 = new Array([]);     //储存对象
        var oPhonePic2 = new Array([]);     //储存图片名

        //标题图片
        $("#biaoti-pic-1").on("change",function () {
            var myDate = new Date();
            var myFullYear =  myDate.getFullYear(); //获取完整的年份(4位)
            var myMonth = myDate.getMonth(); //获取当前月份(0-11,0代表1月)
            var myHours =  myDate.getHours(); //获取当前小时数(0-23)
            var myMinutes = myDate.getMinutes(); //获取当前分钟数(0-59)
            var mySeconds = myDate.getSeconds(); //获取当前秒数(0-59)
            var myMilliseconds = myDate.getMilliseconds(); //获取当前毫秒数(0-999)

            var file = $(this).get(0).files[0];
            var oNamePic = file.name;
            var oNamePic2 = oNamePic.indexOf(".");
            var PicSuffix = oNamePic.slice(oNamePic2);  //获取上传图片的后缀
            //上传的文件对象 添加到数组储存
            oPhonePic1[0] = $(this).get(0).files[0];
            //以上传时间作为图片名
            oPhonePic2[0] = myFullYear+ "0"+ myMonth + "0"+ myHours + "0"+myMinutes + "0"+ mySeconds + "0"+ myMilliseconds + PicSuffix;
            if(file){
                //读取图片数据
                var reader = new FileReader();
                reader.onload = function (e) {
                    var dataImg = e.target.result;     //base64 地址
                    //加载图片获取图片真实宽度和高度
                    var image = new Image();
                    image.onload=function(){
                        var width = image.width;
                        var height = image.height;
                        if (width < height) {
                            $(".pic-0").empty().append('<img src="'+dataImg+'" style="height: 100%;">');
                            layer.msg('本地上传成功');
                        }else {
                            $(".pic-0").empty().append('<img src="'+dataImg+'" style = "width: 100%;margin-top: 17px;">');
                            layer.msg('本地上传成功');
                        }

                        console.log(width+'======'+height+"====="+file.size);
                        console.log(oPhonePic2[0]);
                    };
                    image.src= dataImg;
                };
                reader.readAsDataURL(file);
            }
        });

        //缩略图1
        $("#biaoti-pic-2").on("change",function () {
            var myDate = new Date();
            var myFullYear =  myDate.getFullYear(); //获取完整的年份(4位)
            var myMonth = myDate.getMonth(); //获取当前月份(0-11,0代表1月)
            var myHours =  myDate.getHours(); //获取当前小时数(0-23)
            var myMinutes = myDate.getMinutes(); //获取当前分钟数(0-59)
            var mySeconds = myDate.getSeconds(); //获取当前秒数(0-59)
            var myMilliseconds = myDate.getMilliseconds(); //获取当前毫秒数(0-999)

            var file = $(this).get(0).files[0];
            var oNamePic = file.name;                   // 文件名
            var oNamePic2 = oNamePic.indexOf(".");
            var PicSuffix = oNamePic.slice(oNamePic2);  //获取上传图片的后缀
            //上传的文件对象 添加到数组储存
            oPhonePic1[1] = file;
            //以上传时间作为图片名
            oPhonePic2[1] = myFullYear+ "0"+ myMonth + "0"+ myHours + "0"+myMinutes + "0"+ mySeconds + "0"+ myMilliseconds + PicSuffix;
            if(file){
                //读取图片数据
                var reader = new FileReader();
                reader.onload = function (e) {
                    var dataImg = e.target.result;     //base64 地址
                    // console.log(dataImg);
                    //加载图片获取图片真实宽度和高度
                    var image = new Image();
                    image.onload=function(){
                        var width = image.width;
                        var height = image.height;

                        if (width < height) {
                            $(".pic-1").empty().append('<img src="'+dataImg+'" style="height: 100%;">');
                            layer.msg('本地上传成功');
                        }else {
                            $(".pic-1").empty().append('<img src="'+dataImg+'" style = "width: 100%;margin-top: 17px;">');
                            layer.msg('本地上传成功');
                        }

                        console.log(width+'======'+height+"====="+file.size);
                        console.log(oPhonePic2[1]);
                    };
                    image.src= dataImg;
                };
                reader.readAsDataURL(file);
            }
        });

        //缩略图2
        $("#biaoti-pic-3").on("change",function (e) {
            var myDate = new Date();
            var myFullYear =  myDate.getFullYear(); //获取完整的年份(4位)
            var myMonth = myDate.getMonth(); //获取当前月份(0-11,0代表1月)
            var myHours =  myDate.getHours(); //获取当前小时数(0-23)
            var myMinutes = myDate.getMinutes(); //获取当前分钟数(0-59)
            var mySeconds = myDate.getSeconds(); //获取当前秒数(0-59)
            var myMilliseconds = myDate.getMilliseconds(); //获取当前毫秒数(0-999)

            var file = $(this).get(0).files[0];
            var oNamePic = file.name;                   // 文件名
            var oNamePic2 = oNamePic.indexOf(".");
            var PicSuffix = oNamePic.slice(oNamePic2);  //获取上传图片的后缀
            //上传的文件对象 添加到数组储存
            oPhonePic1[2] = file;
            //以上传时间作为图片名
            oPhonePic2[2] = myFullYear+ "0"+ myMonth + "0"+ myHours + "0"+myMinutes + "0"+ mySeconds + "0"+ myMilliseconds + PicSuffix;
            if(file){
                //读取图片数据
                var reader = new FileReader();
                reader.onload = function (e) {
                    var dataImg = e.target.result;     //base64 地址
                    // console.log(dataImg);
                    //加载图片获取图片真实宽度和高度
                    var image = new Image();
                    image.onload=function(){
                        var width = image.width;
                        var height = image.height;
                        if (width < height) {
                            $(".pic-3").empty().append('<img src="'+dataImg+'" style="height: 100%;">');
                            layer.msg('本地上传成功');
                        }else {
                            $(".pic-3").empty().append('<img src="'+dataImg+'" style = "width: 100%;margin-top: 17px;">');
                            layer.msg('本地上传成功');
                        }

                        console.log(width+'======'+height+"====="+file.size);
                        console.log(oPhonePic2[2]);
                    };
                    image.src= dataImg;
                };
                reader.readAsDataURL(file);
            }
        });

        //缩略图3
        $("#biaoti-pic-4").on("change",function (e) {
            var myDate = new Date();
            var myFullYear =  myDate.getFullYear(); //获取完整的年份(4位)
            var myMonth = myDate.getMonth(); //获取当前月份(0-11,0代表1月)
            var myHours =  myDate.getHours(); //获取当前小时数(0-23)
            var myMinutes = myDate.getMinutes(); //获取当前分钟数(0-59)
            var mySeconds = myDate.getSeconds(); //获取当前秒数(0-59)
            var myMilliseconds = myDate.getMilliseconds(); //获取当前毫秒数(0-999)

            var file = $(this).get(0).files[0];
            var oNamePic = file.name;                   // 文件名
            var oNamePic2 = oNamePic.indexOf(".");
            var PicSuffix = oNamePic.slice(oNamePic2);  //获取上传图片的后缀
            //上传的文件对象 添加到数组储存
            oPhonePic1[3] = file;
            //以上传时间作为图片名
            oPhonePic2[3] = myFullYear+ "0"+ myMonth + "0"+ myHours + "0"+myMinutes + "0"+ mySeconds + "0"+ myMilliseconds + PicSuffix;
            if(file){
                //读取图片数据
                var reader = new FileReader();
                reader.onload = function (e) {
                    var dataImg = e.target.result;     //base64 地址
                    // console.log(dataImg);
                    //加载图片获取图片真实宽度和高度
                    var image = new Image();
                    image.onload=function(){
                        var width = image.width;
                        var height = image.height;
                        if (width < height) {
                            $(".pic-4").empty().append('<img src="'+dataImg+'" style="height: 100%;">');
                            layer.msg('本地上传成功');
                        }else {
                            $(".pic-4").empty().append('<img src="'+dataImg+'" style = "width: 100%;margin-top: 17px;">');
                            layer.msg('本地上传成功');
                        }

                        console.log(width+'======'+height+"====="+file.size);
                        console.log(oPhonePic2[3]);
                    };
                    image.src= dataImg;
                };
                reader.readAsDataURL(file);
            }
        });

        //缩略图3
        $("#biaoti-pic-5").on("change",function (e) {
            var myDate = new Date();
            var myFullYear =  myDate.getFullYear(); //获取完整的年份(4位)
            var myMonth = myDate.getMonth(); //获取当前月份(0-11,0代表1月)
            var myHours =  myDate.getHours(); //获取当前小时数(0-23)
            var myMinutes = myDate.getMinutes(); //获取当前分钟数(0-59)
            var mySeconds = myDate.getSeconds(); //获取当前秒数(0-59)
            var myMilliseconds = myDate.getMilliseconds(); //获取当前毫秒数(0-999)

            var file = $(this).get(0).files[0];
            var oNamePic = file.name;                   // 文件名
            var oNamePic2 = oNamePic.indexOf(".");
            var PicSuffix = oNamePic.slice(oNamePic2);  //获取上传图片的后缀
            //上传的文件对象 添加到数组储存
            oPhonePic1[4] = file;
            //以上传时间作为图片名
            oPhonePic2[4] = myFullYear+ "0"+ myMonth + "0"+ myHours + "0"+myMinutes + "0"+ mySeconds + "0"+ myMilliseconds + PicSuffix;
            if(file){
                //读取图片数据
                var reader = new FileReader();
                reader.onload = function (e) {
                    var dataImg = e.target.result;     //base64 地址
                    // console.log(dataImg);
                    //加载图片获取图片真实宽度和高度  判断竖图还是横图
                    var image = new Image();
                    image.onload=function(){
                        var width = image.width;
                        var height = image.height;
                        if (width < height) {
                            $(".pic-5").empty().append('<img src="'+dataImg+'" style="height: 100%;">');
                            layer.msg('本地上传成功');
                        }else {
                            $(".pic-5").empty().append('<img src="'+dataImg+'" style = "width: 100%;margin-top: 17px;">');
                            layer.msg('本地上传成功');
                        }

                        console.log(width+'======'+height+"====="+file.size);
                        console.log(oPhonePic2[4]);
                    };
                    image.src= dataImg;
                };
                reader.readAsDataURL(file);
            }
        });


        var oForm = document.getElementById('form_data');
        //发布文章按钮
        $(".release-btn").click(function (event) {
            event.preventDefault();
            console.log(oPhonePic1);
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

                //标题图片没上传时
                if (oPhonePic1[0] == "") {
                    layer.msg('没有上传标题图片');
                    return false;
                }

                for (var key in oPhonePic1) {
                    if (oPhonePic1[key] !== undefined) {
                        var aUrl1 = "https://p.ddjk.com/test/"+ run()+ '/'+oPhonePic2[key];  // 腾讯云的链接
                        $(".pic_"+key).val(aUrl1);        // 传输数据给input, 提交时传给后台
                        console.log( $(".pic_"+key).val());

                        //下面是上传的部分
                        cos.putObject({
                            Bucket: 'jun4-com-1251443711',
                            Region: 'ap-shanghai',
                            Key: 'test/' + run() + '/' + oPhonePic2[key],
                            StorageClass: 'STANDARD',
                            Body: oPhonePic1[key], // 上传文件对象   必须属于Blob对象
                            onProgress: function (progressData) {
                                console.log("progressData", JSON.stringify(progressData));
                            }
                        }, function (err, data) {
                            console.log(err || data);
                            if (data.statusCode == 200) {
                                console.log("上传成功");
                                layer.msg('发布成功');
                                oForm.submit();
                            } else {
                                oForm.submit();
                            }
                        });
                    }
                }


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



    });

})();