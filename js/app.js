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


/* -- Открываем модальное окно --*/

var buyButtons = document.querySelectorAll("a[data-make-order]");
if (buyButtons) {
  var layuot = document.querySelector(".layout");
  var modal = document.querySelector(".modal");
  for (var i = 0; i < buyButtons.length; i++) {
    buyButtons[i].addEventListener('click', function (e) {
      e.preventDefault();
      layuot.classList.remove("layout--hidden");
      layuot.style.height = document.documentElement.scrollHeight + "px";
      modal.classList.remove("modal--hidden");
    })
  }

  window.onscroll = function () {
    modal.style.top = window.pageYOffset + (document.documentElement.clientHeight / 2) + "px";
  }
  layuot.addEventListener('click', function () {
    layuot.classList.add("layout--hidden")
    modal.classList.add("modal--hidden")
  })
}

/* -- Добавление фреймов -- */

var frame = document.querySelector(".contacts__frame");
var image = document.querySelector(".contacts__img");
if (frame) {
  frame.classList.remove("contacts__frame--hidden");
  image.classList.add("contacts__img--hidden");
}
