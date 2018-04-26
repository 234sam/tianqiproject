/**
 * Created by Administrator on 2018/1/23.
 */
//�ֲ�ͼ����

window.addEventListener("load",function(){
    var width = document.body.offsetWidth;
    //            console.log(width);
    var moveUl = document.querySelector('.sliderul');
    // ������li��ǩ
    var indexLiArr = document.querySelectorAll('.number li');
    var index=1;

    // ��ȡ�Ĵ��� ��������Ŀɶ���,�Լ� ����ά�����Ѷ�
    var startTransition = function () {
        moveUl.style.transition = 'all .3s';
    }

    var endTransition = function () {
        moveUl.style.transition = '';
    }

    // ���� �ƶ��ľ��� �޷�ȷ�� ������ȡΪ����
    var setTransform = function (distance) {
        moveUl.style.transform = 'translateX('+distance+'px)';
    }

    // ������ʱ��
    var timeId = setInterval(function () {
        // �ۼ�
        index++;

        // �� ���ɿ��� �������߶�ʮһ ֻҪ���� �Ϳ������� ��֤ ����Ч��һֱ����
        // moveUl.style.transition = 'all .3s';
        startTransition();

        // �޸� ul��λ��
        // moveUl.style.transform = 'translateX('+index*width*-1+'px)';
        setTransform(index*width*-1);

    },3000);

    // ���� �����¼� ���� ���� index��ֵ ���޸�����
    moveUl.addEventListener('webkitTransitionEnd',function () {
        //console.log('���ɽ���');

        //  ��� index ̫����
        if (index>3) {
            index = 1;

            // �رչ���
            // moveUl.style.transition = '';
            endTransition();

            // ˲�� �޸�һ�� ul ��λ��
            // moveUl.style.transform = 'translateX('+index*width*-1+'px)';
            setTransform(index*width*-1);
        }else if(index<1){
            // ���������ڶ���
            index= 3;

            // �رչ���
            // moveUl.style.transition = '';
            endTransition();

            // ˲�� �޸�һ�� ul ��λ��
            // moveUl.style.transform = 'translateX('+index*width*-1+'px)';
            setTransform(index*width*-1);
        }

        // �޸� ����li��ǩ�� class
        for (var i = 0; i < indexLiArr.length; i++) {
            indexLiArr[i].className = '';
        }

        // ��һ�� 1�� ��ֵ
        indexLiArr[index-1].className = 'active';

    })

    // ע�� ���� touch�¼�

    // ������� ��¼ ��ʼ��X
    var startX = 0;

    // ��¼�ƶ���ֵ
    var moveX = 0;

    // ��¼ distanceX
    var distanceX = 0;


    // ������ʼ
    moveUl.addEventListener('touchstart',function (event) {
        // �رն�ʱ��
        clearInterval(timeId);

        // �رչ���Ч��
        // moveUl.style.transition = '';
        endTransition();

        // ��¼��ʼֵ
        startX = event.touches[0].clientX;

    })

    // ������
    moveUl.addEventListener('touchmove',function (event) {
        // �����ƶ���ֵ
        moveX = event.touches[0].clientX - startX;
        // �ƶ�ul
        // Ĭ�ϵ��ƶ�ֵ�� index*-1*width
        // moveUl.style.transform = 'translateX('+(moveX+index*-1*width)+'px)';
        setTransform(moveX+index*-1*width);
    })

    // ��������
    /*
     ��ָ�ɿ���ʱ�� �ж� �ƶ��ľ��� ���� �Ƿ�����
     ���� ����Ҫ���� ���� ֻ��Ҫ���� ���� Math.abs()
     �����ص�ֵ�� index*-1*width
     ����ƶ��ľ���ϴ�
     ��Ҫ�ж�����
     index++;
     index--;
     index*-1*width
     */
    moveUl.addEventListener('touchend',function (event) {

        // ���� ���� ƫ��ֵ
        var maxDistance = width/3;

        // �ж� �Ƿ񳬹�
        if (Math.abs(moveX)>maxDistance) {
            // �ж� ������ ���� ���������ƶ�
            if (moveX>0) {
                index--;
            }else{
                index++;
            }
            // Ϊ�˺ÿ� �� ����Ч������
            // moveUl.style.transition = 'all .3s';
            startTransition();

            // ���� һ��ҳ
            // moveUl.style.transform = 'translateX('+(index*-1*width)+'px)';
            setTransform(index*-1*width);

        }else{
            // ��� ���������� ˵�� û�г��� ���Ƕ���� ���ƫ��ֵ ������ȥ����

            // Ϊ�˺ÿ� �� ����Ч������
            // moveUl.style.transition = 'all .3s';
            startTransition();

            // ������ȥ
            // moveUl.style.transform = 'translateX('+(index*-1*width)+'px)';
            setTransform(index*-1*width);
        }

        // ��¼����ֵ

        // ������ʱ��
        timeId = setInterval(function () {
            // �ۼ�
            index++;

            // �� ���ɿ��� �������߶�ʮһ ֻҪ���� �Ϳ������� ��֤ ����Ч��һֱ����
            // moveUl.style.transition = 'all .3s';
            startTransition();

            // �޸� ul��λ��
            // moveUl.style.transform = 'translateX('+index*width*-1+'px)';
            setTransform(index*width*-1);
        },3000)
    });
});

