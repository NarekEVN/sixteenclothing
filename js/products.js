const filter_buttons = document.querySelectorAll(".filter_title button");
const product = document.querySelectorAll(".product");

let filter = "all";
filter_buttons.forEach(function(item){
  item.addEventListener('click', function(){
    filter = this.getAttribute("data-filter");
    document.querySelector(".filter_title button.active").classList.remove("active");
    this.classList.add("active");
    doFilter(filter)
  })
})

function doFilter(filter){
  product.forEach(function(item){
    if (filter === 'all'){
      item.classList.remove("disabled_item");
      item.classList.remove("active_filter");
    }
    else if (item.getAttribute("data-sort") !== filter && filter !== 'all'){
      item.classList.remove("active_filter");
      item.classList.add("disabled_item");
    }
    else{
      item.classList.remove("disabled_item");
      item.classList.add("active_filter");
    }
  })
}
