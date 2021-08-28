$(function(){
  $('.header__menu-btn').on('click', function() {
    $('.header__menu-btn').toggleClass('header__menu-btn--active');
    $('.header__menu').toggleClass('header__menu--active');
    $('.header__product-menu').removeClass('header__product-menu--active');
  });
  $('.header__menu-list').on('click', function () {
    $('.header__product-menu').toggleClass('header__product-menu--active');
  });
  $('.header__menu-link, .header__product-link').on('click', function () {
    $('.header__product-menu').removeClass('header__product-menu--active');
    $('.header__menu').removeClass('header__menu--active');
  });
  $(".top-slider__list").slick({
    dots: true,
  });
  $('.contacts__checkbox-input').styler();
});