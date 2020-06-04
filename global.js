function EnableAutoLoadMore(buttonElement, contentElement) {
    $(window).bind('scroll', function() {
        if (typeof $(buttonElement).first().attr('data-loadmore') === typeof undefined || $(buttonElement).first().attr('data-loadmore') == false) {
             $(buttonElement).first().attr('data-loadmore', 0);
        }
        if ($(buttonElement + ':visible').length > 0) {
        	if (($(window).height() + $(document).scrollTop()) > ($(buttonElement).first().offset().top - 80) && $(contentElement).first().children().length > $(buttonElement).first().attr('data-loadmore')) {
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
    } else if (window.location.pathname.substring(0, 16) == '/thestudentvoice' && window.location.pathname.length <= 17) {
        EnableAutoLoadMore('#load_more_sv', '.uc-sv-left-panel-wrapper');
        $('#uc-sv-navigation li a').click(function() {
            $('#load_more_sv').first().attr('data-loadmore', 0);
        });
    }
});

$('html, body').bind('scroll mousedown DOMMouseScroll mousewheel keyup touchstart', function(){
    $('html, body').stop();
});