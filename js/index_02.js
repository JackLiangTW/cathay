
$(document).ready(function(){
    //--起始判斷 所有mo版 滑動區塊子元素(隱藏 下一頁按鈕用)
    var lll=$('.mobile_Big_out').length;
    $('.mobile_Big_out').find('.half_radius.btn_l').css('display','none');
    for(var z=0;z<lll;z++){
        var zz=$('.mobile_Big_out').eq(z).find('.mobile_S1_out').find('.move_out').find('.Sections1').length;
        if(zz==1)$('.mobile_Big_out').eq(z).find('.btn_r').css('display','none');
    }
    //--起始判斷 所有mo版 滑動區塊子元素(隱藏 下一頁按鈕用)


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

    /*手指滑動 左右業 高度鎖定返回
    var ts;//--手指滑動的判斷 
    var tops; 
    $(".mobile_S1_out .move_out").bind('touchstart', function (e){
        ts = e.originalEvent.touches[0].clientX;                
        tops=$(this).offset().top-100;
        //window.addEventListener('scroll', noScroll);
        //window.event.returnValue = false;
    });
    $(".mobile_S1_out .move_out").bind('touchend', function (e){
        //window.removeEventListener('scroll', noScroll);
        //window.event.returnValue = true;
        var te = e.originalEvent.changedTouches[0].clientX;            
        var MYele=$(this);
        if(ts > te+100){//--See Next            
            Move(1,event.target,MYele);
            //var sss=$(window).scrollTop();
            //$(window).scrollTop(tops);
            $('html, body').animate({scrollTop:tops},300);
        }else if(ts < te-100){//--See Previous                
            Move(2,event.target,MYele);
            $('html, body').animate({scrollTop:tops},300);
            
        }
    });手指滑動 左右業 高度鎖定返回
    */
   
    $('.mobile_Big_out .half_radius.btn_l').on('click',function(){//--2019/8/26 Add btn         
        var Myele=$(this).siblings('.mobile_S1_out').find('.move_out');
        Move(2,0,Myele,$(this));
    });
    $('.mobile_Big_out .half_radius.btn_r').on('click',function(){//--2019/8/26 Add btn         
        var Myele=$(this).siblings('.mobile_S1_out').find('.move_out');
        Move(1,0,Myele,$(this));
    });
    function Move(way,obj,myTouched,my_btn){    
        
        var Chnb=myTouched.children(".Sections1").length;
        if(Chnb<=0)return false;
        else{
            var S1S=myTouched.children(".Sections1");
            var Mdis=Math.round(S1S.innerWidth());
            var Mdis2=parseInt(S1S.css("margin-right")); 
            var Mdis3=parseInt(S1S.css("margin-left"));                
            var lefts = parseInt(myTouched.css("left"))*-1;//--取得滑到第幾張判斷                
            Mdis=Mdis+Mdis2+Mdis3+5;
            var newNBS=Math.round(lefts/Mdis)+1;            
            if(way==1&&newNBS<Chnb){//--看下一個                
                var MX=Mdis*newNBS*-1;
                newNBS++;
                myTouched.animate({
                    left:MX+"px",
                },300);//500
            }else if(way==2&&newNBS>1){//--上一個                
                newNBS--;
                var MX=Mdis*(newNBS-1)*-1;                
                myTouched.animate({
                    left:MX+"px",
                },300);//500
            }

            //--按鈕 最左最右邊時 隱藏
            if(way==1){
                my_btn.siblings('.half_radius.btn_l').css('display','block');//-左btn開啟
                if(newNBS>=Chnb)my_btn.css('display','none');//右關
            }else if(way==2){
                my_btn.siblings('.half_radius.btn_r').css('display','block');//-右btn開啟
                if(newNBS<=1)my_btn.css('display','none');//左關
            }
            
            myTouched.siblings(".word_nb").find("p").children("span").text(newNBS+"/"+Chnb);//--改變滑動編號
        }
    }

});
