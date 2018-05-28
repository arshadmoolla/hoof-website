$(document).ready(function() {

    // jQuery nav toggle
    $('.burger').bind('click',function(event){
        $('nav').slideToggle();
    });

    $(window).resize(function(){

        if($(window).width() > 805) {
            $('nav').removeAttr('style');  
        }

    });

  });
