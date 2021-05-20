const toggle = document.querySelector('.toggle');

if (toggle) {
  toggle.addEventListener('click', (evt) => {
    (toggle.classList.contains('is-active') === true) ? toggle.classList.remove('is-active') : toggle.classList.add('is-active');
  });
}
