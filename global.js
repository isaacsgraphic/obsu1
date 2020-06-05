$(document).unbind().on("click", "#uc-more-group-search", function() {
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
        "false" == $("#uc-load_search_button").val() && $("#uc-more-group-search").hide()
    })
})



$(document).unbind().on("click", "#uc-more-group-search", function() {
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
            "false" == $("#uc-load_search_button").val() && $("#uc-more-group-search").hide()
        })
    })