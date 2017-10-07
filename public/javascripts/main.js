
$(function(){
	//VI设计案例展示
	var brandHtml = '';
		
	for(var i = 0; i < 30; i++){
		var imageUrl = "url('/images/vi/VI"+i+".jpg')";
		brandHtml += '<div class="barand_group">'
							+'<div class="">'
							+'<img src="/images/vi/VI'+i+'.jpg" />'
							+'</div>'
							+'<span class="logo_desgin">'+'LOGO设计'+'</span>'
						+'</div>';
	}
	
	$(".brand_case").html(brandHtml);
	
	$(".barand_group").on("click", function(){
		imgUrl = $(this).children("div").children("img").attr("src");
		
		var showHtml = '<!--位置-->'
			+'<div class="current_posi">'
				+'<span>当前位置：</span>'
				+'<a href="/">网站首页</a>'
				+'<span> > </span>'
				+'<a href="/vi">VI设计</a>'
				+'<span> > </span>'
				+'<a href="javascript:void(0)">案例展示</a>'
			+'</div>'
			+'<div class="bard_popups">'
				+'<img src="'+imgUrl+'"/>'
			+'</div>';
			
		$(".page").html(showHtml);	
	});
});
