 $(document).ready(function(){
            $(".banner .ad").click(function(){
                $(".banner").hide();
            });
            $(".shop-btn").mouseenter(function(){
                $(this).siblings(".money-btn").addClass("money-tip");
            });
            $(".shop-btn").mouseleave(function(){
                $(this).siblings(".money-btn").removeClass("money-tip");
            })
            $(".shopbottom .Code-btn").mouseenter(function(){
                $(".Code").addClass("Code-tip");
                $(".msg").css("display","block");
            });
            $(".shopbottom .Code-btn").mouseleave(function(){
                $(".Code").removeClass("Code-tip");
                $(".msg").css("display","none");
            })
            $(".scrotop").click(function(){
                $("html,body").animate({scrollTop:0},200);
                return false;
            });
            $(".faqs span a").mouseenter(function(){  //控制layui a标签不显示背景颜色
                $(this).css({"background":"none","color":"#ff5c01"});
            });
            $(".faqs span a").mouseleave(function(){
                $(this).css({"background":"none","color":"#666"});
            })
            $("#test5 li").mouseenter(function(){
                $(".video_pic").html($(this).html());
            });
            //点击搜索框显示 最近浏览
            $(".ssbtn").click(function(){
                $(".record").hide();
            });
            $(document).bind('click', function(e) {
                var e = e || window.event; //浏览器兼容性
                var elem = e.target || e.srcElement;
                while (elem) { //循环判断至跟节点，防止点击的是div子元素
                    if (elem.className && elem.className == 'inpt') {
                        return;
                    }
                    elem = elem.parentNode;
                }
                $('.record').css('display', 'none'); //点击的不是div或其子元素
            });

            $(".it").click(function(){
                $(".record").css("display","block");
            });
            //大轮播图广告手风琴
            $("#accordion ul li").mouseenter(function(){
                $("#squeezebox").css("display","block");
            });
            $("#squeezebox").mouseleave(function(){
                $("#squeezebox").css("display","none");
            });

            $('.squeezebox ul li').hover(function(){
                var index = $(this).index();//获取当前下标
                for(var i=0;i<4;i++){
                    if(i <=index){
                        $('.squeezebox ul li').eq(i).stop().animate({left:i*-150+"px"},800)
                    }else{
                        $('.squeezebox ul li').eq(i).stop().animate({left:447+(i-1)*-150+"px"},800)
                    }
                }
            });
            ////必抢清单
            
            $("#selected .ieoy_pic img").mouseenter(function(){
                $(this).css("transform","scale(1.05)");
            });
            $("#selected .ieoy_pic img").mouseleave(function(){
                $(this).css("transform","scale(1)");
            });
        });
        //右侧导航
        $(document).ready(function(){
            function SideBar(opt) {
                var self = this;
                this.opt = {
                    sidebar: '',
                    items: ''
                };
                this.opt = opt;
                this.click_F = false;
                this.proboxTop = [];
                this.opt.sidebar.find('li').eq(0).addClass('cur');
                $.each(self.opt.items, function(index) {
                    self.proboxTop[index] = self.opt.items.eq(index).offset().top;
                });
                this.init();
            }

            SideBar.prototype = {
                init: function() {
                    this.clickTo();
                    this.scrollTo();
                },
                clickTo: function() {
                    var self = this;

                    this.opt.sidebar.find('li').click(function() {
                        self.click_F = true;
                        var index = $(this).index();
                        $('html,body').finish().animate({
                            scrollTop: self.proboxTop[index]
                        }, function() {
                            self.click_F = false;
                        });
                        $(this).addClass('cur').siblings().removeClass('cur');
                    });
                },
                scrollTo: function() {
                    var self = this;
                    this.change($(window).scrollTop());
                    $(window).on('scroll', function() {
                        if (self.click_F) {
                            return;
                        }
                        self.change($(this).scrollTop());
                    });
                },
                change: function(scrollTop) {
                    var self = this;
                    var el = self.opt.sidebar;
                    for (var index = 0; index < self.proboxTop.length - 1; index++) {
                        if (self.proboxTop[index] <= scrollTop && self.proboxTop[index + 1] > scrollTop) {
                            el.find('li').eq(index).addClass('cur').siblings().removeClass('cur');
                        }
                    }
                    if (self.proboxTop[self.proboxTop.length - 1] <= scrollTop) {
                        el.find('li').eq(self.proboxTop.length - 1).addClass('cur').siblings().removeClass('cur');
                    }
                }
            }

            var scroll = new SideBar({
                sidebar: $('#sideBar'),
                items: $('.cont')
            });

            $("#sideBar").hide()//隐藏按钮
            $(document).ready(function(){
                $(window).scroll(function(){
                    if($(this).scrollTop()>3000){//当window的scrolltop距离大于3100时，按钮淡出，反之淡入
                        $("#sideBar").fadeIn();
                    } else {
                        $("#sideBar").fadeOut();
                    }
                });
            });
            //顶部导航
            $(document).ready(function(){
               $(window).scroll(function(){
                   if($(this).scrollTop()>1000){
                       $("#top_bar").fadeIn(300);
                   }else{
                       $("#top_bar").fadeOut(300);
                   }
               });
            });

            $('.toTop').click(function(){//    点击返回首页Top按钮实现页面不刷新返回顶部

                $('html, body').animate({scrollTop:0+'px'},500);
            });
        });