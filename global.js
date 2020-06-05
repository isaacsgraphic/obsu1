$(document).on("click", "#uc-more-group-search", function() {
    //loading another item
    console.log("without load");
});


$(document).ready(function() {

    $(document).on("click", "#uc-more-group-search", function() {
        //loading another item
        console.log("with ready function");
    });

});

$(document).off("click", "#uc-more-group-search");
$(document).on("click", "#uc-more-group-search", function() {
    //loading another item
    console.log("off and on again");

});


$(document).off("show", "#uc-more-group-search");
$(document).on("show", "#uc-more-group-search", function() {
    //loading another item
    console.log("showing off");

});


// $(document).ready(function() {
//     group_type = $(".tree-navigation li.active a").find(".group-type-hidden-id").html(),
//     group_cat = $(".group-types li.active a").find(".group-cat-hidden-id").html(),
//     search_text_to_search = encodeURIComponent($("#search_keyword").val()),
//     "null" == group_type && (group_type = ""), 
//     "null" == group_cat && (group_cat = ""), 
//     "null" == search_text_to_search && (search_text_to_search = ""),
//     offset += 8, more_groups_path = rewrite_url_for_js("/groups/more_groups?offset=" + offset + "&group_type=" + group_type + "&group_cat=" + group_cat + "&search=" + search_text_to_search),
//     $.ajax({ 
//         type: "GET", 
//         style: "inherit", 
//         dataType: "script", 
//         url: more_groups_path 
//     }).done(function() { 
//         $("#uc-more-group-search").show(), 
//         "false" == $("#uc-load_search_button").val() && $("#uc-more-group-search").hide(), 
//         parseInt($("#group_count").val()) > 0 && $("html, body").animate({ scrollTop: $(".categoryBox.all-groups .uc-group-list-page-wrapper").last().offset().top }, 2e3) })
// });