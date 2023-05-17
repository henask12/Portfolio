var btn = document.querySelector("#hamburger-btn");
var closeBtn = document.querySelector("#close-btn");
var hiddenMenuBg = document.querySelector("#hidden-menu-background");
var hiddenMenu = document.querySelector("#hidden-menu");
var anchorMenu = document.querySelector(".anchor");
var anchorMenu1 = document.querySelector(".anchor1");
var anchorMenu2 = document.querySelector(".anchor2");
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

anchorMenu.addEventListener("click", function () {
    closeMenu();
});
anchorMenu1.addEventListener("click", function () {
    closeMenu();
});
anchorMenu2.addEventListener("click", function () {
    closeMenu();
});

closeBtn.addEventListener("click", closeMenu);

function handleResize() {
    if (window.innerWidth > 768 && isMenuOpen) {
        closeMenu();
    }
}

window.addEventListener("resize", handleResize);

window.addEventListener("scroll", function () {
    const contactSection = document.getElementById("contact");
    const navBar = document.querySelector(".NavBar");

    const contactSectionTop = contactSection.offsetTop;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= contactSectionTop) {
        navBar.classList.add("white-bg");
    } else {
        navBar.classList.remove("white-bg");
    }
});
