$(document).ready(function () {

    $('#add-to-list').on('click', function addToList(item) {
            $("ol#items").append("<li>" + item + "</li>");
            console.log('bob');
    });

});
