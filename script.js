const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-menu]');
const menuLinks = [...document.querySelectorAll('.nav-links a')];
const sections = [...document.querySelectorAll('main section[id]')];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const closeMenu = () => {
  menuToggle.setAttribute('aria-expanded', 'false');
  menu.classList.remove('open');
  document.body.classList.remove('menu-open');
  menuToggle.querySelector('.sr-only').textContent = 'Open navigation menu';
};

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menu.classList.toggle('open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
  menuToggle.querySelector('.sr-only').textContent = isOpen ? 'Open navigation menu' : 'Close navigation menu';
});

menuLinks.forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.classList.contains('open')) { closeMenu(); menuToggle.focus(); }
});
window.addEventListener('resize', () => { if (window.innerWidth > 900) closeMenu(); });

const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 12);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

if (reducedMotion || !('IntersectionObserver' in window)) {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
}

if ('IntersectionObserver' in window) {
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      menuLinks.forEach((link) => {
        const isCurrent = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('active', isCurrent);
        if (isCurrent) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-25% 0px -65%', threshold: 0 });
  sections.forEach((section) => navObserver.observe(section));
}

document.querySelector('[data-year]').textContent = new Date().getFullYear();
