$(function(){
    //console.log(document.body.clientHeight);
    if(document.body.clientHeight < 630){
        //video
        // $(".video-skip").css({"bottom":"70px"});
        // $("#vvideo").css({"position":"relative","top":"-59px"});

    }else if(document.body.clientHeight > 630  && $(window).height() < 1120){
        //loopimg
        $(".list-img").css({"padding-top": "310px"});
        $("#list li .into").css({"top": "230px"});
        $("li .list-img .intro").css({"margin-top": "50px"});
    }else if(document.body.clientHeight > 1120){
        //video
        // $("#vvideo").css({"position":"relative","top":"59px"});
        // $(".video-pause").css({"top":"60%"});
        // $(".video-skip").css({"bottom":"-110px"});

        //loopimg
        $(".list-img").css({"padding-top": "410px"});
        $("#list li .into").css({"top": "330px"});
        $("li .list-img .intro").css({"margin-top": "60px"});
    }

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

    setTimeout(function(){
        $(".loop-album").show();
        $("#list li").hide();
        // bgm
        $(".bgm").addClass("showtime");
        musicstate=1;
        audio.play();
        $(".mbg").show();

        $("#list li").each(function(i){
            var ssv = $("#list li").eq(i).css("top");
            $("#list li").eq(i).css({"top":"1200px"});

            setTimeout(function(){
                $("#list li").eq(i).show().css({"top":ssv}).addClass("animated pulse");
            },i*500)
        })
        // $(".video-wrap video").hide().removeClass("bounceOut");
        // $(".video-pause").hide().removeClass("bounceOut");

        setTimeout(function(){
            $(".company-intro").show().addClass("animated pulse");

            if (document.body.clientWidth > 480)  {
                $("#list li.hove .into").addClass("showinto animated pulse");
                scrimg = $("#list li.hove img").attr('scrbg');
                hovimg = $("#list li.hove img").attr('scrhov');
                $(".wrapper").css({"background-image":"url("+scrimg+")","background-size":"100% 100%"});
                setTimeout(function(){
                    $("#list").addClass("filt");
                    $(".foot-nav").addClass("shownav");
                    $(".company-intro").removeClass("pulse");
                    $("#list li.hove .into").removeClass(" pulse");
                    $("li.hove .list-img .intro").removeClass("pulse");

                },1000)
            }

        },4000)
    },1000)

    if (document.body.clientWidth > 480)  {
        // 首页轮播图
        $("#list li").on('click',function(){
            $("#list li .into").removeClass("showinto");
            $("li .list-img .intro").removeClass("showinto");
            if(typeof($(this).find("a").attr("href")) == "undefined"){
                $("#list li a").removeAttr("href");
                $("#list li.hove a").attr("href",$(this).attr("srcc"));

                setTimeout(function(){
                    scrimg = $("#list li.hove img").attr('scrbg');
                    hovimg = $("#list li.hove img").attr('scrhov');
                    setTimeout(function(){
                        $(".wrapper").css({"background-image":"url("+scrimg+")","background-size":"100% 100%"});
                    },20)
                },200)

            }else{
                window.location.href= $(this).find("a").attr("href");
            }
            setTimeout(function(){
                $("#list li.hove .into").addClass("showinto");
                //$("li.hove .list-img .intro").addClass("showinto");
                $('#company-p').text( $("li.hove .list-img .intro").text() );
            },200)
        });

        $("#list li img").hover(function(){
            // if($(this).is('.hove')){
            scrimg = $(this).attr('scrbg');
            hovimg = $(this).attr('scrhov');

            setTimeout(function(){
                $(".wrapper").css({"background-image":"url("+hovimg+")","background-size":"100% 100%"});
            },20);
            // }else{

            // }
        },function(){
            $(".wrapper").css({"background-image":"url("+scrimg+")","background-size":"100% 100%"});
        });

        //轮播图
        window.onload = function(){
            var oBut = document.getElementById('list');
            var aLi = oBut.getElementsByTagName('li');
            var aA = oBut.getElementsByTagName('a');
            var i = iNow = 0;
            var timer = null;
            var aSort = [];
            if(document.body.clientWidth < 630){
                var aPosition = [
                    {width:246,height:100,top:-20,left:60,zIndex:10,transform:0},//3
                    {width:246,height:100,top:0,left:108,zIndex:8,transform:-3},//2
                    {width:246,height:100,top:15,left:120,zIndex:6,transform:-4},//1
                    {width:246,height:100,top:25,left:140,zIndex:5,transform:1},//0
                    {width:246,height:100,top:25,left:-60,zIndex:5,transform:4},//6
                    {width:246,height:100,top:15,left:-20,zIndex:6,transform:3.5},//5
                    {width:246,height:100,top:0,left:20,zIndex:8,transform:3},//4
                ]
            } else {
                var aPosition = [
                    {width:344,height:180,top:0,left:342,zIndex:10,transform:0},//3
                    {width:280,height:160,top:10,left:148,zIndex:8,transform:-3},//2
                    {width:264,height:140,top:20,left:40,zIndex:6,transform:-4},//1
                    {width:234,height:130,top:30,left:-40,zIndex:5,transform:1},//0
                    {width:234,height:130,top:30,left:884,zIndex:5,transform:4},//6
                    {width:264,height:140,top:20,left:774,zIndex:6,transform:3.5},//5
                    {width:280,height:160,top:10,left:630,zIndex:8,transform:3},//4


                ]
            }


            for(i=0;i<aLi.length;i++){
                aLi[i].index = i;
                aLi[i].style.width = aPosition[i].width +'px';
                aLi[i].style.height = aPosition[i].height +'px';
                aLi[i].style.top = aPosition[i].top +'px';
                aLi[i].style.left = aPosition[i].left +'px';
                aLi[i].style.zIndex = aPosition[i].zIndex;
                aSort[i] = aPosition[i];
                myAddEvent(aLi[i], 'click', function(){
                    var iSort = this.index;
                    iNow = this.index;
                    Sort();
                    for(i=0;i<iSort;i++){
                        aSort.unshift(aSort.pop());
                    }
                    sMove();
                });
            }


            function Sort(){
                for(i=0;i<aLi.length;i++){
                    aSort[i] = aPosition[i];
                }
            }
            function sMove(){
                for(i=0;i<aLi.length;i++){
                    startMove(aLi[i], aSort[i]);
                    aLi[i].className = '';
                }
                aLi[iNow].className = 'hove';
            }
        };
        // 首页轮播图 end

        function getClass(oParent, sClass){
            var aElem = document.getElementsByTagName('*');
            var aClass = [];
            var i = 0;
            for(i=0;i<aElem.length;i++)if(aElem[i].className == sClass)aClass.push(aElem[i]);
            return aClass;
        }
        function myAddEvent(obj, sEvent, fn){
            if(obj.attachEvent){
                obj.attachEvent('on' + sEvent, function(){
                    fn.call(obj);
                });
            }else{
                obj.addEventListener(sEvent, fn, false);
            }
        }
        function startMove(obj, json, fnEnd){
            if(obj.timer)clearInterval(obj.timer);
            obj.timer = setInterval(function (){
                doMove(obj, json, fnEnd);
            }, 30);
        }
        function getStyle(obj, attr){
            return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
        }
        function doMove(obj, json, fnEnd){
            var iCur = 0;
            var attr = '';
            var bStop = true;
            for(attr in json){
                attr == 'opacity' ? iCur = parseInt(100*parseFloat(getStyle(obj, 'opacity'))) : iCur = parseInt(getStyle(obj, attr));
                if(isNaN(iCur))iCur = 0;
                if(navigator.userAgent.indexOf("MSIE 8.0") > 0){
                    var iSpeed = (json[attr]-iCur) / 3;
                }else{
                    var iSpeed = (json[attr]-iCur) / 5;
                }
                iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
                if(parseInt(json[attr])!=iCur)bStop = false;
                if(attr=='opacity'){
                    obj.style.filter = "alpha(opacity:"+(iCur+iSpeed)+")";
                    obj.style.opacity = (iCur + iSpeed) / 100;
                }else{
                    attr == 'zIndex' ? obj.style[attr] = iCur + iSpeed : obj.style[attr] = iCur + iSpeed +'px';
                }
            }
            if(bStop){
                clearInterval(obj.timer);
                obj.timer = null;
                if(fnEnd)fnEnd();
            }
        }
    }

});