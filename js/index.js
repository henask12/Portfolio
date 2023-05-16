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

// Project data
const projects = [
    {
        name: "Tonic",
        feature: "CANOPY",
        backround: "Back End Dev",
        year: "2015",
        description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        featuredImage: "./images/tonic-project-desktop.svg",
        technologies: ["html", "css", "javascript"],
        liveLink: "https://example.com/tonic",
        sourceLink: "https://github.com/example/tonic"
    },
    {
        name: "Multi-Post Stories",
        feature: "CANOPY",
        backround: "Back End Dev",
        year: "2015",
        description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        featuredImage: "./images/multi-post-project.png",
        technologies: ["html", "css", "javascript"],
        liveLink: "https://example.com/multi-post-stories",
        sourceLink: "https://github.com/example/multi-post-stories"
    },
    {
        name: "Tonic Orange",
        feature: "CANOPY",
        backround: "Back End Dev",
        year: "2015",
        description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        featuredImage: "./images/tonic-orange.png",
        technologies: ["html", "css", "javascript"],
        liveLink: "https://example.com/tonic-orange",
        sourceLink: "https://github.com/example/tonic-orange"
    },
    {
        name: "Professional Art Printing",
        feature: "CANOPY",
        backround: "Back End Dev",
        year: "2015",
        description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        featuredImage: "./images/prof-art-project.png",
        technologies: ["html", "css", "javascript"],
        liveLink: "https://example.com/professional-art-printing",
        sourceLink: "https://github.com/example/professional-art-printing"
    }
];
