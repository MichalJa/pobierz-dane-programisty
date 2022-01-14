
$(document).ready(function () {

    $('#btn').click(function () {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
            console.log(data);
            $("body").append(`<div id="dane-programisty"></div>`);
            $.each(data, function(index, value) {
                $('#dane-programisty').append(index + " " + value + '<br/>');
            })
        })
            .fail(function (error) {
                console.error(console.error());
            });
        
    });

});
