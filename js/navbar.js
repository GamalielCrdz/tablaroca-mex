const navbar = document.getElementById("navbar-container");
const links = document.getElementById("contact-links");
const numberContact = document.getElementById("contact-number");
const logo = document.getElementById("logo");

window.onscroll =  function(e) {
  const scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const width = window.innerWidth;

  if (scroll >= 150 && width > 766) {
    navbar.classList.add('nav-colored')
    links.style = 'display: none;'
    logo.style = 'display: none;'
    numberContact.style = 'text-align: center; margin-top: 15px;'
  } else if (width > 766) {
    logo.style = ''
    numberContact.style = 'display: none;'
    links.style = ''
    navbar.classList.remove('nav-colored')
  }
};
