$(function () {
    //头部
    $header();
    //轮播图
    $Rotation();
    //切换栏
    $Tab();
    //热门活动tab栏
    $hotTab();
    //周免动画
    $Weeks();
    //最新视频
    $NewPlay();
    //最新视频鼠标移动切换图片
    $Cut();
    //热门专辑轮播图
    $Hot();
    //热门tab栏切换
    $HotTab();
    //赛事中心
    $Match();
    //积分榜
    $integral();
    $integral2();
    $integral3();
    //英雄
    $heero();
});

// 原生JS
window.onload = function () {
    //视频事件
    Play();
    //
    $cebian();
    //最强战斗力
    fighting();

};


//主页最前面轮播图
function $Rotation() {
    var $lis = $('.promo-img-list>.promo-item');
    var $span = $('.promo-title-list>.title');
    var imgWidth = $lis.eq(0).width();
    var $ul = $('.promo-img-list');
    //小按钮事件
    var index = 0;
    var timeId = null;
    $span.on('mouseover', function () {
        clearInterval(timeId);
        $(this).addClass('selected').siblings().removeClass('selected');
        index = $(this).index();
        $ul.stop().animate({
            left: -index * imgWidth
        });
    });
    $span.on('mouseout', function () {
        timeId = setInterval(function () {
            if (index == 4) {
                index = -1;
            }
            index++;
            $span.eq(index).addClass('selected').siblings().removeClass('selected');
            $ul.stop().animate({
                left: -index * imgWidth
            });
        }, 2000);
    });
    timeId = setInterval(function () {
        if (index == 4) {
            index = -1;
        }
        index++;
        $span.eq(index).addClass('selected').siblings().removeClass('selected');
        $ul.stop().animate({
            left: -index * imgWidth
        });
    }, 2000);

}