//��Ʒ���񻬶�Ч��
$(function(){
    var $productul = $(".product_serve>ul");
    var widthli = $(".product_serve>ul>li").width();
    //console.log($productul,widthli);

    var indexli = 1;
    /*��һ��  ��*/
    $productul.on('swipeLeft',function(){
        indexli =indexli+10;
        //console.log(indexli);
        $productul.css({'transform':'translateX('+(-indexli)+'px)'});
        if(indexli >= 131){
            indexli = 131;
            $productul.css({'transform':'translateX('+(-indexli)+'px)'});
        }
    });

    /*��һ��  �һ�*/
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


//���Ŷ�̬�ֲ�ͼ
$(function(){
    var $news = $(".news");
    var width = $news.width();
    var $imgs = $(".news>ul");

    /*��������*/
    var animateFuc = function(){
        $imgs.animate({'transform':'translateX('+(-index*width)+'px)'},200,'linear',function(){
            /*�ж�����*/
            /*�޷����*/
            if(index >= 4){
                index = 1;
                /*˲��*/
                $imgs.css({'transform':'translateX('+(-index*width)+'px)'});
            }else if(index <= 0){
                index = 3;
                $imgs.css({'transform':'translateX('+(-index*width)+'px)'});
            }

            /*����  index  1-8 */
            /*2.���Ӧ�ı�*/
            //$points.removeClass('now').eq(index-1).addClass('now');
        });
    }

    /*1.�޷��ֲ� */
    var index = 1;
    var timer = setInterval(function(){
        index ++;
        /*������ת����*/
        /*4������  ��Ҫ�ı䶯�������ԣ����� ����ִ�е�ʱ��  ����ִ�е�����   ����ִ����ɻص�  */
        animateFuc();
    },5000);

    /*3.�����л�*/

    /*��һ��  �һ�*/
    $imgs.on('swipeRight',function(){
        index --;
        /*�������л�*/
        animateFuc();

    });
    /*��һ��  ��*/
    $imgs.on('swipeLeft',function(){
        index ++;
        animateFuc();
    });
});

//���Ŷ�̬
$(function(){
    var $module = $(".module");
    var width = $module.width();
    var $image = $(".all");
    var $serial = $(".module>ul>li");
    //console.log($module,width,$image);
    /*��������*/
    var slider = function(){
        $image.animate({'transform':'translateX('+(-index*width)+'px)'},200,'linear',function(){
            if(index >= 4){
                index = 1;
                /*˲��*/
                $image.css({'transform':'translateX('+(-index*width)+'px)'});
            }else if(index <= 0){
                index = 3;
                $image.css({'transform':'translateX('+(-index*width)+'px)'});
            }
            /*����  index  1-8 */
            /*2.���Ӧ�ı�*/
            $serial.removeClass('on').eq(index-1).addClass('on');
        });
    }

    /*1.�޷��ֲ� */
    var index = 1;
    var timer = setInterval(function(){
        index ++;
        /*������ת����*/
        slider();
        /*4������  ��Ҫ�ı䶯�������ԣ����� ����ִ�е�ʱ��  ����ִ�е�����   ����ִ����ɻص�  */
    },5000);

    /*3.�����л�*/

    /*��һ��  �һ�*/
    $image.on('swipeRight',function(){
        index --;
        /*�������л�*/
        slider();

    });
    //*��һ��  ��*/
    $image.on('swipeLeft',function(){
        index ++;
        slider();
    });
});


//�ײ��ֲ�ͼ
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
