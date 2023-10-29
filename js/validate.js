$(function () {
    const form = $('#form');
    const answer = $('#answer');
    
    form.validate({
    rules: {
        name: { required: true },
        tel: { required: true},
        message: { required: true }
    },
    messages: {
        name: { required: 'Input can`t be empty' },
        tel: { required: 'Enter your phone number' },
        message: { required: 'You haven`t enter message' }
    },
    submitHandler: ajaxFormSubmit
    });

    function ajaxFormSubmit() {
    const string = form.serialize();

    $.ajax({
        type: 'POST',
        url: '/php/mail.php',
        data: string,
        success: function (html) {
            form.slideUp(800);
            answer.html(html);
        }
    });

    return false;
    }
});