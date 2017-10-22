$(function() {
	 var os = function() {
     var ua = navigator.userAgent,
     isQB = /(?:MQQBrowser|QQ)/.test(ua), 
     isWindowsPhone = /(?:Windows Phone)/.test(ua),
     isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone, 
     isAndroid = /(?:Android)/.test(ua), 
     isFireFox = /(?:Firefox)/.test(ua), 
     isChrome = /(?:Chrome|CriOS)/.test(ua),
     isIpad = /(?:iPad|PlayBook)/.test(ua), 
     isTablet = /(?:iPad|PlayBook)/.test(ua)||(isFireFox && /(?:Tablet)/.test(ua)),
     isSafari = /(?:Safari)/.test(ua),
     isPhone = /(?:iPhone)/.test(ua) && !isTablet,
     isOpen= /(?:Opera Mini)/.test(ua),
     isUC = /(?:UCWEB|UCBrowser)/.test(ua),
     isPc = !isPhone && !isAndroid && !isSymbian;
     return {
          isQB: isQB,
          isTablet: isTablet,
          isPhone: isPhone,
          isAndroid : isAndroid,
          isPc : isPc,
          isOpen : isOpen,
          isUC: isUC,
          isIpad : isIpad
         };
        }();
    
	//swiper
	if(document.body.clientWidth < 760){
		var CaseSwiper = new Swiper('.case-wrap', {
	        nextButton: '.case-next',
	        prevButton: '.case-prev',
	        slidesPerView: 1,
	        // initialSlide :1,
	        // slidesPerView: 'auto',
	        // centeredSlides: true,
	        paginationClickable: true,
	        spaceBetween: 50,
	        loop: true,
			onSlideChangeEnd: function(swiper){
				var flag = false;
		      	$(".case-wrap video").trigger('pause');
		      	$(".case-wrap video").each(function(){
		      		$(this).attr("casevideo","0");
		      	});
		      	document.getElementsByName('videos').paused;
		      	$("a[name='pause']").find('img').attr("src",playicon);
		      	$(".case-video").removeAttr("id");
		      	$(".swiper-slide-active .case-video").attr("id","wap_video_play_main_div");
		        //$(".case-wrap .case-video").show();
		        $(".case-video").attr("casevideo","0");
		        main_div = $("#wap_video_play_main_div");
        	    if($(".swiper-slide-active video").attr("caseslide") == 0){
				    if (os.isPc){	
				    	setControl();
				    }
				    $(".swiper-slide-active video").attr("caseslide","1");
	        	}
		    
		    }
	    });

	}else{
		var CaseSwiper = new Swiper('.case-wrap', {
	        nextButton: '.case-next',
	        prevButton: '.case-prev',
	        initialSlide :1,
	        slidesPerView: 'auto',
	        centeredSlides: true,
	        paginationClickable: true,
	        spaceBetween: 50,
	        loop: true,
		onSlideChangeEnd: function(swiper){
			var flag = false;
	      	$(".case-wrap video").trigger('pause');
	      	$(".case-wrap video").each(function(){
	      		$(this).attr("casevideo","0");
	      	});
	      	document.getElementsByName('videos').paused;
	      	$("a[name='pause']").find('img').attr("src",playicon);
	        //$(".case-wrap .case-video").show();
	        $(".case-video").removeAttr("id");
		    $(".swiper-slide-active .case-video").attr("id","wap_video_play_main_div");

	        $(".case-video").attr("casevideo","0");
	        main_div = $("#wap_video_play_main_div");
	        if($(".swiper-slide-active video").attr("caseslide") == 0){
	        	setTimeout(function(){
			    	setControl()
			    }, 20);
			    $(".swiper-slide-active video").attr("caseslide","1");
	        }
		    
	    }
	    });
	}
    

 //    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
 
	// } else {
	   
	// }
  
    	if (os.isPc){
           //video console
			setTimeout(function(){
				$(".case-video").each(function(){
					var vwidth = $(this).find("video.enclosure").css("width");
					$(this).find(".the3ctv_video_control").css({"width":vwidth});
				})
			},100)
			var flag = false;
			var main_div = $("#wap_video_play_main_div");
			main_div = $("#wap_video_play_main_div");

		    var initProgressBar = function(){        //进度条相关操作
		         
		         var video = $("video",main_div);
		         var timeDrag = false;   /* Drag status */
		         $("span[name='progress']",main_div).mousedown(function(e) {     //进度条的按下操作
		            timeDrag = true; 
		            updatebar(e.pageX);
		         });
		         $(document).mouseup(function(e) {               //松开
		            if(timeDrag) {
		               timeDrag = false;
		               updatebar(e.pageX);
		            }
		         });
		         $(document).mousemove(function(e) {  //鼠标移动事件
		            if(timeDrag) {
		               updatebar(e.pageX);
		            }
		         });

		         var updatebar = function(x) {  //更新时间与播放条进度
		            var progress = $("span[name='progress']",main_div);
		            var maxduration = video[0].duration; //Video duraiton
		            var position = x - progress.offset().left; //Click pos
		            var percentage = 100 * position / progress.width();
		            if(percentage > 100) {
		               percentage = 100;
		            }
		            if(percentage < 0) {
		               percentage = 0;
		            }
		            $("span b:eq(0)",main_div).css('width', percentage+'%');
		            video[0].currentTime = maxduration * percentage / 100;
		            if(percentage==100){
		                $("a[name='pause'] img",main_div).attr("src",playicon)
		            }
		         };
		         $('u img',main_div).unbind().bind('click', function() {             //控制视频全屏与退出全屏
		           //For Webkit
		           video[0].webkitEnterFullscreen();

		           //For Firefox
		           video[0].mozRequestFullScreen();
		           video[0].controls=false;
		           return false;
		        });
		     }
		    var initTimeLength = function(timeLength){             //根据秒数格式化时间
		        timeLength = parseInt(timeLength);
		        var second = timeLength%60;
		        var minute = (timeLength-second)/60;
		        return (minute<10?"0"+minute:minute)+":"+(second<10?"0"+second:second);
		    }
		    var initVideo = function(player){
					flag = true;
		            

		            main_div = $("#wap_video_play_main_div");
		        	$("a[name='pause']",main_div).click(function(){
						var audio =  document.getElementById("bgmusic");
						musicstate=0;
						audio.pause();
						$(".mbg").hide();

		        	//main_div.on("click","a[name='pause']",function(){    //暂停   继续
		                var video = $("video",main_div);
		                	voff = video.attr("casevideo");
		                	//console.log(voff);
			                if(voff == 0) {
			                    video[0].play();
			                    video.attr("casevideo","1");
			            		$("img",$(this)).attr("src", pauseicon);
			                };
			                if(voff == 1)  {
			                     video[0].pause();
			                     video.attr("casevideo","0");
			                     $("img",$(this)).attr("src",playicon);

			                }
			                //alert(voff);
			                return false;
			             	

		            });
		            $("video",main_div).on('loadedmetadata', function() {       //获取全部视频长度
		                var video = $("video",main_div);
		               $("i:eq(1)",main_div).html(initTimeLength(video[0].duration));
		            });
		            $("video",main_div).on('timeupdate', function() {           //实时更新播放进度条和时间
		                var video = $("video",main_div);
		                var currentPos = video[0].currentTime; //Get currenttime    //当前时间
		                var maxduration = video[0].duration; //Get video duration   //总时间
		                var percentage = 100 * currentPos / maxduration; //in %
		                $("i:eq(0)",main_div).html(initTimeLength(video[0].currentTime));
		                $("span b:eq(0)",main_div).css("width",percentage+"%");
		                $("i:eq(1)",main_div).html(initTimeLength(video[0].duration));
		                if(currentPos==maxduration){
		                    $("a[name='pause'] img",main_div).attr("src", playicon);
		                }
		            });
		            var startBuffer = function() {                       //预加载视频的
		                var video = $("video",main_div);
		                var maxduration = video[0].duration;
		                var currentBuffer = video[0].buffered.end(0);
		                var percentage = 100 * currentBuffer / maxduration;
		                $("span b:eq(2)").css('width', percentage+'%');
		                if(currentBuffer < maxduration) {
		                  setTimeout(startBuffer, 500);
		                }
		            };
		            initProgressBar();
		    }
		    var setControl = function(){
		        initVideo();
		    }
		    $(function(){
		        main_div = $("#wap_video_play_main_div");
		       setControl();
		    });
        }
        else if(os.isPhone){
        	//case video
	    	$(".the3ctv_video_control").hide();
			$(".case-video").click(function(){
				if($(this).parent().is(".swiper-slide-active")){
					if($(this).attr("casevideo") == 1){
						$(this).attr("casevideo","0");
						//$(this).find(".case-pause").show();
						$(this).find("video").trigger('pause');
						//$(this).find("video").addClass('pause');
					}else{
						 $(this).attr("casevideo","1");
						 $(".case-video video").trigger('pause');
						 //$(".case-video video").addClass('pause');
						 //$(".case-pause").show();
						 $(this).find("video").trigger('play');
						 //$(this).find("video").addClass('play');
						 //$(this).find(".case-pause").hide();
					}
				}
			});
        }
        else if(os.isAndroid){
        	//case video
	    	$(".the3ctv_video_control").hide();
			$(".case-video").click(function(){
				if($(this).parent().is(".swiper-slide-active")){
					if($(this).attr("casevideo") == 1){
						$(this).attr("casevideo","0");
						//$(this).find(".case-pause").show();
						$(this).find("video").trigger('pause');
						//$(this).find("video").addClass('pause');
					}else{
						 $(this).attr("casevideo","1");
						 $(".case-video video").trigger('pause');
						 //$(".case-video video").addClass('pause');
						 //$(".case-pause").show();
						 $(this).find("video").trigger('play');
						 //$(this).find("video").addClass('play');
						 //$(this).find(".case-pause").hide();
					}
				}
			});
        }
        else{
            //case video
	    	$(".the3ctv_video_control").hide();
			$(".case-video").click(function(){
				if($(this).parent().is(".swiper-slide-active")){
					if($(this).attr("casevideo") == 1){
						$(this).attr("casevideo","0");
						//$(this).find(".case-pause").show();
						$(this).find("video").trigger('pause');
						//$(this).find("video").addClass('pause');
					}else{
						 $(this).attr("casevideo","1");
						 $(".case-video video").trigger('pause');
						 //$(".case-video video").addClass('pause');
						 //$(".case-pause").show();
						 $(this).find("video").trigger('play');
						 //$(this).find("video").addClass('play');
						 //$(this).find(".case-pause").hide();
					}
				}
			});
        } 



	//调整屏幕
	//console.log(document.body.clientHeight);
	if(document.body.clientHeight < 630){
		//笔记
		//$("#vvideo").css({"position":"relative","top":"-59px"});
		$(".title-box h1").css({"font-size":"26px","margin-bottom":"8px"});
		$(".title-box p").css({"font-size":"16px","line-height":"20px"});
		$(".case-wrap video").css({"margin":"8px 0 0","height":"300px"});
		$(".case-button div").css({"margin":"10px 30px"});
	}else if(document.body.clientHeight > 630  && $(window).height() < 1120){
		//普通
		//$(".list-img").css({"padding-top": "310px"});  
		
	}else if(document.body.clientHeight > 1120){
		//超大
		//$("#vvideo").css({"position":"relative","top":"59px"});
		
	}
	//手机
	
	if(document.body.clientWidth < 760){
		//手机
	    $(".container").css({"margin-top":"20px"});
		// $(".logo img").css({"width":"200px"});
		$(".case-wrap").css({"width":"100%"});
		$(".case-wrap .swiper-slide").css({"width":"100%"});
		$(".title-box").css({"width":"100%"});
		$(".title-box h1").css({"padding":"0 20px"});
		$(".title-box p").css({"padding":"0 20px"});
		$(".case-wrap video").css({"width":"90%","height":"220px "});
		$(".case-pause").remove();
	}
});