import '../style.css'
import { createHeader } from '../components/header.js'
import { createFooter } from '../components/footer.js'
import { initScrollAnimations, initScrollToTop, initLeadModal } from '../js/utils.js'
import productsData from '../data/products.json'
import updatesData from '../data/updates.json'

// Init shared components
createHeader('Home')
createFooter()
initScrollAnimations()
initScrollToTop()
initLeadModal()

// Product emoji map
const emojiMap = {
  'Bell Peppers': '🫑',
  'Zucchini': '🥒',
  'Lettuce': '🥬',
  'Broccoli': '🥦',
  'Okra (Bhindi)': '🌿',
  'Cucumber': '🥒',
  'Spinach': '🥬',
  'Turmeric': '🟡',
  'Saffron': '🌸',
  'Oyster Mushrooms': '🍄',
  'Button Mushrooms': '🍄',
}

const categoryLabels = {
  exotic: 'Exotic',
  'non-exotic': 'Non-Exotic',
  spice: 'Spice',
  mushroom: 'Mushroom',
}

// Load featured products
function loadFeaturedProducts() {
  try {
    const products = productsData.items || productsData
    const featured = products.slice(0, 4)
    const grid = document.getElementById('featuredProducts')

    grid.innerHTML = featured
      .map(
        (p, i) => `
      <div class="product-card animate-on-scroll animate-delay-${i + 1}">
        <div class="product-card-img">
          <img src="${p.image}" alt="${p.name}" onerror="this.style.display='none';this.nextElementSibling.style.display=''" />
          <span class="emoji-placeholder" style="display:none">${emojiMap[p.name] || '🌱'}</span>
        </div>
        <div class="product-card-body">
          <span class="category-tag">${categoryLabels[p.category] || p.category}</span>
          <h4>${p.name}</h4>
          <p>${p.description}</p>
          <button class="btn btn-sm btn-primary" onclick="openLeadModal('${p.name}')">Enquire Now →</button>
        </div>
      </div>
    `
      )
      .join('')

    // Re-init scroll animations for new elements
    initScrollAnimations()
  } catch (e) {
    console.error('Failed to load products:', e)
  }
}

// Load updates
function loadUpdates() {
  try {
    const updates = updatesData.items || updatesData
    const grid = document.getElementById('updatesGrid')

    grid.innerHTML = updates
      .map(
        (u, i) => `
      <div class="update-card animate-on-scroll animate-delay-${(i % 2) + 1}">
        <span class="tag">${u.tag}</span>
        <p class="date">${new Date(u.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <h4>${u.title}</h4>
        <p>${u.summary}</p>
      </div>
    `
      )
      .join('')

    initScrollAnimations()
  } catch (e) {
    console.error('Failed to load updates:', e)
  }
}

loadFeaturedProducts()
loadUpdates()
