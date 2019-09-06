var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
$(document).ready(function(){

    $("#NavTop_mobile .menubtn").on("click",function(){
        $("#NavTop_mobile .contents_menu").toggleClass("opens");
    });
    $(".table_mobiles table td:last-child > div").on("click",function(){
        if($(this).hasClass("Pic_Contents")==false)$(this).closest(".table_mobiles").toggleClass("shows");
    });
    $(".ugbtn").on("click",function(){$(".pp_upgrade").addClass("opens");});
    $(".back_close").on("click",function(){$(this).parents(".popup_Alls").removeClass("opens");});
    $("#BackTop").on("click",function(){
        $('html,body').animate({scrollTop:0},800);
    });
    $(".Search_btn").on('click',function(){
        $(".popup_Alls.pp_Search").addClass("opens");
    });
    $(".Close_popup").on("click",function(){
        $(this).parents(".popup_Alls").removeClass("opens");
    });
    $(".back_close").on("click",function(){$(this).parents(".popup_Alls").removeClass("opens");});




});