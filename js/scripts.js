$(document).ready(function() {

    //   preload
    // $(window).on('load', function () {

    //     setTimeout(function() {

    //         $(".preload-bg").fadeOut(500);

    //     }, 700);
  

    // });

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
    // bodyHeight = w.innerHeight || e.clientHeight || g.clientHeight;


    // var footerPositionInterval;
    // var footerBottomCoor = $(".footer").offset().top +  $(".footer").height();

    // getFooterPosition();

    // paginationArrowsAppend();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // getFooterPosition();

        // paginationArrowsAppend();

        // ------------------------------------------------------------------------------------------------------------------

        if( bodyWidth <= 1024 ) {

            $(".filter-form .for-scroll").css({"height" : ( $(window).height() * .85 ) + "px"});

        }

        // ------------------------------------------------------------------------------------------------------------------

    });
    

    $(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });


    // ----------------------------------------------------------------

    $(function() {

        $(".inner-nav-wrapp").addClass("js");

        var indexNavItem;

        var innerNavHeight;

        // $(".nav-item").bind( "mouseenter mouseleave", function() {

        //     indexNavItem = $(".nav-item").index(this);

        //     innerNavHeight = $(".nav-item:eq("+ indexNavItem +") > .inner-nav-wrapp > .inner-nav").height();

        //     if( $(".nav-item:eq("+ indexNavItem +") > .inner-nav-wrapp").height() <= 0 ) {

        //         $(".nav-item:eq("+ indexNavItem +") > .inner-nav-wrapp").animate({"height" : innerNavHeight + "px"}, 200);

        //     } else {

        //         $(".nav-item:eq("+ indexNavItem +") > .inner-nav-wrapp").animate({"height" : 0 + "px"}, 200);

        //     }

        // });

        $(".nav-item").bind({

              mouseenter: function() {

                indexNavItem = $(".nav-item").index(this);

                innerNavHeight = $(".nav-item:eq("+ indexNavItem +") > .inner-nav-wrapp > .inner-nav").height();
                
                if( $(".nav-item:eq("+ indexNavItem +") > .inner-nav-wrapp").height() <= 0 ) {

                    $(".nav-item:eq("+ indexNavItem +") > .inner-nav-wrapp").animate({"height" : innerNavHeight + "px"}, 300);

                }

              },
              mouseleave: function() {

                indexNavItem = $(".nav-item").index(this);

                innerNavHeight = $(".nav-item:eq("+ indexNavItem +") > .inner-nav-wrapp > .inner-nav").height();
                
                if( $(".nav-item:eq("+ indexNavItem +") > .inner-nav-wrapp").height() > 0 ) {

                    $(".nav-item:eq("+ indexNavItem +") > .inner-nav-wrapp").animate({"height" : 0 + "px"}, 300);

                }

              }
        });

    });

    // ----------------------------------------------------------------


    $(function() {


        $(".respmenubtn").click(function() {

            $(".resp-main-navigation").fadeIn(300);

        });


        $(".close-resp-nav").click(function() {

            $(".resp-main-navigation").fadeOut(300);

        });

    });


    $(function() {

        var respLinkIndex;

        var respInnerNavHeight;

        $(".resp-nav-btn").click(function() {

            $(this).toggleClass("active");

            respLinkIndex = $(".resp-nav-btn").index(this);

            respInnerNavHeight = $(".resp-inner-nav:eq("+ respLinkIndex +")").outerHeight(true);

            if( $(".resp-inner-nav-wrapp:eq("+ respLinkIndex +")").height() <= 0 ) {

                $(".resp-inner-nav-wrapp:eq("+ respLinkIndex +")").animate({"height" : respInnerNavHeight + "px"}, 200);

                setTimeout(function() {

                    $(".resp-inner-nav-wrapp:eq("+ respLinkIndex +")").css({"height" : "auto"});

                }, 300);

            } else {

                $(".resp-inner-nav-wrapp:eq("+ respLinkIndex +")").animate({"height" : 0 + "px"}, 200);

            }


        });

    });

    // ----------------------------------------------------------------

    $(function() {

        $(".sroll-down").click(function () {

            $("body,html").animate({

                scrollTop: $("#scroll_down_anchor").offset().top

            }, 1000);

            return false;

        });

    });

    // ----------------------------------------------------------------

    $(".show-sort-btn").click(function() {

        var indexDropBox = $(".show-sort-btn").index(this);

        if( $(".drop-wrapp:eq("+ indexDropBox  +")").height() > 0 ) {

            $(".drop-wrapp:eq("+ indexDropBox  +")").animate({"height" : 0 + "px"}, 300);

            $(this).addClass("down");

        } else {

            $(".drop-wrapp:eq("+ indexDropBox  +")").animate({"height" : $(".drop-box:eq("+ indexDropBox  +")").outerHeight(true) + 5 + "px"}, 300);

            $(this).removeClass("down");

        }

    });

    // ----------------------------------------------------------------

    $(".input-range-box").click(function()  {

        if( $(this).hasClass("focus") ) {

            return false;

        } else {

            $(".input-range-box").removeClass("focus");

            $(this).addClass("focus");

        }

    });

    // ----------------------------------------------------------------

    $(function() {
    

        $(".show-filter").click(function() {

            $(".filters").fadeIn(300);

        });


        $(".close-filters-btn").click(function() {

            $(".filters").fadeOut(300);

        });

    });

    // ----------------------------------------------------------------

    $(function() {

        if( bodyWidth <= 1024 ) {

            $(".filter-form .for-scroll").css({"height" : ( $(window).height() * .85 ) + "px"});

        }

    });    

    // ----------------------------------------------------------------

    // function paginationArrowsAppend() {

    //     if(bodyWidth <= 480 ) {

    //         $(".pagination-arrow-item").appendTo(".pagination-arrows-append");

    //     }        

    // }

    

    // ----------------------------------------------------------------

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
