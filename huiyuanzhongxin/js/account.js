layui.use(['form', 'layer','upload'], function(){
    var form = layui.form,
        layer = layui.layer,
        upload = layui.upload;

    var oPic = [];
    //点击修改资料按钮，显示 确认与取消 按钮
    $(".modify").click(function () {
        var oNameText = $(".name_user").text();
        $(".name_input").attr("value",oNameText);
        oPic.push($("img.portrait").attr("src"));
        console.log(oPic);
        $(this).hide();
        $(".name_user").hide();
        $(".define,.cancel,.portrait-title,.name_input").show();
    });


    //点击确认按钮
    $(".define").click(function () {
        var oNameInput =  $(".name_input").val();
        $(".name_user").text(oNameInput);
        $(".define,.cancel,.portrait-title,.name_input").hide();
        $(".modify,.name_user").show();
        oPic[0] = $("img.portrait").attr("src");
        console.log(oPic);
        layer.msg('已修改');
    });
    //点击取消按钮
    $(".cancel").click(function () {
        var oSrc = $("img.portrait").attr("src");
        if ( oSrc != oPic[0]) {
            $("img.portrait").attr("src",oPic[0]);
        }
        console.log(oPic);
        $(".modify,.name_user").show();
        $(".define,.cancel,.portrait-title,#L_username").hide();
    });
    //修改登录密码按钮
    $("i.btn-xg").click(function () {
        $(this).prev().hide();
        $(this).next().show();
        $(this).siblings("div").show();
        $(this).hide();
        if ($(this).is(".btn-xg-1")){
            var oEmail = $("#email").text();
            console.log(oEmail);
            $("#mailbox").attr("value",oEmail);
        }
    });


    //提交按钮
    $(".btn-tj").click(function () {
        $(this).prev().show();
        $(this).next().hide();
        $(this).siblings("div").hide();
        $(this).siblings("span").show();
        $(this).hide();
        if ($(this).is(".btn-tj-1")){
            var oMailbox = $("#mailbox").val();
            $("#email").text(oMailbox);
        }
        layer.msg('已修改');
    });



    //上传图片
    $("#pic").on("change", function() {
        var filePath = $(this).val(); //读取图片路径
        var fr = new FileReader(); //创建new FileReader()对象
        var imgObj = this.files[0]; //获取图片
        fr.readAsDataURL(imgObj); //将图片读取为DataURL
        fr.onload =function(){
            if(filePath.indexOf("jpg") != -1 || filePath.indexOf("JPG") != -1 || filePath.indexOf("PNG") != -1 || filePath.indexOf("png") != -1 || filePath.indexOf("gif") != -1 || filePath.indexOf("GIF") != -1) {
                if (imgObj.size > 500000){
                    return false
                }
                $(".portrait").attr("src",fr.result);
                $(".define").click(function () {
                    layer.alert("上传成功", {icon: 1});
                })
            } else {
                layer.alert("超过5M了", {icon: 6});
                return false
            }
        };

    });

    var oHeigth = $(document).height();
    $("#adduser").css("height",(oHeigth-15)+"px");
    $(".layui-row").css("height",(oHeigth-135)+"px");







        //执行实例
        // var uploadInst = upload.render({
        //     elem: '#test1' //绑定元素
        //     ,url: 'http://193.112.139.105:98/e/huiyuanzhongxin/release.php?axxz' //上传接口
        //     ,accept: 'jpg' //允许上传的文件类型
        //     ,size: 5550 //最大允许上传的文件大小
        //     ,done: function(res){
        //         //上传完毕回调
        //     }
        //     ,error: function(aa){
        //         //请求异常回调
        //         console.log(aa);
        //     }
        // });
        //自定义验证规则
        form.verify({
            nikename: function(value) {
                if (value.length < 5) {
                    return '昵称至少得5个字符啊';
                }
            },
            pass: [/(.+){6,12}$/, '密码必须6到12位'],
            repass: function(value) {
                if ($('#L_pass').val() != $('#L_repass').val()) {
                    return '两次密码不一致';
                }
            }
        });

        //监听提交
        form.on('submit(add)',
            function(data) {
                console.log(data);
                $.ajax({
                    url:'http://193.112.139.105:98/e/huiyuanzhongxin/release.php?axxz',
                    type:'post',
                    data:{
                        "title":"123",
                        "ftitle":"1",
                        "ftitle2":"1",
                        "smalltext":"1",
                        "newstext":"1",
                        "titlepic":"blob:http://193.112.139.105:98/a5a2ddf6-2f4a-4d7c-994d-e8c4ea10dc0b",
                        "titlepic1":"blob:http://193.112.139.105:98/a5a2ddf6-2f4a-4d7c-994d-e8c4ea10dc0b",
                        "special":"1",
                        "domain":"1",
                        "channel":"1",
                        "inturn_wap":"1",
                        "inturn_pc":"1",
                        "sources":"1",
                        "newstime":"1565232418",
                    },   //拼装json数组
                    // data:$("#fm").serialize(),   //直接从form表单中取出数组
                    dataType:"JSON",
                    success:function(msg){
                        console.log("chenggong")
                    },
                    error:function(){
                        console.log("ERROR");
                    }
                });
                //发异步，把数据提交给php
                layer.alert("增加成功", {
                        icon: 6
                    },
                    function() {
                        //关闭当前frame
                        xadmin.close();

                        // 可以对父窗口进行刷新
                        xadmin.father_reload();
                    });
                return false;

            });
    });