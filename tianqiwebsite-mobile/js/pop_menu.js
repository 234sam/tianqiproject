/**
 * Created by Administrator on 2017/12/2.
 */

/*
 *
 * 弹出框部分
 */
window.addEventListener("load",function(){
    var dianji = document.getElementById("dianji");
    var pop_menuUl = document.getElementById("pop_menuUl");
    //            console.log(dianji,pop_menuUl,gw_container);
    dianji.onclick = function (){
        pop_menuUl.style.transition = 'all .3s linear';
        pop_menuUl.style.height = 272 +"px";
    }
    window.onscroll = function (){
        pop_menuUl.style.transition = 'all .1s ease';
        pop_menuUl.style.height = 0 +"px";
    }
});



/*
 *
 * 登录框部分
 */
window.addEventListener("load",function(){
    var loginbox = document.getElementById("login-box");
    var login = document.getElementById("login");
    var close = document.getElementById("close");
                //console.log(close);
    login.onclick = function (){
        loginbox.style.display = "block";
    }
    close.onclick = function (){
            loginbox.style.display = "none";
        }
});

