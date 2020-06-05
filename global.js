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


function delay_load_events(){
    console.log("toast");
}