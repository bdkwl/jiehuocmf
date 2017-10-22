$(function(){
    if(document.body.clientHeight < 630){
        //video
        $(".video-skip").css({"bottom":"70px"});
        $("#vvideo").css({"position":"relative","top":"-59px"});

    }else if(document.body.clientHeight > 630  && $(window).height() < 1120){
        //loopimg
        // $(".list-img").css({"padding-top": "310px"});
        // $("#list li .into").css({"top": "230px"});
        // $("li .list-img .intro").css({"margin-top": "50px"});
    }else if(document.body.clientHeight > 1120){
        //video
        $("#vvideo").css({"position":"relative","top":"59px"});
        $(".video-pause").css({"top":"60%"});
        $(".video-skip").css({"bottom":"-110px"});

        //loopimg
        // $(".list-img").css({"padding-top": "410px"});
        // $("#list li .into").css({"top": "330px"});
        // $("li .list-img .intro").css({"margin-top": "60px"});
    }

    //控制视频
    $("#vvideo").on("click",function(){
        if(videostate==1){
            videostate=0;
            video.pause();
            $(".video-pause").show();
            $(".video-pause").addClass("addpu");
        }else{
            videostate=1;
            video.play();
            $(".video-pause").hide();
            $(".video-pause").removeClass("addpu");
        }
    });

    $(".video-pause").on("click",function(){
        if(videostate==1){
            videostate=0;
            video.pause();
            $(".video-pause").show();
        }else{
            videostate=1;
            video.play();
            $(".video-pause").hide();
        }
    });

    $("#vvideo").addClass("animated pulse");//.next().addClass("addpu")

    var md=document.getElementsByTagName("video")[0];
    if(md.ended){
        console.log("结束");
    }
    md.addEventListener("ended",function(){
        console.log("结束");
        $(".video-skip").trigger("click");
    })
});