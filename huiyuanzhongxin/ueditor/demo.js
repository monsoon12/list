$(function () {
    // var iframe = document.getElementById("ueditor_0");
    // // iframe.onload=function(){
    // //     var cc = iframe.contentWindow.document,
    // //         oArticle = cc.getElementsByTagName("body")[0];
    // //     console.log(oArticle);
    // // };
    // console.log(iframe);
    // var aa = $("iframe").length;

    UE.getEditor('editor').addListener('keydown',function(editor){
        //相关操作
        var ww =  UE.getEditor('editor').document.querySelector("body.view");
        var cc=  ww.getElementsByTagName("img").length;

        for (var i = 0; i < cc ; i++){
            var aa = ww.getElementsByTagName("img")[i];
            console.log(aa);
        }
        console.log( ww);
    });
});