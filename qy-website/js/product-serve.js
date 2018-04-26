/**
 * Created by Administrator on 2018/1/12.
 */
/*
 *
 *产品服务
 */
$(function(){
    var $productulli = $("#product-ul>li>i");
    var $productlist = $(".product-list");
//    console.log($productlist,$productulli);

    $productulli.each(function(index,li){
        $(this).click(function(){
            //console.log(index);
            $productulli.removeClass("on").eq(index).addClass("on");
            //$productulli.removeClass("on").eq(index).toggleClass("on");
            $productlist.hide(1000).eq(index).show(2000);
        });
    });
});

/*
 *
 *人才招聘
 */
$(function(){
    $("#recruitmentp>b").click(function(){
        //console.log($(".recruitment-f>ul"));
       $(this).addClass("bbg").siblings().removeClass("bbg");
        //$(".recruitment-f>ul").addClass("ulon").siblings("ul").removeClass("ulon");
    });
    $(".dropdown").click(function(){
        if( $(this).hasClass('bg') ){
            $(this).removeClass('bg').children('i').removeClass('on');
            $(this).siblings().slideUp(1000);
        }
        else{
            $(this).addClass('bg').children('i').addClass('on');
            $(this).siblings().slideDown(1000);
        }

    });
});
