$(function() {
    //tab
    $(".intro-nav li").each(function (i) {
        $(this).hover(function () {
			$(".intro-nav li").find("a").removeClass("cur"); 
			$(this).find('a').addClass("cur");
            $(".intro-main").hide(); 
            $(".intro-main").addClass("intro-hide"); 
            $(".intro-main").eq(i).removeClass("intro-hide").show();
        }, function () { });
    })

	//调整屏幕
	if(document.body.clientHeight < 630){
		//笔记
		$(".title-box h1").css({"font-size":"26px","margin-bottom":"8px"});
		$(".title-box p").css({"font-size":"16px","line-height":"20px"});
		$(".intro-content").css({"height":"268px","overflow-y":"auto"});
		$('.contact-item img').css({"width":"165px"}); 
		
	}else if(document.body.clientHeight > 630  && $(window).height() < 1120){
		//普通
		
	}else if(document.body.clientHeight > 1120){
		//超大
		
	}
	//手机
	
	if(document.body.clientWidth < 760){
		//手机
	    $(".container").css({"margin-top":"20px"});
		//$(".logo img").css({"width":"200px"});
		if($(".wrapper").height()< document.body.clientHeight){
			$(".wrapper").css({"min-height":document.body.clientHeight+"px"});
		}
	}
});