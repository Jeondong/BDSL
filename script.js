const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-menu]');
const mobileNavigation = window.matchMedia('(max-width: 980px)');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const closeMenu = () => {
  menuToggle.setAttribute('aria-expanded', 'false');
  menu.classList.remove('open');
  menu.inert = mobileNavigation.matches;
  document.body.classList.remove('menu-open');
  menuToggle.querySelector('.sr-only').textContent = 'Open navigation menu';
};

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menu.classList.toggle('open', !isOpen);
  menu.inert = mobileNavigation.matches && isOpen;
  document.body.classList.toggle('menu-open', !isOpen);
  menuToggle.querySelector('.sr-only').textContent = isOpen ? 'Open navigation menu' : 'Close navigation menu';
});

menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.classList.contains('open')) { closeMenu(); menuToggle.focus(); }
});
mobileNavigation.addEventListener('change', closeMenu);
closeMenu();

const currentPage = document.body.dataset.page;
document.querySelectorAll('[data-nav]').forEach((link) => {
  const isCurrent = link.dataset.nav === currentPage;
  link.classList.toggle('active', isCurrent);
  if (isCurrent) link.setAttribute('aria-current', 'page');
});

const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 12);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

if (reducedMotion || !('IntersectionObserver' in window)) {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries, revealObserver) => {
    entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px' });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}

document.querySelector('[data-year]').textContent = new Date().getFullYear();