//新闻公告切换栏
function $Tab() {
    let $datas = [
        {
            0: '关于延长无限乱斗开放时间的公告',
            1: ['赛事', 'TOP与FPX强强对话 RNG做客重庆战SS', '03-10', 'event'],
            2: ['视频', '《英雄麦克疯》：翻盘的狂欢！', '03-09', 'amusement'],
            3: ['视频', '教你一招：9分钟让你的瑞兹成为大魔王', '03-07', 'amusement'],
            4: ['新闻', '宇宙故事更新：飞翼姐妹颂歌', '03-06', 'inform'],
            5: ['视频', '2019愚人节皮肤：小鱼汪、库奇骑柯基、狮子狗、约里克', '03-06', 'amusement'],
            6: ['公告', '关于新手召唤师活动更新公告', '03-05', 'inform']
        },
        {
            0: '关于延长无限乱斗开放时间的公告',
            1: ['公告', '比尔吉沃特大区临时维护公告', '03-10', 'inform'],
            2: ['公告', '全大区排位系统维护升级公告', '03-09', 'inform'],
            3: ['公告', '崔丝塔娜新皮肤票选即将结束', '03-07', 'inform'],
            4: ['公告', '3月8日免费英雄更换公告', '03-06', 'inform'],
            5: ['公告', '全大区商城系统维护升级公告', '03-06', 'inform'],
            6: ['公告', '关于新手召唤师活动更新公告', '03-05', 'inform']
        },
        {
            0: ' BLG喜提五连胜 升至常规赛第三',
            1: ['视频', '《英雄麦克疯》：翻盘的狂欢！', '03-10', 'amusement'],
            2: ['赛事', 'JDG主场迎劲敌 BLG志在五连胜', '03-09', 'event'],
            3: ['赛事', 'TOP轻取VG LGD二比零强势终结EDG', '03-07', 'event'],
            4: ['视频', '《主播真会玩》：没钱买鞋大舅子', '03-06', 'amusement'],
            5: ['赛事', 'FPX对决TOP Knight9与Doinb巅峰对决', '03-06', 'event'],
            6: ['赛事', '厂长与康帝时隔9个月再度交手', '03-05', 'event']
        },
        {
            0: ' 胜率重回打野前十 新版本蔚打法全解析',
            1: ['教学', '上分辅助推荐 卡莉斯塔绝佳搭档锤石', '03-10', 'tutorial'],
            2: ['新闻', '9.4无限乱斗英雄评级！盖伦晋升T1', '03-09', 'news'],
            3: ['教学', '穿甲盲僧领衔 9.4版本热门上中野', '03-07', 'tutorial'],
            4: ['教学', '加里奥辅助赛场热门！对线支援能力全面', '03-06', 'tutorial'],
            5: ['教学', '女警大招伤害提高！钢铁之翼又获新调整', '03-08', 'tutorial'],
            6: ['教学', '新版征服者引领风潮！狗熊猴子越战越勇', '03-05', 'tutorial']
        },
        {
            0: '被德莱文主宰的峡谷，你还能认出谁',
            1: ['论坛', '无状态和大哥聚会，LGD主场现新主持', '03-10', 'inform'],
            2: ['论坛', 'FPX发布趣味漫画，BLG Kuro开微博', '03-09', 'inform'],
            3: ['论坛', '愚人节皮肤来袭，鱼人变柯基萌翻全场', '03-07', 'inform'],
            4: ['论坛', '宁王段位太真实，rookie被蔡明错认', '03-06', 'inform'],
            5: ['论坛', '联盟兔男郎上线 雷克塞的苦谁能懂？', '03-03', 'inform'],
            6: ['论坛', '暴击装加强 AD的春天是否来临？', '03-05', 'inform']
        }
    ];
    //上面的 li
    let $lis = $('.news .part-tab-title li');
    let $liDown = $('.new-tab-content-ul>li');

    let $span1 = $('.new-tab-content-ul li .item-type');
    let $a = $('.new-tab-content-ul li .item-href');
    let $span2 = $('.new-tab-content-ul li .item-time');

    $lis.on('mouseover', function () {
        let index = $(this).index();
        $(this).addClass('selected').siblings().removeClass('selected');
        //动画*****不成功
        $('.selected:after').stop().animate({
            opacity: 0
        }, 500, function () {
            $('.selected:after').animate({opacity: 1}, 500)
        });
        for (let i = 0; i < $a.length; i++) {
            if (i == 0) {
                $a.eq(i).text($datas[index][i]);
                $span1.eq(i).text($datas[index][i + 1][0]);
                $span2.eq(i).text($datas[index][i + 1][2]);
            } else if (i < $a.length - 1) {
                $span1.eq(i).text($datas[index][i + 1][0]);
                $a.eq(i).text($datas[index][i][1]);
                $span2.eq(i).text($datas[index][i + 1][2]);
                $liDown.eq(i).removeClass().addClass('newsitem').addClass($datas[index][i][3]);
            } else {
                $a.eq(i).text($datas[index][i][1]);
                $liDown.eq(i).removeClass().addClass('newsitem').addClass($datas[index][i][3]);
            }
        }


    });
    //下面的li
}

//热门活动tab栏切换
function $hotTab() {
    let $lis = $('.act .part-tab-title li');//上面的li
    let $ulDown = $('.act .m-act-list .actListContainer');//下面的UL
    $lis.on('mouseover', function () {
        let index = $(this).index();
        $(this).addClass('selected').siblings().removeClass('selected');
        $ulDown.eq(index).stop().show().siblings().stop().hide();
    });
}

