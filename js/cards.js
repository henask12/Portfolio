window.addEventListener("load", () => {
    const portfolioSection = document.getElementById("portfolio");

    const projects = [
        {
            imageSrc: "./images/Todolist.png",
            imageAlt: "To do List Web App",
            title: "To-Do-List",
            company: "CANOPY",
            role: "Front End Dev",
            year: "2023",
            description:
                "To do list is a simple and user-friendly application that allows you to manage your tasks and stay organized",
            languages: ["html", "css", "javascript"]
        },
        {
            imageSrc: "./images/tonic-project-desktop.svg",
            imageAlt: "tonic project",
            title: "Tonic",
            company: "CANOPY",
            role: "Back End Dev",
            year: "2015",
            description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
            languages: ["html", "css", "javascript"]
        },
        {
            imageSrc: "./images/multi-post-project.png",
            imageAlt: "multi-post stories project",
            title: "Multi-Post Stories",
            company: "CANOPY",
            role: "Back End DEV",
            year: "2015",
            description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
            languages: ["html", "CSS", "javascript"]
        },
        {
            imageSrc: "./images/tonic-orange.png",
            imageAlt: "tonic orange project",
            title: "Tonic Orange",
            company: "CANOPY",
            role: "Back End Dev",
            year: "2015",
            description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
            languages: ["html", "css", "javascript"]
        },
        {
            imageSrc: "./images/prof-art-project.png",
            imageAlt: "professional art printing project",
            title: "Professional Art Printing",
            company: "CANOPY",
            role: "Back End Dev",
            year: "2018",
            description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
            languages: ["html", "css", "javascript"]
        }
    ];

    for (let i = 0; i < projects.length; i += 1) {
        const project = projects[i];

        const card = document.createElement("div");
        card.className = "card flex background";

        const image = document.createElement("img");
        image.src = project.imageSrc;
        image.alt = project.imageAlt;
        card.appendChild(image);

        const cardHeader = document.createElement("div");
        cardHeader.className = "card-header";

        const title = document.createElement("h2");
        title.textContent = project.title;
        cardHeader.appendChild(title);

        const subHeader = document.createElement("div");
        subHeader.className = "card-sub-header flex";

        const company = document.createElement("p");
        company.textContent = project.company;
        subHeader.appendChild(company);

        const roleYear = document.createElement("ul");
        roleYear.className = "flex";

        const role = document.createElement("li");
        role.textContent = project.role;
        roleYear.appendChild(role);

        const year = document.createElement("li");
        year.textContent = project.year;
        roleYear.appendChild(year);

        subHeader.appendChild(roleYear);
        cardHeader.appendChild(subHeader);

        const description = document.createElement("p");
        description.className = "card-description";
        description.textContent = project.description;
        cardHeader.appendChild(description);

        const languages = document.createElement("ul");
        languages.className = "card-languages flex";

        for (let j = 0; j < project.languages.length; j += 1) {
            const language = document.createElement("li");
            language.textContent = project.languages[j];
            languages.appendChild(language);
        }

        cardHeader.appendChild(languages);

        const cardButton = document.createElement("div");
        cardButton.className = "card-button";

        const button = document.createElement("button");
        button.type = "button";
        button.className = "btn background";
        button.textContent = "See Project";
        button.setAttribute("data-project-index", i); // Add data-project-index attribute
        cardButton.appendChild(button);

        cardHeader.appendChild(cardButton);

        card.appendChild(cardHeader);

        portfolioSection.appendChild(card);
    }

    function openPopup(event) {
        event.preventDefault();

        const projects = [
            {
                imageSrc: "./images/Todolist.png",
                imageAlt: "To do List Web App",
                title: "To-Do-List",
                company: "CANOPY",
                role: "Front End Dev",
                year: "2023",
                description:
                    "To do list is a simple and user-friendly application that allows you to manage your tasks and stay organized",
                languages: ["html", "css", "javascript"]
            },
            {
                name: "Tonic",
                feature: "CANOPY",
                background: "Back End Dev",
                year: "2015",
                description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                featuredImage: "./images/tonic-project-desktop.svg",
                technologies: ["HTML", "CSS", "JavaScript"],
                liveLink: "https://example.com/tonic",
                sourceLink: "https://github.com/example/tonic"
            },
            {
                name: "Multi-Post Stories",
                feature: "CANOPY",
                background: "Back End Dev",
                year: "2015",
                description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                featuredImage: "./images/multi-post-project.png",
                technologies: ["HTML", "CSS", "JavaScript"],
                liveLink: "https://example.com/multi-post-stories",
                sourceLink: "https://github.com/example/multi-post-stories"
            },
            {
                name: "Tonic Orange",
                feature: "CANOPY",
                background: "Back End Dev",
                year: "2015",
                description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                featuredImage: "./images/tonic-orange.png",
                technologies: ["HTML", "CSS", "JavaScript"],
                liveLink: "https://example.com/tonic-orange",
                sourceLink: "https://github.com/example/tonic-orange"
            },
            {
                name: "Professional Art Printing",
                feature: "CANOPY",
                background: "Back End Dev",
                year: "2015",
                description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                featuredImage: "./images/prof-art-project.png",
                technologies: ["HTML", "CSS", "JavaScript"],
                liveLink: "https://example.com/professional-art-printing",
                sourceLink: "https://github.com/example/professional-art-printing"
            }
        ];

        const overlay = document.querySelector(".overlay");
        const closeModalButton = overlay.querySelector(".closeModal");
        const projectButton = event.target.closest(".btn");
        if (!projectButton) {
            return;
        }
        const projectIndex = parseInt(projectButton.getAttribute("data-project-index"), 10);
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

        function closePopup() {
            overlay.style.display = "none";
        }

        projectName.textContent = project.name;
        projectFeature.textContent = project.feature;
        projectBackground.textContent = project.background;
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

    function attachEventListeners() {
        const portfolioSection = document.getElementById("portfolio");

        portfolioSection.addEventListener("click", (event) => {
            if (event.target.classList.contains("btn")) {
                openPopup(event);
            }
        });
    }

    attachEventListeners();
})();
