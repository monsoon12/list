layui.use(['form','jquery'], function(){
    $ = layui.jquery;
    var form = layui.form;

    $(".name-input,.password-input").on("keydown",function () {
        console.log($(this).val().length);
        if ($(this).val().length > 1){
            $(this).next().css("display","block");
        }else if ($(this).val().length >= 1) {
            $(this).next().css("display","none");
        }
    });
    //监听提交
    form.on('submit(login)', function(data){
        // layer.msg(JSON.stringify(data.field),function(){
        //    location.href='index.html'
        // });
        $("form").css("display","none");
        $(".jump").css({"display":"block"});
        // setTimeout(function () {
        //     location.href='index.html'
        // },2000)
       ;
        return false;
    });
});