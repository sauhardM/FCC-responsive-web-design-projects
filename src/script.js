$(document).ready(function(){
    $.fn.appearTag = function(){ 

      $('.tags').css({'display':'inline-block',"font-size":"x-large","color":"orangered"});
    }

    $.fn.hideTag = function(){ 

        $('.tags').css({'display':'none',"font-size":"x-large"});
      }
  
      $(".project-tile").mouseover(function(){
        $.fn.appearTag();
    });

    $(".project-tile").mouseout(function(){
        $.fn.hideTag();

    });
});

