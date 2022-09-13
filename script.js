const allNav = document.querySelectorAll('.navbar span');

// Pages
const home = document.querySelector('.home');
const about = document.querySelector('.about');
const projects = document.querySelector('.projects');
const contact = document.querySelector('.contact');

allNav.forEach((nav, i) => {
  nav.addEventListener('click', () => {
    switch (i) {
      case 0:
        home.style.display = 'block';
        about.style.display = 'none';
        projects.style.display = 'none';
        contact.style.display = 'none';
        document.documentElement.scrollTop = 0;
        break;
      case 1:
        home.style.display = 'none';
        about.style.display = 'block';
        projects.style.display = 'none';
        contact.style.display = 'none';
        document.documentElement.scrollTop = 0;
        break;
      case 2:
        home.style.display = 'none';
        about.style.display = 'none';
        projects.style.display = 'block';
        contact.style.display = 'none';
        document.documentElement.scrollTop = 0;
        break;
      case 3:
        home.style.display = 'none';
        about.style.display = 'none';
        projects.style.display = 'none';
        contact.style.display = 'flex';
        document.documentElement.scrollTop = 0;
        break;
    }
  });
});
