$(document).ready(function() {
   $('.naver').mouseenter(function() {
       $(this).animate({
           width: '+=20px'
       });
	   $(this).animate({
           color: 'black'
       });
   });
   $('.naver').mouseleave(function() {
       $(this).animate({
           width: '-=20px'
       }); 
   });
});