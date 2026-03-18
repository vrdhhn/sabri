import '../style.css'
import { createHeader } from '../components/header.js'
import { createFooter } from '../components/footer.js'
import { initScrollAnimations, initScrollToTop } from '../js/utils.js'

createHeader('Contact')
createFooter()
initScrollAnimations()
initScrollToTop()

// ⚠️ Replace with your Web3Forms access key from https://web3forms.com
const WEB3FORMS_KEY = 'YOUR_ACCESS_KEY_HERE';

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault()
  const submitBtn = document.getElementById('submitBtn')
  const originalText = submitBtn.textContent
  submitBtn.textContent = 'Sending...'
  submitBtn.disabled = true

  try {
    const formData = new FormData(e.target)
    formData.append('access_key', WEB3FORMS_KEY)
    formData.append('subject', 'New Contact Enquiry — ' + (formData.get('interest') || 'General'))
    formData.append('from_name', 'SABRI Website')

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })
    const data = await res.json()

    if (data.success) {
      e.target.style.display = 'none'
      document.getElementById('contactSuccess').classList.add('show')
      setTimeout(() => {
        e.target.style.display = ''
        e.target.reset()
        document.getElementById('contactSuccess').classList.remove('show')
      }, 5000)
    } else {
      alert('Something went wrong. Please try again or contact us directly.')
    }
  } catch (err) {
    console.error('Form submission error:', err)
    alert('Network error. Please try again or contact us directly.')
  } finally {
    submitBtn.textContent = originalText
    submitBtn.disabled = false
  }
})
