if (window.matchMedia("(min-width: 599px)").matches) {
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 3000,
  });
} else {
  $('.slider').slick();

  }