//鼠标移入自动播放视频
function Play() {
    //获取浏览器信息
    function myBrowser() {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串

        if (userAgent.indexOf("OPR") > -1 || userAgent.indexOf("Opera") > -1) {
            return "Opera"
        }//判断是否Opera浏览器
        else if (userAgent.indexOf("Firefox") > -1) {
            return "FF";
        } //判断是否Firefox浏览器
        else if (userAgent.indexOf("Chrome") > -1) {
            return "Chrome";
        } else if (userAgent.indexOf("Safari") > -1) {
            return "Safari";
        } //判断是否Safari浏览器
        else {
            //其他
        }
    }

    var Browser = myBrowser(); //Chrome
    console.log(Browser);
    var hover = document.querySelector('.innerhover-out');
    var video = document.querySelector('#my-video');
    hover.onmouseover = function () {
        video.play();
        if (Browser != 'Chrome') { //如果不是谷歌浏览器视频声音就打开
            video.muted = false;
        }
    };
    hover.onmouseout = function () {
        video.pause();
    }

}

//周免移入移出事件和新英雄移入移出
function $Weeks() {
    $('.week-free-champion').on('mouseover', function (event) {
        $('.week-free-hover').addClass('shows');
        event.stopPropagation();
    });
    $('.week-free-champion').on('mouseout', function (event) {
        $('.week-free-hover').removeClass('shows');
        event.stopPropagation();
    });
    $('.week-free-hover').mouseenter(function () {
        $('.week-free-hover').addClass('shows');
    });
    $('.week-free-hover').mouseleave(function () {
        $('.week-free-hover').removeClass('shows');
    });


    $('.m-new-skin-one').on('mouseover', function (event) {
        $('.more-skin').addClass('show');
        $('.innerhover-out').eq(0).css({
            display: 'block',
            animation: 'videos 0.3s'
        });
    });
    $('.m-new-skin-one').on('mouseout', function (event) {
        $('.more-skin').removeClass('show');
        $('.innerhover-out').eq(0).css({
            display: 'none',
            animation: ''
        });
    });


    //
    $('.more-skin').mouseenter(function (event) {
        $('.more-skin').addClass('show');
        $('.innerhover-out').eq(0).css({
            display: 'block',
            animation: 'videos 0.3s'
        });
    });
    $('.more-skin').mouseleave(function (event) {
        $('.more-skin').removeClass('show');
        $('.innerhover-out').eq(0).css({
            display: 'none',
            animation: ''
        });
    });

}

