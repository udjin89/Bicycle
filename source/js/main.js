const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.navigation');
const links = document.querySelectorAll('a[href^="#"]');
const inputNumberPhone = document.querySelector('#user-tel');

// No-js menu
if (menu) {
  menu.classList.remove('menu--open');
}
if (menuNav) {
  menuNav.classList.remove('navigation--open');
  menuNav.classList.remove('navigation--no-js')
}
;
if (inputNumberPhone) {
  inputNumberPhone.addEventListener('keyup', (evt) => {
    console.log(inputNumberPhone.value);
    // evt.keyCode === 27
    // if (evt.keyCode != 171 || evt.key !== '(' || evt.key !== ')') {
    inputNumberPhone.value = inputNumberPhone.value.replace(/[^\d]/g, '');
    // }

  });
}
// Кнопка гамбургер
if (toggle) {
  toggle.classList.remove('toggle--off');
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
// Smooth scroll

if (links) {
  for (let link of links) {
    link.addEventListener('click', function (evt) {
      evt.preventDefault();
      const id = link.getAttribute('href');

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };
}

