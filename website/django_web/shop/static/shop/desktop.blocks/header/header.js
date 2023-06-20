// function toggleMenuBurger() {
//     document.querySelector('.nav-element__burger').classList.toggle('clicked');
//     document.querySelector('.overlay').classList.toggle('overlay--menu-burger');
//     document.querySelector('.menu-burger').classList.toggle('opened');
// }

// document.querySelector('.nav-element__burger').toggleMenuBurger = toggleMenuBurger;
// document.querySelector('.menu-burger__close-btn').toggleMenuBurger = toggleMenuBurger;

function toggleMenuBurger() {
    $('.nav-element__burger').toggleClass('clicked');
    $('.overlay').toggleClass('overlay--menu-burger');
    $('.menu-burger').toggleClass('opened');
}

$('.nav-element__burger').click(toggleMenuBurger);
$('.menu-burger__close-btn').click(toggleMenuBurger);

$(window).click(function(e) {
    var menuBurger = $(".menu-burger");
    var burgerBtn = $(".nav-element__burger");

    
    if (menuBurger.hasClass('opened')) {
        if (!burgerBtn.is(e.target) && burgerBtn.has(e.target).length === 0 && !menuBurger.is(e.target) && menuBurger.has(e.target).length === 0) {
            toggleMenuBurger();
        }
    }
})
