var btn = document.querySelector("#hamburger-btn");
var hiddenMenuBg = document.querySelector("#hidden-menu-background");
var hiddenMenu = document.querySelector("#hidden-menu");

btn.addEventListener("click", function () {
    hiddenMenuBg.style.display = "initial";
    hiddenMenu.style.display = "initial";
    hiddenMenuBg.style.opacity = 1;
    hiddenMenu.style.opacity = 1;
});
