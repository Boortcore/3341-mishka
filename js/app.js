var menuItems = document.querySelectorAll(".top-menu__item--toggle");
var toggleButton = document.querySelector(".top-menu__toggle");
var menu = document.querySelector(".top-menu");
var itemsWrapper = document.querySelector(".top-menu__items");
toggleButton.addEventListener('click', function () {
  menuItems.forEach(function (item) {
    item.classList.toggle("top-menu__item--closed");
  })
  menu.classList.toggle("top-menu--closed")
})

if (document.documentElement.clientWidth < 768) {
  menuItems.forEach(function (item) {
    item.classList.add("top-menu__item--closed");
  })
  menu.classList.add("top-menu--closed")
  itemsWrapper.classList.add("top-menu__items--closed")
}

window.onresize = function () {
  if (document.documentElement.clientWidth >= 768) {
    menuItems.forEach(function (item) {
      item.classList.remove("top-menu__item--closed");
    })
    menu.classList.remove("top-menu--closed")
    itemsWrapper.classList.remove("top-menu__items--closed")
  } else {

    itemsWrapper.classList.add("top-menu__items--closed")
  }
}
