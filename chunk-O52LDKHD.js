import{Ab as V,Ba as zt,Da as qt,Fa as Yt,Gb as Qt,Ia as H,Ib as Xt,Lb as te,Ma as gt,Mb as Q,Na as Rt,Oa as B,P as E,Pa as yt,Q as Lt,Ra as Zt,Rb as G,S as Ut,V as m,Va as Jt,W as Bt,_ as Vt,_b as ee,a as y,ac as ie,bc as ne,da as w,fa as Gt,k as J,ka as Kt,oa as jt,qb as St,rb as Et,sa as mt}from"./chunk-4HQB7CNF.js";function Ve(t,n){return t?t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className):!1}function re(t,n){if(t&&n){let e=i=>{Ve(t,i)||(t.classList?t.classList.add(i):t.className+=" "+i)};[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(e))}}function X(t,n){if(t&&n){let e=i=>{t.classList?t.classList.remove(i):t.className=t.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," ")};[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(e))}}function se(t,n){if(t instanceof HTMLElement){let e=t.offsetWidth;if(n){let i=getComputedStyle(t);e+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return e}return 0}function _t(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function It(t,n={}){if(_t(t)){let e=(i,r)=>{var o,s;let a=(o=t?.$attrs)!=null&&o[i]?[(s=t?.$attrs)==null?void 0:s[i]]:[];return[r].flat().reduce((l,c)=>{if(c!=null){let p=typeof c;if(p==="string"||p==="number")l.push(c);else if(p==="object"){let f=Array.isArray(c)?e(i,c):Object.entries(c).map(([d,u])=>i==="style"&&(u||u===0)?`${d.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${u}`:u?d:void 0);l=f.length?l.concat(f.filter(d=>!!d)):l}}return l},a)};Object.entries(n).forEach(([i,r])=>{if(r!=null){let o=i.match(/^on(.+)/);o?t.addEventListener(o[1].toLowerCase(),r):i==="p-bind"||i==="pBind"?It(t,r):(r=i==="class"?[...new Set(e("class",r))].join(" ").trim():i==="style"?e("style",r).join(";").trim():r,(t.$attrs=t.$attrs||{})&&(t.$attrs[i]=r),t.setAttribute(i,r))}})}}function yi(t,n){return _t(t)?t.matches(n)?t:t.querySelector(n):null}function Si(t,n){t&&document.activeElement!==t&&t.focus(n)}function Ei(t,n){if(_t(t)){let e=t.getAttribute(n);return isNaN(e)?e==="true"||e==="false"?e==="true":e:+e}}function wt(t){if(t){let n=t.offsetHeight,e=getComputedStyle(t);return n-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),n}return 0}function oe(t){if(t){let n=t.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function ae(t,n){if(t){let e=t.offsetHeight;if(n){let i=getComputedStyle(t);e+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return e}return 0}function Nt(t){if(t){let n=t.offsetWidth,e=getComputedStyle(t);return n-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),n}return 0}function le(t){var n;t&&("remove"in Element.prototype?t.remove():(n=t.parentNode)==null||n.removeChild(t))}function ce(t,n="",e){_t(t)&&e!==null&&e!==void 0&&t.setAttribute(n,e)}function pe(){let t=new Map;return{on(n,e){let i=t.get(n);return i?i.push(e):i=[e],t.set(n,i),this},off(n,e){let i=t.get(n);return i&&i.splice(i.indexOf(e)>>>0,1),this},emit(n,e){let i=t.get(n);i&&i.slice().map(r=>{r(e)})},clear(){t.clear()}}}function $(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function Ge(t){return!!(t&&t.constructor&&t.call&&t.apply)}function g(t){return!$(t)}function N(t,n=!0){return t instanceof Object&&t.constructor===Object&&(n||Object.keys(t).length!==0)}function O(t,...n){return Ge(t)?t(...n):t}function F(t,n=!0){return typeof t=="string"&&(n||t!=="")}function ue(t){return F(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function vt(t,n="",e={}){let i=ue(n).split("."),r=i.shift();return r?N(t)?vt(O(t[Object.keys(t).find(o=>ue(o)===r)||""],e),i.join("."),e):void 0:O(t,e)}function Tt(t,n=!0){return Array.isArray(t)&&(n||t.length!==0)}function de(t){return g(t)&&!isNaN(t)}function b(t,n){if(n){let e=n.test(t);return n.lastIndex=0,e}return!1}function W(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function bt(t){return F(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(n,e)=>e===0?n:"-"+n.toLowerCase()).toLowerCase():t}function xt(t){return F(t)?t.replace(/[A-Z]/g,(n,e)=>e===0?n:"."+n.toLowerCase()).toLowerCase():t}var Ot={};function fe(t="pui_id_"){return Ot.hasOwnProperty(t)||(Ot[t]=0),Ot[t]++,`${t}${Ot[t]}`}function Ke(){let t=[],n=(s,a,l=999)=>{let c=r(s,a,l),p=c.value+(c.key===s?0:l)+1;return t.push({key:s,value:p}),p},e=s=>{t=t.filter(a=>a.value!==s)},i=(s,a)=>r(s,a).value,r=(s,a,l=0)=>[...t].reverse().find(c=>a?!0:c.key===s)||{key:s,value:l},o=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:o,set:(s,a,l)=>{a&&(a.style.zIndex=String(n(s,!0,l)))},clear:s=>{s&&(e(o(s)),s.style.zIndex="")},getCurrent:s=>i(s,!0)}}var wi=Ke();var v=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})();var he=(()=>{class t{messageSource=new J;clearSource=new J;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(e){e&&this.messageSource.next(e)}addAll(e){e&&e.length&&this.messageSource.next(e)}clear(e){this.clearSource.next(e||null)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var ze=["*"],qi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=gt({type:t,selectors:[["p-header"]],standalone:!1,ngContentSelectors:ze,decls:1,vars:0,template:function(i,r){i&1&&(St(),Et(0))},encapsulation:2})}return t})();var Yi=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(i){return new(i||t)(zt(qt))};static \u0275dir=B({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),Zi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Rt({type:t});static \u0275inj=Lt({imports:[ee]})}return t})();var qe=Object.defineProperty,Ye=Object.defineProperties,Ze=Object.getOwnPropertyDescriptors,Ct=Object.getOwnPropertySymbols,ye=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable,me=(t,n,e)=>n in t?qe(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,R=(t,n)=>{for(var e in n||(n={}))ye.call(n,e)&&me(t,e,n[e]);if(Ct)for(var e of Ct(n))Se.call(n,e)&&me(t,e,n[e]);return t},Dt=(t,n)=>Ye(t,Ze(n)),x=(t,n)=>{var e={};for(var i in t)ye.call(t,i)&&n.indexOf(i)<0&&(e[i]=t[i]);if(t!=null&&Ct)for(var i of Ct(t))n.indexOf(i)<0&&Se.call(t,i)&&(e[i]=t[i]);return e};var Je=pe(),C=Je;function ge(t,n){Tt(t)?t.push(...n||[]):N(t)&&Object.assign(t,n)}function Qe(t){return N(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function Xe(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Pt(t="",n=""){return Xe(`${F(t,!1)&&F(n,!1)?`${t}-`:t}${n}`)}function Ee(t="",n=""){return`--${Pt(t,n)}`}function ti(t=""){let n=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(n+e)%2!==0}function _e(t,n="",e="",i=[],r){if(F(t)){let o=/{([^}]*)}/g,s=t.trim();if(ti(s))return;if(b(s,o)){let a=s.replaceAll(o,p=>{let d=p.replace(/{|}/g,"").split(".").filter(u=>!i.some(S=>b(u,S)));return`var(${Ee(e,bt(d.join("-")))}${g(r)?`, ${r}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,c=/var\([^)]+\)/g;return b(a.replace(c,"0"),l)?`calc(${a})`:a}return s}else if(de(t))return t}function ei(t,n,e){F(n,!1)&&t.push(`${n}:${e};`)}function K(t,n){return t?`${t}{${n}}`:""}var j=(...t)=>ii(h.getTheme(),...t),ii=(t={},n,e,i)=>{if(n){let{variable:r,options:o}=h.defaults||{},{prefix:s,transform:a}=t?.options||o||{},c=b(n,/{([^}]*)}/g)?n:`{${n}}`;return i==="value"||$(i)&&a==="strict"?h.getTokenValue(n):_e(c,void 0,s,[r.excludedKeyRegex],e)}return""};function ni(t,n={}){let e=h.defaults.variable,{prefix:i=e.prefix,selector:r=e.selector,excludedKeyRegex:o=e.excludedKeyRegex}=n,s=(c,p="")=>Object.entries(c).reduce((f,[d,u])=>{let S=b(d,o)?Pt(p):Pt(p,bt(d)),T=Qe(u);if(N(T)){let{variables:D,tokens:P}=s(T,S);ge(f.tokens,P),ge(f.variables,D)}else f.tokens.push((i?S.replace(`${i}-`,""):S).replaceAll("-",".")),ei(f.variables,Ee(S),_e(T,S,i,[o]));return f},{variables:[],tokens:[]}),{variables:a,tokens:l}=s(t,i);return{value:a,tokens:l,declarations:a.join(""),css:K(r,a.join(""))}}var L={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let n=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var i;return(i=n.map(r=>r.resolve(e)).find(r=>r.matched))!=null?i:this.rules.custom.resolve(e)})}},_toVariables(t,n){return ni(t,{prefix:n?.prefix})},getCommon({name:t="",theme:n={},params:e,set:i,defaults:r}){var o,s,a,l,c,p,f;let{preset:d,options:u}=n,S,T,D,P,M,k,A;if(g(d)&&u.transform!=="strict"){let{primitive:tt,semantic:et,extend:it}=d,q=et||{},{colorScheme:nt}=q,rt=x(q,["colorScheme"]),st=it||{},{colorScheme:ot}=st,Y=x(st,["colorScheme"]),Z=nt||{},{dark:at}=Z,lt=x(Z,["dark"]),ct=ot||{},{dark:pt}=ct,ut=x(ct,["dark"]),dt=g(tt)?this._toVariables({primitive:tt},u):{},ft=g(rt)?this._toVariables({semantic:rt},u):{},ht=g(lt)?this._toVariables({light:lt},u):{},kt=g(at)?this._toVariables({dark:at},u):{},Ht=g(Y)?this._toVariables({semantic:Y},u):{},$t=g(ut)?this._toVariables({light:ut},u):{},Wt=g(pt)?this._toVariables({dark:pt},u):{},[Ce,Ae]=[(o=dt.declarations)!=null?o:"",dt.tokens],[Le,Re]=[(s=ft.declarations)!=null?s:"",ft.tokens||[]],[Ie,we]=[(a=ht.declarations)!=null?a:"",ht.tokens||[]],[Ne,xe]=[(l=kt.declarations)!=null?l:"",kt.tokens||[]],[De,Pe]=[(c=Ht.declarations)!=null?c:"",Ht.tokens||[]],[Me,Fe]=[(p=$t.declarations)!=null?p:"",$t.tokens||[]],[ke,He]=[(f=Wt.declarations)!=null?f:"",Wt.tokens||[]];S=this.transformCSS(t,Ce,"light","variable",u,i,r),T=Ae;let $e=this.transformCSS(t,`${Le}${Ie}`,"light","variable",u,i,r),We=this.transformCSS(t,`${Ne}`,"dark","variable",u,i,r);D=`${$e}${We}`,P=[...new Set([...Re,...we,...xe])];let Ue=this.transformCSS(t,`${De}${Me}color-scheme:light`,"light","variable",u,i,r),Be=this.transformCSS(t,`${ke}color-scheme:dark`,"dark","variable",u,i,r);M=`${Ue}${Be}`,k=[...new Set([...Pe,...Fe,...He])],A=O(d.css,{dt:j})}return{primitive:{css:S,tokens:T},semantic:{css:D,tokens:P},global:{css:M,tokens:k},style:A}},getPreset({name:t="",preset:n={},options:e,params:i,set:r,defaults:o,selector:s}){var a,l,c;let p,f,d;if(g(n)&&e.transform!=="strict"){let u=t.replace("-directive",""),S=n,{colorScheme:T,extend:D,css:P}=S,M=x(S,["colorScheme","extend","css"]),k=D||{},{colorScheme:A}=k,tt=x(k,["colorScheme"]),et=T||{},{dark:it}=et,q=x(et,["dark"]),nt=A||{},{dark:rt}=nt,st=x(nt,["dark"]),ot=g(M)?this._toVariables({[u]:R(R({},M),tt)},e):{},Y=g(q)?this._toVariables({[u]:R(R({},q),st)},e):{},Z=g(it)?this._toVariables({[u]:R(R({},it),rt)},e):{},[at,lt]=[(a=ot.declarations)!=null?a:"",ot.tokens||[]],[ct,pt]=[(l=Y.declarations)!=null?l:"",Y.tokens||[]],[ut,dt]=[(c=Z.declarations)!=null?c:"",Z.tokens||[]],ft=this.transformCSS(u,`${at}${ct}`,"light","variable",e,r,o,s),ht=this.transformCSS(u,ut,"dark","variable",e,r,o,s);p=`${ft}${ht}`,f=[...new Set([...lt,...pt,...dt])],d=O(P,{dt:j})}return{css:p,tokens:f,style:d}},getPresetC({name:t="",theme:n={},params:e,set:i,defaults:r}){var o;let{preset:s,options:a}=n,l=(o=s?.components)==null?void 0:o[t];return this.getPreset({name:t,preset:l,options:a,params:e,set:i,defaults:r})},getPresetD({name:t="",theme:n={},params:e,set:i,defaults:r}){var o;let s=t.replace("-directive",""),{preset:a,options:l}=n,c=(o=a?.directives)==null?void 0:o[s];return this.getPreset({name:s,preset:c,options:l,params:e,set:i,defaults:r})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,n){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?n.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:n.options.darkModeSelector):[]},getLayerOrder(t,n={},e,i){let{cssLayer:r}=n;return r?`@layer ${O(r.order||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:n={},params:e,props:i={},set:r,defaults:o}){let s=this.getCommon({name:t,theme:n,params:e,set:r,defaults:o}),a=Object.entries(i).reduce((l,[c,p])=>l.push(`${c}="${p}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[c,p])=>{if(p?.css){let f=W(p?.css),d=`${c}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${d}" ${a}>${f}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:n={},params:e,props:i={},set:r,defaults:o}){var s;let a={name:t,theme:n,params:e,set:r,defaults:o},l=(s=t.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,c=Object.entries(i).reduce((p,[f,d])=>p.push(`${f}="${d}"`)&&p,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${t}-variables" ${c}>${W(l)}</style>`:""},createTokens(t={},n,e="",i="",r={}){return Object.entries(t).forEach(([o,s])=>{let a=b(o,n.variable.excludedKeyRegex)?e:e?`${e}.${xt(o)}`:xt(o),l=i?`${i}.${o}`:o;N(s)?this.createTokens(s,n,a,l,r):(r[a]||(r[a]={paths:[],computed(c,p={}){var f,d;return this.paths.length===1?(f=this.paths[0])==null?void 0:f.computed(this.paths[0].scheme,p.binding):c&&c!=="none"?(d=this.paths.find(u=>u.scheme===c))==null?void 0:d.computed(c,p.binding):this.paths.map(u=>u.computed(u.scheme,p[u.scheme]))}}),r[a].paths.push({path:l,value:s,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(c,p={}){let f=/{([^}]*)}/g,d=s;if(p.name=this.path,p.binding||(p.binding={}),b(s,f)){let S=s.trim().replaceAll(f,P=>{var M;let k=P.replace(/{|}/g,""),A=(M=r[k])==null?void 0:M.computed(c,p);return Tt(A)&&A.length===2?`light-dark(${A[0].value},${A[1].value})`:A?.value}),T=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,D=/var\([^)]+\)/g;d=b(S.replace(D,"0"),T)?`calc(${S})`:S}return $(p.binding)&&delete p.binding,{colorScheme:c,path:this.path,paths:p,value:d.includes("undefined")?void 0:d}}}))}),r},getTokenValue(t,n,e){var i;let o=(l=>l.split(".").filter(p=>!b(p.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(n),s=n.includes("colorScheme.light")?"light":n.includes("colorScheme.dark")?"dark":void 0,a=[(i=t[o])==null?void 0:i.computed(s)].flat().filter(l=>l);return a.length===1?a[0].value:a.reduce((l={},c)=>{let p=c,{colorScheme:f}=p,d=x(p,["colorScheme"]);return l[f]=d,l},void 0)},getSelectorRule(t,n,e,i){return e==="class"||e==="attr"?K(g(n)?`${t}${n},${t} ${n}`:t,i):K(t,g(n)?K(n,i):i)},transformCSS(t,n,e,i,r={},o,s,a){if(g(n)){let{cssLayer:l}=r;if(i!=="style"){let c=this.getColorSchemeOption(r,s);n=e==="dark"?c.reduce((p,{type:f,selector:d})=>(g(d)&&(p+=d.includes("[CSS]")?d.replace("[CSS]",n):this.getSelectorRule(d,a,f,n)),p),""):K(a??":root",n)}if(l){let c={name:"primeui",order:"primeui"};N(l)&&(c.name=O(l.name,{name:t,type:i})),g(c.name)&&(n=K(`@layer ${c.name}`,n),o?.layerNames(c.name))}return n}return""}},h={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:n}=t;n&&(this._theme=Dt(R({},n),{options:R(R({},this.defaults.options),n.options)}),this._tokens=L.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),C.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=Dt(R({},this.theme),{preset:t}),this._tokens=L.createTokens(t,this.defaults),this.clearLoadedStyleNames(),C.emit("preset:change",t),C.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=Dt(R({},this.theme),{options:t}),this.clearLoadedStyleNames(),C.emit("options:change",t),C.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return L.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",n){return L.getCommon({name:t,theme:this.theme,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",n){let e={name:t,theme:this.theme,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return L.getPresetC(e)},getDirective(t="",n){let e={name:t,theme:this.theme,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return L.getPresetD(e)},getCustomPreset(t="",n,e,i){let r={name:t,preset:n,options:this.options,selector:e,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return L.getPreset(r)},getLayerOrderCSS(t=""){return L.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",n,e="style",i){return L.transformCSS(t,n,i,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",n,e={}){return L.getCommonStyleSheet({name:t,theme:this.theme,params:n,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,n,e={}){return L.getStyleSheet({name:t,theme:this.theme,params:n,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:n}){this._loadingStyles.size&&(this._loadingStyles.delete(n),C.emit(`theme:${n}:load`,t),!this._loadingStyles.size&&C.emit("theme:load"))}};var ri=0,ve=(()=>{class t{document=m(G);use(e,i={}){let r=!1,o=e,s=null,{immediate:a=!0,manual:l=!1,name:c=`style_${++ri}`,id:p=void 0,media:f=void 0,nonce:d=void 0,first:u=!1,props:S={}}=i;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${c}"]`)||p&&this.document.getElementById(p)||this.document.createElement("style"),!s.isConnected){o=e,It(s,{type:"text/css",media:f,nonce:d});let T=this.document.head;u&&T.firstChild?T.insertBefore(s,T.firstChild):T.appendChild(s),ce(s,"data-primeng-style-id",c)}return s.textContent!==o&&(s.textContent=o),{id:p,name:c,el:s,css:o}}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var z={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},si=({dt:t})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${t("disabled.opacity")};
}

.pi {
    font-size: ${t("icon.size")};
}

.p-icon {
    width: ${t("icon.size")};
    height: ${t("icon.size")};
}

.p-overlay-mask {
    background: ${t("mask.background")};
    color: ${t("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${t("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${t("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${t("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${t("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,oi=({dt:t})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${t("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,I=(()=>{class t{name="base";useStyle=m(ve);theme=si;css=oi;classes={};inlineStyles={};load=(e,i={},r=o=>o)=>{let o=r(O(e,{dt:j}));return o?this.useStyle.use(W(o),y({name:this.name},i)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},i="")=>this.load(this.theme,e,(r="")=>h.transformCSS(e.name||this.name,`${r}${i}`));getCommonTheme=e=>h.getCommon(this.name,e);getComponentTheme=e=>h.getComponent(this.name,e);getDirectiveTheme=e=>h.getDirective(this.name,e);getPresetTheme=(e,i,r)=>h.getCustomPreset(this.name,e,i,r);getLayerOrderThemeCSS=()=>h.getLayerOrderCSS(this.name);getStyleSheet=(e="",i={})=>{if(this.css){let r=O(this.css,{dt:j}),o=W(`${r}${e}`),s=Object.entries(i).reduce((a,[l,c])=>a.push(`${l}="${c}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${o}</style>`}return""};getCommonThemeStyleSheet=(e,i={})=>h.getCommonStyleSheet(this.name,e,i);getThemeStyleSheet=(e,i={})=>{let r=[h.getStyleSheet(this.name,e,i)];if(this.theme){let o=this.name==="base"?"global-style":`${this.name}-style`,s=O(this.theme,{dt:j}),a=W(h.transformCSS(o,s)),l=Object.entries(i).reduce((c,[p,f])=>c.push(`${p}="${f}"`)&&c,[]).join(" ");r.push(`<style type="text/css" data-primeng-style-id="${o}" ${l}>${a}</style>`)}return r.join("")};static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ai=(()=>{class t{theme=H(void 0);csp=H({nonce:void 0});isThemeChanged=!1;document=m(G);baseStyle=m(I);constructor(){Q(()=>{C.on("theme:change",e=>{te(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),Q(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){h.clearLoadedStyleNames(),C.clear()}onThemeChange(e){h.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!h.isStyleNameLoaded("common")){let{primitive:e,semantic:i,global:r,style:o}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,y({name:"primitive-variables"},s)),this.baseStyle.load(i?.css,y({name:"semantic-variables"},s)),this.baseStyle.load(r?.css,y({name:"global-variables"},s)),this.baseStyle.loadTheme(y({name:"global-style"},s),o),h.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:i,csp:r}=e||{};i&&this.theme.set(i),r&&this.csp.set(r)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ft=(()=>{class t extends ai{ripple=H(!1);platformId=m(mt);inputStyle=H("outlined");inputVariant=H("outlined");overlayOptions={};csp=H({nonce:void 0});filterMatchModeOptions={text:[v.STARTS_WITH,v.CONTAINS,v.NOT_CONTAINS,v.ENDS_WITH,v.EQUALS,v.NOT_EQUALS],numeric:[v.EQUALS,v.NOT_EQUALS,v.LESS_THAN,v.LESS_THAN_OR_EQUAL_TO,v.GREATER_THAN,v.GREATER_THAN_OR_EQUAL_TO],date:[v.DATE_IS,v.DATE_IS_NOT,v.DATE_BEFORE,v.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new J;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=y(y({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:i,ripple:r,inputStyle:o,theme:s,overlayOptions:a,translation:l}=e||{};i&&this.csp.set(i),r&&this.ripple.set(r),o&&this.inputStyle.set(o),a&&(this.overlayOptions=a),l&&this.setTranslation(l),s&&this.setThemeConfig({theme:s,csp:i})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=w(t)))(r||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),li=new Ut("PRIME_NG_CONFIG");function Dn(...t){let n=t?.map(i=>({provide:li,useValue:i,multi:!1})),e=Jt(()=>{let i=m(Ft);t?.forEach(r=>i.setConfig(r))});return Bt([...n,e])}var Te=class t{messageService=m(he);infoMessage(n){this.messageService.add({detail:n,life:2e3})}errorMessage(n){this.messageService.add({severity:"error",detail:n,life:2e3})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})};var be=(()=>{class t extends I{name="common";static \u0275fac=(()=>{let e;return function(r){return(e||(e=w(t)))(r||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),At=(()=>{class t{document=m(G);platformId=m(mt);el=m(jt);injector=m(Gt);cd=m(Qt);renderer=m(Yt);config=m(Ft);baseComponentStyle=m(be);baseStyle=m(I);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=fe("pc");_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,i="",r={}){return vt(e,i,r)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!ne(this.platformId)){let{dt:i}=e;i&&i.currentValue&&(this._loadScopedThemeStyles(i.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(i.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles()}_loadStyles(){let e=()=>{z.isStyleNameLoaded("base")||(this.baseStyle.loadCSS(this.styleOptions),z.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!z.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),z.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!h.isStyleNameLoaded("common")){let{primitive:e,semantic:i,global:r,style:o}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,y({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(i?.css,y({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(r?.css,y({name:"global-variables"},this.styleOptions)),this.baseStyle.loadTheme(y({name:"global-style"},this.styleOptions),o),h.setLoadedStyleName("common")}if(!h.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:i}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,y({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(y({name:`${this.componentStyle?.name}-style`},this.styleOptions),i),h.setLoadedStyleName(this.componentStyle?.name)}if(!h.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,y({name:"layer-order",first:!0},this.styleOptions)),h.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:i}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},r=this.componentStyle?.load(i,y({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=r?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){z.clearLoadedStyleNames(),C.on("theme:change",e)}cx(e,i){let r=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof r=="function"?r({instance:this}):typeof r=="string"?r:e}sx(e){let i=this.componentStyle?.inlineStyles?.[e];return typeof i=="function"?i({instance:this}):typeof i=="string"?i:y({},i)}get parent(){return this.parentInstance}static \u0275fac=function(i){return new(i||t)};static \u0275dir=B({type:t,inputs:{dt:"dt"},features:[V([be,I]),Vt]})}return t})();var ci=({dt:t})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${t("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,pi={root:"p-ink"},Oe=(()=>{class t extends I{name="ripple";theme=ci;classes=pi;static \u0275fac=(()=>{let e;return function(r){return(e||(e=w(t)))(r||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var lr=(()=>{class t extends At{zone=m(Kt);_componentStyle=m(Oe);animationListener;mouseDownListener;timeout;constructor(){super(),Q(()=>{ie(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let i=this.getInk();if(!i||this.document.defaultView?.getComputedStyle(i,null).display==="none")return;if(X(i,"p-ink-active"),!wt(i)&&!Nt(i)){let a=Math.max(se(this.el.nativeElement),ae(this.el.nativeElement));i.style.height=a+"px",i.style.width=a+"px"}let r=oe(this.el.nativeElement),o=e.pageX-r.left+this.document.body.scrollTop-Nt(i)/2,s=e.pageY-r.top+this.document.body.scrollLeft-wt(i)/2;this.renderer.setStyle(i,"top",s+"px"),this.renderer.setStyle(i,"left",o+"px"),re(i,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&X(a,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let i=0;i<e.length;i++)if(typeof e[i].className=="string"&&e[i].className.indexOf("p-ink")!==-1)return e[i];return null}resetInk(){let e=this.getInk();e&&X(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),X(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,le(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=B({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[V([Oe]),yt]})}return t})();function ui(){let t=[],n=(o,s)=>{let a=t.length>0?t[t.length-1]:{key:o,value:s},l=a.value+(a.key===o?0:s)+2;return t.push({key:o,value:l}),l},e=o=>{t=t.filter(s=>s.value!==o)},i=()=>t.length>0?t[t.length-1].value:0,r=o=>o&&parseInt(o.style.zIndex,10)||0;return{get:r,set:(o,s,a)=>{s&&(s.style.zIndex=String(n(o,a)))},clear:o=>{o&&(e(r(o)),o.style.zIndex="")},getCurrent:()=>i()}}var ur=ui(),dr=t=>!!t;var di=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,fi=(()=>{class t extends I{name="baseicon";inlineStyles=di;static \u0275fac=(()=>{let e;return function(r){return(e||(e=w(t)))(r||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var hi=["*"],Cr=(()=>{class t extends At{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=$(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(r){return(e||(e=w(t)))(r||t)}})();static \u0275cmp=gt({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",Xt],styleClass:"styleClass"},features:[V([fi]),Zt,yt],ngContentSelectors:hi,decls:1,vars:0,template:function(i,r){i&1&&(St(),Et(0))},encapsulation:2,changeDetection:0})}return t})();export{yi as a,Si as b,Ei as c,ce as d,$ as e,g as f,fe as g,he as h,qi as i,Yi as j,Zi as k,I as l,Dn as m,Te as n,At as o,Cr as p,lr as q,ur as r,dr as s};
