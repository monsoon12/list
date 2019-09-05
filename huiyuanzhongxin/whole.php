
<!DOCTYPE html>
<html class="x-admin-sm">
<head>
    <meta charset="UTF-8">
    <title>用户管理</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,user-scalable=yes, minimum-scale=0.4, initial-scale=0.8,target-densitydpi=low-dpi" />
    <link rel="stylesheet" href="css/Plugin/font.css">
    <link rel="stylesheet" href="css/Plugin/xadmin.css">
    <link rel="stylesheet" href="css/whole.css">
    <script src="./lib/layui/layui.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/Plugin/xadmin.js"></script>
    <!-- 让IE8/9支持媒体查询，从而兼容栅格 -->
    <script src="https://cdn.staticfile.org/html5shiv/r29/html5.min.js"></script>
    <script src="https://cdn.staticfile.org/respond.js/1.4.2/respond.min.js"></script>

</head>
<body>
<div class="btn-top">
    <a href="adduser.html">增加用户</a>
    <a class="on" href="whole.html">管理用户</a>
    <a href="Managing-Users.html">管理部门</a>
</div>
<div class="layui-fluid" id="form-list">
    <div class="layui-row layui-col-space15">
        <div class="layui-col-md12">
            <div class="layui-card">
                <div class="layui-card-body ">
                    <form class="layui-form layui-col-space5">
                        <div class="layui-inline layui-show-xs-block">
                            <input type="text" name="username"  placeholder="请输入用户名" autocomplete="off" class="layui-input">
                        </div>
                        <div class="layui-inline layui-show-xs-block">
                            <button class="layui-btn"  lay-submit="" lay-filter="sreach"><i class="layui-icon">&#xe615;</i></button>
                        </div>
                    </form>
                </div>
                <div class="layui-card-header">
                    <button class="layui-btn layui-btn-danger" onclick="delAll()"><i class="layui-icon"></i>批量删除</button>
                    <button class="layui-btn" onclick="xadmin.open('添加用户','adduser.html',700,600)"><i class="layui-icon"></i>添加</button>
                </div>
                <div class="layui-card-body layui-table-body layui-table-main">
                    <table class="layui-table layui-form">
                        <thead>
                        <tr>
                            <th>
                                <input type="checkbox" lay-filter="checkall" name="" lay-skin="primary">
                            </th>
                            <th>ID</th>
                            <th>用户名</th>
                            <th>等级</th>
                            <th>状态</th>
                            <th>登录次数</th>
                            <th>最后登录</th>
                            <th>操作</th></tr>
                        </thead>
                        <tbody class="subject">
                        <tr>
                            <td>
                                <input type="checkbox" name="id" value="1"   lay-skin="primary">
                            </td>
                            <td>1</td>
                            <td>admin15</td>
                            <td>
                                <p>用户组：编辑组</p>
                                <p>部门：运营部</p>
                            </td>
                            <td><span class="layui-btn layui-btn-normal layui-btn-mini">已启用</span></td>
                            <td>
                                56
                            </td>
                            <td class="td-status">
                                <p>时间： 2019-07-31 16:37:41</p>
                                <p>IP   ： 112.5.168.87:12843</p>
                            </td>
                            <td class="td-manage name-caozuo">
                                <a class="xiugai" title="修改"  onclick="xadmin.open('修改','member-edit.html',600,400)" href="javascript:;">
                                    <i class="layui-icon">
                                    </i>
                                    修改
                                </a>
                                <a class="shanchu" title="删除" onclick="member_del(this,'要删除的id')" href="javascript:;">
                                    <i class="layui-icon"></i>
                                    删除
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <input type="checkbox" name="id" value="1"   lay-skin="primary">
                            </td>
                            <td>1</td>
                            <td>admin15</td>
                            <td>
                                <p>用户组：编辑组</p>
                                <p>部门：运营部</p>
                            </td>
                            <td><span class="layui-btn layui-btn-normal layui-btn-mini">已启用</span></td>
                            <td>
                                56
                            </td>
                            <td class="td-status">
                                <p>时间： 2019-07-31 16:37:41</p>
                                <p>IP   ： 112.5.168.87:12843</p>
                            </td>
                            <td class="td-manage name-caozuo">
                                <a class="xiugai" title="修改"  onclick="xadmin.open('修改','member-edit.html',600,400)" href="javascript:;">
                                    <i class="layui-icon">
                                    </i>
                                    修改
                                </a>
                                <a class="shanchu" title="删除" onclick="member_del(this,'要删除的id')" href="javascript:;">
                                    <i class="layui-icon"></i>
                                    删除
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <input type="checkbox" name="id" value="1"   lay-skin="primary">
                            </td>
                            <td>1</td>
                            <td>admin15</td>
                            <td>
                                <p>用户组：编辑组</p>
                                <p>部门：运营部</p>
                            </td>
                            <td><span class="layui-btn layui-btn-normal layui-btn-mini">已启用</span></td>
                            <td>
                                56
                            </td>
                            <td class="td-status">
                                <p>时间： 2019-07-31 16:37:41</p>
                                <p>IP   ： 112.5.168.87:12843</p>
                            </td>
                            <td class="td-manage name-caozuo">
                                <a class="xiugai" title="修改"  onclick="xadmin.open('修改','member-edit.html',600,400)" href="javascript:;">
                                    <i class="layui-icon">
                                    </i>
                                    修改
                                </a>
                                <a class="shanchu" title="删除" onclick="member_del(this,'要删除的id')" href="javascript:;">
                                    <i class="layui-icon"></i>
                                    删除
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <input type="checkbox" name="id" value="1"   lay-skin="primary">
                            </td>
                            <td>1</td>
                            <td>admin15</td>
                            <td>
                                <p>用户组：编辑组</p>
                                <p>部门：运营部</p>
                            </td>
                            <td><span class="layui-btn layui-btn-normal layui-btn-mini">已启用</span></td>
                            <td>
                                56
                            </td>
                            <td class="td-status">
                                <p>时间： 2019-07-31 16:37:41</p>
                                <p>IP   ： 112.5.168.87:12843</p>
                            </td>
                            <td class="td-manage name-caozuo">
                                <a class="xiugai" title="修改"  onclick="xadmin.open('修改','member-edit.html',600,400)" href="javascript:;">
                                    <i class="layui-icon">
                                    </i>
                                    修改
                                </a>
                                <a class="shanchu" title="删除" onclick="member_del(this,'要删除的id')" href="javascript:;">
                                    <i class="layui-icon"></i>
                                    删除
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <input type="checkbox" name="id" value="1"   lay-skin="primary">
                            </td>
                            <td>1</td>
                            <td>admin15</td>
                            <td>
                                <p>用户组：编辑组</p>
                                <p>部门：运营部</p>
                            </td>
                            <td><span class="layui-btn layui-btn-normal layui-btn-mini">已启用</span></td>
                            <td>
                                56
                            </td>
                            <td class="td-status">
                                <p>时间： 2019-07-31 16:37:41</p>
                                <p>IP   ： 112.5.168.87:12843</p>
                            </td>
                            <td class="td-manage name-caozuo">
                                <a class="xiugai" title="修改"  onclick="xadmin.open('修改','member-edit.html',600,400)" href="javascript:;">
                                    <i class="layui-icon">
                                    </i>
                                    修改
                                </a>
                                <a class="shanchu" title="删除" onclick="member_del(this,'要删除的id')" href="javascript:;">
                                    <i class="layui-icon"></i>
                                    删除
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <input type="checkbox" name="id" value="1"   lay-skin="primary">
                            </td>
                            <td>1</td>
                            <td>admin15</td>
                            <td>
                                <p>用户组：编辑组</p>
                                <p>部门：运营部</p>
                            </td>
                            <td><span class="layui-btn layui-btn-normal layui-btn-mini">已启用</span></td>
                            <td>
                                56
                            </td>
                            <td class="td-status">
                                <p>时间： 2019-07-31 16:37:41</p>
                                <p>IP   ： 112.5.168.87:12843</p>
                            </td>
                            <td class="td-manage name-caozuo">
                                <a class="xiugai" title="修改"  onclick="xadmin.open('修改','member-edit.html',600,400)" href="javascript:;">
                                    <i class="layui-icon">
                                    </i>
                                    修改
                                </a>
                                <a class="shanchu" title="删除" onclick="member_del(this,'要删除的id')" href="javascript:;">
                                    <i class="layui-icon"></i>
                                    删除
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <input type="checkbox" name="id" value="1"   lay-skin="primary">
                            </td>
                            <td>1</td>
                            <td>admin15</td>
                            <td>
                                <p>用户组：编辑组</p>
                                <p>部门：运营部</p>
                            </td>
                            <td><span class="layui-btn layui-btn-normal layui-btn-mini">已启用</span></td>
                            <td>
                                56
                            </td>
                            <td class="td-status">
                                <p>时间： 2019-07-31 16:37:41</p>
                                <p>IP   ： 112.5.168.87:12843</p>
                            </td>
                            <td class="td-manage name-caozuo">
                                <a class="xiugai" title="修改"  onclick="xadmin.open('修改','member-edit.html',600,400)" href="javascript:;">
                                    <i class="layui-icon">
                                    </i>
                                    修改
                                </a>
                                <a class="shanchu" title="删除" onclick="member_del(this,'要删除的id')" href="javascript:;">
                                    <i class="layui-icon"></i>
                                    删除
                                </a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="layui-card-body ">
                    <div class="page">
                        <div>
                            <a class="prev" href="">&lt;&lt;</a>
                            <a class="num" href="">1</a>
                            <span class="current">2</span>
                            <a class="num" href="">3</a>
                            <a class="num" href="">489</a>
                            <a class="next" href="">&gt;&gt;</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="js/whole.js"></script>
</body>

</html>