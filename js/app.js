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
    autoplaySpeed: 3000,
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
    autoplaySpeed: 3000,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
      }
    }, 
  ]
  })

$('.ayurveda-slider').slick({
  slidesToShow: 3,
    slidesToScroll: 3,
    arrows:false,
    responsive: [{
      breakpoint: 544,
      settings: {
        slidesToShow: 2,
      }
    }, 
  ]
})




  $('.mobile-menu').on('click', function() {
    $(this).toggleClass('active')
  })
});