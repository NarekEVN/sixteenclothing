//Owl Carousel configs
$(document).ready(function(){
  $(".home_carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    margin: 20,
  });
  $(".about_carousel").owlCarousel({
    items: 5,
    loop: true,
    margin: 30,
    responsiveClass:true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    }
  })
});
