var btn = document.querySelector("#hamburger-btn");
var closeBtn = document.querySelector("#close-btn");
var hiddenMenuBg = document.querySelector("#hidden-menu-background");
var hiddenMenu = document.querySelector("#hidden-menu");
var isMenuOpen = false;

function openMenu() {
    hiddenMenuBg.style.display = "initial";
    hiddenMenu.style.display = "initial";
    setTimeout(function () {
        hiddenMenuBg.style.opacity = 1;
        hiddenMenu.style.opacity = 1;
    }, 10);
    isMenuOpen = true;
}

function closeMenu() {
    hiddenMenuBg.style.opacity = 0;
    hiddenMenu.style.opacity = 0;
    setTimeout(function () {
        hiddenMenuBg.style.display = "none";
        hiddenMenu.style.display = "none";
    }, 300);
    isMenuOpen = false;
}

btn.addEventListener("click", function () {
    if (!isMenuOpen) {
        openMenu();
    } else {
        closeMenu();
    }
});

closeBtn.addEventListener("click", closeMenu);

function handleResize() {
    if (window.innerWidth > 768 && isMenuOpen) {
        closeMenu();
    }
}

window.addEventListener("resize", handleResize);
