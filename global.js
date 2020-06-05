$(document).on("click", "#uc-more-group-search", function() {
    //loading another item
        console.log("without load");
});


$(document).ready(function(){

    $(document).on("click", "#uc-more-group-search", function() {
    //loading another item
        console.log("with ready function");
    });
    
});

$(document).off("click","#uc-more-group-search");
$(document).on("click", "#uc-more-group-search", function() {
    //loading another item
    console.log("off and on again");

});