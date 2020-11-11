$(document).ready(function(){
    $('#mycarousel').carousel({interval: 2000});
    $('#carouselButton').click(function(){
        if ($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        } else {
             $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
    //Reserve table modal show
    $( "#reserveTableButton").click(function(){
    $('#reserveTable').modal('show')});
    
    //Login modal show
    $( "#loginModalIcon").click(function(){
    $('#loginModal').modal('show')});
});