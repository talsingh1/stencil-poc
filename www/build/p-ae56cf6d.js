const t="shop";let e,n,s=!1;const l="undefined"!=typeof window?window:{},o=l.CSS,r=l.document||{head:{}},c={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,s)=>t.addEventListener(e,n,s),rel:(t,e,n,s)=>t.removeEventListener(e,n,s),ce:(t,e)=>new CustomEvent(t,e)},i=(()=>(r.head.attachShadow+"").indexOf("[native")>-1)(),a=t=>Promise.resolve(t),u=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(t){}return!1})(),f=new WeakMap,d=t=>"sc-"+t.o,h={},$=t=>"object"==(t=typeof t)||"function"===t,p=(t,e,...n)=>{let s=null,l=!1,o=!1,r=[];const c=e=>{for(let n=0;n<e.length;n++)s=e[n],Array.isArray(s)?c(s):null!=s&&"boolean"!=typeof s&&((l="function"!=typeof t&&!$(s))&&(s+=""),l&&o?r[r.length-1].i+=s:r.push(l?y(null,s):s),o=l)};if(c(n),e){const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter((e=>t[e])).join(" "))}const i=y(t,null);return i.u=e,r.length>0&&(i.h=r),i},y=(t,e)=>({t:0,$:t,i:e,p:null,h:null,u:null}),m={},w=(t,e,n,s)=>{if(n!==s&&(e.toLowerCase(),"class"===e)){const e=t.classList,l=S(n),o=S(s);e.remove(...l.filter((t=>t&&!o.includes(t)))),e.add(...o.filter((t=>t&&!l.includes(t))))}},b=/\s/,S=t=>t?t.split(b):[],g=(t,e,n,s)=>{const l=11===e.p.nodeType&&e.p.host?e.p.host:e.p,o=t&&t.u||h,r=e.u||h;for(s in r)w(l,s,o[s],r[s])},j=(t,n,s)=>{let l,o,c=n.h[s],i=0;if(null!==c.i)l=c.p=r.createTextNode(c.i);else if(l=c.p=r.createElement(c.$),g(null,c),null!=e&&l["s-si"]!==e&&l.classList.add(l["s-si"]=e),c.h)for(i=0;i<c.h.length;++i)o=j(t,c,i),o&&l.appendChild(o);return l},_=(t,s)=>{const l=t.m,o=t.S||y(null,null),r=(t=>t&&t.$===m)(s)?s:p(null,null,s);n=l.tagName,r.$=null,r.t|=4,t.S=r,r.p=o.p=l.shadowRoot||l,e=l["s-sc"],((t,e)=>{const s=e.p=t.p,l=e.h,o=e.i;null===o?(g(t,e),null!==l&&((t,e,s,l,o,r)=>{let c,i=t;for(i.shadowRoot&&i.tagName===n&&(i=i.shadowRoot);o<=r;++o)l[o]&&(c=j(null,s,o),c&&(l[o].p=c,i.insertBefore(c,null)))})(s,0,e,l,0,l.length-1)):t.i!==o&&(s.data=o)})(o,r)},C=(t,e)=>{e&&!t.g&&e["s-p"]&&e["s-p"].push(new Promise((e=>t.g=e)))},v=(t,e)=>{if(!(4&t.t))return C(t,t.j),K((()=>M(t,e)));t.t|=512},M=(t,e)=>{const n=t._;return N(void 0,(()=>k(t,n,e)))},k=async(t,e,n)=>{const s=t.m,l=s["s-rc"];n&&(t=>{const e=t.C,n=t.m,s=e.t,l=((t,e)=>{let n=d(e),s=V.get(n);if(t=11===t.nodeType?t:r,s)if("string"==typeof s){let e,l=f.get(t=t.head||t);l||f.set(t,l=new Set),l.has(n)||(e=r.createElement("style"),e.innerHTML=s,t.insertBefore(e,t.querySelector("link")),l&&l.add(n))}else t.adoptedStyleSheets.includes(s)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,s]);return n})(i&&n.shadowRoot?n.shadowRoot:n.getRootNode(),e);10&s&&(n["s-sc"]=l,n.classList.add(l+"-h"))})(t);O(t,e),l&&(l.map((t=>t())),s["s-rc"]=void 0);{const e=s["s-p"],n=()=>x(t);0===e.length?n():(Promise.all(e).then(n),t.t|=4,e.length=0)}},O=(t,e)=>{try{e=e.render(),t.t|=2,_(t,e)}catch(n){W(n,t.m)}return null},x=t=>{const e=t.m,n=t.j;64&t.t||(t.t|=64,P(e),t.v(e),n||E()),t.g&&(t.g(),t.g=void 0),512&t.t&&J((()=>v(t,!1))),t.t&=-517},E=()=>{P(r.documentElement),J((()=>(t=>{const e=c.ce("appload",{detail:{namespace:"shop"}});return t.dispatchEvent(e),e})(l)))},N=(t,e)=>t&&t.then?t.then(e):e(),P=t=>t.classList.add("hydrated"),A=(t,e)=>{class n extends Array{item(t){return this[t]}}if(8&e.t){const e=t.__lookupGetter__("childNodes");Object.defineProperty(t,"children",{get(){return this.childNodes.map((t=>1===t.nodeType))}}),Object.defineProperty(t,"childElementCount",{get:()=>t.children.length}),Object.defineProperty(t,"childNodes",{get(){const t=e.call(this);if(0==(1&c.t)&&2&H(this).t){const e=new n;for(let n=0;n<t.length;n++){const s=t[n]["s-nr"];s&&e.push(s)}return e}return n.from(t)}})}},R=(t,e={})=>{const n=[],s=e.exclude||[],o=l.customElements,a=r.head,f=a.querySelector("meta[charset]"),h=r.createElement("style"),$=[];let p,y=!0;Object.assign(c,e),c.l=new URL(e.resourcesUrl||"./",r.baseURI).href,t.map((t=>t[1].map((e=>{const l={t:e[0],o:e[1],M:e[2],k:e[3]};!i&&1&l.t&&(l.t|=8);const r=l.o,a=class extends HTMLElement{constructor(t){super(t),U(t=this,l),1&l.t&&(i?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t)),A(t,l)}connectedCallback(){p&&(clearTimeout(p),p=null),y?$.push(this):c.jmp((()=>(t=>{if(0==(1&c.t)){const e=H(t),n=e.C,s=()=>{};if(!(1&e.t)){e.t|=1;{let n=t;for(;n=n.parentNode||n.host;)if(n["s-p"]){C(e,e.j=n);break}}(async(t,e,n,s,l)=>{if(0==(32&e.t)){{if(e.t|=32,(l=F(n)).then){const t=()=>{};l=await l,t()}const t=()=>{};try{new l(e)}catch(c){W(c)}t()}if(l.style){let t=l.style;const e=d(n);if(!V.has(e)){const s=()=>{};8&n.t&&(t=await __sc_import_shop("./p-596b2685.js").then((n=>n.scopeCss(t,e,!1)))),((t,e,n)=>{let s=V.get(t);u&&n?(s=s||new CSSStyleSheet,s.replace(e)):s=e,V.set(t,s)})(e,t,!!(1&n.t)),s()}}}const o=e.j,r=()=>v(e,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,e,n)}s()}})(this)))}disconnectedCallback(){c.jmp((()=>{}))}componentOnReady(){return H(this).O}};l.N=t[0],s.includes(r)||o.get(r)||(n.push(r),o.define(r,a))})))),h.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",h.setAttribute("data-styles",""),a.insertBefore(h,f?f.nextSibling:a.firstChild),y=!1,$.length?$.map((t=>t.connectedCallback())):c.jmp((()=>p=setTimeout(E,30)))},T=new WeakMap,H=t=>T.get(t),L=(t,e)=>T.set(e._=t,e),U=(t,e)=>{const n={t:0,m:t,C:e,P:new Map};return n.O=new Promise((t=>n.v=t)),t["s-p"]=[],t["s-rc"]=[],T.set(t,n)},W=(t,e)=>(0,console.error)(t,e),q=new Map,F=t=>{const e=t.o.replace(/-/g,"_"),n=t.N,s=q.get(n);return s?s[e]:__sc_import_shop(`./${n}.entry.js`).then((t=>(q.set(n,t),t[e])),W)},V=new Map,z=[],B=[],D=(t,e)=>n=>{t.push(n),s||(s=!0,e&&4&c.t?J(I):c.raf(I))},G=t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){W(e)}t.length=0},I=()=>{G(z),G(B),(s=z.length>0)&&c.raf(I)},J=t=>a().then(t),K=D(B,!0);export{o as C,m as H,t as N,a,R as b,r as d,p as h,c as p,L as r,l as w}