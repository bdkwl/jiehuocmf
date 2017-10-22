$(function() {
	// 控制音乐
	var musicstate=1;
	var audio =  document.getElementById("bgmusic");
	$("#music").on("click",function(){
		if(musicstate==1){
			musicstate=0;
			audio.pause();
			$(".mbg").hide();
		}else{
			musicstate=1;
			audio.play();
			$(".mbg").show();
		}
	});

	$(".back-box").click(function(){
		window.history.back(-1); 
	});
    $(".bgm").addClass("showtime");
	$('.foot-nav').addClass('shownav');
});