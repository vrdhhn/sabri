import{c as r,a as i,i as c,b as d,d as l}from"./utils-CKh5Btw1.js";r("Home");i();c();d();l();const m={"Bell Peppers":"🫑",Zucchini:"🥒",Lettuce:"🥬",Broccoli:"🥦","Okra (Bhindi)":"🌿",Cucumber:"🥒",Spinach:"🥬",Turmeric:"🟡",Saffron:"🌸","Oyster Mushrooms":"🍄","Button Mushrooms":"🍄"},p={exotic:"Exotic","non-exotic":"Non-Exotic",spice:"Spice",mushroom:"Mushroom"};async function u(){try{const e=(await(await fetch("/data/products.json")).json()).slice(0,4),t=document.getElementById("featuredProducts");t.innerHTML=e.map((a,n)=>`
      <div class="product-card animate-on-scroll animate-delay-${n+1}">
        <div class="product-card-img">
          <span class="emoji-placeholder">${m[a.name]||"🌱"}</span>
        </div>
        <div class="product-card-body">
          <span class="category-tag">${p[a.category]||a.category}</span>
          <h4>${a.name}</h4>
          <p>${a.description}</p>
          <button class="btn btn-sm btn-primary" onclick="openLeadModal('${a.name}')">Enquire Now →</button>
        </div>
      </div>
    `).join(""),c()}catch(o){console.error("Failed to load products:",o)}}async function y(){try{const s=await(await fetch("/data/updates.json")).json(),e=document.getElementById("updatesGrid");e.innerHTML=s.map((t,a)=>`
      <div class="update-card animate-on-scroll animate-delay-${a%2+1}">
        <span class="tag">${t.tag}</span>
        <p class="date">${new Date(t.date).toLocaleDateString("en-IN",{year:"numeric",month:"long",day:"numeric"})}</p>
        <h4>${t.title}</h4>
        <p>${t.summary}</p>
      </div>
    `).join(""),c()}catch(o){console.error("Failed to load updates:",o)}}u();y();
