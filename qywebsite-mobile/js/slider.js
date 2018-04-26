/**
 * Created by Administrator on 2018/1/23.
 */
//轮播图方法

window.addEventListener("load",function(){
    var width = document.body.offsetWidth;
    //            console.log(width);
    var moveUl = document.querySelector('.sliderul');
    // 索引的li标签
    var indexLiArr = document.querySelectorAll('.number li');
    var index=1;

    // 抽取的代码 提升代码的可读性,以及 降低维护的难度
    var startTransition = function () {
        moveUl.style.transition = 'all .3s';
    }

    var endTransition = function () {
        moveUl.style.transition = '';
    }

    // 由于 移动的距离 无法确定 所以提取为参数
    var setTransform = function (distance) {
        moveUl.style.transform = 'translateX('+distance+'px)';
    }

    // 开启定时器
    var timeId = setInterval(function () {
        // 累加
        index++;

        // 将 过渡开启 管你三七二十一 只要进来 就开启过渡 保证 过渡效果一直存在
        // moveUl.style.transition = 'all .3s';
        startTransition();

        // 修改 ul的位置
        // moveUl.style.transform = 'translateX('+index*width*-1+'px)';
        setTransform(index*width*-1);

    },3000);

    // 过渡 结束事件 用来 修正 index的值 并修改索引
    moveUl.addEventListener('webkitTransitionEnd',function () {
        //console.log('过渡结束');

        //  如果 index 太大了
        if (index>3) {
            index = 1;

            // 关闭过渡
            // moveUl.style.transition = '';
            endTransition();

            // 瞬间 修改一下 ul 的位置
            // moveUl.style.transform = 'translateX('+index*width*-1+'px)';
            setTransform(index*width*-1);
        }else if(index<1){
            // 跳到倒数第二张
            index= 3;

            // 关闭过渡
            // moveUl.style.transition = '';
            endTransition();

            // 瞬间 修改一下 ul 的位置
            // moveUl.style.transform = 'translateX('+index*width*-1+'px)';
            setTransform(index*width*-1);
        }

        // 修改 索引li标签的 class
        for (var i = 0; i < indexLiArr.length; i++) {
            indexLiArr[i].className = '';
        }

        // 有一个 1的 差值
        indexLiArr[index-1].className = 'active';

    })

    // 注册 三个 touch事件

    // 定义变量 记录 开始的X
    var startX = 0;

    // 记录移动的值
    var moveX = 0;

    // 记录 distanceX
    var distanceX = 0;


    // 触摸开始
    moveUl.addEventListener('touchstart',function (event) {
        // 关闭定时器
        clearInterval(timeId);

        // 关闭过渡效果
        // moveUl.style.transition = '';
        endTransition();

        // 记录开始值
        startX = event.touches[0].clientX;

    })

    // 触摸中
    moveUl.addEventListener('touchmove',function (event) {
        // 计算移动的值
        moveX = event.touches[0].clientX - startX;
        // 移动ul
        // 默认的移动值是 index*-1*width
        // moveUl.style.transform = 'translateX('+(moveX+index*-1*width)+'px)';
        setTransform(moveX+index*-1*width);
    })

    // 触摸结束
    /*
     手指松开的时候 判断 移动的距离 进行 是否吸附
     由于 不需要考虑 正负 只需要考虑 距离 Math.abs()
     吸附回的值是 index*-1*width
     如果移动的距离较大
     需要判断正负
     index++;
     index--;
     index*-1*width
     */
    moveUl.addEventListener('touchend',function (event) {

        // 定义 最大的 偏移值
        var maxDistance = width/3;

        // 判断 是否超过
        if (Math.abs(moveX)>maxDistance) {
            // 判断 到底是 往左 还是往右移动
            if (moveX>0) {
                index--;
            }else{
                index++;
            }
            // 为了好看 将 过渡效果开启
            // moveUl.style.transition = 'all .3s';
            startTransition();

            // 吸附 一整页
            // moveUl.style.transform = 'translateX('+(index*-1*width)+'px)';
            setTransform(index*-1*width);

        }else{
            // 如果 进到这里了 说明 没有超过 我们定义的 最大偏移值 吸附回去即可

            // 为了好看 将 过渡效果开启
            // moveUl.style.transition = 'all .3s';
            startTransition();

            // 吸附回去
            // moveUl.style.transform = 'translateX('+(index*-1*width)+'px)';
            setTransform(index*-1*width);
        }

        // 记录结束值

        // 开启定时器
        timeId = setInterval(function () {
            // 累加
            index++;

            // 将 过渡开启 管你三七二十一 只要进来 就开启过渡 保证 过渡效果一直存在
            // moveUl.style.transition = 'all .3s';
            startTransition();

            // 修改 ul的位置
            // moveUl.style.transform = 'translateX('+index*width*-1+'px)';
            setTransform(index*width*-1);
        },3000)
    });
});

