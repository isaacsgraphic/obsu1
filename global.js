/* google analytics */

(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-42896410-1', 'brookesunion.org.uk');
ga('send', 'pageview');



/* Hotjar click tracking */



// -------------------------------------------------------------
//                                                     Main Menu
// -------------------------------------------------------------
$(document).ready(function() {
    // move menu to top of page
    // $('#main-menu').remove().insertAfter($('#wyswyg'));
    // checking window size for hamburger menu
    checkSize();
    // run test on resize of the window
    $(window).resize(checkSize);

    expandBlocks();

});

function helloAlert() {
    setTimeout(function() { alert("Hello"); }, 800);
}

function delayHideSubMenu(a) {
    setTimeout(function() { $(a).children(".sub-menu").css("display", "none"); }, 100);
}

//checking window size for hamburger menu
function checkSize() {
    if ($(".uc-hamburger-nav-dropper").css("display") == "none") {

        // hovering to display submenus
        $('.uc-hamburger-nav-wrap').css("display", "block");

        $('.uc-hm-level-one').hover(
            // var timedComparison = setTimeout(function(){compareTwo(zeList);}, 1500);
            function() {
                $(this).children(".sub-menu").css("display", "block");
            },
            function() {
                delayHideSubMenu(this);
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
}


// -------------------------------------------------------------
//                                                Expanding list
// -------------------------------------------------------------
function expandBlocks() {
    $(".expand-trigger").click(function() {
        if ($(this).nextAll(".expand-content").hasClass('initUp')) {
            $(this).nextAll(".expand-content").slideDown(200).removeClass('initUp', 'slidUp').addClass('slidDown');
            $(this).next().removeClass('fa-chevron-down').addClass('fa-chevron-up');
        } else if ($(this).nextAll(".expand-content").hasClass('initDown')) {
            $(this).nextAll(".expand-content").slideUp(200).removeClass('initDown').addClass('slidUp');
            $(this).next().removeClass('fa-chevron-up').addClass('fa-chevron-down');
        } else if ($(this).nextAll(".expand-content").hasClass('slidUp')) {
            $(this).nextAll(".expand-content").slideDown(200).removeClass('slidUp').addClass('slidDown');
            $(this).next().removeClass('fa-chevron-down').addClass('fa-chevron-up');
        } else if ($(this).nextAll(".expand-content").hasClass('slidDown')) {
            $(this).nextAll(".expand-content").slideUp(200).removeClass('slidDown').addClass('slidUp');
            $(this).next().removeClass('fa-chevron-up').addClass('fa-chevron-down');
        } else {
            $(this).nextAll(".expand-content").slideUp(500).addClass('slidUp');
            $(this).next().removeClass('fa-chevron-up').addClass('fa-chevron-down');
        }
    });
}

// -------------------------------------------------------------
//                                              Load More Events
// -------------------------------------------------------------
function shorterISOString(date) {
    var dStr = date.toISOString(); //convert date to ISOString
    var dStr2 = Number(dStr.substring(11, 13)); // Seperate out hours, store as a number
    return dStr.substring(0, 11) + String(dStr2 + 1) + dStr.substring(13, 16); //put back together, add 1 to the hours number, remove the seconds and milliseconds.
}

$(document).ready(function() {
    // Get today's date and time, assign to "now"
    var now = shorterISOString(new Date());
    // How many event items do we have? assign to "arrayLength"
    var arrayLength = $("#event-list li").length;
    // loop through all items
    for (var i = 0; i < arrayLength; ++i) {
        // get data-date attribute from each listed item
        var currentItemDate = $("#event-list li:nth-child(" + (i + 1) + ")").attr("data-date");
        // compare to current date and remove from list if it is lower
        if (currentItemDate < now) {
            $("#event-list li:nth-child(" + (i + 1) + ")").remove();
            // set the counter back one, and set the array length one smaller, since you've removed one item
            i--;
            arrayLength--;
            console.log("removed " + currentItemDate);
        } else {
            console.log("kept " + currentItemDate);
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

function reveal() {
    // count the number of items in the list   
    if (numberOfItems > numberRevealed + 4) {
        // add classes to the next two items
        revealMoreItems();
        console.log(numberRevealed);
    } else {
        console.log("that's it!");
        revealMoreItems();
        var x = document.getElementById("loadMore");
        // fade the button
        x.classList = "loadMore disabled-button";
    }
}

function revealMoreItems() {
    $("#event-list li:nth-child(" + (numberRevealed + 1) + ")").removeClass("hide");
    $("#event-list li:nth-child(" + (numberRevealed + 2) + ")").removeClass("hide");
    $("#event-list li:nth-child(" + (numberRevealed + 3) + ")").removeClass("hide");
    $("#event-list li:nth-child(" + (numberRevealed + 4) + ")").removeClass("hide");
    numberRevealed = (numberRevealed + 4);
}
// ---------------------------------------------------Parallax
function positionParallax(element) {
    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
    var scrollFraction = (s / (d - c));
    var outerHeight = $(".parallax-page").height();
    var innerHeight = $(element).height();
    var diffHeight = outerHeight - innerHeight;
    var topVal = (scrollFraction * diffHeight);
    // console.log("scroll "+ scrollFraction + " topVal " + topVal);
    $(element).css({ "transform": "translateY(" + topVal + "px)" });
}

function setHeight(element, proportion) {
    var documentHeight = $(".parallax-page").height();
    $(element).css({ "height": String(proportion * documentHeight + "px") });
}

$(document).ready(function() {
    $(".parallax-container").css("display", "block");
    setHeight(".pc-1", 1.3);
    setHeight(".pc-2", 1);
    positionParallax(".pc-1");
    positionParallax(".pc-2");
});

$(window).on('scroll', function() {
    positionParallax(".pc-1");
    positionParallax(".pc-2");
});
// ---------------------------------------------------Mirage modal windows
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
//                                   Groups page- loading groups
// -------------------------------------------------------------
// remove scrolljacking from groups page, and auto-load more groups.

$(document).ready(function() {
    $(document).off("click", "#uc-more-group-search"); //remove the original click handler
    $("#uc-more-group-search").click(); //click once on page load
});


$("#uc-more-group-search").click(function() {
    group_type = $(".tree-navigation li.active a").find(".group-type-hidden-id").html(),
        group_cat = $(".group-types li.active a").find(".group-cat-hidden-id").html(),
        search_text_to_search = encodeURIComponent($("#search_keyword").val()),
        "null" == group_type && (group_type = ""),
        "null" == group_cat && (group_cat = ""),
        "null" == search_text_to_search && (search_text_to_search = ""),
        offset += 8,
        more_groups_path = rewrite_url_for_js("/groups/more_groups?offset=" + offset + "&group_type=" + group_type + "&group_cat=" + group_cat + "&search=" + search_text_to_search),
        $.ajax({
            type: "GET",
            style: "inherit",
            dataType: "script",
            url: more_groups_path
        }).done(function() {
            $("#uc-more-group-search").show(),
                "false" == $("#uc-load_search_button").val() && $("#uc-more-group-search").hide(),
                parseInt($("#group_count").val()) > 0 && $("html, body");
        });
});


/* auto-click when you scroll down */
function EnableAutoLoadMore(buttonElement, contentElement) {
    $(window).bind('scroll', function() {
        if (typeof $(buttonElement).first().attr('data-loadmore') === typeof undefined || $(buttonElement).first().attr('data-loadmore') == false) {
            $(buttonElement).first().attr('data-loadmore', 0);
        }
        if ($(buttonElement + ':visible').length > 0) {
            if (($(window).height() + $(document).scrollTop()) > ($(buttonElement).first().offset().top - 800) && $(contentElement).first().children().length > $(buttonElement).first().attr('data-loadmore')) {
                $(buttonElement).first().attr('data-loadmore', $(contentElement).first().children().length);
                $(buttonElement).click();
            }
        }
    });
}

$(function() {
    if (window.location.pathname.substring(0, 7) == '/events' && window.location.pathname.length <= 8) {
        EnableAutoLoadMore('#load-more-events', '#uc-event-right-panel-listing');
    } else if (window.location.pathname.substring(0, 7) == '/groups') {
        EnableAutoLoadMore('#uc-more-group-search', '.category-box-wrapper');
        $('.club-navigation ul li').click(function() {
            $('#uc-more-group-search').first().attr('data-loadmore', 0);
        });
        $('.group-types-wrapper ul li').click(function() {
            $('#uc-more-group-search').first().attr('data-loadmore', 0);
        });
    } else if (window.location.pathname.substring(0, 9) == '/articles' && window.location.pathname.length <= 10) {
        EnableAutoLoadMore('#load_more_article', '.uc-articles-listing');
    } 
//remove auto load on student voice for now
    // else if (window.location.pathname.substring(0, 16) == '/thestudentvoice' && window.location.pathname.length <= 17) {
    //     EnableAutoLoadMore('#load_more_sv', '.uc-sv-left-panel-wrapper');
    //     $('#uc-sv-navigation li a').click(function() {
    //         $('#load_more_sv').first().attr('data-loadmore', 0);
    //     });
    // }
});

// -------------------------------------------------------------
//                                   Events page- loading groups
// -------------------------------------------------------------
$(document).ready(function() {
    $(document).off("click", "#load-more-events"); //remove the original click handler
    $("#load-more-events").click();
});

function loadEventsWithoutAnimation() {
    var e = $("#event-homepage #left-panel .tree-navigation li.selected a").attr("id");
    t = encodeURIComponent($("#search_keyword").val());
    navigate_event_type_id = $("#navigate_event_type_id").val();
    navigate_event_type_slug = $("#navigate_event_type_slug").val();
    load_more_events_path = rewrite_url_for_js("/events/load_more_events");
    $.ajax({
        type: "GET",
        url: load_more_events_path,
        style: "inherit",
        dataType: "script",
        data: "event_type_id=" + e + "&offset=" + offset + "&search_text=" + t,
        success: function() {
            navigate_event_type_id = $("#navigate_event_type_id").val();
            navigate_event_type_slug = $("#navigate_event_type_slug").val();
            history_path = rewrite_url_for_js("/events?event_type=" + navigate_event_type_slug + "&search=" + t);
            history.pushState(null, "", history_path);
            if ($("#show_load_more_button").val()=="true")
              $("#load-more-events").show();
            else 
              $("#load-more-events").hide();
            
        },
        failure: function() {
            alert(I18n.t("server_issue_msg"));
        }
    });
}
//insert our own click handler for the button.
$("#load-more-events").click(function() {
    offset += 8;
    load_more_clicked = !0;
    loadEventsWithoutAnimation();
});
//the auto-click on scroll is handled by the script in groups.