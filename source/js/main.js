const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.navigation');

// No-js menu
toggle.classList.remove('toggle--off');
menu.classList.remove('menu--open');
menuNav.classList.remove('navigation--open');
menuNav.classList.remove('navigation--no-js');

// Кнопка гамбургер
if (toggle) {
  toggle.addEventListener('click', (evt) => {
    (toggle.classList.contains('is-active') === true) ? closeMenu() : openMenu();
  });
}

function openMenu() {
  toggle.classList.add('is-active');
  menuNav.classList.add('navigation--open');
  menu.classList.add('menu--open');
}
function closeMenu() {
  toggle.classList.remove('is-active');
  menuNav.classList.remove('navigation--open');
  menu.classList.remove('menu--open');
}
