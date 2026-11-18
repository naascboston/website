var toggle = document.querySelector(".nav-toggle");
var menu = document.getElementById("site-nav");
if (toggle && menu) {
  toggle.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
    toggle.textContent = open ? "Close" : "Menu";
  });
}