//产品服务滑动效果
$(function(){
    var $productul = $(".product_serve>ul");
    var widthli = $(".product_serve>ul>li").width();
    //console.log($productul,widthli);

    var indexli = 1;
    /*下一张  左滑*/
    $productul.on('swipeLeft',function(){
        indexli =indexli+10;
        //console.log(indexli);
        $productul.css({'transform':'translateX('+(-indexli)+'px)'});
        if(indexli >= 131){
            indexli = 131;
            $productul.css({'transform':'translateX('+(-indexli)+'px)'});
        }
    });

    /*上一张  右滑*/
    $productul.on('swipeRight',function(){
        if(indexli <= 131){
            indexli = indexli-10;
            //console.log(indexli);
            $productul.css({'transform':'translateX('+(-indexli)+'px)'});
            if(indexli <= 1){
                indexli = 1;
                $productul.css({'transform':'translateX('+(-indexli)+'px)'});
            }
        }
    });
});


//新闻动态轮播图
$(function(){
    var $news = $(".news");
    var width = $news.width();
    var $imgs = $(".news>ul");

    /*动画方法*/
    var animateFuc = function(){
        $imgs.animate({'transform':'translateX('+(-index*width)+'px)'},200,'linear',function(){
            /*判断索引*/
            /*无缝滚动*/
            if(index >= 4){
                index = 1;
                /*瞬间*/
                $imgs.css({'transform':'translateX('+(-index*width)+'px)'});
            }else if(index <= 0){
                index = 3;
                $imgs.css({'transform':'translateX('+(-index*width)+'px)'});
            }

            /*正常  index  1-8 */
            /*2.点对应改变*/
            //$points.removeClass('now').eq(index-1).addClass('now');
        });
    }

    /*1.无缝轮播 */
    var index = 1;
    var timer = setInterval(function(){
        index ++;
        /*动画的转起来*/
        /*4个参数  需要改变动画的属性（对象） 动画执行的时间  动画执行的数据   动画执行完成回调  */
        animateFuc();
    },5000);

    /*3.手势切换*/

    /*上一张  右滑*/
    $imgs.on('swipeRight',function(){
        index --;
        /*动画的切换*/
        animateFuc();

    });
    /*下一张  左滑*/
    $imgs.on('swipeLeft',function(){
        index ++;
        animateFuc();
    });
});

//新闻动态
$(function(){
    var $module = $(".module");
    var width = $module.width();
    var $image = $(".all");
    var $serial = $(".module>ul>li");
    //console.log($module,width,$image);
    /*动画方法*/
    var slider = function(){
        $image.animate({'transform':'translateX('+(-index*width)+'px)'},200,'linear',function(){
            if(index >= 4){
                index = 1;
                /*瞬间*/
                $image.css({'transform':'translateX('+(-index*width)+'px)'});
            }else if(index <= 0){
                index = 3;
                $image.css({'transform':'translateX('+(-index*width)+'px)'});
            }
            /*正常  index  1-8 */
            /*2.点对应改变*/
            $serial.removeClass('on').eq(index-1).addClass('on');
        });
    }

    /*1.无缝轮播 */
    var index = 1;
    var timer = setInterval(function(){
        index ++;
        /*动画的转起来*/
        slider();
        /*4个参数  需要改变动画的属性（对象） 动画执行的时间  动画执行的数据   动画执行完成回调  */
    },5000);

    /*3.手势切换*/

    /*上一张  右滑*/
    $image.on('swipeRight',function(){
        index --;
        /*动画的切换*/
        slider();

    });
    //*下一张  左滑*/
    $image.on('swipeLeft',function(){
        index ++;
        slider();
    });
});


//底部轮播图
$(function(){
    $ulwidth = $(".bottom_slider>ul");
    liwidth = $(".bottom_slider>ul>li").width();
    console.log($ulwidth,liwidth);

    var number = 0;
    var timer = setInterval(function(){
       number ++;
        $ulwidth.animate({'transform':'translateX('+(-number*liwidth)+'px)'},200,'linear',function(){
            if(number >= 3){
                number = 1;
                $ulwidth.css({'transform':'translateX('+(-number*liwidth)+'px)'});
            }
            else if(number <= 0){
                number = 3;
                $ulwidth.css({'transform':'translateX('+(-number*liwidth)+'px)'});
            }
        });
    },1500);
});
