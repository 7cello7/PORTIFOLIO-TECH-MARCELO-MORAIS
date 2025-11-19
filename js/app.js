const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    if (navMenu.classList.contains('open')) {
      navMenu.style.display = 'flex';
      navMenu.style.flexDirection = 'column';
      navMenu.style.background = 'rgba(13,15,19,0.95)';
      navMenu.style.position = 'absolute';
      navMenu.style.top = '70px';
      navMenu.style.right = '20px';
      navMenu.style.padding = '1rem 1.3rem';
      navMenu.style.gap = '0.8rem';
      navMenu.style.border = '1px solid rgba(255,49,72,0.2)';
      navMenu.style.borderRadius = '0.8rem';
    } else {
      navMenu.removeAttribute('style');
    }
  });
}
