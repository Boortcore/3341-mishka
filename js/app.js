var menuItems = document.querySelectorAll(".top-menu__item--toggle");
var toggleButton = document.querySelector(".top-menu__toggle");
var menu = document.querySelector(".top-menu")
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
  menu.classList.toggle("top-menu--closed")
}

window.onresize = function () {
  if (document.documentElement.clientWidth >= 768) {
    menuItems.forEach(function (item) {
      item.classList.remove("top-menu__item--closed");
    })
     menu.classList.remove("top-menu--closed")
  }
}
