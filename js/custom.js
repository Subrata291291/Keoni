$(document).on('ready', function() {
    $('.product-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      fade: true,
      infinite: false,
      asNavFor: '.center'
    });
    $('.center').slick({
      slidesToShow: 4,
      arrows: false,
      autoplay: true,
      infinite: false,
      slidesToScroll: 4,
      asNavFor: '.regular',
      dots: false,
      focusOnSelect: true
    });
});