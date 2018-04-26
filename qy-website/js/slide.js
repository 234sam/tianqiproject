/**
 * Created by Administrator on 2018/1/3.
 */

/*
 *
 *����������
 */
$(function(){
    $(".qy_nav1>ul>li>a").click(function(){
        $(this).addClass("activate").parent("li").siblings().find("a").removeClass("activate");

    });
});

/*
*
*�����ֲ�ͼ
 */
$(document).ready(function() {
    var length,
        currentIndex = 0,
        interval,
        hasStarted = false, //�Ƿ��Ѿ���ʼ�ֲ�
        t = 3000; //�ֲ�ʱ����
    length = $('.slider-panel').length;
    //�����˵�һ��ͼƬ����
    $('.slider-panel:not(:first)').hide();
    //����һ��slider-item��Ϊ����״̬
    $('.slider-item:first').addClass('slider-item-selected');
    //������ǰ����󷭰�ť
    $('.slider-page').hide();
    //�������ʱ��ʾ��ǰ����󷭰�ť,ֹͣ����������뿪ʱ������ǰ����󷭰�ť����ʼ����
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
     * ��ǰ��ҳ
     */
    function pre() {
        var preIndex = currentIndex;
        currentIndex = (--currentIndex + length) % length;
        play(preIndex, currentIndex);
    }
    /**
     * ���ҳ
     */
    function next() {
        var preIndex = currentIndex;
        currentIndex = ++currentIndex % length;
        play(preIndex, currentIndex);
    }
    /**
     * ��preIndexҳ����currentIndexҳ
     * preIndex ��������ҳ����ʼҳ
     * currentIndex ��������������ҳ
     */
    function play(preIndex, currentIndex) {
        $('.slider-panel').eq(preIndex).fadeOut(500)
            .parent().children().eq(currentIndex).fadeIn(1000);
        $('.slider-item').removeClass('slider-item-selected');
        $('.slider-item').eq(currentIndex).addClass('slider-item-selected');
    }
    /**
     * ��ʼ�ֲ�
     */
    function start() {
        if(!hasStarted) {
            hasStarted = true;
            interval = setInterval(next, t);
        }
    }
    /**
     * ֹͣ�ֲ�
     */
    function stop() {
        clearInterval(interval);
        hasStarted = false;
    }
    //��ʼ�ֲ�
    start();
});

/*
 *
 *��Ϣҳ��Ƶ����
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
 *���Ŷ�̬
 */
$(function () {
    var timer=null; //��ʱ������ֵ����Ҫ���ڹرն�ʱ��
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

    timer=setInterval(function(){ //�򿪶�ʱ��
        movel();
    },5000); //2000Ϊ�ֲ���ʱ��

    $('#banner').mouseenter(function(){
        clearInterval(timer);
//                console.log('ͣ');
    }).mouseleave(function(){
//                console.log('��');
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
 *�������
 */
$(function () {
    var timer=null; //��ʱ������ֵ����Ҫ���ڹرն�ʱ��
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

    timer=setInterval(function(){ //�򿪶�ʱ��
        movel();
    },2000); //2000Ϊ�ֲ���ʱ��

    $('#banner-adv').mouseenter(function(){
        clearInterval(timer);
//                console.log('ͣ');
    }).mouseleave(function(){
//                console.log('��');
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
 *��������
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
