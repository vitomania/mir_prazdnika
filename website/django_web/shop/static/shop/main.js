// header

$('.search-catalog__input').focus(function() {
    $('.search-catalog__btn').toggleClass('j-is-focused');
});

$(document).mouseup(function(e) {
    var input = $(".search-catalog__input");
    var btn = $(".search-catalog__btn")

    // if the target of the click isn't the .search-catalog__input nor a descendant of the .search-catalog__input
    if (btn.hasClass('j-is-focused')
        && !input.is(e.target) 
        && input.has(e.target).length === 0) {
        $('.search-catalog__btn').toggleClass('j-is-focused');
    }
});

// menu-burger

$('.nav-element__burger').click(function() {
    $('.nav-element__burger').toggleClass('j-is-clicked');
    $('.menu-burger').toggleClass('j-is-shown');
    $('.overlay:hidden').toggleClass('overlay--menu-burger');
});

$('.menu-burger__close-btn').click(function() {
    $('.nav-element__burger').toggleClass('j-is-clicked');
    $('.menu-burger').toggleClass('j-is-shown');
    $('.overlay').toggleClass('overlay--menu-burger');
});

$(document).mouseup(function(e) {
    var menu_burger = $('.menu-burger');
    // console.log($(".nav-element__burger").data('clicked', true));

    if ($(".nav-element__burger").hasClass('j-is-clicked')
        && !menu_burger.is(e.target) 
        && menu_burger.has(e.target).length === 0) {
        $('.menu-burger__close-btn').click();
    }
});