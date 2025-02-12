$(document).on('ready', function() {
    $('.product-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.center'
    });
    $('.center').slick({
      slidesToShow: 4,
      arrows: true,
      autoplay: true,
      slidesToScroll: 1,
      asNavFor: '.regular',
      dots: false,
      focusOnSelect: true
    });
});