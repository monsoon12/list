<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>文章管理</title>
    <link rel="stylesheet" href="./lib/layui/css/layui.css">
    <script src="./lib/layui/layui.js"></script>
    <script src="js/jquery-1.10.2.js"></script>
    <link rel="stylesheet" href="css/icon/iconfont.css">
    <link rel="stylesheet" href="css/manage.css">
    <!-- 让IE8/9支持媒体查询，从而兼容栅格 -->
    <script src="https://cdn.staticfile.org/html5shiv/r29/html5.min.js"></script>
    <script src="https://cdn.staticfile.org/respond.js/1.4.2/respond.min.js"></script>
</head>
<body>

<div id="supervise">
    <div class="head-top">
        <span class="wzgl">文章管理</span>
        <div class=" layui-form fr">
            <div class="layui-inline layui-show-xs-block">
                <input type="text" name="username"  placeholder="请输入关键词" autocomplete="off" class="layui-input">
            </div>
            <div class="layui-inline layui-show-xs-block">
                <button class="layui-btn"  lay-submit="" lay-filter="sreach"><span class="iconfont icon-sousuo"></span></button>
            </div>
        </div>
    </div>
    <div class="nav layui-row">
        <ul class="nav-cloumn layui-form layui-col-md12 layui-col-space10">
            <li>
                <a class="current" href="javascript:;" name="1">全部</a>
            </li>
            <li>
                <a href="javascript:;" name="3">待审核</a>
            </li>
            <li>
                <a href="javascript:;" name="4">已发布</a>
            </li>
            <li>
                <a href="javascript:;" name="5">审核失败</a>
            </li>
            <li>
                <a href="javascript:;" name="6">草稿</a>
            </li>
            <li>
                <a href="javascript:;" name="7">已删除</a>
            </li>
            <div class="layui-col-md2 layui-col-sm2 layui-col-xs7">
                <div class="layui-input-block">
                    <select name="interest" lay-filter="aihao">
                        <option value="0"></option>
                        <option value="1">社会</option>
                        <option value="2">娱乐</option>
                        <option value="3">猎奇</option>
                    </select>
                </div>
            </div>
        </ul>
    </div>
    <div class="main">
        <ul>
            <li class="layui-row">
                <div class="centent-text fl layui-col-md7 layui-col-sm10 layui-col-xs10">
                    <div class="pic-left fl">
                        <img src="">
                    </div>
                    <div class="text-right layui-col-md8 layui-col-sm5 layui-col-xs5">
                        <div class="title_center">
                            <p class="title">曾嫌吴京太穷转嫁富商，被抛弃如今摆摊卖鱼？樊亦敏本尊现身回应 </p>
                            <span class="release-btn release">草稿</span>
                        </div>
                        <p class="time">2019-07-24    15：45：35 </p>
                    </div>
                </div>
                <div class="modify-button fr">
                    <p><span class="iconfont icon-zhidingmian prohibit"></span><button class="placement-file prohibit">置顶</button></p>
                    <p><span class="iconfont icon-xiugai"></span><button class="modify-file">修改</button></p>
                    <p><span class="iconfont icon-shanchu"></span><button class="delete-file">删除</button></p>
                </div>
            </li>

            <li class="layui-row">
                <div class="centent-text fl layui-col-md7 layui-col-sm10 layui-col-xs10">
                    <div class="pic-left fl">
                        <img src="">
                    </div>
                    <div class="text-right layui-col-md8 layui-col-sm5 layui-col-xs5">
                        <div class="title_center">
                            <p class="title">曾嫌吴京太穷转嫁富商，被抛弃如今摆摊卖鱼？樊亦敏本尊现身回应 </p>
                            <span class="release-btn pending">待审核</span>
                        </div>
                        <p class="time">2019-07-24    15：45：35 </p>
                    </div>
                </div>
                <div class="modify-button fr">
                    <p><span class="iconfont icon-zhidingmian prohibit"></span><button class="placement-file prohibit">置顶</button></p>
                    <p><span class="iconfont icon-xiugai"></span><button class="modify-file">修改</button></p>
                    <p><span class="iconfont icon-shanchu"></span><button class="delete-file">删除</button></p>
                </div>
            </li>

            <li class="layui-row">
                <div class="centent-text fl layui-col-md7 layui-col-sm10 layui-col-xs10">
                    <div class="pic-left fl">
                        <img src="">
                    </div>
                    <div class="text-right layui-col-md8 layui-col-sm5 layui-col-xs5">
                        <div class="title_center">
                            <p class="title">曾嫌吴京太穷转嫁富商，被抛弃如今摆摊卖鱼？樊亦敏本尊现身回应 </p>
                            <span class="release-btn draft">审核失败</span>
                        </div>
                        <p class="time">2019-07-24    15：45：35 </p>
                    </div>
                </div>
                <div class="modify-button fr">
                    <p><span class="iconfont icon-zhidingmian prohibit"></span><button class="placement-file prohibit">置顶</button></p>
                    <p><span class="iconfont icon-xiugai"></span><button class="modify-file">修改</button></p>
                    <p><span class="iconfont icon-shanchu"></span><button class="delete-file">删除</button></p>
                </div>
            </li>

            <li class="layui-row">
                <div class="centent-text fl layui-col-md7 layui-col-sm10 layui-col-xs10">
                    <div class="pic-left fl">
                        <img src="">
                    </div>
                    <div class="text-right layui-col-md8 layui-col-sm5 layui-col-xs5">
                        <div class="title_center">
                            <p class="title">曾嫌吴京太穷转嫁富商，被抛弃如今摆摊卖鱼？樊亦敏本尊现身回应  </p>
                            <span class="release-btn recovery">已发布</span>
                        </div>
                        <p class="time">2019-07-24    15：45：35 </p>
                    </div>
                </div>
                <div class="modify-button fr">
                    <p><span class="iconfont icon-zhidingmian"></span><button class="placement-file">置顶</button></p>
                    <p><span class="iconfont icon-xiugai prohibit"></span><button class="modify-file prohibit">修改</button></p>
                    <p><span class="iconfont icon-shanchu"></span><button class="delete-file">删除</button></p>
                </div>
            </li>

            <li class="layui-row">
                <div class="centent-text fl layui-col-md7 layui-col-sm10 layui-col-xs10">
                    <div class="pic-left fl">
                        <img src="">
                    </div>
                    <div class="text-right layui-col-md8 layui-col-sm5 layui-col-xs5">
                        <div class="title_center">
                            <p class="title">曾嫌吴京太穷转嫁富商，被抛弃如今摆摊卖鱼？樊亦敏本尊现身回应 </p>
                            <span class="release-btn oremover">已删除</span>
                        </div>
                        <p class="time">2019-07-24    15：45：35 </p>
                    </div>
                </div>
            </li>
            <li class="layui-row">
                <div class="centent-text fl layui-col-md7 layui-col-sm10 layui-col-xs10">
                    <div class="pic-left fl">
                        <img src="">
                    </div>
                    <div class="text-right layui-col-md8 layui-col-sm5 layui-col-xs5">
                        <div class="title_center">
                            <p class="title">曾嫌吴京太穷转嫁富商，被抛弃如今摆摊卖鱼？樊亦敏本尊现身回应 </p>
                            <span class="release-btn oremover">已删除</span>
                        </div>
                        <p class="time">2019-07-24    15：45：35 </p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div id="opage" class="fr"></div>
</div>
<script src="js/manage.js"></script>
</body>
</html>