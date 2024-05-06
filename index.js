

$("#donate").hover(function(){
    $(".arrowDesktop").css("margin-right","-15px");
    $(".donateButt").css("margin-right","15px")
});

$("#donate").mouseleave(function(){
    $(".arrowDesktop").css("margin-right","5px");
    $(".donateButt").css("margin-right","-5px")
});

// $("#favorite1").on("click", function(){
//     $(".outlineHeart1").css("display", "none");
//     $(".fullHeart1").css("display", "block");
// });

$("#favorite1").on("click", function(){
    if ($(".outlineHeart1").css("display", "block")) {
        $(".fullHeart1").css("display", "block");
        $(".outlineHeart1").css("display", "none");
    }
});

$("#favorite2").on("click", function(){
    $(".outlineHeart2").css("display", "none");
    $(".fullHeart2").css("display", "block");
});

$("#favorite3").on("click", function(){
    $(".outlineHeart3").css("display", "none");
    $(".fullHeart3").css("display", "block");
});

$("#favorite4").on("click", function(){
    $(".outlineHeart4").css("display", "none");
    $(".fullHeart4").css("display", "block");
});

$("#favorite5").on("click", function(){
    $(".outlineHeart5").css("display", "none");
    $(".fullHeart5").css("display", "block");
});

$("#favorite6").on("click", function(){
    $(".outlineHeart6").css("display", "none");
    $(".fullHeart6").css("display", "block");
});


