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

    var picker0 = new Pikaday({
        field: $('#Start_days')[0],
        format: 'D/M/YYYY',
        toString(date, format) {            
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            //return `${day}/${month}/${year}`;
            return `${year}/${month}/${day}`;
        },
        parse(dateString, format) {
            const parts = dateString.split('/');
            const day = parseInt(parts[0], 10);
            const month = parseInt(parts[1], 10) - 1;
            const year = parseInt(parts[2], 10);
            //return new Date(year, month, day);
            return new Date(year, month, day);
        }
    });
    var picker1 = new Pikaday({
        field: $('#End_days')[0],
        format: 'D/M/YYYY',
        toString(date, format) {            
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            //return `${day}/${month}/${year}`;
            return `${year}/${month}/${day}`;
        },
        parse(dateString, format) {
            const parts = dateString.split('/');
            const day = parseInt(parts[0], 10);
            const month = parseInt(parts[1], 10) - 1;
            const year = parseInt(parts[2], 10);
            //return new Date(year, month, day);
            return new Date(year, month, day);
        }
    });

});