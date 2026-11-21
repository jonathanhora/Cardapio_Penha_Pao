/* Service worker — Nova Penha Pão.
   Textos/preços (html, css, js): rede primeiro (3 s) e cache como reserva → preço novo chega sempre que houver internet.
   Fotos, fonte e ícones: cache primeiro → segunda visita instantânea e funciona offline.
   Ao trocar fotos/fonte, aumente V para renovar o cache. */
const V="penha-v2";
const CORE=["./","index.html","css/styles.css","js/data.js","js/app.js","manifest.webmanifest","assets/logo.svg","assets/img/hero-bg.webp","assets/fonts/inter-latin.woff2","assets/icons/icon-192.png","favicon.ico"];
self.addEventListener("install",e=>e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{
  const r=e.request,u=new URL(r.url);
  if(r.method!=="GET"||u.origin!==location.origin)return;
  e.respondWith(/\/assets\/(img|fonts|icons)\//.test(u.pathname)?cacheFirst(r):networkFirst(r));
});
async function cacheFirst(r){
  const c=await caches.open(V),hit=await c.match(r);
  if(hit)return hit;
  const res=await fetch(r);
  if(res.ok)c.put(r,res.clone());
  return res;
}
async function networkFirst(r){
  const c=await caches.open(V);
  /* resposta com erro (5xx, 404) conta como falha → tenta o cache */
  const net=fetch(r).then(res=>{if(!res.ok)throw res;c.put(r,res.clone());return res});
  net.catch(()=>{});
  try{return await Promise.race([net,new Promise((_,no)=>setTimeout(no,3000))])}
  catch(err){
    const hit=await c.match(r,{ignoreSearch:true})||(r.mode==="navigate"&&await c.match("index.html"));
    if(hit)return hit;
    if(err instanceof Response)return err;
    return net.catch(e=>e instanceof Response?e:Response.error());
  }
}
