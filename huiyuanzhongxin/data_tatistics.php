<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,user-scalable=yes, minimum-scale=0.4, initial-scale=0.8,target-densitydpi=low-dpi" />

    <link rel="stylesheet" href="css/Plugin/font.css">
    <link rel="stylesheet" href="css/Plugin/xadmin.css">
    <!--柱状图-->
    <!--<link rel="stylesheet" href="css/Plugin/highcharts.css">-->
    <!--柱状图-->
    <link rel="stylesheet" href="./css/data_tatistics.css">
    <script src="lib/layui/layui.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/Plugin/xadmin.js"></script>

    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    <!-- 让IE8/9支持媒体查询，从而兼容栅格 -->
    <script src="https://cdn.staticfile.org/html5shiv/r29/html5.min.js"></script>
    <script src="https://cdn.staticfile.org/respond.js/1.4.2/respond.min.js"></script>

    <title>Title</title>
</head>
<body>
    <div class="layui-fluid">
    <div class="layui-row layui-col-space25">
        <div class="layui-col-md12">
            <div class="layui-card">
                <!--<div class="layui-card-header">-->
                    <!--数据统计-->
                <!--</div>-->
                <ul class="layui-nav" lay-filter="">
                    <li class="layui-nav-item layui-this"  data-name="gs"><a href="javascript:;">概述</a></li>
                    <li class="layui-nav-item" data-name="wz"><a href="javascript:;">文章分析</a></li>
                    <li class="layui-nav-item" data-name="sp"><a href="javascript:;">锁屏分析</a></li>
                </ul>
                <div class="layui-card-body ">
                    <ul class="layui-row layui-col-space10 layui-this x-admin-carousel x-admin-backlog">
                        <li class="layui-col-md3 layui-col-xs6">
                            <a href="javascript:;" class="x-admin-backlog-body">
                                <h3>文章量</h3>
                                <p>
                                    <cite>66</cite></p>
                            </a>
                        </li>
                        <li class="layui-col-md3 layui-col-xs6">
                            <a href="javascript:;" class="x-admin-backlog-body">
                                <h3>阅读量</h3>
                                <p>
                                    <cite>12</cite></p>
                            </a>
                        </li>
                        <li class="layui-col-md3 layui-col-xs6">
                            <a href="javascript:;" class="x-admin-backlog-body">
                                <h3>推荐量</h3>
                                <p>
                                    <cite>99</cite></p>
                            </a>
                        </li>
                        <li class="layui-col-md3 layui-col-xs6">
                            <a href="javascript:;" class="x-admin-backlog-body">
                                <h3>收藏量</h3>
                                <p>
                                    <cite>67</cite></p>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
        <div class="layui-col-md12">
            <div class="data-aggregate layui-form">
                <div class="layui-form-item">
                    <div class="layui-input-block">
                        <input type="radio" name="sex" value="1" title="昨日"  checked>
                        <input type="radio" name="sex" value="7" title="7日">
                        <input type="radio" name="sex" value="14" title="14日">
                        <input type="radio" name="sex" value="30" title="30日">
                        <div class="layui-inline time-input time-input-1">
                            <input type="text" class="layui-input" id="time1" placeholder="请选择日期" name="newstime1">
                        </div>
                        <span class="icon-jian">-</span>
                        <div class="layui-inline time-input time-input-1">
                            <input type="text" class="layui-input" id="time2" placeholder="请选择日期" name="newstime1">
                        </div>
                        <div class="layui-form-item content-type">
                            <label class="layui-form-label">
                                <span>内容类型</span>
                            </label>
                            <!--<span>内容类型</span>-->
                            <div class="layui-input-block">
                                <select name="interest" lay-filter="aihao">
                                    <option value="0">全部</option>
                                    <option value="1">文章</option>
                                    <option value="2">锁屏</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="aggregate-border aggregate-column-1">
                        <p class="title">数据概述</p>
                        <div id="container"></div>
                    </div>
                    <div class="aggregate-body aggregate-column-1">
                        <table class="aggregate-1">
                            <tr>
                                <th>时间</th>
                                <th>文章量</th>
                                <th>推荐量</th>
                                <th>阅读量</th>
                                <th>分享量</th>
                                <th>收藏量</th>
                                <th>点击量</th>
                            </tr>
                            <tr>
                                <td>汇总（2019-7-30~2019-7-30</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>2019-7-30</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>2019-7-29</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>2019-7-30</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                        </table>
                    </div>

                </div>
                <div class="layui-card aggregate-column-2 card-body" id="card-body">
                    <div class="layui-card-header">数据概述</div>
                    <div class="layui-card-body" style="min-height: 280px;">
                        <div id="main1" class="layui-col-sm12" style="height: 300px;"></div>
                    </div>
                    <div class="flow-btn">
                        <span class="on">推荐量</span>
                        <span>阅读量</span>
                        <span>内容量</span>
                        <span>分享量</span>
                        <span>评论量</span>
                        <span>收藏量</span>
                        <span>点赞量</span>
                    </div>
                </div>
                <div class="aggregate-body aggregate-column-2">
                    <table class="aggregate-1">
                        <tr>
                            <th>时间</th>
                            <th>文章量</th>
                            <th>推荐量</th>
                            <th>阅读量</th>
                            <th>分享量</th>
                            <th>收藏量</th>
                            <th>点击量</th>
                        </tr>
                        <tr>
                            <td>汇总（2019-7-30~2019-7-30</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>2019-7-30</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>2019-7-29</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>2019-7-30</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                    </table>
                </div>

                <div class="layui-card aggregate-column-3 card-body">
                    <div class="layui-card-header">数据概述</div>
                    <div class="layui-card-body" style="min-height: 280px;">
                        <div id="main2" class="layui-col-sm12" style="height: 300px;"></div>
                    </div>
                    <div class="flow-btn">
                        <span class="on">推荐量</span>
                        <span>阅读量</span>
                        <span>内容量</span>
                        <span>分享量</span>
                        <span>评论量</span>
                        <span>收藏量</span>
                        <span>点赞量</span>
                    </div>
                </div>
                <div class="aggregate-body aggregate-column-3">
                    <table class="aggregate-1">
                        <tr>
                            <th>时间</th>
                            <th>文章量</th>
                            <th>推荐量</th>
                            <th>阅读量</th>
                            <th>分享量</th>
                            <th>收藏量</th>
                            <th>点击量</th>
                        </tr>
                        <tr>
                            <td>汇总（2019-7-30~2019-7-30</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>2019-7-30</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>2019-7-29</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>2019-7-30</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div id="opage" class="fr"></div>
    </div>

</div>
    <script src="js/Plugin/highcharts.js"></script>
    <script src="https://cdn.bootcss.com/echarts/4.2.1-rc1/echarts.min.js"></script>
    <script src="js/data_tatistics.js"></script>
</body>
</html>