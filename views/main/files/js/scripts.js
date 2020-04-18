// scroll
jQuery(document).ready(function($) {
    $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
    });
});
var interval;
function startTicker (){
    $("#gameon div:first").fadeIn (function( ){
        $(this).appendTo($("#gameon")).fadeIn(); 
    });
}
function stopTicker(){
    clearInterval (interval);
}
$(document).ready(function(){
    interval = setInterval (startTicker, 1500);
    $("#gameon").hover(function(){
        stopTicker();
    }, function(){
        interval = setInterval (startTicker, 1500);
    }); 
});
// change header background on scroll
$(window).scroll(function(e){ 
  $el = $('#header'); 
  if ($(this).scrollTop() > 1){ 
    $('#header').css({'position': 'fixed', 'top': '0px', 'background-color':'rgba(0, 0, 0, 0.8)','z-index':'100', 'transition':'0.4s all'});
  }
  if ($(this).scrollTop() < 1)
  {
    $('#header').css({'position': 'fixed', 'top': '0px','background-color':'transparent','border-bottom':'0px'});
  } 
});