//最新新视频鼠标移入
function $NewPlay() {
    let $lis = $('.wrap-vp .fresh-video .part-tab-title li');
    //用于存放下面li的数据
    let datas = [
        {
            0: {
                img: 'images/d1.jpg',
                title: '赛事速看0313:EZ大招一箭双雕,RW2:0击败RNG'
            },
            1: {
                img: 'images/d2.jpg',
                title: '3月10日TOP5：TheShy以一敌三反杀两人'
            },
            2: {
                img: 'images/d3.jpg',
                title: '2019LPL春季赛第八周第一日EDG vs OMG 第一局'
            },
            3: {
                img: 'images/d4.jpg',
                title: '[LCK19 春]W7D4-KT vs AF_02'
            },
            4: {
                img: 'images/d5.jpg',
                title: '民间时刻秀：钻石局盲僧一脚开团定乾坤！'
            }
            , 5: {
                img: 'images/d6.jpg',
                title: '《STill RNG》春季赛第四期：Rise'
            },
            6: {
                img: 'images/d7.jpg',
                title: 'Miss排位日记542期 战士之躯刺客之心，中单克烈超神'
            },
            7: {
                img: 'images/d8.jpg',
                title: '[LCK19 春]W7D1-SB vs DWG_01'
            }
        },
        {
            0: {
                img: 'images/d21.jpg',
                title: '凯尔-大天使长米迦勒 皮肤效果展示'
            },
            1: {
                img: 'images/d22.jpg',
                title: '凯尔-末世天使皮肤效果展示'
            },
            2: {
                img: 'images/d23.jpg',
                title: '凯尔-银白审判皮肤效果展示'
            },
            3: {
                img: 'images/d24.jpg',
                title: '凯尔-钢铁之翼皮肤效果展示'
            },
            4: {
                img: 'images/d25.jpg',
                title: '凯尔-圣光审判皮肤效果展示'
            }
            , 5: {
                img: 'images/d26.jpg',
                title: '凯尔-战场女武神皮肤效果展示'
            },
            6: {
                img: 'images/d27.jpg',
                title: '凯尔-防暴天使皮肤效果展示'
            },
            7: {
                img: 'images/d28.jpg',
                title: '凯尔-五杀摇滚女声主唱皮肤效果展示'
            }
        },
        {
            0: {
                img: 'images/d31.jpg',
                title: 'Doinb儒雅随和双排记，金贡：我不仅会RAP，我还会打鼓'
            },
            1: {
                img: 'images/d32.jpg',
                title: '主播818：毒纪贾克斯被抓临危不乱 细节走位拿下双杀'
            },
            2: {
                img: 'images/d33.jpg',
                title: '巅峰TOP5：Pepper李青神龙摆尾惩戒抢龙 Corn冰女冰封陵墓极限输出'
            },
            3: {
                img: 'images/d34.jpg',
                title: '主播818：周淑怡小学生EZ已上线 黑屏秒变怒吼天尊'
            },
            4: {
                img: 'images/d35.jpg',
                title: '主播818：东北大鹌鹑寒冰站撸怒A 毫不畏惧1V2'
            }
            , 5: {
                img: 'images/d36.jpg',
                title: '主播818：东北大鹌鹑1V2天秀双杀 天使11级以后太强势'
            },
            6: {
                img: 'images/d37.jpg',
                title: '老王卢锡安神级走位天秀中野，瑞文1V4高地四杀全体起立！'
            },
            7: {
                img: 'images/d38.jpg',
                title: 'Faker亚索100血极限逃生，还能反杀敌人'
            }
        },
        {
            0: {
                img: 'images/d41.jpg',
                title: 'LCK春季赛3月14日 GRF vs GEN 第二场精彩集锦'
            },
            1: {
                img: 'images/d42.jpg',
                title: '巅峰TOP5：Pepper李青神龙摆尾惩戒抢龙 Corn冰女'
            },
            2: {
                img: 'images/d43.jpg',
                title: 'LCK春季赛3月14日 GRF vs GEN 第一场集锦'
            },
            3: {
                img: 'images/d44.jpg',
                title: '赛事速看SSvsV5：SS吸血鬼后期霸主2比1战胜V5-LPL春'
            },
            4: {
                img: 'images/d45.jpg',
                title: 'LPL一周红黑榜：小虎傲啸峡谷折断凤凰羽翼，ADD波'
            }
            , 5: {
                img: 'images/d46.jpg',
                title: '3月13日LPL战报：教主神奇抢龙 RW完胜逆袭RNG'
            },
            6: {
                img: 'images/d47.jpg',
                title: 'LPL春季赛3月13日 RNG vs RW 第二场精彩集锦'
            },
            7: {
                img: 'images/d48.jpg',
                title: 'LPL春季赛3月14日 RNG vs RW 第一场精彩集锦'
            }
        },
        {
            0: {
                img: 'images/d51.jpg',
                title: '神探苍联盟必修课71：版本中单T1刺客 让你一秒变成'
            },
            1: {
                img: 'images/d52.jpg',
                title: '超神解说：万花通灵妮蔻，AD流破败加羊刀，高胜率上'
            },
            2: {
                img: 'images/d53.jpg',
                title: '主播一周秀#8：骚男四杀残血收割，潘神抢二秀晕两人'
            },
            3: {
                img: 'images/d54.jpg',
                title: '教你一招：魔法无效！7分钟玩好新版莫甘娜'
            },
            4: {
                img: 'images/d55.jpg',
                title: '长达7秒的连续控制 莫甘娜最强连招'
            }
            , 5: {
                img: 'images/d56.jpg',
                title: '新版莫甘娜技能增强 伤害爆炸的秘密'
            },
            6: {
                img: 'images/d57.jpg',
                title: '上分效率最高 莫甘娜双位置打法贴士'
            },
            7: {
                img: 'images/d58.jpg',
                title: '末世天使-凯尔 炫彩皮肤效果展示'
            }
        }
    ];
    let $ulLis = $('.fresh-video-content .video-item');
    let $img = $('.mask-img .video-cover');
    let $text = $('.video-item .name-video a');
    $lis.on('mouseover', function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        let index = $(this).index();
        $.each(datas[index], function (key, value) {
            $img.eq(key).prop('src', value.img);
            $text.eq(key).text(value.title)
        })

    });

}

