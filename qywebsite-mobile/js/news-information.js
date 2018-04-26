/**
 * Created by Administrator on 2018/1/31.
 */

//新闻资讯
$(function(){
    $(".news-information>p:first-of-type>span").tap(function(){
        console.log($(this));
        $(this).addClass("activate").siblings().removeClass("activate");
    });
});