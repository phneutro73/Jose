console.log('Cargado script...');

window.addEventListener('load', function() {
  var header = document.getElementById('header');
  var hero = document.getElementById('hero');

  console.log('DOM completamente cargado y parseado');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      header.classList.add('shrink');
      console.log('scroll..');
    } else {
      header.classList.remove('shrink');
      console.log('Header expandido');
    }

    // Manejar el efecto parallax
    var scrollPosition = window.scrollY;
    hero.style.backgroundPosition = 'center ' + (-scrollPosition * 0.5) + 'px';
    console.log('Posición del background actualizada: ' + (-scrollPosition * 0.5) + 'px');
  });
});