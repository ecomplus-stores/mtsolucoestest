(e=>{const t=Symbol(),n=Symbol(),r=Symbol(),i=Symbol(),s=Symbol(),o=Symbol(),a=Symbol(),c=Symbol(),l=new Map,$={},d=new WeakMap,u=[],p={},g=new Map,h=new Map,m={},f=new Map,y=new Map,w=e=>e.split(","),v=e=>{if(e=p.$libPath$+e,new URL(e).origin!=location.origin)throw"Invalid "+e;return e},b=w("clientWidth,clientHeight,clientTop,clientLeft,innerWidth,innerHeight,offsetWidth,offsetHeight,offsetTop,offsetLeft,outerWidth,outerHeight,pageXOffset,pageYOffset,scrollWidth,scrollHeight,scrollTop,scrollLeft"),S=w("childElementCount,children,firstElementChild,lastElementChild,nextElementSibling,previousElementSibling"),I=w("insertBefore,remove,removeChild,replaceChild"),M=w("className,width,height,hidden,innerHTML,innerText,textContent"),T=w("setAttribute,setAttributeNS,setProperty"),x=w("addEventListener,dispatchEvent,removeEventListener"),E=x.concat(T,w("add,observe,remove,unobserve")),N=/^[A-Z_]([A-Z0-9-]*[A-Z0-9])?$/,C=()=>{},L=e=>e.length,R=e=>{var t,n,r;try{const n=null===(t=null==e?void 0:e.constructor)||void 0===t?void 0:t.name;if(n)return n}catch(e){}try{const t=null===(r=null===(n=null==e?void 0:e.__zone_symbol__originalInstance)||void 0===n?void 0:n.constructor)||void 0===r?void 0:r.name;if(t)return t}catch(e){}return""},A=[],W=()=>Math.round(Math.random()*Number.MAX_SAFE_INTEGER).toString(36),j=(e,t,n)=>Object.defineProperty(e,t,{...n,configurable:!0}),k=(e,t)=>j(e,"name",{value:t}),O=(e,t,n)=>j(e.prototype,t,n),P=(e,t)=>Object.defineProperties(e.prototype,t),H=(e,t,n)=>O(e,t,{value:n,writable:!0}),D=(e,t)=>t in e[o],_=(e,t)=>e[o][t],B=(e,t,n)=>e[o][t]=n,U=(e,t,n,r,i,s)=>{if(!(i=l.get(t))&&n&&m[e]){const o=l.get(s||"");i=m[e].$createNode$(n,t,r,o),l.set(t,i)}return i},F=(e,t)=>H(e,"nodeType",t),G=(e,t)=>t.map((t=>O(e,t,{get(){let e=z(this,t),n=y.get(e);return n||(n=ye(this,[t]),y.set(e,n)),n}}))),z=(e,r,i)=>[e[t],e[n],r,...(i||A).map((e=>String(e&&e[t]?e[n]:e)))].join("."),q=(e,t)=>w(t).map((t=>O(e,t,{get(){return D(this,t)||B(this,t,ye(this,[t])),_(this,t)},set(e){_(this,t)!==e&&we(this,[t],e),B(this,t,e)}}))),J=e=>b.map((t=>O(e,t,{get(){const e=f.get(z(this,t));if("number"==typeof e)return e;const n=ye(this,[t],b);return n&&"object"==typeof n?(Object.entries(n).map((([e,t])=>f.set(z(this,e),t))),n[t]):n}}))),V=(e,t)=>t.map((t=>{e.prototype[t]=function(...e){let n=z(this,t,e),r=f.get(n);return r||(r=ve(this,[t],e),f.set(n,r)),r}})),X=(e,r,i,s,o)=>{return void 0!==i&&(o=typeof i)?"string"===o||"boolean"===o||"number"===o||null==i?[0,i]:"function"===o?[4,{$winId$:e,$instanceId$:r,$refId$:(a=i,(c=d.get(a))||(d.set(a,c=W()),$[c]=a),c)}]:(s=s||new Set)&&Array.isArray(i)?s.has(i)?[1,[]]:s.add(i)&&[1,i.map((t=>X(e,r,t,s)))]:"object"===o?i[n]?[3,[i[t],i[n]]]:i instanceof Event?[5,Y(e,r,i,!1,s)]:Z&&i instanceof TrustedHTML?[0,i.toString()]:i instanceof ArrayBuffer?[8,i]:ArrayBuffer.isView(i)?[9,i.buffer,R(i)]:[2,Y(e,r,i,!0,s)]:void 0:i;var a,c},Z="undefined"!=typeof TrustedHTML,Y=(e,t,n,r,i,s,o,a)=>{if(s={},!i.has(n))for(o in i.add(n),n)a=n[o],(r||"function"!=typeof a)&&(s[o]=X(e,t,a,i));return s},K=(e,r)=>e?X(e[t],e[n],r):[0,r],Q=(e,t,n,r,i,s,o,a)=>{if(r){if(i=r[0],s=r[1],0===i||11===i||12===i)return s;if(4===i)return te(n,s);if(6===i)return e&&n.length>0?(...t)=>ve(m[e].$window$,n,t,1):C;if(3===i)return ee(s);if(7===i)return new re(s.map(ee));if(10===i)return new ie(s);if(1===i)return s.map((r=>Q(e,t,n,r)));if(14===i)return new ne(s);for(a in o={},s)o[a]=Q(e,t,[...n,a],s[a]);if(13===i)return new m[e].$window$.CSSStyleDeclaration(e,t,n,o);if(5===i){if("message"===o.type&&o.origin){let e,t=JSON.stringify(o.data),n=u.find((e=>e.$data$===t));n&&(e=m[n.$winId$],e&&(o.source=e.$window$,o.origin=e.$location$.origin))}return new Proxy(new Event(o.type,o),{get:(e,t)=>t in o?o[t]:"function"==typeof e[String(t)]?C:e[String(t)]})}if(2===i)return o}},ee=([e,t,n,r])=>t===e&&m[e]?m[e].$window$:U(e,t,n,void 0,void 0,r),te=(e,{$winId$:t,$instanceId$:n,$nodeName$:r,$refId$:i})=>($[i]||d.set($[i]=function(...i){const s=U(t,n,r);return ve(s,e,i)},i),$[i]);class ne extends Error{constructor(e){super(e.message),this.name=e.name,this.message=e.message,this.stack=e.stack}}class re{constructor(e){(this._=e).map(((e,t)=>this[t]=e))}entries(){return this._.entries()}forEach(e,t){this._.map(e,t)}item(e){return this[e]}keys(){return this._.keys()}get length(){return L(this._)}values(){return this._.values()}[Symbol.iterator](){return this._[Symbol.iterator]()}}const ie=class{constructor(e){this.name=e[0],this.value=e[1]}get nodeName(){return this.name}get nodeType(){return 2}},se=(e,t,n)=>console.warn(`Partytown unable to ${e} cross-origin ${t}: `+n.$location$),oe=(t,n)=>{try{if(p.$config$.logStackTraces){const e=(new Error).stack.split("\n"),n=e.findIndex((e=>e.includes("logWorker")));t+="\n"+e.slice(n+1).join("\n")}let r,i;n?(r=`Worker (${ce(n)}) 🎉`,i=le(n)):(r=e.name,i="#9844bf"),p.lastLog!==t&&(p.lastLog=t,console.debug.apply(console,[`%c${r}`,`background: ${i}; color: white; padding: 2px 3px; border-radius: 2px; font-size: 0.8em;`,t]))}catch(e){}},ae=[],ce=e=>(ae.includes(e)||ae.push(e),ae.indexOf(e)+1),le=e=>{const t=["#00309e","#ea3655","#eea727"];return t[ce(e)-1]||t[t.length-1]},$e=(e,t)=>{let n="";if(e){const t=R(e);if("Window"===t)n="";else if("string"==typeof e[r]){let t=e[r];n="#text"===t?"textNode.":"#comment"===t?"commentNode.":"#document"===t?"document.":"html"===t?"doctype.":t.toLowerCase()+"."}else n="nodeType"in e&&2===e.nodeType?"attributes.":"CanvasRenderingContext2D"===t?"context2D.":"CanvasRenderingContextWebGL"===t?"contextWebGL.":"CSSStyleDeclaration"===t?"style.":"MutationObserver"===t?"mutationObserver.":"NamedNodeMap"===t?"namedNodeMap.":"ResizeObserver"===t?"resizeObserver.":t.substring(0,1).toLowerCase()+t.substring(1)+".";e[s]&&e[s].length&&(n+=[...e[s]].join(".")+".")}if(t.length>1){const e=t.slice(0,t.length-1),r=t[t.length-1];if(!isNaN(r))return n+`${e.join(".")}[${r}]`}return n+t.join(".")},de=(e,t)=>{const i=typeof t;if(void 0===t)return"undefined";if("boolean"===i||"number"===i||null==t)return JSON.stringify(t);if("string"===i)return e.includes("cookie")?JSON.stringify(t.slice(0,10)+"..."):JSON.stringify(t.length>50?t.slice(0,40)+"...":t);if(Array.isArray(t))return`[${t.map(de).join(", ")}]`;if("object"===i){const i=t[n],s=R(t);if("string"==typeof i){if("Window"===s)return"window";if("string"==typeof t[r]){if(1===t.nodeType)return`<${t[r].toLowerCase()}>`;if(10===t.nodeType)return`<!DOCTYPE ${t[r]}>`;if(t.nodeType<=11)return t[r]}return"¯\\_(ツ)_/¯ instance obj"}return t[Symbol.iterator]?`[${Array.from(t).map((t=>de(e,t))).join(", ")}]`:"value"in t?"string"==typeof t.value?`"${t.value}"`:ue(t.value):ue(t)}return(e=>"object"==typeof e&&e&&e.then)(t)?"Promise":"function"===i?`ƒ() ${t.name||""}`.trim():`¯\\_(ツ)_/¯ ${String(t)}`.trim()},ue=e=>{const t=[];for(let n in e){const r=e[n],i=typeof r;"string"===i?t.push(`${n}: "${r}"`):"function"===i?t.push(`${n}: ƒ`):Array.isArray(i)?t.push(`${n}: [..]`):"object"===i&&r?t.push(`${n}: {..}`):t.push(`${n}: ${String(r)}`)}let n=t.join(", ");return n.length>200&&(n=n.substring(0,200)+".."),`{ ${n} }`},pe=(e,n)=>{(p.$config$.logGetters||p.$config$.logSetters)&&oe(`Dimension cache cleared from style.${n} setter`,e[t])},ge=(e,n)=>{(p.$config$.logGetters||p.$config$.logCalls)&&oe(`Dimension cache cleared from method call ${n}()`,e[t])},he=[],me=(e,r,i,o,a,c)=>{if(e[s]){if(he.push({$winId$:e[t],$instanceId$:e[n],$applyPath$:[...e[s],...r],$assignInstanceId$:o,$groupedGetters$:a}),he[L(he)-1].$debug$=((e,t,n)=>{let r=$e(e,t);return 1===n?r+=" (blocking)":2===n?r+=" (non-blocking)":3===n&&(r+=" (non-blocking, no-side-effect)"),r.trim()})(e,r,i),c&&3!==i&&console.error("buffer must be sent NonBlockingNoSideEffect"),3===i)p.$postMessage$([12,{$msgId$:W(),$tasks$:[...he]}],c?[c instanceof ArrayBuffer?c:c.buffer]:void 0),he.length=0;else if(1===i)return fe(!0);p.$asyncMsgTimer$=setTimeout(fe,20)}},fe=e=>{if(clearTimeout(p.$asyncMsgTimer$),L(he)){p.$config$.logMainAccess&&oe(`Main access, tasks sent: ${he.length}`);const t=he[L(he)-1],n={$msgId$:W(),$tasks$:[...he]};if(he.length=0,e){const e=((e,t)=>{const n=e.$sharedDataBuffer$,r=new Int32Array(n);Atomics.store(r,0,0),e.$postMessage$([11,t]),Atomics.wait(r,0,0);let i=Atomics.load(r,0),s="",o=0;for(;o<i;o++)s+=String.fromCharCode(r[o+1]);return JSON.parse(s)})(p,n),r=e.$isPromise$,i=Q(t.$winId$,t.$instanceId$,t.$applyPath$,e.$rtnValue$);if(e.$error$){if(r)return Promise.reject(e.$error$);throw new Error(e.$error$)}return r?Promise.resolve(i):i}p.$postMessage$([12,n])}},ye=(e,n,r,i)=>(p.$config$.get&&(i=p.$config$.get(Se(e,n)))!==a||((e,n,r,i=!1,s=!1)=>{if(p.$config$.logGetters)try{const o=`Get ${$e(e,n)}, returned: ${de(n,r)}${i?" (restricted to worker)":""}${s?" (grouped getter)":""}`;o.includes("Symbol(")||oe(o,e[t])}catch(e){}})(e,n,i=me(e,n,1,void 0,r),!1,!!r),i),we=(e,n,r,i)=>{if(p.$config$.set){if((i=p.$config$.set({value:r,prevent:c,...Se(e,n)}))===c)return;i!==a&&(r=i)}var s,o;M.some((e=>n.includes(e)))&&(f.clear(),s=e,o=n[n.length-1],(p.$config$.logGetters||p.$config$.logSetters)&&oe(`Dimension cache cleared from setter "${o}"`,s[t])),((e,n,r,i=!1)=>{if(p.$config$.logSetters)try{n=n.slice(0,n.length-2),oe(`Set ${$e(e,n)}, value: ${de(n,r)}${i?" (restricted to worker)":""}`,e[t])}catch(e){}})(e,n=[...n,K(e,r),0],r),me(e,n,2)},ve=(e,n,r,i,s,o,c,l)=>(p.$config$.apply&&(c=p.$config$.apply({args:r,...Se(e,n)}))!==a||(l=n[L(n)-1],n=[...n,K(e,r)],i=i||(E.includes(l)?2:1),"setAttribute"===l&&D(e,r[0])?B(e,r[0],r[1]):I.includes(l)?(f.clear(),y.clear(),((e,n)=>{(p.$config$.logGetters||p.$config$.logCalls)&&oe(`Dimension and DOM structure cache cleared from method call ${n}()`,e[t])})(e,l)):T.includes(l)&&(i=2,f.clear(),ge(e,l)),((e,n,r,i)=>{if(p.$config$.logCalls)try{n=n.slice(0,n.length-1),oe(`Call ${$e(e,n)}(${r.map((e=>de(n,e))).join(", ")}), returned: ${de(n,i)}`,e[t])}catch(e){}})(e,n,r,c=me(e,n,i,s,void 0,o))),c),be=(e,n,r)=>{((e,n,r)=>{if(p.$config$.logCalls)try{oe(`Construct new ${n}(${r.map((e=>de([],e))).join(", ")})`,e[t])}catch(e){}})(e,n,r),me(e,[1,n,K(e,r)],1)},Se=(e,n)=>({name:n.join("."),continue:a,nodeName:e[r],constructor:R(e),instance:e,window:m[e[t]].$window$}),Ie=(e,t,n,r,i)=>{let s,o,a=t=>((t=n.get(e.origin))||n.set(e.origin,t=[]),t),c=e=>a().findIndex((t=>t[Me]===e)),l={getItem:e=>(s=c(e),s>-1?a()[s][Te]:null),setItem(n,o){s=c(n),s>-1?a()[s][Te]=o:a().push([n,o]),r?ve(e,[t,"setItem"],[n,o],2):se("set",t,i)},removeItem(n){s=c(n),s>-1&&a().splice(s,1),r?ve(e,[t,"removeItem"],[n],2):se("remove",t,i)},key:e=>(o=a()[e],o?o[Me]:null),clear(){a().length=0,r?ve(e,[t,"clear"],A,2):se("clear",t,i)},get length(){return a().length}};e[t]=new Proxy(l,{get:(e,t)=>Reflect.has(e,t)?Reflect.get(e,t):e.getItem(t),set:(e,t,n)=>(e.setItem(t,n),!0),has:(e,t)=>!!Reflect.has(e,t)||"string"==typeof t&&null!==e.getItem(t),deleteProperty:(e,t)=>(e.removeItem(t),!0)})},Me=0,Te=1,xe=(e,t,n)=>{e[n]=k(class extends t{constructor(e,t,n,i){return super(e,t,n,i||{}),new Proxy(this,{get:(e,t)=>e[t]?e[t]:(e[t]||"string"!=typeof t||e[r][t]||(e[r][t]=ye(e,[t])),e[r][t]),set:(e,t,n)=>(e[r][t]=n,we(e,[t],n),pe(e,t),f.clear(),!0)})}setProperty(...e){this[r][e[0]]=e[1],ve(this,["setProperty"],e,2),pe(this,e[0]),f.clear()}getPropertyValue(e){return this[e]}removeProperty(e){let t=this[r][e];return ve(this,["removeProperty"],[e],2),pe(this,e),f.clear(),this[r][e]=void 0,t}},n)},Ee=(e,t)=>{e[t]=k(class{constructor(e){this.ownerNode=e}get cssRules(){const e=this.ownerNode;return new Proxy({},{get(t,n){const r=String(n);return"item"===r?t=>Ce(e,t):"length"===r?Ne(e).length:isNaN(r)?t[n]:Ce(e,r)}})}insertRule(e,t){const n=Ne(this.ownerNode);return(t=void 0===t?0:t)>=0&&t<=n.length&&(ve(this.ownerNode,["sheet","insertRule"],[e,t],2),n.splice(t,0,0)),ge(this.ownerNode,"insertRule"),f.clear(),t}deleteRule(e){ve(this.ownerNode,["sheet","deleteRule"],[e],2),Ne(this.ownerNode).splice(e,1),ge(this.ownerNode,"deleteRule"),f.clear()}get type(){return"text/css"}},t);const n={sheet:{get(){return new e[t](this)}}};P(e.HTMLStyleElement,n)},Ne=(e,t)=>((t=_(e,2))||(t=ye(e,["sheet","cssRules"]),B(e,2,t)),t),Ce=(e,t,n)=>(0===(n=Ne(e))[t]&&(n[t]=ye(e,["sheet","cssRules",parseInt(t,10)])),n[t]),Le=(e,t,n,r,i)=>{try{p.$config$.logScriptExecution&&oe(`Execute script: ${n.substring(0,100).split("\n").map((e=>e.trim())).join(" ").trim().substring(0,60)}...`,r),e.$currentScriptId$=t,Re(e,n)}catch(e){console.error(n,e),i=String(e.stack||e)}return e.$currentScriptId$="",i},Re=(e,t,n)=>{e.$runWindowLoadEvent$=1,t=`with(this){${t.replace(/\bthis\b/g,((e,t,n)=>t>0&&"$"!==n[t-1]?"(thi$(this)?window:this)":e)).replace(/\/\/# so/g,"//Xso")}\n;function thi$(t){return t===this}};${(p.$config$.globalFns||[]).filter((e=>/[a-zA-Z_$][0-9a-zA-Z_$]*/.test(e))).map((e=>`(typeof ${e}=='function'&&(this.${e}=${e}))`)).join(";")};`+(n?"\n//# sourceURL="+n:""),e.$isSameOrigin$||(t=t.replace(/.postMessage\(/g,`.postMessage('${e.$winId$}',`)),new Function(t).call(e.$window$),e.$runWindowLoadEvent$=0},Ae=(e,t,n)=>{(n=_(e,t))&&setTimeout((()=>n.map((e=>e({type:t})))))},We=(e,t,n,r,i,s)=>{for(r=e.$location$;!r.host&&(r=(e=m[e.$parentWinId$]).$location$,e.$winId$!==e.$parentWinId$););return i=new URL(t||"",r),n&&p.$config$.resolveUrl&&(s=p.$config$.resolveUrl(i,r,n))?s:i},je=(e,t,n)=>We(e,t,n)+"",ke=()=>`<script src="${v("partytown.js?v=0.8.0")}"><\/script>`,Oe=e=>class{constructor(){this.s="",this.l=[],this.e=[],this.style={}}get src(){return this.s}set src(t){p.$config$.logImageRequests&&oe(`Image() request: ${je(e,t,"image")}`,e.$winId$),this.s=t,fetch(je(e,t,"image"),{mode:"no-cors",credentials:"include",keepalive:!0}).then((e=>{e.ok||0===e.status?this.l.map((e=>e({type:"load"}))):this.e.map((e=>e({type:"error"})))}),(()=>this.e.forEach((e=>e({type:"error"})))))}addEventListener(e,t){"load"===e&&this.l.push(t),"error"===e&&this.e.push(t)}get onload(){return this.l[0]}set onload(e){this.l=[e]}get onerror(){return this.e[0]}set onerror(e){this.e=[e]}},Pe={addEventListener:{value(...e){const t=e[0],n=_(this,t)||[];n.push(e[1]),B(this,t,n)}},async:{get:C,set:C},defer:{get:C,set:C},onload:{get(){let e=_(this,"load");return e&&e[0]||null},set(e){B(this,"load",e?[e]:null)}},onerror:{get(){let e=_(this,"error");return e&&e[0]||null},set(e){B(this,"error",e?[e]:null)}},getAttribute:{value(e){return"src"===e?this.src:ve(this,["getAttribute"],[e])}},setAttribute:{value(e,t){He.includes(e)?this[e]=t:ve(this,["setAttribute"],[e,t])}}},He=w("src,type"),De=(e,t)=>{const n={innerHTML:_e,innerText:_e,src:{get(){return _(this,4)||""},set(e){const n=je(t,e,null),r=p.$config$;if(e=je(t,e,"script"),B(this,4,e),we(this,["src"],e),n!==e&&we(this,["dataset","ptsrc"],n),this.type&&r.loadScriptsOnMainThread){r.loadScriptsOnMainThread.some((t=>t===e))&&we(this,["type"],"text/javascript")}}},textContent:_e,type:{get(){return ye(this,["type"])},set(e){Be(e)||(B(this,5,e),we(this,["type"],e))}},...Pe};P(e,n)},_e={get(){const e=ye(this,["type"]);return Be(e)?_(this,3)||"":ye(this,["innerHTML"])},set(e){B(this,3,e)}},Be=e=>!e||"text/javascript"===e,Ue=(e,i,s)=>{const o=p.$config$,a=k(class extends s{appendChild(e){return this.insertBefore(e,null)}get href(){}set href(e){}insertBefore(e,s){var a,c;const l=e[t]=this[t],$=e[n],d=e[r],u="SCRIPT"===d,g="IFRAME"===d;if(u){const t=_(e,3),n=_(e,5);if(t){if(Be(n)){const n=e.id;if(n&&(null===(c=null===(a=o.loadScriptsOnMainThread)||void 0===a?void 0:a.includes)||void 0===c?void 0:c.call(a,n)))we(e,["type"],"text/javascript");else{const n=Le(i,$,t,l,""),r=n?"pterror":"ptid",s=n||$;we(e,["type"],"text/partytown-x"),we(e,["dataset",r],s)}}we(e,["innerHTML"],t)}}if(ve(this,["insertBefore"],[e,s],2),g){const t=_(e,0);if(t&&t.startsWith("javascript:")){const e=t.split("javascript:")[1];Le(i,$,e,l,"")}((e,t)=>{let n,r,i=0,s=()=>{m[e]&&m[e].$isInitialized$&&!m[e].$isLoading$?(n=_(t,1)?"error":"load",r=_(t,n),r&&r.map((e=>e({type:n})))):i++>2e3?(r=_(t,"error"),r&&r.map((e=>e({type:"error"})))):setTimeout(s,9)};s()})($,e)}return u&&(fe(!0),p.$postMessage$([7,l])),e}get nodeName(){return"#s"===this[r]?"#document-fragment":this[r]}get nodeType(){return 3}get ownerDocument(){return i.$document$}},"Node");G(a,w("childNodes,firstChild,isConnected,lastChild,nextSibling,parentElement,parentNode,previousSibling")),e.Node=a},Fe=w("AUDIO,CANVAS,VIDEO"),Ge=w("Audio,MediaSource"),ze=(e,n,r)=>{P(e,{body:{get:()=>n.$body$},cookie:{get(){return n.$isSameOrigin$?ye(this,["cookie"]):(se("get","cookie",n),"")},set(e){n.$isSameOrigin$?we(this,["cookie"],e):se("set","cookie",n)}},createElement:{value(e){if(e=e.toUpperCase(),!N.test(e))throw e+" not valid";const n="IFRAME"===e,r=this[t],i=(n?"f_":"")+W();ve(this,["createElement"],[e],2,i);const s=U(r,i,e);if(n){ot({$winId$:i,$parentWinId$:r,$url$:"about:blank"},!0).$window$.fetch=fetch,we(s,["srcdoc"],ke())}else if("SCRIPT"===e){const e=_(s,5);Be(e)&&we(s,["type"],"text/partytown")}return s}},createElementNS:{value(e,n){const r=W(),i=U(this[t],r,n,e);return ve(this,["createElementNS"],[e,n],2,r),i}},createTextNode:{value(e){const n=this[t],r=W(),i=U(n,r,"#text");return ve(this,["createTextNode"],[e],2,r),i}},createEvent:{value:e=>new Event(e)},currentScript:{get(){return n.$currentScriptId$?U(this[t],n.$currentScriptId$,"SCRIPT"):null}},defaultView:{get:()=>r?null:n.$window$},documentElement:{get:()=>n.$documentElement$},getElementsByTagName:{value(e){return"BODY"===(e=e.toUpperCase())?[n.$body$]:"HEAD"===e?[n.$head$]:ve(this,["getElementsByTagName"],[e])}},head:{get:()=>n.$head$},images:{get(){return ye(this,["images"])}},implementation:{get(){return{hasFeature:()=>!0,createHTMLDocument:e=>{const t=W();ve(this,["implementation","createHTMLDocument"],[e],1,{$winId$:t});return ot({$winId$:t,$parentWinId$:t,$url$:n.$location$+"",$visibilityState$:"hidden"},!0,!0).$document$}}}},location:{get:()=>n.$location$,set(e){n.$location$.href=e+""}},nodeType:{value:9},parentNode:{value:null},parentElement:{value:null},readyState:{value:"complete"},visibilityState:{get:()=>n.$visibilityState$||"visible"}}),q(e,"compatMode,referrer,forms")},qe=(e,t)=>{P(e,{parentElement:{get(){return this.parentNode}},parentNode:{get:()=>t.$documentElement$}})},Je=(e,t)=>{P(e,{localName:{get(){return this[r].toLowerCase()}},namespaceURI:{get(){return this[i]||"http://www.w3.org/1999/xhtml"}},nodeType:{value:1},tagName:{get(){return this[r]}}}),G(e,S),q(e,"id"),J(t),V(t,w("getClientRects,getBoundingClientRect"))},Ve=(e,t)=>{const n={};w("hash,host,hostname,href,origin,pathname,port,protocol,search").map((e=>{n[e]={get(){let n,r=_(this,4);return"string"!=typeof r&&(n=ye(this,["href"]),B(this,4,n),r=new URL(n)[e]),We(t,r,null)[e]},set(n){let r;if("href"===e)if((e=>{try{return new URL(e),!0}catch(e){return!1}})(n))r=new URL(n);else{const e=t.$location$.href;r=We(t,e,null),r.href=new URL(n+"",r.href)}else r=We(t,this.href,null),r[e]=n;B(this,4,r.href),we(this,["href"],r.href)}}})),P(e,n)},Xe=(e,t)=>{const n={contentDocument:{get(){return Qe(this).$document$}},contentWindow:{get(){return Qe(this).$window$}},src:{get(){let e=_(this,0);return e&&e.startsWith("javascript:")?e:(e=Qe(this).$location$.href,e.startsWith("about:")?"":e)},set(e){if(e)if(e.startsWith("javascript:"))B(this,0,e);else if(!e.startsWith("about:")){let t,n=new XMLHttpRequest,r=Qe(this);r.$location$.href=e=je(r,e,"iframe"),r.$isLoading$=1,B(this,1,void 0),n.open("GET",e,!1),n.send(),t=n.status,t>199&&t<300?(we(this,["srcdoc"],`<base href="${e}">`+n.responseText.replace(Ye,((e,t)=>{const n=[];let r,i=!1;for(;r=Ke.exec(t);){let[e]=r;e.startsWith("type=")&&(i=!0,e=e.replace(/(application|text)\/javascript/,"text/partytown")),n.push(e)}return i||n.push('type="text/partytown"'),`<script ${n.join(" ")}>`}))+ke()),fe(!0),p.$postMessage$([7,r.$winId$])):(B(this,1,t),r.$isLoading$=0)}}},...Pe};P(e,n)},Ze="((?:\\w|-)+(?:=(?:(?:\\w|-)+|'[^']*'|\"[^\"]*\")?)?)",Ye=new RegExp(`<script\\s*((${Ze}\\s*)*)>`,"mg"),Ke=new RegExp(Ze,"mg"),Qe=e=>{const r=e[n];return m[r]||ot({$winId$:r,$parentWinId$:e[t],$url$:ye(e,["src"])||"about:blank"},!0),m[r]},et=e=>{const t=(e,t)=>{const{a:n,b:r,c:i,d:s,e:o,f:a}=ve(e,[t],A);return new DOMMatrixReadOnly([n,r,i,s,o,a])},n={...e,getCTM:{value:function(){return t(this,"getCTM")}},getScreenCTM:{value:function(){return t(this,"getScreenCTM")}}};P(e,n)},tt=(e,t)=>{e.NamedNodeMap=k(class extends t{constructor(e,t,n){return super(e,t,n),new Proxy(this,{get(e,t){const n=rt[t];return n?n.bind(e,[t]):ye(e,[t])},set(e,t,n){if(rt[t])throw new Error("Can't set read-only property: "+String(t));return we(e,[t],n),!0}})}},"NamedNodeMap")};function nt(e,...t){return ve(this,e,t,1)}const rt={getNamedItem:nt,getNamedItemNS:nt,item:nt,removeNamedItem:nt,removeNamedItemNS:nt,setNamedItem:nt,setNamedItemNS:nt},it=(a,c,l,$,d,f)=>{let y,b,I,M;const T=class{constructor(e,c,l,$,d){this[t]=e||a,this[n]=c||y||W(),this[s]=l||[],this[r]=$||b,this[i]=d||I,this[o]=M&&M[o]||{},y=b=I=void 0}},E=new(k(class extends URL{assign(){oe("location.assign(), noop")}reload(){oe("location.reload(), noop")}replace(){oe("location.replace(), noop")}},"Location"))(l),N=E.origin===p.$origin$||"about:blank"===E.origin,C=c===a,A={},z=()=>{let e,t,n=[];for(e in m)t=m[e],t.$parentWinId$!==a||t.$isTopWindow$||n.push(t);return n},X=k(class extends T{constructor(){super(a,a);let r,i,o=this,l=0,u=()=>{l||((p.$initWindowMedia$||(e.$bridgeToMedia$=[ye,we,ve,be,P,W,t,n,s],p.$importScripts$(v("partytown-media.js?v=0.8.0")),p.$initWindowMedia$=e.$bridgeFromMedia$,delete e.$bridgeFromMedia$),p.$initWindowMedia$)(T,Y,A,o,Ge),l=1)},m={},x=(e,t,n,r)=>{Fe.includes(e)&&u();const i=m[e]?m[e]:e.includes("-")?m.UNKNOWN:m.I;return y=t,b=e,I=n,M=r,new i};var L,R;if(o.Window=X,o.name=name+`${ce(a)} (${a})`,Ue(o,A,T),(e=>{e.NodeList=k(re,"NodeList")})(o),tt(o,T),xe(o,T,"CSSStyleDeclaration"),((e,t,n)=>{e[n]=k(class extends t{now(){return performance.now()}},n)})(o,T,"Performance"),((e,t)=>{const n=new Map;e.customElements={define(r,i,s){n.set(r,i),t[r.toUpperCase()]=i;const o=[i.name,i.observedAttributes];ve(e,["customElements","define"],[r,o,s])},get:t=>n.get(t)||ve(e,["customElements","get"],[t]),whenDefined:t=>n.has(t)?Promise.resolve():ve(e,["customElements","whenDefined"],[t]),upgrade:t=>ve(e,["customElements","upgrade"],[t])}})(o,m),p.$interfaces$.map((([e,t,r,i,c])=>{const l=st[e]?Z:"EventTarget"===t?Y:"Object"===t?T:o[t],$=o[e]=k(12===i?class extends T{constructor(...t){super(),be(this,e,t)}}:o[e]||class extends l{},e);c&&(m[c]=$),r.map((([e,t,r])=>{e in $.prototype||e in l.prototype||("string"==typeof t?O($,e,{get(){if(!D(this,e)){const r=this[n],i=[...this[s],e],c=o[t];c&&B(this,e,new c(a,r,i))}return _(this,e)},set(t){B(this,e,t)}}):5===t?H($,e,(function(...t){return ve(this,[e],t)})):t>0&&(void 0!==r?H($,e,r):O($,e,{get(){return ye(this,[e])},set(t){return we(this,[e],t)}})))}))})),w("atob,btoa,crypto,indexedDB,setTimeout,setInterval,clearTimeout,clearInterval").map((t=>{delete X.prototype[t],t in o||(r=e[t],null!=r&&(o[t]="function"!=typeof r||r.toString().startsWith("class")?r:r.bind(e)))})),Object.getOwnPropertyNames(e).map((t=>{t in o||(o[t]=e[t])})),Ge.map((e=>j(o,e,{get:()=>(u(),o[e])}))),"trustedTypes"in e&&(o.trustedTypes=e.trustedTypes),Je(o.Element,o.HTMLElement),ze(o.Document,A,f),L=o.DocumentFragment,F(L,11),G(L,S),Ve(o.HTMLAnchorElement,A),R=o.HTMLFormElement,P(R,{}),q(R,"elements"),Xe(o.HTMLIFrameElement),De(o.HTMLScriptElement,A),et(o.SVGGraphicsElement),qe(o.HTMLHeadElement,A),qe(o.HTMLBodyElement,A),((e,t)=>{P(e,{parentElement:{value:null},parentNode:{get:()=>t.$document$}})})(o.HTMLHtmlElement,A),Ee(o,"CSSStyleSheet"),F(o.Comment,8),F(o.DocumentType,10),Object.assign(A,{$winId$:a,$parentWinId$:c,$window$:new Proxy(o,{get:(e,t)=>{var n;if("string"!=typeof t||isNaN(t))return(null===(n=p.$config$.mainWindowAccessors)||void 0===n?void 0:n.includes(t))?ye(this,[t]):e[t];{let e=z()[t];return e?e.$window$:void 0}},has:()=>!0}),$document$:x("#document",a+".d"),$documentElement$:x("HTML",a+".e"),$head$:x("HEAD",a+".h"),$body$:x("BODY",a+".b"),$location$:E,$visibilityState$:$,$isSameOrigin$:N,$isTopWindow$:C,$createNode$:x}),o.requestAnimationFrame=e=>setTimeout((()=>e(performance.now())),9),o.cancelAnimationFrame=e=>clearTimeout(e),o.requestIdleCallback=(e,t)=>(t=Date.now(),setTimeout((()=>e({didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-t))})),1)),o.cancelIdleCallback=e=>clearTimeout(e),Ie(o,"localStorage",g,N,A),Ie(o,"sessionStorage",h,N,A),N||(o.indexeddb=void 0),d)i={},o.history={pushState(e){i=e},replaceState(e){i=e},get state(){return i},length:0},o.indexeddb=void 0;else{const e=o.history.pushState.bind(o.history),t=o.history.replaceState.bind(o.history);o.history.pushState=(t,n,r)=>{!1!==A.$propagateHistoryChange$&&e(t,n,r)},o.history.replaceState=(e,n,r)=>{!1!==A.$propagateHistoryChange$&&t(e,n,r)}}o.Worker=void 0}addEventListener(...e){"load"===e[0]?A.$runWindowLoadEvent$&&setTimeout((()=>e[1]({type:"load"}))):ve(this,["addEventListener"],e,2)}get body(){return A.$body$}get document(){return A.$document$}get documentElement(){return A.$documentElement$}fetch(e,t){return e="string"==typeof e||e instanceof URL?String(e):e.url,fetch(je(A,e,"fetch"),t)}get frames(){return A.$window$}get frameElement(){return C?null:U(c,a,"IFRAME")}get globalThis(){return A.$window$}get head(){return A.$head$}get length(){return z().length}get location(){return E}set location(e){E.href=e+""}get Image(){return Oe(A)}get navigator(){return(e=>{let t,n={sendBeacon:(t,n)=>{if(p.$config$.logSendBeaconRequests)try{oe(`sendBeacon: ${je(e,t,null)}${n?", data: "+JSON.stringify(n):""}`)}catch(e){console.error(e)}try{return fetch(je(e,t,null),{method:"POST",body:n,mode:"no-cors",keepalive:!0}),!0}catch(e){return console.error(e),!1}}};for(t in navigator)n[t]=navigator[t];return new Proxy(n,{set:(e,t,n)=>(navigator[t]=n,!0)})})(A)}get origin(){return E.origin}set origin(e){}get parent(){for(let e in m)if(m[e].$winId$===c)return m[e].$window$;return A.$window$}postMessage(...e){m[e[0]]&&(L(u)>50&&u.splice(0,5),u.push({$winId$:e[0],$data$:JSON.stringify(e[1])}),e=e.slice(1)),ve(this,["postMessage"],e,3)}get self(){return A.$window$}get top(){for(let e in m)if(m[e].$isTopWindow$)return m[e].$window$;return A.$window$}get window(){return A.$window$}get XMLHttpRequest(){const e=XMLHttpRequest,t=String(e),n=k(class extends e{open(...e){e[1]=je(A,e[1],"xhr"),super.open(...e)}set withCredentials(e){}toString(){return t}},R(e));return n.prototype.constructor.toString=()=>t,n}},"Window"),Z=class extends T{constructor(e,t,n,r){return super(e,t,n,r),new Proxy(this,{get:(e,t)=>ye(e,[t]),set:(e,t,n)=>(we(e,[t],n),!0)})}},Y=class extends T{};return x.map((e=>Y.prototype[e]=function(...t){return ve(this,[e],t,2)})),q(X,"devicePixelRatio"),J(X),V(X,["getComputedStyle"]),new X,A},st={DOMStringMap:1,NamedNodeMap:1},ot=({$winId$:e,$parentWinId$:t,$url$:n,$visibilityState$:r},i,s)=>{if(!m[e]){m[e]=it(e,t,n,r,i,s);oe(`Created ${e===t?"top":"iframe"} window ${ce(e)} environment`,e)}return p.$postMessage$([7,e]),m[e]},at=[],ct=t=>{const n=t.data,r=n[0],i=n[1];if(p.$isInitialized$)if(7===r)(async e=>{let t,n=e.$winId$,r=e.$instanceId$,i=U(n,r,"SCRIPT"),s=e.$content$,o=e.$url$,a=e.$orgUrl$,c="",l=m[n],$=["text/jscript","text/javascript","text/x-javascript","application/javascript","application/x-javascript","text/ecmascript","text/x-ecmascript","application/ecmascript"];if(o)try{if(o=We(l,o,"script")+"",B(i,4,o),p.$config$.logScriptExecution&&oe(`Execute script src: ${a}`,n),t=await fetch(o),t.ok){let e=t.headers.get("content-type");$.some((t=>{var n,r,i;return null===(i=null===(n=null==e?void 0:e.toLowerCase)||void 0===n?void 0:(r=n.call(e)).includes)||void 0===i?void 0:i.call(r,t)}))&&(s=await t.text(),l.$currentScriptId$=r,Re(l,s,a||o)),Ae(i,"load")}else c=t.statusText,Ae(i,"error")}catch(e){console.error(e),c=String(e.stack||e),Ae(i,"error")}else s&&(c=Le(l,r,s,n,c));l.$currentScriptId$="",p.$postMessage$([6,n,r,c])})(i);else if(9===r)(({$winId$:e,$instanceId$:t,$refId$:n,$thisArg$:r,$args$:i})=>{if($[n])try{$[n].apply(Q(e,t,[],r),Q(e,t,[],i))}catch(e){console.error(e)}})(i);else if(10===r)(({$winId$:e,$forward$:t,$args$:n})=>{try{let r=m[e].$window$,i=0,s=L(t);for(;i<s;i++)i+1<s?r=r[t[i]]:r[t[i]].apply(r,Q(null,e,[],n))}catch(e){console.error(e)}})(i);else if(5===r)ot(i);else if(8===r){if(1!==m[i].$isInitialized$){const e=i,t=m[e],n=t.$winId$===t.$parentWinId$?"top":"iframe";oe(`Initialized ${n} window ${ce(e)} environment 🎉`,e)}m[i].$isInitialized$=1,m[i].$isLoading$=0}else if(14===r)m[i].$visibilityState$=n[2];else if(13===r){const e=i.$winId$,t=m[e];t.$location$.href=i.url,function(e,t,n){const r=t.$window$.history;switch(n.type){case 0:t.$propagateHistoryChange$=!1;try{r.pushState(n.state,"",n.newUrl)}catch(e){}t.$propagateHistoryChange$=!0;break;case 1:t.$propagateHistoryChange$=!1;try{r.replaceState(n.state,"",n.newUrl)}catch(e){}t.$propagateHistoryChange$=!0}}(i.$winId$,t,i)}else 15===r&&((e,t,n,r,i)=>{const s=U(t,n);s&&"function"==typeof s[r]&&s[r].apply(s,i)})(...n);else 1===r?((t=>{const n=p.$config$=JSON.parse(t.$config$),r=t.$origin$;p.$importScripts$=importScripts.bind(e),p.$interfaces$=t.$interfaces$,p.$libPath$=t.$libPath$,p.$origin$=r,p.$postMessage$=postMessage.bind(e),p.$sharedDataBuffer$=t.$sharedDataBuffer$,g.set(r,t.$localStorage$),h.set(r,t.$sessionStorage$),e.importScripts=void 0,delete e.postMessage,delete e.WorkerGlobalScope,w("resolveUrl,get,set,apply").map((e=>{n[e]&&(n[e]=new Function("return "+n[e])())}))})(i),p.$postMessage$([2])):3===r?(p.$interfaces$=[...p.$interfaces$,...i],p.$isInitialized$=1,oe("Initialized web worker"),p.$postMessage$([4]),at.length&&oe(`Queued ready messages: ${at.length}`),[...at].map(ct),at.length=0):at.push(t)};e.onmessage=ct,postMessage([0])})(self);