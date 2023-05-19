window.addEventListener('load', () => {
  const portfolioSection = document.getElementById('portfolio');

  const projects = [
    {
      imageSrc: './images/tonic-project-desktop.svg',
      imageAlt: 'tonic project',
      title: 'Tonic',
      company: 'CANOPY',
      role: 'Back End Dev',
      year: '2015',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      languages: ['html', 'css', 'javascript'],
    },
    {
      imageSrc: './images/multi-post-project.png',
      imageAlt: 'multi-post stories project',
      title: 'Multi-Post Stories',
      company: 'CANOPY',
      role: 'Back End DEV',
      year: '2015',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      languages: ['html', 'CSS', 'javascript'],
    },
    {
      imageSrc: './images/tonic-orange.png',
      imageAlt: 'tonic orange project',
      title: 'Tonic',
      company: 'CANOPY',
      role: 'Back End Dev',
      year: '2015',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      languages: ['html', 'css', 'javascript'],
    },
    {
      imageSrc: './images/prof-art-project.png',
      imageAlt: 'professional art printing project',
      title: 'Professional Art Printing',
      company: 'CANOPY',
      role: 'Back End Dev',
      year: '2018',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      languages: ['html', 'css', 'javascript'],
    },
  ];

  for (let i = 0; i < projects.length; i += 1) {
    const project = projects[i];

    const card = document.createElement('div');
    card.className = 'card flex background';

    const image = document.createElement('img');
    image.src = project.imageSrc;
    image.alt = project.imageAlt;
    card.appendChild(image);

    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';

    const title = document.createElement('h2');
    title.textContent = project.title;
    cardHeader.appendChild(title);

    const subHeader = document.createElement('div');
    subHeader.className = 'card-sub-header flex';

    const company = document.createElement('p');
    company.textContent = project.company;
    subHeader.appendChild(company);

    const roleYear = document.createElement('ul');
    roleYear.className = 'flex';

    const role = document.createElement('li');
    role.textContent = project.role;
    roleYear.appendChild(role);

    const year = document.createElement('li');
    year.textContent = project.year;
    roleYear.appendChild(year);

    subHeader.appendChild(roleYear);
    cardHeader.appendChild(subHeader);

    const description = document.createElement('p');
    description.className = 'card-description';
    description.textContent = project.description;
    cardHeader.appendChild(description);

    const languages = document.createElement('ul');
    languages.className = 'card-languages flex';

    for (let j = 0; j < project.languages.length; j += 1) {
      const language = document.createElement('li');
      language.textContent = project.languages[j];
      languages.appendChild(language);
    }

    cardHeader.appendChild(languages);

    const cardButton = document.createElement('div');
    cardButton.className = 'card-button';

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn background';
    button.textContent = 'See Project';
    button.setAttribute('data-project-index', i); // Add data-project-index attribute
    button.addEventListener('click', openPopup);
    cardButton.appendChild(button);

    cardHeader.appendChild(cardButton);

    card.appendChild(cardHeader);

    portfolioSection.appendChild(card);
  }
});
