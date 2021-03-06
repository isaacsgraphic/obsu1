// google analytics 
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-42896410-1', 'brookesunion.org.uk');
  ga('send', 'pageview');




/* auto scroll */
// function EnableAutoLoadMore(buttonElement, contentElement) {
//     $(window).bind('scroll', function() {
//         if (typeof $(buttonElement).first().attr('data-loadmore') === typeof undefined || $(buttonElement).first().attr('data-loadmore') == false) {
//             $(buttonElement).first().attr('data-loadmore', 0);
//         }
//         if ($(buttonElement + ':visible').length > 0) {
//             if (($(window).height() + $(document).scrollTop()) > ($(buttonElement).first().offset().top - 80) && $(contentElement).first().children().length > $(buttonElement).first().attr('data-loadmore')) {
//                 $(buttonElement).first().attr('data-loadmore', $(contentElement).first().children().length);
//                 $(buttonElement).click();
//             }
//         }
//     });

// }

// $(function() {
//     if (window.location.pathname.substring(0, 7) == '/events' && window.location.pathname.length <= 8) {
//         EnableAutoLoadMore('#load-more-events', '#uc-event-right-panel-listing');
//     } else if (window.location.pathname.substring(0, 7) == '/groups') {
//         EnableAutoLoadMore('#uc-more-group-search', '.category-box-wrapper');
//         $('.club-navigation ul li').click(function() {
//             $('#uc-more-group-search').first().attr('data-loadmore', 0);
//         });
//         $('.group-types-wrapper ul li').click(function() {
//             $('#uc-more-group-search').first().attr('data-loadmore', 0);
//         });
//     } else if (window.location.pathname.substring(0, 9) == '/articles' && window.location.pathname.length <= 10) {
//         EnableAutoLoadMore('#load_more_article', '.uc-articles-listing');
//     } else if (window.location.pathname.substring(0, 16) == '/thestudentvoice' && window.location.pathname.length <= 17) {
//         EnableAutoLoadMore('#load_more_sv', '.uc-sv-left-panel-wrapper');
//         $('#uc-sv-navigation li a').click(function() {
//             $('#load_more_sv').first().attr('data-loadmore', 0);
//         });
//     }
// });

// $('html, body').bind('scroll mousedown DOMMouseScroll mousewheel keyup touchstart', function() {
//     $('html, body').stop();
// });

// -------------------------------------------------------------
//                                                      Top menu
// -------------------------------------------------------------

$(document).ready(function() {
    // move menu to top of page
    // $('#main-menu').remove().insertAfter($('#wyswyg'));
    pushmenu();
    // checking window size for hamburger menu
    checkSize();
    socialMove();
    // run test on resize of the window
    $(window).resize(checkSize);
});
//adding a comment
//checking window size for hamburger menu
function checkSize() {
    if ($(".uc-hamburger-nav-dropper").css("display") == "none") {

        // hovering to display submenus
        // $('.uc-hamburger-nav-wrap').css("display","block");

        $('.uc-hm-level-one').hover(
            function() {
                $(this).children(".sub-menu").css("display", "block");
            },
            function() {
                $(this).children(".sub-menu").css("display", "none");
            }
        );
        // adding and removing classes on the top level item.
        $('.uc-hm-level-one').hover(
            function() {
                $(this).addClass('collapsed').removeClass('inactive').removeClass('expanded');
            },
            function() {
                $(this).removeClass('collapsed').addClass('expanded');
            }
        );
    } else {
        $('.uc-hm-level-one').unbind('mouseenter mouseleave');
        $('.uc-menu-dropper').removeClass('expanded').addClass('collapsed');
        // $('.uc-hamburger-nav-wrap').css("display","none");
    }
    socialMove();
}
// resizing the menu-pusher element so content is pushed down the page
function pushmenu() {
    $('.uc-hamburger-nav-dropper').click(function() {
        if ($('.uc-menu-dropper').hasClass('collapsed')) {
            setTimeout(function() {
                var menuHeight = $(".uc-hamburger-nav-wrap").height();
                $('.menu-pusher').css("height", menuHeight);
            }, 300);
        } else {
            $('.menu-pusher').css("height", "0px");
        }
    });
    $('.uc-click-icon').click(function() {
        setTimeout(function() {
            var menuHeight = $(".uc-hamburger-nav-wrap").height();
            $('.menu-pusher').css("height", menuHeight);
        }, 300);
    });
}
// moving social links at the top of the page on larger screens.
function socialMove() {
    if (window.matchMedia("(min-width: 850px)").matches) {
        $("#social-media-links").insertAfter(".page-search")
            .css("display", "block");
    } else {
        $("#social-media-links").insertAfter("#main-menu");
    }
}
// -------------------------------------------------------------
//                                                      Parallax
// -------------------------------------------------------------
function positionParallax(element){
    var s = $(window).scrollTop(),
      d = $(document).height(),
      c = $(window).height();
  var scrollFraction = (s / (d-c) );
    var outerHeight = $(".parallax-page").height();
    var innerHeight = $(element).height();
    var diffHeight =  outerHeight-innerHeight;
    var topVal = (scrollFraction*diffHeight);
    // console.log("scroll "+ scrollFraction + " topVal " + topVal);
    $(element).css({"transform":"translateY("+topVal+"px)"});
}

