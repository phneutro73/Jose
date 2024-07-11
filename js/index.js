console.log('Cargado script...')
document.addEventListener('DOMContentLoaded', function () {
  var header = document.getElementById('header');
  var hero = document.getElementById('hero');

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