const navbar = document.getElementById("navbar-container");
const collapse = document.getElementById("bs-example-navbar-collapse-1");
const links = document.getElementById("contact-links");
const numberContact = document.getElementById("contact-number");
const logo = document.getElementById("logo");

window.onscroll =  function(e) {
  const scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  if (scroll >= 150) {
    navbar.classList.add('nav-colored');
    links.style = 'display: none;'
    collapse.style = 'display: none!important;';
    logo.style = 'display: none;'
    numberContact.style = 'text-align: center; margin-top: 15px;'
  } else {
    logo.style = '';
    numberContact.style = 'display: none;'
    links.style = '';
    collapse.style = '';
    navbar.classList.remove('nav-colored');
  }
};
