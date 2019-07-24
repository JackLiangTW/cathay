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
        $("#BackTop").on("click",function(){
            $('html,body').animate({scrollTop:0},800);
        });
        //$(".showdata").on("click",function(){/*index_05*/
        $(".table_mobiles table td:last-child > div").on("click",function(){
            //-.table_mobiles
            //console.log("CCCC");
            $(this).closest(".table_mobiles").toggleClass("shows");
        });
    });