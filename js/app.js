var toggleButton = document.querySelector(".top-menu__toggle");

var menu = document.querySelector(".top-menu");

toggleButton.addEventListener('click', function () {
  menu.classList.toggle("top-menu--closed")
})

if (document.documentElement.clientWidth < 768) {
  menu.classList.add("top-menu--closed")
}

window.onresize = function () {
  if (document.documentElement.clientWidth >= 768) {
    menu.classList.remove("top-menu--closed")
  }
}
