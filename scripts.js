function updateActiveMenuItem() {
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(item => item.classList.remove('active'));

  const hash = window.location.hash;

  if (hash) {
    const activeItem = document.querySelector(`.menu-item[href="${hash}"]`);
    if (activeItem) {
      activeItem.classList.add('active');
    }
  } else {
    const defaultItem = document.querySelector('.menu-item[href="#welcome"]');
    if (defaultItem) {
      defaultItem.classList.add('active');
    }
  }
}

function updateActiveMenuItemOnScroll() {
  const sections = document.querySelectorAll('section');
  const menuItems = document.querySelectorAll('.menu-item');

  let currentSectionId = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSectionId = section.getAttribute('id');
    }
  });

  menuItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === `#${currentSectionId}`) {
      item.classList.add('active');
    }
  });
}

const navLinks = document.querySelector('.nav-links')
function onToggleMenu(e){
    e.name = e.name === 'menu' ? 'close' : 'menu'
    navLinks.classList.toggle('top-[9%]')
}

window.addEventListener('hashchange', updateActiveMenuItem);

window.addEventListener('scroll', updateActiveMenuItemOnScroll);

document.addEventListener('DOMContentLoaded', () => {
  updateActiveMenuItem();
  updateActiveMenuItemOnScroll();
});