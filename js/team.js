import '../style.css'
import { createHeader } from '../components/header.js'
import { createFooter } from '../components/footer.js'
import { initScrollAnimations, initScrollToTop } from '../js/utils.js'

createHeader('Team')
createFooter()
initScrollAnimations()
initScrollToTop()
