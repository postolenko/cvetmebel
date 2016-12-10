$(document).ready(function() {

    //   preload
    // $(window).on('load', function () {

    //     setTimeout(function() {

    //         $(".preload-bg").fadeOut(500);

    //     }, 700);
  

    // });

    // var w = window,
    // d = document,
    // e = d.documentElement,
    // g = d.getElementsByTagName('body')[0],
    // bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
    // bodyHeight = w.innerHeight || e.clientHeight || g.clientHeight;


    // var footerPositionInterval;
    // var footerBottomCoor = $(".footer").offset().top +  $(".footer").height();

    // getFooterPosition();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // getFooterPosition();

    });


    $(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });



    // function getFooterPosition() {

    //     footerBottomCoor = $("footer").offset().top + $("footer").height();

    //     // clearInterval(footerPositionInterval);

    //     // footerPositionInterval = setTimeout(function() {

    //         if( ( bodyHeight - footerBottomCoor ) > 0 ) {

    //             $("footer").addClass("positionbottom");

    //             $(".wrapper").css({"min-height" : $(window).height() + "px"});

    //             $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    //         } else {

    //             $("footer").removeClass("positionbottom");

    //         }

    //     // }, 1000);

    // }


});
