// ⚠️ Replace with your Web3Forms access key from https://web3forms.com
const WEB3FORMS_KEY = 'YOUR_ACCESS_KEY_HERE';

// Scroll animations observer
export function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

// Scroll to top button
export function initScrollToTop() {
  const btn = document.createElement('button');
  btn.className = 'scroll-top';
  btn.id = 'scrollTop';
  btn.innerHTML = '↑';
  btn.setAttribute('aria-label', 'Scroll to top');
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Lead generation modal
export function initLeadModal() {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.id = 'leadModal';

  overlay.innerHTML = `
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
  `;

  document.body.appendChild(overlay);

  const closeModal = () => {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  document.getElementById('modalClose').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.getElementById('leadForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;

    try {
      const formData = new FormData(e.target);
      formData.append('access_key', WEB3FORMS_KEY);
      formData.append('subject', 'New Product Enquiry — ' + (formData.get('product') || 'General'));
      formData.append('from_name', 'SABRI Website');

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        e.target.style.display = 'none';
        document.getElementById('leadSuccess').classList.add('show');
        setTimeout(() => {
          closeModal();
          e.target.style.display = '';
          e.target.reset();
          document.getElementById('leadSuccess').classList.remove('show');
        }, 3000);
      } else {
        alert('Something went wrong. Please try again or contact us directly.');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      alert('Network error. Please try again or contact us directly.');
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });

  // Global function for opening the modal
  window.openLeadModal = (productName) => {
    document.getElementById('leadProduct').value = productName || '';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };
}
