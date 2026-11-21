#!/usr/bin/env node
/* Gera o que os buscadores e robôs de IA leem sem executar JavaScript:
   1) lista completa do cardápio dentro de <main id="list"> (entre <!--SEO:START--> e <!--SEO:END-->)
   2) dados estruturados JSON-LD (Bakery + Menu) entre <!--LD:START--> e <!--LD:END-->
   3) sitemap.xml com a data de hoje
   Rode depois de editar js/data.js:  node tools/build-seo.js
   Para trocar o endereço do site (domínio próprio), altere SITE abaixo. */
const fs=require("fs"),path=require("path");
const SITE="https://cardapiopenhapao.vercel.app";
const root=path.join(__dirname,"..");
const rd=f=>fs.readFileSync(path.join(root,f),"utf8");
const {C}=new Function(rd("js/data.js")+";return {C}")();
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const money=p=>{if(p==="")return"Consulte";const[v,u]=p.split("/");return"R$ "+(+v).toFixed(2).replace(".",",")+(u?" / "+u:"")};
// mesma regra de texto do app.js (cardOf)
const desc=(s,d)=>d?(d[0]==="!"?d.slice(1):s[2]+d)+(/[.)]$|ml$|L$|unidades$/.test(d)||s[2]===""?"":"."):"";
let n=0,html="";
for(const c of C){html+=`<h2 class="cat">${esc(c[1])}</h2>\n`;
 for(const s of c[4]){if(c[4].length>1)html+=`<h3 class="sub">${esc(s[0])}</h3>\n`;
  html+="<ul>\n"+s[3].split("\n").map(l=>{const[nm,d,p]=l.split("|");n++;const t=desc(s,d);return`<li><strong>${esc(nm)}</strong>${t?" — "+esc(t):""} <span>${money(p||"")}</span></li>`}).join("\n")+"\n</ul>\n"}}
const ld={"@context":"https://schema.org","@graph":[
 {"@type":"Bakery","@id":SITE+"/#padaria","name":"Nova Penha Pão","alternateName":"Penha Pão","url":SITE+"/",
  "description":"Padaria tradicional desde 1966. Cardápio com pratos do dia, lanches, pizzas, cafés, caldos, bebidas, salgados e doces.",
  "image":SITE+"/assets/img/og-image.jpg","logo":SITE+"/assets/icons/icon-512.png","foundingDate":"1966",
  "servesCuisine":"Brasileira","currenciesAccepted":"BRL","inLanguage":"pt-BR",
  "geo":{"@type":"GeoCoordinates","latitude":-23.52213,"longitude":-46.5268176},
  "address":{"@type":"PostalAddress","addressLocality":"São Paulo","addressRegion":"SP","addressCountry":"BR"},
  "hasMap":"https://www.google.com/maps/place/Nova+Penha+P%C3%A3o/@-23.52213,-46.5293925,17z",
  "hasMenu":{"@id":SITE+"/#cardapio"}},
 {"@type":"Menu","@id":SITE+"/#cardapio","name":"Cardápio Nova Penha Pão","url":SITE+"/","inLanguage":"pt-BR",
  "hasMenuSection":C.map(c=>({"@type":"MenuSection","name":c[1],"hasMenuSection":c[4].length>1?c[4].map(s=>({"@type":"MenuSection","name":s[0]})):undefined}))},
 {"@type":"WebSite","@id":SITE+"/#site","url":SITE+"/","name":"Nova Penha Pão — Cardápio","inLanguage":"pt-BR","publisher":{"@id":SITE+"/#padaria"}}]};
const swap=(src,tag,body)=>{const re=new RegExp(`<!--${tag}:START-->[\\s\\S]*?<!--${tag}:END-->`);if(!re.test(src))throw new Error("marcador "+tag+" ausente no index.html");return src.replace(re,()=>`<!--${tag}:START-->\n${body}\n<!--${tag}:END-->`)};
let idx=rd("index.html");
idx=swap(idx,"SEO",html.trim());
idx=swap(idx,"LD",`<script type="application/ld+json">${JSON.stringify(ld)}</script>`);
fs.writeFileSync(path.join(root,"index.html"),idx);
const today=new Date().toISOString().slice(0,10);
fs.writeFileSync(path.join(root,"sitemap.xml"),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${SITE}/</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n`);
fs.writeFileSync(path.join(root,"robots.txt"),`User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
console.log(`SEO ok: ${n} itens, ${C.length} categorias, sitemap ${today}`);
