<?php
require("../../class/connect.php");
require("../../class/db_sql.php");
require("../../class/q_functions.php");
require("../../member/class/user.php");
require("../../data/dbcache/MemberLevel.php");
$link=db_connect();
$empire=new mysqlquery();
$editor=1;
eCheckCloseMods('member');//关闭模块
//是否登陆
$user=islogin();
$r=ReturnUserInfo($user[userid]);
$addr=$empire->fetch1("select * from {$dbtbpre}enewsmemberadd where userid='".$user[userid]."' limit 1");
//头像
$userpic=$addr['userpic']?$addr['userpic']:$public_r[newsurl].'e/data/images/nouserpic.gif';
//有效期
$userdate=0;
if($r[userdate])
{
    $userdate=$r[userdate]-time();
    if($userdate<=0)
    {
        $userdate=0;
    }
    else
    {
        $userdate=round($userdate/(24*3600));
    }
}
//是否有短消息
$havemsg="无";
if($user[havemsg])
{
    $havemsg="<a href='".$public_r['newsurl']."e/member/msg' target=_blank><font color=red>您有新消息</font></a>";
}
//注册时间
$registertime=eReturnMemberRegtime($r['registertime'],"Y-m-d H:i:s");
//导入模板
//require(ECMS_PATH.'e/template/member/cp.php');
db_close();
$empire=null;
?>
<!doctype html>
<html class="x-admin-sm">
    <head>
        <meta charset="UTF-8">
        <title>会员中心</title>
        <meta name="renderer" content="webkit|ie-comp|ie-stand">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width,user-scalable=yes, minimum-scale=0.4, initial-scale=0.8,target-densitydpi=low-dpi" />
        <meta http-equiv="Cache-Control" content="no-siteapp" />
        <link rel="stylesheet" href="css/Plugin/font.css">
        <link rel="stylesheet" href="css/Plugin/xadmin.css">
        <link rel="stylesheet" href="css/Plugin/theme958.min.css">
        <link rel="stylesheet" href="css/icon/iconfont.css">
         <link rel="stylesheet" href="./css/backstage.css">
        <script src="./lib/layui/layui.js" charset="utf-8"></script>
        <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
        <!-- 让IE8/9支持媒体查询，从而兼容栅格 -->
        <script src="https://cdn.staticfile.org/html5shiv/r29/html5.min.js"></script>
        <script src="https://cdn.staticfile.org/respond.js/1.4.2/respond.min.js"></script>
        <script>
            // 是否开启刷新记忆tab功能,开启 顶部导航条刷新不会消失
            var is_remember = false;
        </script>

    </head>
    <body class="index">
        <!-- 顶部开始 -->
        <div class="container">
            <div class="logo">
                <a href="./index.php"><img class="pic" src="images/logo.png"></a></div>
            <div class="left_open">
                <a><i title="展开左侧栏" class="iconfont">&#xe699;</i></a>
            </div>

            <ul class="layui-nav right" lay-filter="">
                <li class="layui-nav-item">
                    <a href="javascript:;">
                    常见问题
                    <i class="iconfont icon-wenhao"></i>
                </a>
                </li>
                <li class="layui-nav-item">
                    <a href="javascript:;" id="name_nav"><?=$user[username]?></a>
                    <dl class="layui-nav-child">
                        <!-- 二级菜单 -->
                        <dd>
                            <a onclick="xadmin.open('个人信息','account.php')">个人信息</a>
                        </dd>
                        <dd>
