'use strict';
(function() {
  var openBtn = document.querySelector('.header__burger');
  var closeBtn = document.querySelector('.header__close');
  var nav = document.querySelector('.nav');

  var openMenu = function(evt) {
    evt.preventDefault();
    nav.classList.remove('nav--hidden');
    nav.classList.add('nav--show');
    openBtn.classList.add('header__burger--closed');
    closeBtn.classList.remove('header__close--closed');
  };

  var closeMenu = function(evt) {
    evt.preventDefault();
    nav.classList.add('nav--hidden');
    nav.classList.remove('nav--show');
    openBtn.classList.remove('header__burger--closed');
    closeBtn.classList.add('header__close--closed');
  };

  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
})();