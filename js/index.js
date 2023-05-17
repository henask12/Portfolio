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

const seeProjectButtons = document.querySelectorAll(".btn");
seeProjectButtons.forEach((button) => {
    button.addEventListener("click", openPopup);
});

function openPopup() {
    const overlay = document.querySelector(".overlay");
    const closeModalButton = overlay.querySelector(".closeModal");
    // Get the index of the project from the data attribute
    const projectIndex = parseInt(this.getAttribute("data-project-index"));
    const project = projects[projectIndex];

    const projectName = overlay.querySelector(".project-name");
    const projectFeature = overlay.querySelector(".project-feature");
    const projectBackground = overlay.querySelector(".project-background");
    const projectYear = overlay.querySelector(".project-year");
    const projectImage = overlay.querySelector(".project-image");
    const projectDescription = overlay.querySelector(".project-description");
    const projectTool1 = overlay.querySelector(".project-tool1");
    const projectTool2 = overlay.querySelector(".project-tool2");
    const projectTool3 = overlay.querySelector(".project-tool3");
    const projectLinkLive = overlay.querySelector(".project-linkLive");
    const projectLinkSource = overlay.querySelector(".project-linkSource");

    projectName.textContent = project.name;
    projectFeature.textContent = project.feature;
    projectBackground.textContent = project.backround;
    projectYear.textContent = project.year;
    projectImage.src = project.featuredImage;
    projectDescription.textContent = project.description;
    [projectTool1, projectTool2, projectTool3].forEach((tool, index) => {
        if (index < project.technologies.length) {
            tool.textContent = project.technologies[index];
        } else {
            tool.textContent = "";
        }
    });
    projectLinkLive.href = project.liveLink;
    projectLinkSource.href = project.sourceLink;

    overlay.style.display = "flex";

    closeModalButton.addEventListener("click", closePopup);
}

function closePopup() {
    const overlay = document.querySelector(".overlay");
    overlay.style.display = "none";
}

// Function to create the modal popup dynamically
function createModal() {
    const startingPoint = document.querySelector(".modal-popup");
    startingPoint.insertAdjacentHTML(
        "afterend",
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
                            <p class="project-tool1 "></p>
                            <p class="project-tool2 "></p>
                            <p class="project-tool3"></p>
                        </div>
                        <ul class='modal-btn ul flex'>
                            <li>
                                <a href='' class="btn link project-linkLive  background">See Live</a>
                            </li>
                            <li>
                                <a href='' class="btn link project-linkSource  background">See Source</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
        </div>`
    );
}

createModal();
