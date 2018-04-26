/*
  *个人中心
  *
*/
/**
 * 全部分类的下拉效果
 */
//window.addEventListener("load",function(){
//    var cateitemlist = document.getElementById("cateitemlist");
//    var lis = cateitemlist.getElementsByTagName("li");
//    console.info(lis);
//    for(var i=0; i<lis.length; i++){
//        lis[i].onmouseover = function (){
//            this.className = "cateitem on";
//        }
//        lis[i].onmouseout = function (){
//            this.className = "cateitem";
//        }
//    }
//});

window.addEventListener("load",function(){
    var gerenziliao = document.getElementById("gerenziliao");
    var zhanghuanquan = document.getElementById("zhanghuanquan");
    var mygif = document.getElementById("mygif");
    var huodongxinxi = document.getElementById("huodongxinxi");
    var xitongxinxi = document.getElementById("xitongxinxi");
    var ul = document.getElementById("xialaul");
    var lis = ul.getElementsByTagName("li");
    var li1 = ul.getElementsByTagName("li1");
    var parent = document.getElementById("hongdongxinxi");
    var child1 = document.getElementById("xxli1");
    var child2 = document.getElementById("xxli2");

    console.info(lis);

        for(var i=1; i<lis.length; i++){
            lis[i].onmouseover = function (){
                //让cateitemlist显示
                this.className = "on";
            }
            lis[i].onmouseout = function (){
                //让cateitemlist显示
                this.className = "";
            }
        }

        lis[1].onclick = function (){
            huodongxinxi.style.display = "block";
            zhanghuanquan.style.display = "";
            gerenziliao.style.display = "";
            xitongxinxi.style.display = "";
            mygif.style.display = "";
            //this.className = "on";
        }

        lis[2].onclick = function (){
            xitongxinxi.style.display = "block";
            zhanghuanquan.style.display = "";
            gerenziliao.style.display = "";
            mygif.style.display = "";
            huodongxinxi.style.display = "";
            //this.className = "on";
        }

        lis[3].onclick = function (){
            mygif.style.display = "block";
            zhanghuanquan.style.display = "";
            gerenziliao.style.display = "";
            xitongxinxi.style.display = "";
            huodongxinxi.style.display = "";
            //this.className = "on";
        }

        lis[4].onclick = function (){
            gerenziliao.style.display = "block";
            zhanghuanquan.style.display = "";
            mygif.style.display = "";
            xitongxinxi.style.display = "";
            huodongxinxi.style.display = "";
            //this.className = "on";
        }
        //lis[4].onclick = function (){
        //    gerenziliao.style.display = "block";
        //    zhanghuanquan.style.display = "";
        //    //this.className = "on";
        //}
        lis[5].onclick = function (){
            //让cateitemlist显示
            zhanghuanquan.style.display = "block";
            gerenziliao.style.display = "";
            mygif.style.display = "";
            xitongxinxi.style.display = "";
            huodongxinxi.style.display = "";
        }




});