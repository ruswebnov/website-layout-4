$(document).ready(function() {

  // Слайдер из секций travel и program 
  $('.travel__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode:true,
    dots:false,
    arrows:false,
    variableWidth: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  //Слайдер из секции instructors
  $('.instructors__slider').slick({
    dots:true,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2000,
  })


// Слайдер из секции  reviews 
  $('.reviews__slider').slick({
    dots:true,
    arrows:true,
    autoplay: true,
    autoplaySpeed: 5000,
  })



});