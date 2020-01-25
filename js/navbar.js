const navbar = document.getElementById("navbar-container");

window.onscroll =  function(e) {
  const scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  if (scroll >= 150) {
    navbar.classList.add('nav-colored');
  } else {
    navbar.classList.remove('nav-colored');
  }
};
