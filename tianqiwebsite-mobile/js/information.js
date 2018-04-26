/**
 * Created by Administrator on 2017/12/14.
 */

/*
 *
 * 游戏资讯和开服表切换
 */

window.addEventListener("load",function(){
    var information_hul = document.getElementById("information_hul");
    var information_hli = information_hul.getElementsByTagName("li");
    var information_hspan = information_hul.getElementsByTagName("span");
    var information_hi = information_hul.getElementsByTagName("i");
    var gameinformation = document.getElementById("gameinformation");
    var openform = document.getElementById("openform");

    console.log(gameinformation,openform);
        /*立即执行函数版*/
//        for(var i=0; i<information_hli.length; i++){
//            information_hli[i].onclick = (function(i){
//                return function (){
//                    for(var j=0; j<information_hli.length; j++){
//                        information_hli[j].className = "";
//                        information_hspan[j].className = "";
//                        information_hi[j].style.display = "";
//                    }
//                    information_hli[i].className = "onli";
//                    information_hspan[i].className = "ona";
//                    information_hi[i].style.display = "block";
//                }
//            })(i)
//        }

    /*简化版*/
    //for(var i=0; i<information_hli.length; i++){
    //    information_hli[i].index = i;
    //    information_hli[i].onclick = function (){
    //        for(var j=0; j<information_hli.length; j++){
    //            information_hli[j].className = "";
    //            information_hspan[j].className = "";
    //            information_hi[j].style.display = "";
    //        }
    //        information_hli[this.index].className = "onli";
    //        information_hspan[this.index].className = "ona";
    //        information_hi[this.index].style.display = "block";
    //    }
    //}

    /*普通版*/
            information_hli[0].onclick = function (){
                for(var j=0; j<information_hli.length; j++){
                     information_hli[j].className = "";
                     information_hspan[j].className = "";
                    information_hi[j].style.display = "";

               }
                information_hli[0].className = "onli";
                information_hspan[0].className = "ona";
                information_hi[0].style.display = "block";
                openform.style.display = "";
                gameinformation.style.display = "block";
               }

            information_hli[1].onclick = function (){
                    for(var j=0; j<information_hli.length; j++){
                        information_hli[j].className = "";
                        information_hspan[j].className = "";
                        information_hi[j].style.display = "";
                    }
                    information_hli[1].className = "onli";
                    information_hspan[1].className = "ona";
                    information_hi[1].style.display = "block";
                    gameinformation.style.display = "";
                    openform.style.display = "block";
                }

});

/*
 *
 * 资讯页加载更多部分
 */
window.addEventListener("load",function(){
    var obj = document.getElementById("information_ul");
    var obj1 = document.getElementById("information_ul1");
    var information_li = obj.children;
    var information_li1 = obj1.children;
    var spanbtn = document.getElementById("spanbtn");
    var spanbtn1 = document.getElementById("spanbtn1");
            //console.log(mygifts,mygiftsspanbtn);

    var createli;
    var createli1;

    spanbtn.onclick = function (){
        this.style.display = "none";
        for(var i=0;i<5;i++){
            createli = document.createElement("li");
            createli = information_li[i].cloneNode(true);
            //                console.log(createli);
            obj.appendChild(createli);
        }
    }

    spanbtn1.onclick = function (){
        this.style.display = "none";
        for(var i=0;i<5;i++){
            createli1 = document.createElement("li");
            createli1 = information_li1[i].cloneNode(true);
            //                console.log(createli);
            obj1.appendChild(createli1);
        }
    }

});



