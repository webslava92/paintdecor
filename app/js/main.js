$(function(){
  $('.header__menu-btn').on('click', function() {
    $('.header__menu-btn').toggleClass('header__menu-btn--active');
    $('.header__menu').toggleClass('header__menu--active');
  });
});