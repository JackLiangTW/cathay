$(document).ready(function(){
    $("#NavTop_mobile .menubtn").on("click",function(){
        $("#NavTop_mobile .contents_menu").toggleClass("opens");
    });
    $(".popshow").on("click",function(){
        $(".popup_Alls").addClass("opens");
    });
    $(".Close_popup").on("click",function(){
        $(".popup_Alls").removeClass("opens");
    });
    $(".back_close").on("click",function(){$(this).parents(".popup_Alls").removeClass("opens");});
    $("#BackTop").on("click",function(){
        $('html,body').animate({scrollTop:0},800);
    });

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
        console.log(Chnb);
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