import '../style.css'
import { createHeader } from '../components/header.js'
import { createFooter } from '../components/footer.js'
import { initScrollAnimations, initScrollToTop, initLeadModal } from '../js/utils.js'
import productsData from '../data/products.json'

createHeader('Products')
createFooter()
initScrollAnimations()
initScrollToTop()
initLeadModal()

const categoryLabels = {
  exotic: 'Exotic',
  'non-exotic': 'Non-Exotic',
  spice: 'Spice',
  mushroom: 'Mushroom',
}

let allProducts = []

function renderProducts(category = 'all') {
  const grid = document.getElementById('productsGrid')
  const filtered =
    category === 'all'
      ? allProducts
      : allProducts.filter((p) => p.category === category)

  if (grid) {
    grid.innerHTML = filtered
      .map(
        (p) => `
      <div class="product-card animate-on-scroll visible">
        <div class="product-card-img">
          <img src="${p.image}" alt="${p.name}" onerror="this.style.display='none';this.nextElementSibling.style.display=''" />
          <span class="emoji-placeholder" style="display:none"><i data-lucide="sprout"></i></span>
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
    
    // Re-init icons for new elements
    if (window.lucide) {
      window.lucide.createIcons()
    }
  }
}

// Category filter
const filters = document.getElementById('categoryFilters')
if (filters) {
  filters.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
      document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'))
      e.target.classList.add('active')
      renderProducts(e.target.dataset.category)
    }
  })
}

// Load all products
function loadProducts() {
  try {
    allProducts = productsData.items || productsData
    renderProducts()
  } catch (e) {
    console.error('Failed to load products:', e)
  }
}

loadProducts()
