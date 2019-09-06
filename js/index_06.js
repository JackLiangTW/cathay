$(document).ready(function(){

    $(".Member_upgrade .ugbtn").on("click",function(){$(".pp_upgrade").addClass("opens");});
    $(".Search_btn").on("click",function(){$(".pp_Search").addClass("opens");});
    $(".Close_popup").on("click",function(){$(this).parents(".popup_Alls").removeClass("opens");});
    $(".back_close").on("click",function(){$(this).parents(".popup_Alls").removeClass("opens");});
    $(".OutOfLine").on("click",function(){$(".pp_event").addClass("opens");});

    $(".S_down .ShowDatas .fa-angle-down").on("click",function(){
        $(this).toggleClass("opens");
        $(this).parent("div").siblings("div").toggleClass("opens");

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

   

});
