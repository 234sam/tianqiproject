/**
 * Created by Administrator on 2018/1/3.
 */

/*
 *
 *顶部导航栏
 */
$(function(){
    $(".qy_nav1>ul>li>a").click(function(){
        $(this).addClass("activate").parent("li").siblings().find("a").removeClass("activate");

    });
});

/*
*
*顶部轮播图
 */
$(document).ready(function() {
    var length,
        currentIndex = 0,
        interval,
        hasStarted = false, //是否已经开始轮播
        t = 3000; //轮播时间间隔
    length = $('.slider-panel').length;
    //将除了第一张图片隐藏
    $('.slider-panel:not(:first)').hide();
    //将第一个slider-item设为激活状态
    $('.slider-item:first').addClass('slider-item-selected');
    //隐藏向前、向后翻按钮
    $('.slider-page').hide();
    //鼠标上悬时显示向前、向后翻按钮,停止滑动，鼠标离开时隐藏向前、向后翻按钮，开始滑动
    $('.slider-panel, .slider-pre, .slider-next').hover(function() {
        stop();
        $('.slider-page').show();
    }, function() {
        $('.slider-page').hide();
        start();
    });
    $('.slider-item').hover(function(e) {
        stop();
        var preIndex = $(".slider-item").filter(".slider-item-selected").index();
        currentIndex = $(this).index();
        play(preIndex, currentIndex);
    }, function() {
        start();
    });
    $('.slider-pre').unbind('click');
    $('.slider-pre').bind('click', function() {
        pre();
    });
    $('.slider-next').unbind('click');
    $('.slider-next').bind('click', function() {
        next();
    });
    /**
     * 向前翻页
     */
    function pre() {
        var preIndex = currentIndex;
        currentIndex = (--currentIndex + length) % length;
        play(preIndex, currentIndex);
    }
    /**
     * 向后翻页
     */
    function next() {
        var preIndex = currentIndex;
        currentIndex = ++currentIndex % length;
        play(preIndex, currentIndex);
    }
    /**
     * 从preIndex页翻到currentIndex页
     * preIndex 整数，翻页的起始页
     * currentIndex 整数，翻到的那页
     */
    function play(preIndex, currentIndex) {
        $('.slider-panel').eq(preIndex).fadeOut(500)
            .parent().children().eq(currentIndex).fadeIn(1000);
        $('.slider-item').removeClass('slider-item-selected');
        $('.slider-item').eq(currentIndex).addClass('slider-item-selected');
    }
    /**
     * 开始轮播
     */
    function start() {
        if(!hasStarted) {
            hasStarted = true;
            interval = setInterval(next, t);
        }
    }
    /**
     * 停止轮播
     */
    function stop() {
        clearInterval(interval);
        hasStarted = false;
    }
    //开始轮播
    start();
});

/*
 *
 *信息页视频播放
 */
//$(document).ready(function(){
//    $("#controlpic").click(function() {
//        $("#diveoID").css("display","block");
//        $("#play_close").css("display","block");
//    });
//
//    $("#play_close").click(function() {
//        $("#diveoID").css("display","none");
//        $("#play_close").css("display","none");
//    });
//});


/*
 *
 *新闻动态
 */
$(function () {
    var timer=null; //定时器返回值，主要用于关闭定时器
    function movel(){
        $("#banner ul").animate({marginLeft:"-310px"},600, function () {
            $("#banner ul>li").eq(0).appendTo($("#banner ul"));
            $("#banner ul").css('marginLeft','90px');
        });
    }
    function mover(){
        $("#banner ul").css('marginLeft','-310px');
        $("#banner ul>li").eq(3).prependTo($("#banner ul"));
        $("#banner ul").animate({marginLeft:"90px"},600);
    }

    timer=setInterval(function(){ //打开定时器
        movel();
    },5000); //2000为轮播的时间

    $('#banner').mouseenter(function(){
        clearInterval(timer);
//                console.log('停');
    }).mouseleave(function(){
//                console.log('开');
        timer=setInterval(function(){
            movel();
        },5000);
    });

    $('#right').click(function () {
        movel();
    })
    $('#left').click(function () {
        mover();
    });

    $('#showNav span').eq(0).click(function (){
        $(this).addClass('cur').siblings().removeClass('cur');
        mover();
    });
    $('#showNav span').eq(1).click(function (){
        $(this).addClass('cur').siblings().removeClass('cur');
        movel();
    });
});

/*
 *
 *广告宣传
 */
$(function () {
    var timer=null; //定时器返回值，主要用于关闭定时器
    function movel(){
        $("#banner-adv ul").animate({marginLeft:"-141px"},600, function () {
            $("#banner-adv ul>li").eq(0).appendTo($("#banner-adv ul"));
            $("#banner-adv ul").css('marginLeft','90px');
        });
    }
    function mover(){
        $("#banner-adv ul").css('marginLeft','-141px');
        $("#banner-adv ul>li").eq(4).prependTo($("#banner-adv ul"));
        $("#banner-adv ul").animate({marginLeft:"90px"},600);
    }

    timer=setInterval(function(){ //打开定时器
        movel();
    },2000); //2000为轮播的时间

    $('#banner-adv').mouseenter(function(){
        clearInterval(timer);
//                console.log('停');
    }).mouseleave(function(){
//                console.log('开');
        timer=setInterval(function(){
            movel();
        },2000);
    });

    $('#right-adv').click(function () {
        movel();
    })
    $('#left-adv').click(function () {
        mover();
    });
});

/*
 *
 *关于我们
 */
$(function (){
    $(".aboutus-f>p>span").eq(0).click(function(){
        $(".qywh").css("display","none");
        $(".qyjj").css("display","block");
        $(this).addClass("activate1").siblings().removeClass("activate1");
    });
    $(".aboutus-f>p>span").eq(1).click(function(){
        $(".qyjj").css("display","none");
        $(".qywh").css("display","block");
        $(this).addClass("activate1").siblings().removeClass("activate1");
    });
});
