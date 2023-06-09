import { toggleAllFilters, closeAllFilters} from "./filters-sidebar.js"
import { openDropdownFilterContent, closeDropdownFilterContent} from './desktop.blocks/dropdown-filter/dropdown-filter.js'

document.getElementById("all-filters-btn").toggleAllFilters = toggleAllFilters;
document.getElementById("overlay").onclick = closeAllFilters;

var btns = document.getElementsByClassName('dropdown-filter__btn');
for (let i = 0; i < btns.length; i++) {
    btns[i].openDropdownFilterContent = openDropdownFilterContent;
}

function windowOnClick(event) {
    closeDropdownFilterContent(event);
}

window.onclick = windowOnClick;


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