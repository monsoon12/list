<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,user-scalable=yes, minimum-scale=0.4, initial-scale=0.8,target-densitydpi=low-dpi" />
    <link rel="stylesheet" href="css/Plugin/font.css">
    <link rel="stylesheet" href="css/Plugin/xadmin.css">
    <link rel="stylesheet" href="css/backstage.css">
    <link rel="stylesheet" href="css/icon/iconfont.css">
    <script src="lib/layui/layui.js" charset="utf-8"></script>
    <!--云存储插件-->
    <script src="js/Plugin/cos-js-sdk-v5.js"></script>
    <!--<script src="http://g.alicdn.com/kissy/k/1.4.8/seed-min.js"></script>-->
    <script src="http://libs.baidu.com/jquery/1.8.3/jquery.min.js"></script>
    <!--<script src="js/seed-min.js"></script>-->
    <title>发布</title>
    <!-- 让IE8/9支持媒体查询，从而兼容栅格 -->
    <script src="https://cdn.staticfile.org/html5shiv/r29/html5.min.js"></script>
    <script src="https://cdn.staticfile.org/respond.js/1.4.2/respond.min.js"></script>
    <!--文本编辑器-->
    <script type="text/javascript" charset="utf-8" src="ueditor/ueditor.config.js"></script>
    <script type="text/javascript" charset="utf-8" src="ueditor/ueditor.all.min.js"> </script>

