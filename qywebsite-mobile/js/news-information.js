/**
 * Created by Administrator on 2018/1/31.
 */

//������Ѷ
$(function(){
    $(".news-information>p:first-of-type>span").tap(function(){
        console.log($(this));
        $(this).addClass("activate").siblings().removeClass("activate");
    });
});