window.addEventListener('load', function() {
  var header = document.getElementById('header');
  var hero = document.getElementById('hero');
  var menuIcon = document.getElementById('menu-icon');
  var menu = document.getElementById('menu');
  var menuItems = document.querySelectorAll('.menu-item');

  menuIcon.addEventListener('click', function() {
    menu.classList.toggle('show');
    menuIcon.classList.toggle("hide");
  });

  menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
      menu.classList.remove('show');
      menuIcon.classList.remove('hide');
    });
  });
  
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      header.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
    }

    // Manejar el efecto parallax
    var scrollPosition = window.scrollY;
    hero.style.backgroundPosition = 'center ' + (-scrollPosition * 0.5) + 'px';
  });
});