//最新视频鼠标移动切换图片
function $Cut() {
    let $lis = $('.wrap-vp .fresh-video-content .video-item');

    let width = $lis.eq(0).width() / 8;
    //鼠标移入事件
    $lis.each(function (index, element) {
        $(element).mouseenter(function () {
            let $video = $(this).find('.mask-img .video-pre-wrap');
            $video.show();
            $(this).on("mousemove", function (event) {
                var weizhi = event.clientX - $(this).offset().left;
                let $img = $(this).find('.video-pre-img');
                let $i = $(this).find('.video-pre-bar i');
                switch (true) {
                    case weizhi < width:
                        $img.prop('src', 'images/j0848cv4wgv_640_360_1.jpg');
                        $i.css('width', '12.5%');
                        break;
                    case weizhi > width && weizhi < width * 2:
                        $img.prop('src', 'images/j0848cv4wgv_640_360_2.jpg');
                        $i.css('width', '25%');
                        break;
                    case weizhi > width * 2 && weizhi < width * 3:
                        $img.prop('src', 'images/j0848cv4wgv_640_360_3.jpg');
                        $i.css('width', '37.5%');
                        break;
                    case weizhi > width * 3 && weizhi < width * 4:
                        $img.prop('src', 'images/j0848cv4wgv_640_360_4.jpg');
                        $i.css('width', '50%');
                        break;
                    case weizhi > width * 4 && weizhi < width * 5:
                        $img.prop('src', 'images/j0848cv4wgv_640_360_5.jpg');
                        $i.css('width', '62.5%');
                        break;
                    case weizhi > width * 5 && weizhi < width * 6:
                        $img.prop('src', 'images/j0848cv4wgv_640_360_6.jpg');
                        $i.css('width', '75%');
                        break;
                    case weizhi > width * 6 && weizhi < width * 7:
                        $img.prop('src', 'images/j0848cv4wgv_640_360_7.jpg');
                        $i.css('width', '87.5%');
                        break;
                    case weizhi > width * 7:
                        $img.prop('src', 'images/j0848cv4wgv_640_360_8.jpg');
                        $i.css('width', '100%');
                        break;
                }

            });

        });
        //鼠标移出事件
        $(element).mouseleave(function () {
            let $video = $(this).find('.mask-img .video-pre-wrap');
            $video.hide();
        });
    });

}

//热门专辑轮播图
function $Hot() {
    var $ul = $('.wrap-vp .hotprogram .hotprogram-list-wrap .swiper-wrapper');
    var $left = $('.wrap-vp .hotprogram .hotprogram-list-wrap .hotprogram-list-left');//左边
    var $right = $('.wrap-vp .hotprogram .hotprogram-list-wrap .hotprogram-list-right');//右边
    var count = 0;
    var width = 513;
    $right.on('click', function () {
        if (count == 2) {
            count = -1;
        }
        count++;
        $ul.animate({
            left: -count * width + "px",
        }, 300);
    });
    $left.on('click', function () {
        if (count === 0) {
            count = 3
        }
        count--;
        $ul.animate({
            left: -count * width + "px",
        }, 300);
    });
}

//热门tab切换
function $HotTab() {
    var $tabli = $('.wrap-vp .hotprogram .part-top-tab .part-tab-title li');
    $tabli.on('mouseover', function () {
        $(this).addClass('selected').siblings().removeClass('selected');
    });
}

