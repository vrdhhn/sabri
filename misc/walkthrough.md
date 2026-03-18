# SABRI Pvt. Ltd. Website — Walkthrough

## What Was Built
A **6-page multi-page website** for SABRI Pvt. Ltd., an agrotech startup, using **Vite + Vanilla JS/CSS**.

### Pages
| Page | URL | Content |
|------|-----|---------|
| **Home** | `/` | Hero, value props, featured products (from JSON), stats, news updates (from JSON), CTA |
| **About** | [/about.html](file:///Users/mus/mh/code/web/client/about.html) | Mission/vision, challenges, market opportunity, roadmap timeline, certifications, business model, trade partners |
| **Products** | [/products.html](file:///Users/mus/mh/code/web/client/products.html) | Category filters, product cards from JSON, farming services with enquiry CTAs |
| **Technology** | [/technology.html](file:///Users/mus/mh/code/web/client/technology.html) | Farming models, IoT/AI tech stack, polyhouse details, operation chain |
| **Team** | [/team.html](file:///Users/mus/mh/code/web/client/team.html) | 5 team member cards, company values, investment CTA |
| **Contact** | [/contact.html](file:///Users/mus/mh/code/web/client/contact.html) | Lead gen form, contact info cards, partnership section |

### Key Features
- **Green/white/yellow** brand color scheme matching the logo
- **Shared header/footer** components injected via JS on all pages
- **Lead generation modal** — "Enquire Now" buttons open a form for any product/service
- **Dynamic data** — Products and updates loaded from JSON files ([data/products.json](file:///Users/mus/mh/code/web/client/data/products.json), [data/updates.json](file:///Users/mus/mh/code/web/client/data/updates.json)) for easy client editing
- **Scroll animations** — Elements animate in on scroll via IntersectionObserver
- **Responsive** — Mobile hamburger menu, adaptive grids at 768px/1024px breakpoints
- **Scroll-to-top** button on all pages

### Project Structure
```
├── index.html, about.html, products.html, technology.html, team.html, contact.html
├── style.css              ← Full design system
├── components/            ← header.js, footer.js
├── js/                    ← Per-page entry files + utils.js
├── data/                  ← products.json, updates.json (editable)
├── public/images/         ← Logo
├── vite.config.js         ← Multi-page build config
└── package.json
```

## Verification
- ✅ All 6 pages return **HTTP 200**
- ✅ Vite production build succeeds — **17 modules**, zero errors
- ✅ All page titles render correctly

## Running
```bash
npm run dev    # → http://localhost:5173
```

## forms

Both forms are now integrated with Web3Forms. Here's how to activate it:

Go to web3forms.com and enter the client's email
They'll receive an access key (looks like a1b2c3d4-e5f6-...)
Replace 'YOUR_ACCESS_KEY_HERE' in two files:

js/utils.js
 (line 2) — for the "Enquire Now" product modal

js/contact.js
 (line 11) — for the contact page form
Once the key is set, every form submission will send an email to the client with:

Subject: "New Product Enquiry — Bell Peppers" or "New Contact Enquiry — Bulk Orders"
Body: all the form fields (name, email, phone, message, product/interest)
Loading state on the button while submitting
Error handling with user-friendly alerts if something fails


## cms

How to complete the setup (For you)
When you deploy this to Netlify (as discussed earlier or via Github connected to Netlify), you just need to do two things in the Netlify Dashboard to enable the CMS:

Go to Netlify Dashboard > Site settings > Identity and click Enable Identity.
Go to Identity > Services > Git Gateway and Enable Git Gateway. (This connects the CMS safely to your GitHub repo without the client needing access).
Hand-off to the Client
After that's enabled:

They go to yoursite.com/admin (or you can create a link for them).
They click the login button which prompts them for an email/password. (You can invite them manually through the Identity tab on Netlify).
Once logged in, they see a beautiful dashboard with "Products" and "Updates". They click "Products", fill out fields like Name, Category, Description, and can even click "Upload" for an image.
Clicking "Publish" automatically updates the GitHub repo, which triggers Netlify to rebuild the site instantly.


Here is the step-by-step for how to do it correctly:

Upload to GitHub: Create a new repository on GitHub and push all your code to it. (Note: I just quickly added a 

.gitignore
 file for you so you don't accidentally push the massive node_modules folder!)
Connect to Netlify: Go to your Netlify dashboard, click "Add new site" -> "Import an existing project", and select your GitHub repository. Netlify will detect it's a Vite project automatically and deploy the site.
Enable Identity: In the Netlify dashboard for your new site, go to Site configuration > Identity and click Enable Identity.
Enable Git Gateway: Still in the Identity menu, go to the Services tab at the top. Find Git Gateway and click Enable Git Gateway. This connects Identity to GitHub safely.
Invite Your Client: Go back to the main Identity tab and click Invite users. Send an invite to the client's email address.
That's it! The client will get an email with a link. When they click it, it'll take them to the live site, they'll create a password, and then they can go to yoursite.com/admin to start adding products and updating images. Every time they hit "Publish", Netlify will automatically rebuild the site for them within seconds.