function setHeight(element,proportion){
    var documentHeight = $(".parallax-page").height();
    $(element).css({"height":String(proportion*documentHeight+"px")});
}

$(document).ready(function(){
        $(".parallax-container").css("display","block");
        setHeight(".pc-1",0.8); //higher than 1- appear closer to viewer, lower than 1, behind body text
        setHeight(".pc-2",1);
        positionParallax(".pc-1");
        positionParallax(".pc-2");  
});

$(window).on('scroll', function(){
    positionParallax(".pc-1");
    positionParallax(".pc-2");
});
// -------------------------------------------------------------
//                                          Mirage modal windows
// -------------------------------------------------------------
$(document).ready(function() {

    // console.log("ping");
    //  linking planks to modal windows
    $(".mirageTrigger").each(function() {
        // creates array of classes, split where the spaces are
        var mirageTriggerClassList = $(this)
            .attr("class")
            .split(" ");
        // find what index mirageTrigger is at
        var mirageTriggerIndex = mirageTriggerClassList.indexOf("mirageTrigger");
        // find the element with ".mirage" then the corresponding class that was after the trigger class.

        var postclass = ".mirage." + mirageTriggerClassList[mirageTriggerIndex + 1];
        $(this).click(function() {
            $(postclass).css("display", "block");
        });
    });

    // sorting the scrollbars
    $(".mirageTrigger").click(function() {
        var scrollBarWidth = window.innerWidth - $("body")[0].clientWidth;
        $("body").css({ "overflow-y": "hidden", "padding-right": scrollBarWidth + "px" });
    });
    //  hiding the mirage when click away or in corner
    $(".mirage, .blink").click(function(e) {
        if (e.target !== this) return; // if not exactly the right element then end program here.

        $(".mirage").css("display", "none");
        $("body").css({ "overflow-y": "auto", "padding-right": "initial" });
    });
});
// -------------------------------------------------------------
//                                                   Expand list
// -------------------------------------------------------------
$(document).ready(function(){
    $(".expand-trigger").click(function(){
        if($(this).nextAll(".expand-content").hasClass('initUp')) {
            $(this).nextAll(".expand-content").slideDown(200).removeClass('initUp','slidUp').addClass('slidDown');
            $(this).next().removeClass('fa-chevron-down').addClass('fa-chevron-up');
        }
        else if ($(this).nextAll( ".expand-content" ).hasClass('initDown')) {
            $(this).nextAll( ".expand-content" ).slideUp(200).removeClass('initDown').addClass('slidUp');
            $(this).next().removeClass('fa-chevron-up').addClass('fa-chevron-down');
        }
        else if ($(this).nextAll( ".expand-content").hasClass('slidUp')) {
            $(this).nextAll(".expand-content" ).slideDown(200).removeClass('slidUp').addClass('slidDown');
            $(this).next().removeClass('fa-chevron-down').addClass('fa-chevron-up');
        }
        else if ($(this).nextAll(".expand-content").hasClass('slidDown')) {
            $(this).nextAll(".expand-content").slideUp(200).removeClass('slidDown').addClass('slidUp');
            $(this).next().removeClass('fa-chevron-up').addClass('fa-chevron-down');
        }
        else{
            $(this).nextAll(".expand-content").slideUp(500).addClass('slidUp');
            $(this).next().removeClass('fa-chevron-up').addClass('fa-chevron-down');
        }
    });
});


