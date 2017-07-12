//准备工作
	var w = $('.container').width();
	    h = $('.container').height();
	    n = $('.banner li').length;
	    tbtn = (h/2);
	    wbox = (w/2);
		wboxleft = (w/4);
	    blmright = [wbox-(50*n)]/n;
	    i = 0;
	$(document).ready(function(){
		$('.banner').css({width:w,height:h});
		$('.banner li').css({width:w,height:h});
		$('.btn-ban').css({width:w*0.9,top:tbtn,marginLeft:w*0.05});
		$('.box').css({width:wbox,left:wboxleft});
		for(j=0;j<n;j++){
			$('.box').append('<li></li>');
		};
		$('.box li').css({marginLeft:20});
	});
	//初始化
	$(document).ready(function(){
		$('.banner li').eq(i).stop(true).fadeIn();
		$('.banner li').eq(i).siblings().stop(true).fadeOut();
		$('.box li').eq(i).css({background:'#00FA9A'});
	    $('.box li').eq(i).siblings().css({background:'rgba(188,185,185,0.50)'});
	});
	var time = setInterval('next()',2500);
	//btn next
	function next(){
		i++;
		if(i>n-1){i=0}
		$('.banner li').eq(i).stop(true).fadeIn();
		$('.banner li').eq(i).siblings().stop(true).fadeOut();
		$('.box li').eq(i).css({background:'#00FA9A'});
	    $('.box li').eq(i).siblings().css({background:'rgba(188,185,185,0.50)'});
	};
	//btn prev
	function prev(){
		i--;
		if(i<0){i=n-1}
		$('.banner li').eq(i).stop(true).fadeIn();
		$('.banner li').eq(i).siblings().stop(true).fadeOut();
		$('.box li').eq(i).css({background:'#00FA9A'});
	    $('.box li').eq(i).siblings().css({background:'rgba(188,185,185,0.50)'});
	};
	//btn
	$(document).ready(function(){
		$('.prev').click(function(){
			prev();
			clearInterval(time);
		    time=setInterval('next()',2500);
		});
		$('.next').click(function(){
			next();
			clearInterval(time);
		    time=setInterval('next()',2500);
		});
	});
	//box li
	$(document).ready(function(e){
		$('.box li').click(function(){
			var m = $(this).index();
			$('.box li').eq(m).css({background:'#00FA9A'});
			$('.box li').eq(m).siblings().css({background:'rgba(188,185,185,0.50)'});
			$('.banner li').eq(m).stop(true).fadeIn();
		        $('.banner li').eq(m).siblings().stop(true).fadeOut();
                        i = m;
			clearInterval(time);
		    time=setInterval('next()',2500);		
		});
	});
	//hover停止
	$(document).ready(function(){
		$('.banner').hover(function(){
			clearInterval(time);
		},function(){
			time=setInterval('next()',2500);
		});
	});
	$(document).ready(function(){
		$('.banner').hover(function(){
			$('.btn-ban').stop(true).fadeIn();
		},function(){
			$('.btn-ban').stop(true).fadeOut();
		});
		$('.btn-ban').hover(function(){
			$('.btn-ban').stop(true).fadeIn();
		},function(){
			$('btn-ban').stop(true).fadeOut();
		});
	});