//赛事中心
function $Match() {
    var $h2 = $('.wrap-match .part-top-tab .part-tab-title .li111');
    var $lis = $('.events-container .match-show');
    $h2.on('mouseover', function () {
        var index = $(this).index();
        $(this).addClass('selected').siblings().removeClass('selected');
        $lis.eq(index).show().siblings().hide();
    });
    //轮播图
    var $left = $('.recent-gamelist .icon-left-arrow');
    var $right = $('.recent-gamelist .icon-right-arrow');
    var $ul = $('.swiper-container .swiper-wrapper');
    var count = 0;

    $right.on('click', function () {
        if (count === 2) {
            count = -1;
        }
        count++;
        $ul.animate({
            left: -count * 1375,
        });
    });
    $left.on('click', function () {
        if (count === 0) {
            count = 3;
        }
        count--;
        $ul.animate({
            left: -count * 1375,
        });
    });

    //最强战斗力
    /*var $myli = $('.li222');
    var $dounli = $('.power-rank-list .player-item');
    $myli.on('mouseenter', function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        $dounli.eq(0).css('transform', 'translateX(850px)');
        setTimeout(function () {
            $dounli.eq(0).css('transform', 'translateX(0px)');
        }, 200);
        $dounli.eq(1).css('transform', 'translateX(850px)');
        setTimeout(function () {
            $dounli.eq(1).css('transform', 'translateX(0px)');
        }, 200);
    });*/
}

//头部
function $header() {
    //获取元素
    var $nav = $('#nav');
    var $img_one = $('#img_one');
    var $img_two = $('#img_two');
    //scroll事件,判断当scroll大于多少时,大图变小图
    $(window).scroll(function () {

        if ($(this).scrollTop() > 50) {
            $nav.animate({
                height: 360
            }, 1000, 'swing', function () {
                $img_one.hide();
                $img_two.show();
            })
        }
    });

//显示隐藏的ul区域
    var $list = $('#list');
    var $hide_detail = $('#hide_detail');

    $list.mouseenter(function () {
        $hide_detail.stop().slideDown(500, function () {
            console.log('隐藏的列表区域显示完毕');
        });
        $hide_detail.css('width', '100%');
    })

    $hide_detail.mouseleave(function () {
        $hide_detail.stop().slideUp(500, function () {
            console.log('隐藏的列表区域隐藏完毕');
        });
    })

//手机扫码区域
    var $phone = $('#phone');
    var $erweima = $('#erweima');

    $phone.mouseover(function () {
        $erweima.stop().fadeIn();
        // $nav.css('background','rgba(0,0,0,0.9)')
    })
    $phone.mouseout(function () {
        $erweima.stop().fadeOut();
    })

//登陆区域
    var $register = $('#register');
    var $register_hide = $('#register_hide');

    $register.mouseenter(function () {
        // $register.addClass('color');
        $register_hide.stop().fadeIn();
    })
    $register.mouseleave(function () {
        // $register.removeClass ('color');
        $register_hide.stop().fadeOut();
    })

}

//积分榜
function $integral() {
    var $ul = $('.score-rank .score-rank-content .swiper-wrapper');//需要移动的
    var $scrollbar = $('.score-rank .score-rank-content .scrollbar');//滚动条
}