// -------------------------------------------------------------
//                                      Freshers Countdown Timer
// -------------------------------------------------------------

// Set the date we're counting down to
var countDownDate = new Date("September 14, 2021 08:12:00").getTime();

$(document).ready(function(){
if ($(".countdown").length){ //run if there's a countdown element on the page.
  var x = setInterval(function() {  // Update the countdown every 1 second

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // var seconds = 1;

      // Display the result in the element with id="demo"
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;
      
      //display the section, if javascript is running and timer hasn't run out yet.
    if (distance > 0) {
    //   clearInterval(x);
      document.getElementById("showhide-countdown").style.display = 'block';
    }

    //changing wording for singulars
    if (days == 1){
        document.getElementById("dayslabel").innerHTML = "DAY";
    }else{document.getElementById("dayslabel").innerHTML = "DAYS";}
    if (hours == 1){
        document.getElementById("hourslabel").innerHTML = "HOUR";
    }else{document.getElementById("hourslabel").innerHTML = "HOURS";}
    if (minutes == 1){
        document.getElementById("minuteslabel").innerHTML = "MINUTE";
    }else{document.getElementById("minuteslabel").innerHTML = "MINUTES";}
    if (seconds == 1){
        document.getElementById("secondslabel").innerHTML = "SECOND";
    }else{document.getElementById("secondslabel").innerHTML = "SECONDS";}

  }, 1000);
}
});
// -------------------------------------------------------------
//                                              Load More Events
// -------------------------------------------------------------
function shorterISOString(date) {
  var dStr = date.toISOString();//convert date to ISOString
  var dStr2 = Number(dStr.substring(11,13)); // Seperate out hours, store as a number
  return dStr.substring(0,11) + String(dStr2+1) + dStr.substring(13,16); //put back together, add 1 to the hours number, remove the seconds and milliseconds.
}

$(document).ready(function(){
  // Get today's date and time, assign to "now"
  var now = shorterISOString(new Date());
  // How many event items do we have? assign to "arrayLength"
  var arrayLength = $("#event-list li").length;
  // loop through all items
  for (var i =0; i < arrayLength; ++i){
    // get data-date attribute from each listed item
    var currentItemDate = $("#event-list li:nth-child("+ (i+1) +")").attr("data-date");
    // compare to current date and remove from list if it is lower
    if(currentItemDate<now){
      $("#event-list li:nth-child("+ (i+1) +")").remove();
      // set the counter back one, and set the array length one smaller, since you've removed one item
      i--;
      arrayLength--;
      console.log("removed "+ currentItemDate);
    }
    else{
      console.log("kept "+ currentItemDate);
    }
  }
  // show the first four list items in your altered list.
  $("#event-list li:nth-child(1)").removeClass("hide");
  $("#event-list li:nth-child(2)").removeClass("hide");
  $("#event-list li:nth-child(3)").removeClass("hide");
  $("#event-list li:nth-child(4)").removeClass("hide");
});

var numberRevealed = 4;
var numberOfItems = $("#event-list li").length;
function reveal(){
    // count the number of items in the list   
    if (numberOfItems > numberRevealed+4){
            // add classes to the next two items
            revealMoreItems();
            console.log(numberRevealed);
    }
    else{
        console.log("that's it!");
        revealMoreItems();
        // fade the button
        $("#loadMore").addClass('disabled-button');
    }
}
function revealMoreItems(){
        $("#event-list li:nth-child("+ (numberRevealed+1) +")").removeClass("hide");
        $("#event-list li:nth-child("+ (numberRevealed+2) +")").removeClass("hide");
        $("#event-list li:nth-child("+ (numberRevealed+3) +")").removeClass("hide");
        $("#event-list li:nth-child("+ (numberRevealed+4) +")").removeClass("hide");
        numberRevealed = (numberRevealed+4);
}