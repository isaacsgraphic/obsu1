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

$(document).ready(function(){
    $(document).off("click", "#uc-more-group-search");
});

$("#uc-more-group-search").click(function(){
    console.log("fellowmelad");
});