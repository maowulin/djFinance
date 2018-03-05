$(function(){
	var flag = false; //标记移动
	var _x;
	var _y;
	$(".business ul li").mousedown(function(e){
		flag = true;
		_x=e.pageX-parseInt($(this).css("left")); 
		_y=e.pageY-parseInt($(this).css("top")); 
	});
	
	$(".business ul li").mousemove(function(e){
		var x = e.pageX - _x;
		var y = e.pageY - _y; 
		if(flag){
			$(this).css({
				"top"  : y,
				"left" : x
			});
		}
	});
	
	$(".business ul li").mouseup(function(e){
		flag = false;
	});
	
	$(".business ul li").mouseout(function(e){
		flag = false;
	});
	
	//轮播 效果
	// b1();
	function b1(){
		$(".bus_panel").delay(3000).animate({
			left : "-100%"
		}, 1000, function(){
			$(".item_1").removeClass("point_current");
			$(".item_2").addClass("point_current");
			$(".item_3").removeClass("point_current");
		}).delay(5000).animate({
			left : "-200%"
		}, 1000, function(){
			$(".item_1").removeClass("point_current");
			$(".item_2").removeClass("point_current");
			$(".item_3").addClass("point_current");
			b2();
		});
	}
	
	function b2(){
		$(".bus_panel").delay(5000).animate({
			left : "-100%"
		}, 1000, function(){
			$(".item_1").removeClass("point_current");
			$(".item_2").addClass("point_current");
			$(".item_3").removeClass("point_current");
		}).delay(5000).animate({
			left : "0"
		}, 1000, function(){
			$(".item_1").addClass("point_current");
			$(".item_2").removeClass("point_current");
			$(".item_3").removeClass("point_current");
			b1();
		});
	}
	
	$(".item_1").on("click", function(){
		$(this).addClass("point_current").siblings().removeClass("point_current");
		$(".bus_panel").css({"left" : "0"});
	});
	
	$(".item_2").on("click", function(){
		$(this).addClass("point_current").siblings().removeClass("point_current");
		$(".bus_panel").css({"left" : "-100%"});
	});
	
	$(".item_3").on("click", function(){
		$(this).addClass("point_current").siblings().removeClass("point_current");
		$(".bus_panel").css({"left" : "-200%"});
	});
	
	
	setTimeout(function(){
		$(".agency").addClass("flipInY");
		$(".financial").addClass("flipInY");
	}, 175);
	
	setTimeout(function(){
		$(".shoot").addClass("flipInY");
		$(".image3").addClass("flipInY");
		$(".adver").addClass("flipInY");
	}, 250);
	
	setTimeout(function(){
		$(".mapower").addClass("flipInY");
		$(".brand_prom").addClass("flipInY");
	}, 525);
	
	setTimeout(function(){
		$(".intell").addClass("flipInY");
		$(".image2").addClass("flipInY");
		$(".se_agen").addClass("flipInY");
	}, 700);
	
	setTimeout(function(){
		$(".legal").addClass("flipInY");
		$(".trade_regis").addClass("flipInY");
	}, 875);
	
	setTimeout(function(){
		$(".wechat_dev").addClass("flipInY");
		$(".image1").addClass("flipInY");
		$(".website_constru").addClass("flipInY");
	}, 1050);
	
	setTimeout(function(){
		$(".soft_dev").addClass("flipInY");
		$(".app_dev").addClass("flipInY");
	}, 1225);
	
	setTimeout(function(){
		$(".image4").addClass("flipInY");
	}, 1400);
});


