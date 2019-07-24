$(document).ready(function(){

    $(".Member_upgrade .ugbtn").on("click",function(){$(".pp_upgrade").addClass("opens");});
    $(".Close_popup").on("click",function(){$(this).parents(".popup_Alls").removeClass("opens");});
    $(".back_close").on("click",function(){$(this).parents(".popup_Alls").removeClass("opens");});
    $(".OutOfLine").on("click",function(){$(".pp_event").addClass("opens");});
    $("#BackTop").on("click",function(){
        $('html,body').animate({scrollTop:0},800);
    });
    $(".Little_list_btn").on("click",function(){
        $(this).toggleClass("opens");
        $(this).find(".fa").toggleClass("opens");
        $(this).siblings("span").toggleClass("opens");
        var HS=$(this).closest(".ShowDatas").innerHeight();
        $(this).closest(".S_down").animate({height:HS +"px",},400);
    });
    //$(".S_down .ShowDatas .fa-angle-down").on("click",function(){Car_Style
    $(".S_down .ShowDatas .Car_Style>div:first-child").on("click",function(){
        //$(this).toggleClass("opens");
        //$(this).parent("div").siblings("div").toggleClass("opens");
        $(this).find(".fa").toggleClass("opens");
        $(this).siblings("div").toggleClass("opens");

        //---長度要還+
        var HS=$(this).closest(".ShowDatas").innerHeight();
        $(this).closest(".S_down").animate({height:HS +"px",},400);
    });
    $(".Sections1 .SeeMore").on("click",function(){
        var HS=$(this).parent(".Sections1").find(".ShowDatas").innerHeight();
        var USED=$(this).parent(".Sections1").find(".ShowDatas");
        USED.toggleClass("opens");
        $(this).find(".fa-angle-down").toggleClass("opens");//--icon 旋轉
        if(USED.hasClass("opens"))$(this).parent(".Sections1").find(".S_down").animate({height:HS +"px",},400);
        else{$(this).parent(".Sections1").find(".S_down").animate({height:0 +"px",},400);}
    });

    var ts;//--手指滑動的判斷
    //var WhichNB=1;//--看到第幾張
    $(".mobile_S1_out .move_out").bind('touchstart', function (e){ts = e.originalEvent.touches[0].clientX;});

    $(".mobile_S1_out .move_out").bind('touchend', function (e){
        var te = e.originalEvent.changedTouches[0].clientX;            
        var MYele=$(this);
        if(ts > te+100){//--See Next            
            Move(1,event.target,MYele);
        }else if(ts < te-100){//--See Previous                
            Move(2,event.target,MYele);
        }
    });
    function Move(way,obj,myTouched){
        /*
        var nbs=$(".mobile_S1_out .move_out").children().length;
        var Mdis=$(".mobile_S1_out .move_out .Sections1").innerWidth();
        var Mdis2=parseInt($(".mobile_S1_out .move_out .Sections1").css("margin-right"));                
        */
       var Chnb=myTouched.children(".Sections1").length;
        if(Chnb<=0)return false;
        else{
            var S1S=myTouched.children(".Sections1");        
            var Mdis=Math.round(S1S.innerWidth());
            var Mdis2=parseInt(S1S.css("margin-right"));                
            var lefts = parseInt(myTouched.css("left"))*-1;//--取得滑到第幾張判斷                
            Mdis=Mdis+Mdis2+5;
            var newNBS=Math.round(lefts/Mdis)+1;            
            if(way==1&&newNBS<Chnb){//--看下一個
                var MX=Mdis*newNBS*-1;
                newNBS++;
                myTouched.animate({
                    left:MX+"px",
                },500);
            }else if(way==2&&newNBS>1){//--上一個
                newNBS--;
                var MX=Mdis*(newNBS-1)*-1;                
                myTouched.animate({
                    left:MX+"px",
                },500);
            }
            myTouched.siblings(".word_nb").find("p").children("span").text(newNBS+"/"+Chnb);//--改變滑動編號
        }
    }


});