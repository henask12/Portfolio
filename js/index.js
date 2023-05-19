const btn = document.querySelector("#hamburger-btn");
const closeBtn = document.querySelector("#close-btn");
const hiddenMenuBg = document.querySelector("#hidden-menu-background");
const hiddenMenu = document.querySelector("#hidden-menu");
const anchorMenu = document.querySelector(".anchor");
const anchorMenu1 = document.querySelector(".anchor1");
const anchorMenu2 = document.querySelector(".anchor2");
let isMenuOpen = false;

function openMenu() {
    hiddenMenuBg.style.display = "initial";
    hiddenMenu.style.display = "initial";
    setTimeout(() => {
        hiddenMenuBg.style.opacity = 1;
        hiddenMenu.style.opacity = 1;
    }, 10);
    isMenuOpen = true;
}

function closeMenu() {
    hiddenMenuBg.style.opacity = 0;
    hiddenMenu.style.opacity = 0;
    setTimeout(() => {
        hiddenMenuBg.style.display = "none";
        hiddenMenu.style.display = "none";
    }, 300);
    isMenuOpen = false;
}

btn.addEventListener("click", () => {
    if (!isMenuOpen) {
        openMenu();
    } else {
        closeMenu();
    }
});

anchorMenu.addEventListener("click", () => {
    closeMenu();
});
anchorMenu1.addEventListener("click", () => {
    closeMenu();
});
anchorMenu2.addEventListener("click", () => {
    closeMenu();
});

closeBtn.addEventListener("click", closeMenu);

function handleResize() {
    if (window.innerWidth > 768 && isMenuOpen) {
        closeMenu();
    }
}

window.addEventListener("resize", handleResize);

window.addEventListener("scroll", () => {
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

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (error) {
        return (
            error instanceof DOMException &&
            // everything except Firefox
            (error.code === 22 ||
                // Firefox
                error.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                error.name === "QuotaExceededError" ||
                // Firefox
                error.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        );
    }
}

function saveData() {
    if (storageAvailable("localStorage")) {
        let nameInput = document.getElementById("name-input");
        let emailInput = document.getElementById("email-input");
        let messageInput = document.getElementById("message-box");
        let formObj = {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value
        };

        localStorage.setItem("data", JSON.stringify(formObj));
    } else {
        console.log("ERROR: Localstorage not aviable.");
    }
}

// VALIDATION FORM

let form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let errorMessage = document.getElementById("error-message");
    let emailInput = document.getElementById("email-input");
    saveData();

    if (emailInput.value !== emailInput.value.toLowerCase()) {
        errorMessage.textContent = "Email address must be written in lowercase";
        errorMessage.style.visibility = "visible";
    } else {
        errorMessage.textContent = "";
        errorMessage.style.visibility = "hidden";
        event.target.submit();
    }
});

window.addEventListener("load", () => {
    let nameInput = document.getElementById("name-input");
    let emailInput = document.getElementById("email-input");
    let messageInput = document.getElementById("message-box");

    nameInput.value = localStorage.getItem("name");
    emailInput.value = localStorage.getItem("email");
    messageInput.value = localStorage.getItem("message");
});
