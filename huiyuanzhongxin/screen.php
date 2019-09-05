<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,user-scalable=yes, minimum-scale=0.4, initial-scale=0.8,target-densitydpi=low-dpi" />
    <!--图标-->
    <link rel="stylesheet" href="css/Plugin/font.css">
    <link rel="stylesheet" href="css/icon/iconfont.css">
    <!--下拉列表-->
    <link rel="stylesheet" href="css/UCSelect.css">
    <!--页面样式-->
    <link rel="stylesheet" href="lib/layui/css/layui.css">
    <link rel="stylesheet" href="css/screen.css">
    <!--云存储插件-->
    <script src="js/Plugin/cos-js-sdk-v5.js"></script>
    <!--裁图-->
    <link rel="stylesheet" href="css/Plugin/cropper.css">
    <script src="https://p.yigouu.com/common/js/jquery-1.11.0.min.js"></script>
    <script src="js/Plugin/cropper.js"></script>
    <script src="lib/layui/layui.js" charset="utf-8"></script>
    <!-- 让IE8/9支持媒体查询，从而兼容栅格 -->
    <script src="https://cdn.staticfile.org/html5shiv/r29/html5.min.js"></script>
    <script src="https://cdn.staticfile.org/respond.js/1.4.2/respond.min.js"></script>
    <title>锁屏</title>
</head>
<body>

