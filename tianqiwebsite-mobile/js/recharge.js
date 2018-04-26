/**
 * Created by Administrator on 2017/12/8.
 */


/*
 *
 * 选择充值游戏
 */
window.addEventListener("load",function(){
    var recharge = document.getElementById("recharge");
    var gwheader = document.getElementById("gwheader");
    var ulh = document.getElementById("recharge-hul");
    var lis = ulh.getElementsByTagName("li");
    var bs = ulh.getElementsByTagName("b");
    var as = ulh.getElementsByTagName("span");
    var biaoge = document.getElementById("biaoge");
    var customers = document.getElementById("customers");
    var inputbtn = document.getElementById("inputbtn");
    var gmenu = document.getElementById("gametanchu");
    var gmenuli = gmenu.getElementsByTagName("li");
console.log(biaoge,customers);
    lis[0].onclick = function (){
        lis[1].className = "";
        as[1].className = "";
        bs[1].style.display = "";
        lis[0].className = "onli";
        as[0].className = "ona";
        bs[0].style.display = "block";
        customers.style.display = "none";
        biaoge.style.display = "block";
    }
    lis[1].onclick = function (){
        lis[0].className = "";
        as[0].className = "";
        bs[0].style.display = "";
        lis[1].className = "onli";
        as[1].className = "ona";
        bs[1].style.display = "block";
        biaoge.style.display = "none";
        customers.style.display = "block";
    }
    inputbtn.onclick = function (){
        gmenu.style.transition="all .5s linear";
        gmenu.style.height = "496px";
        recharge.style.backgroundColor = "rgba(0,0,0,0.5)";
        gwheader.style.backgroundColor = "rgba(0,0,0,0.5)";
        gwheader.style.zIndex = "0";
    }
    for(var i=1; i<gmenuli.length; i++){
        gmenuli[i].onclick = function (){
            for(var j=1; j<gmenuli.length; j++){
                gmenuli[j].style.color = "";
            }
            this.style.color = "#fba500";
            var text = this.innerText.substr(1);
            inputbtn.value = text;
            inputbtn.style.color = "#333";
            gmenu.style.height = "0";
            recharge.style.backgroundColor = "#fff";
            recharge.style.opacity = 1;
            gwheader.style.backgroundColor = "rgba(235,235,235,1)";
            gwheader.style.zIndex = "99";
        }
    }
});


/*
 *
 * 选择游戏系统
 */
window.addEventListener("load",function(){
    var recharge = document.getElementById("recharge");
    var gwheader = document.getElementById("gwheader");
    var gamesystem = document.getElementById("gamesystem");
    var gamesystemli = gamesystem.getElementsByTagName("li");
    var systembtn = document.getElementById("systembtn");

    systembtn.onclick = function (){
        gamesystem.style.transition="all .5s linear";
        gamesystem.style.height = "180px";
        recharge.style.backgroundColor = "rgba(0,0,0,0.5)";
        gwheader.style.backgroundColor = "rgba(0,0,0,0.5)";
        gwheader.style.zIndex = "0";
    }
    for(var i=1; i<gamesystemli.length; i++){
        gamesystemli[i].onclick = function (){
            for(var j=1; j<gamesystemli.length; j++){
                gamesystemli[j].style.color = "";
            }
            this.style.color = "#fba500";
            var text = this.innerText.substr(1);
            systembtn.value = text;
            systembtn.style.color = "#333";
            gamesystem.style.height = "0";
            recharge.style.backgroundColor = "#fff";
            recharge.style.opacity = 1;
            gwheader.style.backgroundColor = "rgba(235,235,235,1)";
            gwheader.style.zIndex = "99";
        }
    }
});


/*
 *
 * 选择充值金额ͳ
 */
window.addEventListener("load",function(){
    var recharge = document.getElementById("recharge");
    var gwheader = document.getElementById("gwheader");
    var gamerecharge = document.getElementById("gamerecharge");
    var gamerechargeli = gamerecharge.getElementsByTagName("li");
    var rechargebtn = document.getElementById("rechargebtn");
    var paymode = document.getElementById("paymode");
    var paymodeimgs = paymode.getElementsByTagName("img");

    paymodeimgs[0].onclick = function (){
        paymodeimgs[1].className = "";
        this.className = "wxzf";

    }
    paymodeimgs[1].onclick = function (){
        paymodeimgs[0].className = "";
        this.className = "zfb";
    }

    rechargebtn.onclick = function (){
        gamerecharge.style.transition="all .5s linear";
        gamerecharge.style.height = "496px";
        recharge.style.backgroundColor = "rgba(0,0,0,0.5)";
        gwheader.style.backgroundColor = "rgba(0,0,0,0.5)";
        gwheader.style.zIndex = "0";
    }
    for(var i=1; i<gamerechargeli.length; i++){
        gamerechargeli[i].onclick = function (){
            for(var j=1; j<gamerechargeli.length; j++){
                gamerechargeli[j].style.color = "";
            }
            this.style.color = "#fba500";
            var text = this.innerText.substr(1);
            rechargebtn.value = text;
            rechargebtn.style.color = "#333";
            gamerecharge.style.height = "0";
            recharge.style.backgroundColor = "#fff";
            recharge.style.opacity = 1;
            gwheader.style.backgroundColor = "rgba(235,235,235,1)";
            gwheader.style.zIndex = "99";
        }
    }
});




