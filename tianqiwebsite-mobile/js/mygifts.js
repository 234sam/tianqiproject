/**
 * Created by Administrator on 2017/12/19.
 */

/*
 *
 * 我的礼包加载更多部分
 */
window.addEventListener("load",function(){
    var mygifts = document.getElementById("mygiftsinformation_ul");
    var mygiftsli = mygifts.children;
    var mygiftsspanbtn = document.getElementById("mygiftsspanbtn");
    //console.log(mygifts,mygiftsspanbtn,mygiftsli);

    var mygiftscreateli;


    mygiftsspanbtn.onclick = function (){
        this.style.display = "none";
        for(var i=0;i<5;i++){
            mygiftscreateli = document.createElement("li");
            mygiftscreateli = mygiftsli[i].cloneNode(true);
            //                console.log(createli);
            mygifts.appendChild(mygiftscreateli);
        }
    }
});

