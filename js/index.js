/**
 * Created by Administrator on 2017/11/22.
 */
$(function(){
  var num = 0;//大图
  var num1 = 0;//小按钮
  var timer = 0;
  // 为了实现无缝滚动，我们需要将第一个li节点克隆一份放在Ul的最后面。
  $('.bannerBox ul').append($('.bannerBox ul li:first').clone(true));
  //封装的动画play
  function play(){
    num1++;
    if(num1 == 2)num1 = 0;
    num++;
    if(num == 3){
      // 当我们看到克隆出来的那个第一张图之后我们要迅速的扯回到第一张。
      $('.bannerBox ul').css({'left':0});
      // 再让当前的动画播放第二张图
      num = 1;
    }
    //小按钮动画
    $('.btn li').eq( num1 ).addClass('cur').siblings().removeClass('cur');
    $('.bannerBox ul').animate({'left':-num*100+'%'},500);
  }

  // 点击小按钮的动画
  $('.btn li').click(function(){
    // 在鼠标点击小按钮的时候为了让大图运动和当前运动统一
    // 我们需要将num1 num2 都更新为 index

    var index = $(this).index();

    num1 = index;
    num = index;


    // 小按钮动画
    $('.btn li').eq( num1 ).addClass('cur').siblings().removeClass('cur');

    // 改变UL 的 left 值来实现大图运动 （ -当前索引值*大图的宽度 ）
    $('.bannerBox ul').animate({'left':-num*100+'%'},500);
   

  });

  timer = setInterval(play,3000);

});

//回到顶部