<form id="addform" class="layui-form" method="POST" enctype="multipart/form-data" action="http://193.112.139.105:98/e/huiyuanzhongxin/release.php" >


    <div class="layui-row" id="articlepub">
        <ul class="layui-col-space26 articlepub_ul" id="screen">
            <li class="pic_imgage">
                <div class="pic-screen">
                    <span class="file_span otitle">锁屏图</span>
                    <label for="biaoti-pic-1">
                        <div class="pic-file pic-screen-1">
                            <span class="iconfont icon-tupian"></span>
                        </div>
                    </label>
                    <input type="file" id="biaoti-pic-1">
                    <input type="text" name="lock_screen" id="lock_screen" class="pic_0" style="display: none">
                </div>
                <div class="pic-screen">
                    <span class="file_span otitle">原始图片</span>
                    <label for="biaoti-pic-2">
                        <div class="pic-file pic-screen-2">
                            <span class="iconfont icon-tupian"></span>
                        </div>
                    </label>
                    <input type="file" id="biaoti-pic-2">
                </div>
                <input type="text" name="titlepic" id="titlepic" class="pic_1" style="display: none">
            </li>
            <li>
                <span class="biaoti otitle">标题</span><input class="layui-col-md8 layui-col-sm10 layui-col-xs10" type="text" name="title" autocomplete="off">
            </li>
            <li>
                <span class="otitle fbaiti">副标题</span><input class="layui-col-md8 layui-col-sm10 layui-col-xs10" type="text" name="ftitle" autocomplete="off">
            </li>

            <li class="synopsis_text">
                <span class="content-synopsis otitle">图片说明</span><textarea class="synopsis layui-col-md8 layui-col-sm10 layui-col-xs10" name="smalltext" autocomplete="off"></textarea>
            </li>

            <li class="fl_biaoqian">
                <span class="biaoqian otitle">标签</span>
                <div class="select_content layui-col-md8 layui-col-sm10 layui-col-xs10">
                    <div class="select_center select_center_1">
                        <div>
                            <select class="select_2" name="1" tabindex="1" multiple>
                                <option value="美女">美女</option>
                                <option value="旅游">旅游</option>
                                <option value="科技">科技</option>
                                <option value="美食">美食</option>
                                <option value="体育">体育</option>
                                <option value="娱乐">娱乐</option>
                                <option value="汽车">汽车</option>
                                <option value="时尚">时尚</option>
                                <option value="摄影">摄影</option>
                                <option value="游戏">游戏</option>
                                <option value="动物">动物</option>
                                <option value="艺术">艺术</option>
                                <option value="生活">生活</option>
                                <option value="军事">军事</option>
                                <option value="历史">历史</option>
                                <option value="人物">人物</option>
                                <option value="动物">动物</option>
                                <option value="广告">广告</option>
                                <option value="资讯">资讯</option>
                                <option value="动漫">动漫</option>
                                <option value="育儿">育儿</option>
                                <option value="搞笑">搞笑</option>
                                <option value="探索">探索</option>
                            </select>
                        </div>
                    </div>
                    <div class="select_center select_center_2">
                        <div>
                            <select class="select_1" name="2" tabindex="2" multiple>
                                <option value="足球">足球</option>
                                <option value="乒乓球">乒乓球</option>
                                <option value="数码">数码</option>
                                <option value="制服">制服</option>
                                <option value="篮球">篮球</option>
                                <option value="高尔夫">高尔夫</option>
                                <option value="赛车">赛车</option>
                                <option value="珠宝">珠宝</option>
                                <option value="性感">性感</option>
                                <option value="写真">写真</option>
                                <option value="交通">交通</option>
                                <option value="清纯">清纯</option>
                                <option value="花">花</option>
                                <option value="模特">模特</option>
                                <option value="趣闻">趣闻</option>
                                <option value="休闲">休闲</option>
                                <option value="素颜">素颜</option>
                                <option value="水果">水果</option>
                                <option value="赛车">赛车</option>
                                <option value="珠宝">珠宝</option>
                                <option value="性感">性感</option>
                                <option value="写真">写真</option>
                                <option value="交通">交通</option>
                                <option value="清纯">清纯</option>
                                <option value="舞蹈">舞蹈</option>
                                <option value="新闻">新闻</option>
                                <option value="蔬菜">蔬菜</option>
                                <option value="羽毛球">羽毛球</option>
                                <option value="主播">主播</option>
                                <option value="游泳">游泳</option>
                                <option value="演员">演员</option>
                                <option value="综艺节目">综艺节目</option>
                                <option value="创业">创业</option>
                                <option value="艺人">艺人</option>
                                <option value="知识">知识</option>
                                <option value="校园">校园</option>
                                <option value="帅哥">帅哥</option>
                                <option value="军事">军事</option>
                                <option value="大胸">大胸</option>
                                <option value="二次元">二次元</option>
                                <option value="漫画">漫画</option>
                                <option value="星座">星座</option>
                                <option value="商务">商务</option>
                                <option value="家居">家居</option>
                                <option value="文物">文物</option>
                                <option value="坦克">坦克</option>
                                <option value="人文">人文</option>
                                <option value="文化">文化</option>
                                <option value="网球">网球</option>
                                <option value="海军">海军</option>
                                <option value="音乐">音乐</option>
                                <option value="设计">设计</option>
                                <option value="武术">武术</option>
                                <option value="陆军">陆军</option>
                                <option value="票务">票务</option>
                                <option value="雕塑">雕塑</option>
                                <option value="飞行器">飞行器</option>
                                <option value="烧烤">烧烤</option>
                                <option value="天气">天气</option>
                                <option value="探险">探险</option>
                                <option value="运动品牌">运动品牌</option>
                                <option value="滑雪">滑雪</option>
                                <option value="素食">素食</option>
                                <option value="插画">插画</option>
                                <option value="互联网">互联网</option>
                                <option value="小吃">小吃</option>
                                <option value="导弹">导弹</option>
                                <option value="空军">空军</option>
                                <option value="读书">读书</option>
                                <option value="军史">军史</option>
                                <option value="海报">海报</option>
                                <option value="杂志">杂志</option>
                                <option value="滑冰">滑冰</option>
                            </select>
                        </div>
                    </div>
                    <div class="select_center write">
                        <input class="" type="text" placeholder="手写标签（标签与标签之间用逗号分隔，最多写四个）" id="write"  autocomplete="off">
                    </div>
                </div>
            </li>
            <li class="fl_biaoqian" id="sort">
                <span class="biaoqian otitle">分类</span>
                <div class="select_content select_center_3 layui-col-md8 layui-col-sm10 layui-col-xs10">
                    <div class="select_center select_b layui-col-md4 layui-col-sm6 layui-col-xs6">
                        <div>
                            <select class="select_3" name="3" tabindex="3" style="display:none;">
                                <option value="旅游">旅游</option>
                                <option value="社会">社会</option>
                                <option value="娱乐">娱乐</option>
                                <option value="奇闻">奇闻</option>
                                <option value="奇闻">美女</option>
                                <option value="奇闻">美食</option>
                                <option value="奇闻">文化</option>
                                <option value="奇闻">汽车</option>
                                <option value="奇闻">历史</option>
                                <option value="奇闻">体育</option>
                            </select>
                        </div>
                    </div>
                </div>
            </li>

            <li>
                <span class="otitle">合作域名</span><input class="layui-col-md8  layui-col-sm10 layui-col-xs10" type="text" name="domain" autocomplete="off">
            </li>
            <li>
                <span class="otitle">合作频道</span><input class="layui-col-md8 layui-col-sm10 layui-col-xs10" type="text" name="chann" autocomplete="off">
            </li>

            <li>
                <span class="otitle">发布时间</span>
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
                        <button type="button" class="draft-btn layui-col-md3 layui-col-sm12 layui-col-xs12">存草稿</button>
                        <button type="reset" class="cancel-btn layui-col-md3 layui-col-sm12 layui-col-xs12">取消</button>
                    </div>
                </div>
            </li>
        </ul>
    </div>

</form>
<!--JQ 1.8版本-->
<script src="js/jquery.min.js"></script>
<!--下拉列表控件-->
<script src="js/Plugin/UCSelect.js"></script>
<script type="text/javascript" src="js/screen.js"></script>

</body>
</html>