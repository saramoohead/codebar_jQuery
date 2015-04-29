$(document).ready(function () {

    $('#add-to-list').on('click', function addToList() {
        var item = $("#item").val();
        $("ol#items").append("<li>" + item + "<span class='label pending'>Pending</span></li>");
        $("#item").val("");
        $("#item").focus();
        updateTotal();
    });

    $(document).on('click', '.pending', function () {
        var parentNode = $(this).parent();
        $(this).addClass('completed');
        $(this).removeClass('pending');
        parentNode.append("<span class='label success'>Done!</span>");
        updateTotal();
        console.log(this);
    });

    function updateTotal() {
        if ( $('.success') || $('.pending') ) {
            var pending = $(".pending").length;
            var success = $(".success").length;
            $(".total").html("Pending: " + pending + " Completed: " + success);
            console.log(pending + success);
        }
    }

});
