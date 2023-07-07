//Contact
$('#working_form').submit(function() {

    var action = $(this).attr('action');

    $("#php-email-form").slideUp(750, function() {
        $('#php-email-form').hide();

        $('#submit')
            .before('<img src="" class="gif_loader" />')
            .attr('disabled', 'disabled');

        $.post(action, {
                name: $('#name').val(),
                email: $('#email').val(),
                comments: $('#message').val(),
            },
            function(data) {
                document.getElementById('php-email-form').innerHTML = data;
                $('#php-email-form').slideDown('slow');
                $('#cform img.gif_loader').fadeOut('slow', function() {
                    $(this).remove()
                });
                $('#submit').removeAttr('disabled');
                if (data.match('success') != null) $('#cform').slideUp('slow');
            }
        );

    });

    return false;

});



