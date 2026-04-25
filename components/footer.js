export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="/images/logo.png" alt="SABRI Pvt. Ltd." />
          <p>Sustainable Agriculture Bioscience Research & Innovation — pioneering tech-enabled farming for a better future.</p>
          <p class="tagline-hindi">सतत कृषि, सुनहरा भविष्य</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <div class="footer-links">
            <a href="/">Home</a>
            <a href="/about.html">About Us</a>
            <a href="/products.html">Products</a>
            <a href="/technology.html">Technology</a>
            <a href="/team.html">Our Team</a>
            <a href="/contact.html">Contact</a>
          </div>
        </div>
        <div>
          <h4>Products</h4>
          <div class="footer-links">
            <a href="/products.html">Exotic Vegetables</a>
            <a href="/products.html">Non-Exotic Vegetables</a>
            <a href="/products.html">Spices</a>
            <a href="/products.html">Mushrooms</a>
          </div>
        </div>
        <div>
          <h4>Contact Us</h4>
          <div class="footer-contact-item">
            <span class="icon"><i data-lucide="mail"></i></span>
            <span>info.sabripvt@gmail.com</span>
          </div>
          <div class="footer-contact-item">
            <span class="icon"><i data-lucide="phone"></i></span>
            <span>+91 7360867602</span>
          </div>
          <div class="footer-contact-item">
            <span class="icon"><i data-lucide="phone"></i></span>
            <span>+91 9931998414</span>
          </div>
          <div class="footer-contact-item">
            <span class="icon"><i data-lucide="map-pin"></i></span>
            <span>4th Floor C-373, New Ashok Nagar, New Delhi, 110096 (Sales & Marketing Office)</span>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© ${new Date().getFullYear()} SABRI Pvt. Ltd. All rights reserved.</p>
      </div>
    </div>
  `;

  document.body.appendChild(footer);
  if (window.lucide) {
    window.lucide.createIcons();
  }
}
