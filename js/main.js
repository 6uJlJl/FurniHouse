$(document).ready(function(){

  // СЛАЙДЕРЫ

  $(".small-yellow-kitchen").slick({
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '.small-yellow-kitchen~.item__right-arrow',
    prevArrow: '.small-yellow-kitchen~.item__left-arrow'
  });

  $(".small-white-kitchen").slick({
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '.small-white-kitchen~.item__right-arrow',
    prevArrow: '.small-white-kitchen~.item__left-arrow'
  });

  $(".small-purple-kitchen").slick({
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '.small-purple-kitchen~.item__right-arrow',
    prevArrow: '.small-purple-kitchen~.item__left-arrow'
  });


})