//积分榜2
function $integral2() {
    var $ul = document.querySelector('.score-rank .score-rank-content .swiper-wrapper');//需要移动的
    var gao = document.querySelector('.score-rank-list-container');
    var $scrollbar = document.querySelector('.score-rank .score-rank-content .scrollbar');//滚动条
    var bili = $ul.offsetHeight / $scrollbar.offsetHeight;
    $ul.onmousedown = function (event) {
        var y = event.pageY;
        let transform = $('.score-rank .score-rank-content .swiper-wrapper').css('transform');//通过jq获取transfrom的属性
        let transformMatrix = transform.slice(7, transform.length - 1).split(', ');
        var yy = Number(transformMatrix[5]);
        console.log(yy);
        document.onmousemove = function (event) {
            var newY = event.pageY;
            var cha = newY - y;
            $ul.style.transform = 'translateY(' + (yy + cha) + 'px)';
            $scrollbar.style.transform = 'translateY(' + -(yy + cha)/bili + 'px)'
            document.onmouseup = function () {
                let transform = $('.score-rank .score-rank-content .swiper-wrapper').css('transform');//通过jq获取transfrom的属性
                let transformMatrix = transform.slice(7, transform.length - 1).split(', ');
                var yy = Number(transformMatrix[5]);
                if(yy>1){
                    $ul.style.transform = 'translateY(0px)';
                }else if(yy<-620){
                    $ul.style.transform = 'translateY(-615px)'
                }
                document.onmousemove = null;
            };
        };
    };
}


//英雄资料tab栏
function $heero(){

}


//英雄列表
function $integral3() {
    var $scrollbar = document.querySelector('.champion-list-container .scrollbar');//滚动条
    var $ul = document.querySelector('.champion-list-container .champion-list-wrapper');//移动列表
    bili = $ul.offsetHeight / $scrollbar.offsetHeight;
    $ul.onmousedown = function (event) {
        var y = event.pageY;
        let transform = $('.champion-list-container .champion-list-wrapper').css('transform');//通过jq获取transfrom的属性
        let transformMatrix = transform.slice(7, transform.length - 1).split(', ');
        var yy = Number(transformMatrix[5]);
        console.log(yy);
        document.onmousemove = function (event) {
            var newY = event.pageY;
            var cha = newY - y;
            $ul.style.transform = 'translateY(' + (yy + cha) + 'px)';
            $scrollbar.style.transform = 'translateY(' + -(yy + cha)/bili + 'px)';
            document.onmouseup = function () {
                let transform = $('.champion-list-container .champion-list-wrapper').css('transform');//通过jq获取transfrom的属性
                let transformMatrix = transform.slice(7, transform.length - 1).split(', ');
                var yy = Number(transformMatrix[5]);
                if(yy>1){
                    $ul.style.transform = 'translateY(0px)';
                }else if(yy < -1100){
                    $ul.style.transform = 'translateY(-1100px)'
                }
                document.onmousemove = null;
            };
        };
    };
    $ul.onmouseover =function () {
        $scrollbar.style.width= '10px';
    };
    $ul.onmouseout = function () {
        $scrollbar.style.width= '5px';
    };
}

//侧边栏事件
function $cebian() {
    $('.rn-polo').on('click',function () {
        $('body,html').stop().animate({
            scrollTop : 0
        }, 1000);
    });

    var $act = $('.act').offset().top; // 热门活动
    var $vp = $('.wrap-vp').offset().top; // 视频
    var $match = $('.wrap-match').offset().top; // 赛事
    var $championlist = $('.wrap-championlist').offset().top; // 英雄资料
    var $fanart= $('.wrap-fanart').offset().top; // fan
    $('.rn-rmhd').on('click',function () {
        $('body,html').stop().animate({
            scrollTop : $act-400
        }, 1000);
    });
    $('.rn-spzx').on('click',function () {
        $('body,html').stop().animate({
            scrollTop : $vp-300
        }, 1000);
    });
    $('.rn-sszx').on('click',function () {
        $('body,html').stop().animate({
            scrollTop : $match-300
        }, 1000);
    });
    $('.rn-yxtj').on('click',function () {
        $('body,html').stop().animate({
            scrollTop : $championlist-300
        }, 1000);
    });
    $('.rn-fanart').on('click',function () {
        $('body,html').stop().animate({
            scrollTop : $fanart-350
        }, 1000);
    });
}

// //最强战斗力动画
function fighting(){
    var $li=$('.li222');
    $li.on('mouseenter',function () {
        $(this).addClass('selected').siblings().removeClass('selected');
    });

}