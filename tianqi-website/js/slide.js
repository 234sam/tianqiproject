/**
 *顶部轮播图
 */

    window.addEventListener("load",function() {
        //1.获取事件源及相关元素。（老三步）
        var all = document.getElementById("all");
        var screen = all.firstElementChild || all.firstChild;
        var imgWidth = screen.offsetWidth;
        var ul = screen.firstElementChild || screen.firstChild;
        var ol = screen.children[1];
        var div = screen.lastElementChild || screen.lastChild;
        var spanArr = div.children;

        //2.复制第一张图片所在的li,添加到ul的最后面。
        var ulNewLi = ul.children[0].cloneNode(true);
        ul.appendChild(ulNewLi);
        //3.给ol中添加li，ul中的个数-1个，并点亮第一个按钮。
        for(var i=0;i<ul.children.length-1;i++){
            var olNewLi = document.createElement("li");
            olNewLi.innerHTML = i+1;
            ol.appendChild(olNewLi)
        }
        var olLiArr = ol.children;
        olLiArr[0].className = "current";

        //4.鼠标放到ol的li上切换图片
        for(var i=0;i<olLiArr.length;i++){
            //自定义属性，把索引值绑定到元素的index属性上
            olLiArr[i].index = i;
            olLiArr[i].onmouseover = function () {
                //排他思想
                for(var j=0;j<olLiArr.length;j++){
                    olLiArr[j].className = "";
                }
                this.className = "current";
                //鼠标放到小的方块上的时候索引值和key以及square同步
//                    key = this.index;
//                    square = this.index;
                key = square = this.index;
                //移动盒子
                animate(ul,-this.index*imgWidth);
            }
        }

        //5.添加定时器
        var timer = setInterval(autoPlay,5000);

        //固定向右切换图片
        //两个定时器（一个记录图片，一个记录小方块）
        var key = 0;
        var square = 0;
        function autoPlay(){
            //通过控制key的自增来模拟图片的索引值，然后移动ul
            key++;
            if(key>olLiArr.length){
                //图片已经滑动到最后一张，接下来，跳转到第一张，然后在滑动到第二张
                ul.style.left = 0;
                key = 1;
            }
            animate(ul,-key*imgWidth);
            //通过控制square的自增来模拟小方块的索引值，然后点亮盒子
            //排他思想做小方块
            square++;
            if(square>olLiArr.length-1){//索引值不能大于等于5，如果等于5，立刻变为0；
                square = 0;
            }
            for(var i=0;i<olLiArr.length;i++){
                olLiArr[i].className = "";
            }
            olLiArr[square].className = "current";
        }

        //鼠标放上去清除定时器，移开后在开启定时器
        all.onmouseover = function () {
            div.style.display = "block";
            clearInterval(timer);
        }
        all.onmouseout = function () {
            div.style.display = "none";
            timer = setInterval(autoPlay,5000);
        }

        //6.左右切换图片（鼠标放上去显示，移开隐藏）
        spanArr[0].onclick = function () {
            //通过控制key的自增来模拟图片的索引值，然后移动ul
            key--;
            if(key<0){
                //先移动到最后一张，然后key的值取之前一张的索引值，然后在向前移动
                ul.style.left = -imgWidth*(olLiArr.length)+"px";
                key = olLiArr.length-1;
            }
            animate(ul,-key*imgWidth);
            //通过控制square的自增来模拟小方块的索引值，然后点亮盒子
            //排他思想做小方块
            square--;
            if(square<0){//索引值不能大于等于5，如果等于5，立刻变为0；
                square = olLiArr.length-1;
            }
            for(var i=0;i<olLiArr.length;i++){
                olLiArr[i].className = "";
            }
            olLiArr[square].className = "current";
        }
        spanArr[1].onclick = function () {
            //右侧的和定时器一模一样
            autoPlay();
        }

        function animate(ele,target){
            clearInterval(ele.timer);
            var speed = target>ele.offsetLeft?10:-10;
            ele.timer = setInterval(function () {
                var val = target - ele.offsetLeft;
                ele.style.left = ele.offsetLeft + speed + "px";
                if(Math.abs(val)<Math.abs(speed)){
                    ele.style.left = target + "px";
                    clearInterval(ele.timer);
                }
            },5)
        }
    });

