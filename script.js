$(document).ready(function () {

    $('#add-to-list').on('click', function addToList() {
        var item = $("#item").val();
        $("ol#items").append("<li>" + item + "</li>");
    });

});
