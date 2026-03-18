(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();function r(e){const a=document.createElement("nav");a.className="navbar",a.id="navbar";const l=[{name:"Home",href:"/"},{name:"About",href:"/about.html"},{name:"Products",href:"/products.html"},{name:"Technology",href:"/technology.html"},{name:"Team",href:"/team.html"},{name:"Contact",href:"/contact.html"}].map(n=>`<a href="${n.href}" class="${e===n.name?"active":""}">${n.name}</a>`).join("");a.innerHTML=`
    <div class="nav-inner">
      <a href="/" class="nav-brand">
        <img src="/images/logo.jpg" alt="SABRI Pvt. Ltd." />
        <span>SABRI</span>
      </a>
      <div class="nav-links" id="navLinks">
        ${l}
        <a href="/contact.html" class="nav-cta">Get in Touch →</a>
      </div>
      <button class="hamburger" id="hamburger" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>
    </div>
  `,document.body.prepend(a);const t=document.getElementById("hamburger"),s=document.getElementById("navLinks");t.addEventListener("click",()=>{t.classList.toggle("open"),s.classList.toggle("open")}),s.querySelectorAll("a").forEach(n=>{n.addEventListener("click",()=>{t.classList.remove("open"),s.classList.remove("open")})}),window.addEventListener("scroll",()=>{a.classList.toggle("scrolled",window.scrollY>50)})}function i(){const e=document.createElement("footer");e.className="footer",e.innerHTML=`
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="/images/logo.jpg" alt="SABRI Pvt. Ltd." />
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
            <span class="icon">📧</span>
            <span>info.sabripvt@gmail.com</span>
          </div>
          <div class="footer-contact-item">
            <span class="icon">📞</span>
            <span>+91 7360867602</span>
          </div>
          <div class="footer-contact-item">
            <span class="icon">📞</span>
            <span>+91 9931998414</span>
          </div>
          <div class="footer-contact-item">
            <span class="icon">🌐</span>
            <span>www.sabri.com</span>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© ${new Date().getFullYear()} SABRI Pvt. Ltd. All rights reserved.</p>
        <div class="footer-social">
          <a href="#" aria-label="YouTube">▶️</a>
          <a href="#" aria-label="Instagram">📸</a>
          <a href="#" aria-label="LinkedIn">💼</a>
        </div>
      </div>
    </div>
  `,document.body.appendChild(e)}function c(){const e=new IntersectionObserver(a=>{a.forEach(o=>{o.isIntersecting&&o.target.classList.add("visible")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});document.querySelectorAll(".animate-on-scroll").forEach(a=>e.observe(a))}function d(){const e=document.createElement("button");e.className="scroll-top",e.id="scrollTop",e.innerHTML="↑",e.setAttribute("aria-label","Scroll to top"),document.body.appendChild(e),window.addEventListener("scroll",()=>{e.classList.toggle("visible",window.scrollY>500)}),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})}function m(){const e=document.createElement("div");e.className="modal-overlay",e.id="leadModal",e.innerHTML=`
    <div class="modal" style="position:relative;">
      <button class="modal-close" id="modalClose">✕</button>
      <h3>Enquire About This Product</h3>
      <p style="color: var(--gray-600);">Fill in your details and we'll get back to you within 24 hours.</p>
      <form id="leadForm">
        <input type="hidden" id="leadProduct" name="product" />
        <div class="form-group">
          <label for="leadName">Full Name *</label>
          <input type="text" id="leadName" name="name" required placeholder="Your name" />
        </div>
        <div class="form-group">
          <label for="leadEmail">Email *</label>
          <input type="email" id="leadEmail" name="email" required placeholder="you@example.com" />
        </div>
        <div class="form-group">
          <label for="leadPhone">Phone *</label>
          <input type="tel" id="leadPhone" name="phone" required placeholder="+91 XXXXX XXXXX" />
        </div>
        <div class="form-group">
          <label for="leadMessage">Message</label>
          <textarea id="leadMessage" name="message" placeholder="Tell us about your requirements..."></textarea>
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%;">Submit Enquiry</button>
      </form>
      <div class="form-success" id="leadSuccess">
        <div class="checkmark">✓</div>
        <h3>Thank You!</h3>
        <p>Your enquiry has been submitted. Our team will reach out within 24 hours.</p>
      </div>
    </div>
  `,document.body.appendChild(e);const a=()=>{e.classList.remove("active"),document.body.style.overflow=""};document.getElementById("modalClose").addEventListener("click",a),e.addEventListener("click",o=>{o.target===e&&a()}),document.getElementById("leadForm").addEventListener("submit",o=>{o.preventDefault();const l=new FormData(o.target),t=Object.fromEntries(l);console.log("Lead generated:",t),o.target.style.display="none",document.getElementById("leadSuccess").classList.add("show"),setTimeout(()=>{a(),o.target.style.display="",o.target.reset(),document.getElementById("leadSuccess").classList.remove("show")},3e3)}),window.openLeadModal=o=>{document.getElementById("leadProduct").value=o||"",e.classList.add("active"),document.body.style.overflow="hidden"}}export{i as a,d as b,r as c,m as d,c as i};
