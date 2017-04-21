$(document).ready(function() {
   $('div').mouseenter(function() {
       $(this).animate({
           width: '+=15px'
       });
   });
   $('div').mouseleave(function() {
       $(this).animate({
           width: '-=15px'
       }); 
   });
   $('div').click(function() {
       $(this).toggle(1000);
   }); 
});