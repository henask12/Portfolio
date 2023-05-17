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
