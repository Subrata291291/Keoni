$(document).on('ready', function() {
    $('.product-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      fade: true,
      infinite: true,
      asNavFor: '.center'
    });
    $('.center').slick({
      slidesToShow: 4,
      arrows: false,
      autoplay: true,
      infinite: true,
      slidesToScroll: 1,
      asNavFor: '.regular',
      dots: false,
      focusOnSelect: true
    });
});