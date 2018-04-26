/**
 * Created by Administrator on 2018/1/30.
 */

//企业简介和企业文化切换
$(function(){
    $(".aboutus-f>p>span").eq(0).tap(function(){
        $(this).addClass("activate").siblings().removeClass("activate");
        $(".qyjj").show().parent().find(".qywh").hide();
//                console.log($(".qyjj"));
    });
    $(".aboutus-f>p>span").eq(1).tap(function(){
        $(this).addClass("activate").siblings().removeClass("activate");
        $(".qywh").show().parent().find(".qyjj").hide();
    });
});


//企业文化滑动
$(function(){
    new Swiper ('.swiper-container',{
        slidesPerView : 'auto',
        loopedSlides :5,
        freeMode: true
    });
})