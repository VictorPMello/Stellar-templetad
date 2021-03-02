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

$(function(){
    $('nav ul li').click(function(){
        var idex = $(this).index();


        $('ul li').find('span.select').removeClass('select');
        $('li').eq(idex).find('span').addClass('select');
    })
})