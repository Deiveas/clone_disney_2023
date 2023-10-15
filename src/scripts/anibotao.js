$(function(){
    (function anima(){
       $(".setaScroll").animate({
          "top": "8",
          "opacity": "10"
       }, 500, function(){
          $(this).animate({
             "top": "5",
             "opacity": "20"
          }, 500, function(){
             $(this).css("top", "0");
             anima();
          });
       });
    }())
 });

 