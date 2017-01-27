
$(document).ready(function(){
    $('.clickHere').click(function(){
        $('.main').fadeIn(2000);
        $('.slide').animate({top : "-100%"},1600);
    });
});