/**
 * Created by Administrator on 2018/1/11.
 */
/*
 *
 *新闻资讯
 */

$(function(){
    var $spans = $("#span-button").find("span");
    var $serials = $("#serial").find("span");
    var $ul = $("#news-information-ul");
    var $ul1 = $("#news-information-ul1");
    var $ul2 = $("#news-information-ul2");
//        console.log($li);
//    console.log($.fn.jquery);
    $.each($spans,function(index,span){
        $(this).click(function(){
            $(this).addClass("activate1").siblings().removeClass("activate1");
            if(index===0){
                $($ul).css("display","block");
                $($ul1).css("display","none");
                $($ul2).css("display","none");
            }
            if(index===1){
                $($ul1).css("display","block");
                $($ul).css("display","none");
                $($ul2).css("display","none");
            }
            if(index===2){
                $($ul2).css("display","block");
                $($ul).css("display","none");
                $($ul1).css("display","none");
            }
        });
    });
    $($serials).each(function(index,span){
//            console.log(this);
        $(this).click(function(){
            $(this).addClass("span-activate").siblings().removeClass("span-activate");
            if(index===0){
                $($ul).css("display","block");
                $($ul1).css("display","none");
                $($ul2).css("display","none");
            }
            if(index===1){
                $($ul1).css("display","block");
                $($ul).css("display","none");
                $($ul2).css("display","none");
            }
            if(index===2){
                $($ul2).css("display","block");
                $($ul).css("display","none");
                $($ul1).css("display","none");
            }
            if(index===3){
                $($ul).css("display","block");
                $($ul1).css("display","none");
                $($ul2).css("display","none");
            }
            if(index===4){
                $($ul1).css("display","block");
                $($ul).css("display","none");
                $($ul2).css("display","none");
            }
        });
    });
    $("#zuoyou>i:eq(0)").click(function(index,span){
        $(this).css("background","url(img/news-information-y-prev.png)");
        $($ul1).css("display","block");
        $($ul).css("display","none");
        $($ul2).css("display","none");
    });
    $("#zuoyou>i:eq(1)").click(function(){
        $(this).css("background","url(img/news-information-n-next.png)");
        $($ul2).css("display","block");
        $($ul).css("display","none");
        $($ul1).css("display","none");
    });

//        $("#span-button span").on("click", function() {
//            $(this).addClass("activate1").siblings().removeClass("activate1");
//        });
});
