if (window.matchMedia("(min-width: 599px)").matches) {
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
  });
} else {
  $('.slider').slick();
  }