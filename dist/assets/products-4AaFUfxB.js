import{c as s,a as i,i as n,b as d,d as l}from"./utils-CKh5Btw1.js";s("Products");i();n();d();l();const u={"Bell Peppers":"🫑",Zucchini:"🥒",Lettuce:"🥬",Broccoli:"🥦","Okra (Bhindi)":"🌿",Cucumber:"🥒",Spinach:"🥬",Turmeric:"🟡",Saffron:"🌸","Oyster Mushrooms":"🍄","Button Mushrooms":"🍄"},m={exotic:"Exotic","non-exotic":"Non-Exotic",spice:"Spice",mushroom:"Mushroom"};let a=[];function c(t="all"){const e=document.getElementById("productsGrid"),r=t==="all"?a:a.filter(o=>o.category===t);e.innerHTML=r.map(o=>`
    <div class="product-card animate-on-scroll visible">
      <div class="product-card-img">
        <span class="emoji-placeholder">${u[o.name]||"🌱"}</span>
      </div>
      <div class="product-card-body">
        <span class="category-tag">${m[o.category]||o.category}</span>
        <h4>${o.name}</h4>
        <p>${o.description}</p>
        <button class="btn btn-sm btn-primary" onclick="openLeadModal('${o.name}')">Enquire Now →</button>
      </div>
    </div>
  `).join("")}document.getElementById("categoryFilters").addEventListener("click",t=>{t.target.classList.contains("filter-btn")&&(document.querySelectorAll(".filter-btn").forEach(e=>e.classList.remove("active")),t.target.classList.add("active"),c(t.target.dataset.category))});async function p(){try{a=await(await fetch("/data/products.json")).json(),c()}catch(t){console.error("Failed to load products:",t)}}p();
