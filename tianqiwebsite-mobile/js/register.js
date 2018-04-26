/**
 * Created by Administrator on 2017/12/13.
 */

/*
 *
 * 图片选择切换ͳ
 */
window.addEventListener("load",function(){
    var chose = document.getElementById("chose");
    var imgsrc = chose.firstElementChild;
    imgsrc.onclick = function (){
        if(imgsrc.getAttribute("src")=="img/register-chose-n-icon.png"){
            imgsrc.src="img/register-chose-y-icon.png";
        }else{
            imgsrc.src="img/register-chose-n-icon.png";
        }
    }
});
