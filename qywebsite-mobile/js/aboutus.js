/**
 * Created by Administrator on 2018/1/30.
 */

//��ҵ������ҵ�Ļ��л�
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


//��ҵ�Ļ�����
$(function(){
    new Swiper ('.swiper-container',{
        slidesPerView : 'auto',
        loopedSlides :5,
        freeMode: true
    });
})