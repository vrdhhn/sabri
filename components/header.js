export function createHeader(activePage) {
  const nav = document.createElement('nav');
  nav.className = 'navbar';
  nav.id = 'navbar';

  const pages = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about.html' },
    { name: 'Products', href: '/products.html' },
    { name: 'Technology', href: '/technology.html' },
    { name: 'Team', href: '/team.html' },
    { name: 'Contact', href: '/contact.html' },
  ];

  const linksHTML = pages
    .map(p => `<a href="${p.href}" class="${activePage === p.name ? 'active' : ''}">${p.name}</a>`)
    .join('');

  nav.innerHTML = `
    <div class="nav-inner">
      <a href="/" class="nav-brand">
        <img src="/images/logo.jpg" alt="SABRI Pvt. Ltd." />
        <span>SABRI</span>
      </a>
      <div class="nav-links" id="navLinks">
        ${linksHTML}
        <a href="/contact.html" class="nav-cta">Get in Touch →</a>
      </div>
      <button class="hamburger" id="hamburger" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;

  document.body.prepend(nav);

  // Hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close menu on link click (mobile)
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // Scroll effects
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
}
