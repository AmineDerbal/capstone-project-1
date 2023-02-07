const hamburgerButton = document.querySelector('#hamburger-button');
const mobileMenu = document.querySelector('.mobile-menu-modal');
const mobileMenuLink = document.querySelectorAll('.mobile-menu a');

const toggleMenuDisplay = () => {
  hamburgerButton.classList.toggle('change');
  document.body.classList.toggle('toggle-modal-body');
  mobileMenu.classList.toggle('toogleModalDisplay');
}

hamburgerButton.addEventListener('click', toggleMenuDisplay);

mobileMenuLink.forEach((link) => {
  link.addEventListener('click', toggleMenuDisplay);
})