<!--                            <a href="./login.php">退出</a>-->
                            <a href="../doaction.php?enews=exit" onclick="return confirm('确认要退出?');">退出</a>
                        </dd>
                    </dl>
                </li>
                <!--<li class="layui-nav-item to-index">-->
                    <!--<a href="/">前台首页</a>-->
                <!--</li>-->
            </ul>
        </div>
        <!-- 顶部结束 -->
        <!-- 中部开始 -->
        <!-- 左侧菜单开始 -->
        <div class="left-nav">
            <div id="side-nav">
                <ul id="nav">
                    <li>
                        <!--onclick="xadmin.add_tab('首页','welcome.html')"-->
                        <a href="javascript:;" class="shouye"  >
                            <i class="iconfont left-nav-li" lay-tips="首页">
                                <img src="images/u762.png">
                            </i>
                            <cite>首页</cite>
                            <!--<i class="iconfont nav_right">&#xe697;</i>-->
                        </a>
                    </li>

                    <li>
                        <a class="news-content" href="javascript:;">
                            <i class="iconfont left-nav-li" lay-tips="发布内容">
                                <img src="images/u758.png">
                            </i>
                            <cite>发布内容</cite>
                            <i class="iconfont nav_right">&#xe697;</i>
                        </a>
                        <ul class="sub-menu">
                            <li>
                                <a class="fabu" onclick="xadmin.add_tab('发布文章','articlePub01.php')">
                                    <i class="iconfont">&#xe6a7;</i>
                                    <cite>发布文章</cite></a>
                            </li>
                            <li>
                                <a class="suoping" onclick="xadmin.add_tab('发布锁屏','screen.php')">
                                    <i class="iconfont">&#xe6a7;</i>
                                    <cite>发布锁屏</cite></a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a class="news-manage" href="javascript:;">
                            <i class="iconfont left-nav-li" lay-tips="内容管理">&#xe723;</i>
                            <cite>内容管理</cite>
                            <i class="iconfont nav_right">&#xe697;</i></a>
                        <ul class="sub-menu">
                            <li>
                                <a class="wz-manage" onclick="xadmin.add_tab('文章管理','manage.php')">
                                    <i class="iconfont">&#xe6a7;</i>
                                    <cite>文章管理</cite>
                                </a>
                            </li>
                            <li>
                                <a class="sp-manage" onclick="xadmin.add_tab('锁屏管理','screen-run.php')">
                                    <i class="iconfont">&#xe6a7;</i>
                                    <cite>锁屏管理</cite>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a class="data-manage" href="javascript:;" onclick="xadmin.add_tab('数据统计','data_tatistics.php')">
                            <i class="iconfont left-nav-li icon-shujutongji" lay-tips="数据统计"></i>
                            <cite>数据统计</cite>
                        </a>
                    </li>
                    <li>
                        <a class="personal" href="javascript:;">
                            <i class="iconfont left-nav-li" lay-tips="个人中心">&#xe726;</i>
                            <cite>个人中心</cite>
                            <i class="iconfont nav_right">&#xe697;</i></a>
                        <ul class="sub-menu">
                            <li>
                                <a class="information" onclick="xadmin.add_tab('账号信息','account.php')">
                                    <i class="iconfont">&#xe6a7;</i>
                                    <cite>账号信息</cite></a>
                            </li>
                            <!--<li>-->
                                <!--<a class="user-btn" onclick="xadmin.add_tab('用户管理','whole.html')">-->
                                    <!--<i class="iconfont">&#xe6a7;</i>-->
                                    <!--<cite>用户管理</cite></a>-->
                            <!--</li>-->

                        </ul>
                    </li>

                </ul>
            </div>
        </div>
        <!-- <div class="x-slide_left"></div> -->
        <!-- 左侧菜单结束 -->
        <!-- 右侧主体开始 -->
        <div class="page-content">
            <div class="layui-tab tab" lay-filter="xbs_tab" lay-allowclose="false">
                <ul class="layui-tab-title">
                    <li class="home">
                        <span class="iconfont icon-shouye"></span>我的首页</li></ul>
                <div class="layui-unselect layui-form-select layui-form-selected" id="tab_right">
                    <dl>
                        <dd data-type="this">关闭当前</dd>
                        <dd data-type="other">关闭其它</dd>
                        <dd data-type="all">关闭全部</dd></dl>
                </div>
                <div class="layui-tab-content">
                    <div class="layui-tab-item layui-show">
                        <iframe src='./welcome.php' frameborder="0" scrolling="yes" class="x-iframe"></iframe>
                    </div>
                </div>
                <div id="tab_show"></div>
            </div>
        </div>
        <div class="page-content-bg"></div>
        <style id="theme_style"></style>
        <!-- 右侧主体结束 -->
        <!-- 中部结束 -->
        <script type="text/javascript" src="js/Plugin/xadmin.js"></script>
        <script src="js/index.js"></script>

    </body>

</html>