const menu_btn = document.querySelector("header button");
const menu = document.querySelector(".menu");
const menu_items = document.querySelectorAll(".menu li");
const linkless = document.querySelectorAll("a[href='#']")
const header = document.querySelector("header");
const slider = document.getElementById("carousel")
//Collapse menu for medium and small screens
menu_btn.addEventListener('click', function(){
  if (menu.style.maxHeight){
    menu.style.maxHeight = null;
  }
  else{
    menu.style.maxHeight = menu.scrollHeight + 'px';
  }
})

//Avoid page refresh onclick linkless a tags
linkless.forEach(function(item){
  item.addEventListener('click', function(e){
    e.preventDefault();
  })
})

//Fix header on scroll
window.addEventListener('scroll', function(){
  if (window.pageYOffset > slider.offsetTop + 200){
    header.classList.add("stick")
  }
  else{
    header.classList.remove("stick")
  }
})


//Owl Carousel configs
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    margin: 20,
  });
});