</head>
<body>
<form id="form_data" class="layui-form" method="POST" enctype="multipart/form-data" action="http://coop.kaijia.com:98/e/huiyuanzhongxin/release.php" >
    <div class="layui-row layui-col-space15" id="articlepub">
        <ul class="content articlepub_ul">
            <li>
                <span class="otitle biaoti">栏目</span>
                <div class="acolumn layui-col-md8  layui-col-sm10 layui-col-xs11">
                    <div class="select inbock">
                        <div class="layui-input-block choice_bottom">
                            <select id="classid" name="classid" lay-filter="choice">
                                <option value=""></option>
                                <option value="旅游">旅游</option>
                                <option value="社会">社会</option>
                                <option value="娱乐">娱乐</option>
                                <option value="奇闻">奇闻</option>
                            </select>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <span class="biaoti otitle">标题</span><input type="text" class="oinput title layui-col-md8 layui-col-sm10 layui-col-xs11" name="title" autocomplete="off">
            </li>
            <li class="fu">
                <span class="otitle">副标题1</span><input type="text"  class="oinput ftitle layui-col-md8 layui-col-sm10 layui-col-xs11" name="ftitle" autocomplete="off">
            </li>
            <li class="fu">
                <span class="otitle">副标题2</span><input type="text"  class="oinput ftitle2 layui-col-md8 layui-col-sm10 layui-col-xs11" name="ftitle2" autocomplete="off">
            </li>
            <li class="synopsis-li">
                <span class="content-synopsis">内容简介</span><textarea class="oinput synopsis smalltext layui-col-md8 layui-col-sm10 layui-col-xs11" name="smalltext" autocomplete="off"></textarea>
            </li>
            <li id="news">
                <span class="content-synopsis">新闻正文</span>
                <div class="zhengwen layui-col-md8 layui-col-sm10 layui-col-xs11">

                    <div class="oNewstext">
                        <script id="editor" type="text/plain" style="width:524px;height:500px;"></script>
                        <script type="text/javascript"></script>
                    </div>
                </div>
            </li>

            <li class="bt-pic text_title">
                <span class="pic_title">标题图片</span>
                <div class="pic-content title-pic">
                    <label for="biaoti-pic-1">
                        <div class="pic-file pic-0">
                            <span class="iconfont icon-tupian"></span>
                        </div>
                    </label>
                    <input type="file" id="biaoti-pic-1" class="titlepic">
                    <input type="text" name="titlepic" id="titlepic"   class="pic_0"  style="display: none">
                </div>
            </li>
            <li class="bt-pic" id="sl-pic">
                <span class="biaoti">缩略图</span>
                <div class="pic-content">
                    <label for="biaoti-pic-2" class="biaoti-pic">
                        <div class="pic-file pic-1 pic-sl">
                            <span class="iconfont icon-tupian"></span>
                        </div>
                    </label>
                    <input type="file" id="biaoti-pic-2" class="titlepic1">
                    <input type="text" name="titlepic1" id="titlepic1"  class="pic_1"  style="display: none">

                    <input type="file" id="biaoti-pic-3">
                    <input type="text" name="titlepic1" id="titlepic2"  class="pic_2"  style="display: none">

                    <input type="file" id="biaoti-pic-4">
                    <input type="text" name="titlepic1" id="titlepic3"  class="pic_3"  style="display: none">

                    <input type="file" id="biaoti-pic-5">
                    <input type="text" name="titlepic1" id="titlepic4"  class="pic_4"  style="display: none">
                </div>
            </li>
            <li class="list_content">
                <span class="list">列表样式</span>
                <div class="layui-form-item">
                    <div class="layui-input-block">
                        <input id="radio-1"  type="radio" name="special" value="0" title="单图" checked>
                        <input id="radio-2"  type="radio" name="special" value="1" title="单图（大）">
                        <input id="radio-3"  type="radio" name="special" value="1" title="三图" >
                        <input id="radio-4"  type="radio" name="special" value="1" title="四图" >
                        <input id="radio-5"  type="radio" name="special" value="1" title="自动" >
                    </div>
                </div>

            </li>
            <li>
                <span class="biaoti otitle">域名</span><input type="text" class="oinput domain layui-col-md8 layui-col-sm10 layui-col-xs11" autocomplete="off">
            </li>
            <li>
                <span class="biaoti otitle">频道</span><input type="text" class="oinput channel layui-col-md8 layui-col-sm10 layui-col-xs11" autocomplete="off">
            </li>
            <li>
                <span class="otitle">wap内转</span><input type="text" class="oinput inturn_wap layui-col-md8 layui-col-sm10 layui-col-xs11" autocomplete="off">
            </li>
            <li>
                <span class="pc_content"> P C内转</span><input type="text" class="oinput inturn_pc layui-col-md8 layui-col-sm10 layui-col-xs11" autocomplete="off">
            </li>
            <li>
                <span class="otitle">信息来源</span>
                <div class="sources_I layui-col-md8  layui-col-sm10 layui-col-xs11">
                    <div class="sources inbock">
                        <input type="text" class="sources_input">
                    </div>
                    <div class="select inbock">
                        <div class="layui-input-block choice_bottom">
                            <select id="classification" name="classification" lay-filter="choice">
                                <option value=""></option>
                                <option value="旅游">旅游</option>
                                <option value="社会">社会</option>
                                <option value="娱乐">娱乐</option>
                                <option value="奇闻">奇闻</option>
                            </select>
                        </div>
                    </div>
                </div>
            </li>

            <li>
                <span class="pic_title">发布时间</span>
                <div class="layui-col-md8 time-level">
                    <div class="layui-inline time-input time-input-1 ">
                        <span class="icon-data"></span>
                        <input type="text" class="layui-input layui-col-md12" id="time1" placeholder="请选择日期" name="newstime1"  autocomplete="off">
                    </div>

                    <div class="layui-inline time-input time-input-2">
                        <span class="icon-data"></span>
                        <input type="text" class="layui-input" id="time2" placeholder="请选择具体时间" name="newstime2"  autocomplete="off">
                    </div>
                </div>
            </li>
            <li class="last_li">
                <div class="btn-bottom layui-col-md12">
                    <div class="layui-col-md6 layui-col-md-offset6">
                        <button type="submit" class="release-btn layui-col-md3 layui-col-sm12 layui-col-xs12">发布</button>
                        <button type="submit" class="draft-btn layui-col-md3 layui-col-sm12 layui-col-xs12">存草稿</button>
                        <button type="reset" class="cancel-btn layui-col-md3 layui-col-sm12 layui-col-xs12">取消</button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</form>
    <script type="text/javascript" src="js/articlePub.js"></script>


</body>
</html>