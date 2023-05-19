const btn = document.querySelector('#hamburger-btn');
const closeBtn = document.querySelector('#close-btn');
const hiddenMenuBg = document.querySelector('#hidden-menu-background');
const hiddenMenu = document.querySelector('#hidden-menu');
const anchorMenu = document.querySelector('.anchor');
const anchorMenu1 = document.querySelector('.anchor1');
const anchorMenu2 = document.querySelector('.anchor2');
let isMenuOpen = false;

function openMenu() {
  hiddenMenuBg.style.display = 'initial';
  hiddenMenu.style.display = 'initial';
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
    hiddenMenuBg.style.display = 'none';
    hiddenMenu.style.display = 'none';
  }, 300);
  isMenuOpen = false;
}

btn.addEventListener('click', () => {
  if (!isMenuOpen) {
    openMenu();
  } else {
    closeMenu();
  }
});

anchorMenu.addEventListener('click', () => {
  closeMenu();
});
anchorMenu1.addEventListener('click', () => {
  closeMenu();
});
anchorMenu2.addEventListener('click', () => {
  closeMenu();
});

closeBtn.addEventListener('click', closeMenu);

function handleResize() {
  if (window.innerWidth > 768 && isMenuOpen) {
    closeMenu();
  }
}

window.addEventListener('resize', handleResize);

// const portfolioSection = document.getElementById('portfolio');

// const seeProjectButtons = document.querySelectorAll('.btn');

// Add this line after dynamically creating the cards
// attachEventListeners();

// Function to create the modal popup dynamically
function createModal() {
  const startingPoint = document.querySelector('.modal-popup');
  startingPoint.insertAdjacentHTML(
    'afterend',
    `<div class='overlay'>
            <section class='modal'>
                <div class='modal-header flex'>
                    <h2 class='project-name '></h2>
                    <img class='closeModal' src='./images/close.png' alt='close icon'></img>
                </div>
                <div class='modal-feature flex'>
                    <p class="project-feature "></p>
                    <ul class="flex">
                        <li class="project-background "></li>
                        <li class="project-year "> </li>
                    </ul>
                </div>
                <div class='image-project'>
                    <img class='modal-image project-image' src='' alt='project image'></img>
                </div>
                <ul class='modal-dsc ul flex'>
                    <li class='modal-dsc-first'>
                        <p class='project-description'></p>
                    </li>
                    <li class="modal-dsc-second flex">
                        <div class='flex'>
                            <p class="project-tool1"></p>
                            <p class="project-tool2"></p>
                            <p class="project-tool3"></p>
                        </div>
                        <hr class="modal-line"></hr>
                        <ul class='modal-btn ul flex'>
                            <li class="flex">
                                <a href='' class="btn link project-linkLive background">See Live <i class="bi bi-arrow-up-right-circle"></i></a>
                            </li>
                            <li class="flex">
                                <a href='' class="btn link project-linkSource background">See Source <i class="bi bi-github" style="min-height: 18px"></i></a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
        </div>`,
  );
}

createModal();

document.getElementById('contact-form').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  // Get the contact form element
  const emailInput = document.getElementById('email');
  const errorMessageSpan = document.getElementById('error-message-span');

  // Check if the email value is lowercase
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    // Show error message
    errorMessageSpan.textContent = 'Email should be in lower case.';
    errorMessageSpan.style.display = 'block';
    errorMessageSpan.style.color = 'red';
    errorMessageSpan.style.fontSize = '14px';
    errorMessageSpan.style.transform = 'none';
    errorMessageSpan.style.marginTop = '5px';
  } else {
    // Hide error message
    errorMessageSpan.style.display = 'none';
    errorMessageSpan.style.color = '';
    errorMessageSpan.style.fontSize = '';
    errorMessageSpan.style.transform = '';
    errorMessageSpan.style.marginTop = '';

    // Submit the form
    event.target.submit();
  }
});

window.addEventListener('resize', handleResize);

window.addEventListener('scroll', () => {
  const contactSection = document.getElementById('contact');
  const navBar = document.querySelector('.NavBar');

  const contactSectionTop = contactSection.offsetTop;
  const scrollPosition = window.scrollY;

  if (scrollPosition >= contactSectionTop) {
    navBar.classList.add('white-bg');
  } else {
    navBar.classList.remove('white-bg');
  }
});

// 1.0 LOCAL STORAGE
//   1.1 Testing for availability
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

//   1.2 savingData
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

        for (let i = 0; i < Object.keys(formObj).length; i++) {
            localStorage.setItem(Object.keys(formObj)[i], Object.values(formObj)[i]);
        }
    } else {
        console.log("ERROR: Localstorage not aviable.");
    }
}

// VALIDATION FORM

let form = document.getElementById("contact-me-form");
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
