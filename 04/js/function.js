$(function(){
    $('i').click(function(){
        $('.mobile').find('ul').slideToggle('slow');
    })
});

$(function(){
    $('nav a').click(function(){
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;

        $('html,body').animate({'scrollTop': offSetTop}, 1700);
        return true;
    })
});