/*
 *新闻信息轮播图
 *
 */
    window.addEventListener("load",function() {
        var box = document.getElementById("newsinfo-r");
        var imgWidth = box.children[0].offsetWidth;
        var ul = box.children[0].children[0];
        var boxLeftRight = box.children[1];
        var btnArr = boxLeftRight.children;

        //鼠标放上去显示，移开隐藏
        //box.onmouseover = function () {
        //    boxLeftRight.style.display = "block";
        //}
        //box.onmouseout = function () {
        //    boxLeftRight.style.display = "block";
        //}

        //2.点击右侧盒子图片向做移动并用计数器模拟index值。
        //定义计数器
        var index = 0;

        btnArr[1].onmousedown  = function () {
            this.className="current";
            index++;
            //我们要对index的值进行约束。index的值必须在[0,4]
            if(index>ul.children.length-1){
                index = ul.children.length-1;
                alert("到头了！");
            }
            //点击盒子以后移动图片（ul，和目标位置）
            animate(ul,-index*imgWidth);
        }
        btnArr[1].onmouseup   = function () {
            this.className="";
        }

        //3，点击左侧盒子，同理。
        btnArr[0].onmousedown = function () {
            this.className="current";
            index--;
            if(index<0){
                index = 0;
                alert("第一张！");
            }
            //点击盒子以后移动图片（ul，和目标位置）
            animate(ul,-index*imgWidth);
        }
        btnArr[0].onmouseup  = function () {
            this.className="";
        }


        function animate(ele,target){
            clearInterval(ele.timer);
            var speed = target>ele.offsetLeft?10:-10;
            ele.timer = setInterval(function () {
                var val = target - ele.offsetLeft;
                ele.style.left = ele.offsetLeft + speed + "px";
                if(Math.abs(val)<Math.abs(speed)){
                    ele.style.left = target + "px";
                    clearInterval(ele.timer);
                }
            },10)
        }
    });

/*
 *侧边栏部分
 *
 */
    window.addEventListener("load",function() {
        //window.onscroll = function()
        //    {
        //        //可视区尺寸
        //        var clientW = document.documentElement.clientWidth;
        //        var clientH = document.documentElement.clientHeight;
        //        console.log(clientH);
        //        //滚动距离
        //        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // IE,FF || chrome
        //        //alert(scrollTop);
        //        oDiv = document.getElementById('sidebar');
        //        if(scrollTop>957){
        //            oDiv.style.top = clientH - oDiv.offsetHeight + scrollTop + 'px';//document.navigater.userAgent判断浏览器类型,IE6使用fixed定位
        //        }
        //    }

        var sidebar = document.getElementById("sidebar");
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // IE,FF || chrome
        window.onscroll = function() {
                animate(sidebar,scroll().top+620);
        }
        function animate(obj,target) {
            clearInterval(obj.timer);
            obj.timer = setInterval(function() {
                // 运动公式  leader = leader + (target - leadaer) / 10
                var step = (target - obj.offsetTop) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                obj.style.top = obj.offsetTop + step + "px";
                if(target == obj.offsetTop) {
                    clearInterval(obj.timer);
                }
            },30)
        }

        function scroll() {  // 开始封装自己的scrollTop
            if(window.pageYOffset != null) {  // ie9+ 高版本浏览器
                // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
                return {
                    left: window.pageXOffset,
                    top: window.pageYOffset
                }
            }
            else if(document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
                return {
                    left: document.documentElement.scrollLeft,
                    top: document.documentElement.scrollTop
                }
            }
            return {   // 未声明 DTD
                left: document.body.scrollLeft,
                top: document.body.scrollTop
            }
        }
    });

