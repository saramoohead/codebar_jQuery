$(document).ready(function () {

    $('#add-to-list').on('click', function addToList() {
        var item = $("#item").val();
        $("ol#items").append("<li>" + item + "<span class='label pending'>Pending</span></li>");
        $("#item").val("");
        $("#item").focus();
    });

    $(document).on('click', '.pending', function () {
        var parentNode = $(this).parent();
        $(this).addClass('completed');
        $(this).removeClass('pending');
        parentNode.append("<span class='label success'>Done!</span>");
        console.log(this);
    });

});
