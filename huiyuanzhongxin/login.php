<!doctype html>
<html  class="x-admin-sm">
<head>
	<meta charset="UTF-8">
	<title>后台登录</title>
	<meta name="renderer" content="webkit|ie-comp|ie-stand">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,user-scalable=yes, minimum-scale=0.4, initial-scale=0.8,target-densitydpi=low-dpi" />
    <meta http-equiv="Cache-Control" content="no-siteapp" />
    <!--图标-->
    <link rel="stylesheet" href="css/icon/iconfont.css">
    <!--样式-->
    <link rel="stylesheet" href="css/Plugin/login.css">
    <link rel="stylesheet" href="css/Plugin/xadmin.css">
    <script type="text/javascript" src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>

    <script src="lib/layui/layui.js" charset="utf-8"></script>
    <!-- 让IE8/9支持媒体查询，从而兼容栅格 -->
    <script src="https://cdn.staticfile.org/html5shiv/r29/html5.min.js"></script>
    <script src="https://cdn.staticfile.org/respond.js/1.4.2/respond.min.js"></script>

</head>
<body class="login-bg">

    <div class="login layui-anim layui-anim-up">
        <div class="message"></div>
        <div class="jump">
            <p class="text-tip success-tip"><span class="iconfont icon-xiaoxi-chenggong"></span>登录成功</p>
            <p class="text-tip"> <a href="index.html">如果您的浏览器没有自动跳转，请点击这里</a></p>

        </div>
        
        <form method="post" class="layui-form" action="e/member/doaction.php">
            <div class="tip">用户名或密码无效</div>
			<input type="hidden" name="enews" value="login"  autocomplete="off">
            <div class="font-icon">
                <input name="username" placeholder="用户名"  type="text" lay-verify="required" class="layui-input name-input"  autocomplete="off">
                <span class="iconfont icon-quangou"></span>
            </div>
            <div class="font-icon">
                <input name="password" lay-verify="required" placeholder="密码"  type="password" class="layui-input password-input"  autocomplete="off">
                <span class="iconfont icon-quangou"></span>
            </div>
            <input value="登录" lay-submit lay-filter="login" style="width:100%;" type="submit">
        </form>
    </div>
    <script src="js/login.js"></script>
    <!--<script>-->

    <!--</script>-->
    <!-- 底部结束 -->
</body>
</html>