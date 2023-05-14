$(document).ready(function(){
    
});


$("#ocultar").css({"background-color": "black"});

$("#ocultar").on("click",function(){
    //$(".primero").hide();
    //$(".primero").fadeOut();
    $(".wrap").slideUp();
});

$("#mostrar").on("click",function(){
    //$(".primero").show();
    //$(".primero").fadeIn();
    $(".wrap").slideDown();
});