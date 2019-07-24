
$(document).ready(function(){
    $("#BackTop").on("click",function(){
        $('html,body').animate({scrollTop:0},800);
    });
    $(".Member_upgrade .ugbtn").on("click",function(){$(".pp_upgrade").addClass("opens");});
    $(".Search_btn").on("click",function(){$(".pp_Search").addClass("opens");});
    $(".Close_popup").on("click",function(){$(this).parents(".popup_Alls").removeClass("opens");});
    $(".back_close").on("click",function(){$(this).parents(".popup_Alls").removeClass("opens");});
    $(".OutOfLine").on("click",function(){$(".pp_event").addClass("opens");});
    $(".Little_list_btn").on("click",function(){
        $(this).toggleClass("opens");
        $(this).find(".fa").toggleClass("opens");
        $(this).siblings("span").toggleClass("opens");
        var HS=$(this).closest(".ShowDatas").innerHeight();
        $(this).closest(".S_down").animate({height:HS +"px",},400);
    });
    /*
    $(".S_down .ShowDatas .fa-angle-down").on("click",function(){
        $(this).toggleClass("opens");
        $(this).parent("div").siblings("div").toggleClass("opens");
    */
   $(".S_down .ShowDatas .Car_Style>div:first-child").on("click",function(){
        $(this).find(".fa").toggleClass("opens");
        $(this).siblings("div").toggleClass("opens");
        //---長度要還+
        var HS=$(this).closest(".ShowDatas").innerHeight();
        $(this).closest(".S_down").animate({height:HS +"px",},400);
    });
    $(".Sections1 .SeeMore").on("click",function(){
        var USED=$(this).parent(".Sections1").find(".ShowDatas");
        USED.toggleClass("opens");
        //var HS=$(this).parent(".Sections1").find(".ShowDatas").innerHeight();        
        var HS=$(this).parent(".Sections1").find(".ShowDatas").height();        
        $(this).find(".fa-angle-down").toggleClass("opens");//--icon 旋轉
        if(USED.hasClass("opens"))$(this).parent(".Sections1").find(".S_down").animate({height:HS +"px"},400);
        else{$(this).parent(".Sections1").find(".S_down").animate({height:0 +"px"},400);}
    });
    //--mobile進階搜尋
    $(".wrapper-dropdowns").on("click",function(){
        $(this).toggleClass("opens");
    });
    $(".wrapper-dropdowns .dropdown li").on("click",function(){
        var said=$(this).text();
        $(this).parent().parent().find(".says").text(said);
        $(this).parent(".wrapper-dropdowns").toggleClass("opens");
    });
    //--mobile進階搜尋

    var ts;//--手指滑動的判斷
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
