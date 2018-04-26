/**
 * Created by Administrator on 2017/11/23.
 */
/*
 *充值部分
 *
 */
    window.addEventListener("load",function() {
        var spans = document.getElementById("span");
        var span = spans.getElementsByTagName("span");
        var zhifu = document.getElementById("zhifu");
        var ipay = zhifu.getElementsByTagName("i")[0];
        var b = zhifu.getElementsByTagName("b")[0];
        console.log(zhifu,i,b);
        ipay.onclick = function (){
            b.className = "";
            this.className = "onzhifubao";
        }
        b.onclick = function (){
            console.log(ipay);
            ipay.className = "";
            this.className = "onweixin";
        }

        for(var i=0; i<span.length; i++){
            span[i].onclick = function (){
                for(var j=0; j<span.length; j++){
                    span[j].className = "";
                }
                this.className = "on";
            }
        }
    });