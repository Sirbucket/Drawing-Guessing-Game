const v=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(t){if(t.ep)return;t.ep=!0;const l=o(t);fetch(t.href,l)}};v();class y{constructor(e,o){this.mousemovecbs=[],this.mousedowncbs=[],this.mouseupcbs=[],this.w=e,this.h=o,this.element=document.createElement("element"),this.element.innerHTML=`
        <label>
            <canvas id = "canvas" width = ${this.w} height = ${this.h}></canvas>
        </label>
        `,this.canvas=this.element.querySelector("#canvas");const n=this.canvas;this.ctx=n.getContext("2d"),n.addEventListener("mousedown",t=>{const l=this.mousedowncbs.length;for(let c=0;c<l;++c){const a=this.mousedowncbs[c];a(t)}}),n.addEventListener("mousemove",t=>{const l=this.mousemovecbs.length;for(let c=0;c<l;++c){const a=this.mousemovecbs[c];a(t)}}),n.addEventListener("mouseup",t=>{const l=this.mouseupcbs.length;for(let c=0;c<l;++c){const a=this.mouseupcbs[c];a(t)}})}onMouseMove(e){this.mousemovecbs.push(e)}onMouseDown(e){this.mousedowncbs.push(e)}onMouseUp(e){this.mouseupcbs.push(e)}}const p=["round","square"],f=["bevel","round","miter"],m=["Red","Blue","Green","Yellow","Orange","Brown","Black","Pink","Purple","Maroon","Teal","Gray"];class k{constructor(e){this.callbacks=[],this.element.innerHTML=`
        <label>
            <img class = "image" src = ${this.imageName}>
        </label>
        `,this.image=this.element.querySelector(".image"),this.image.addEventListener("click",()=>{const n=this.callbacks.length;for(let t=0;t<n;++t){const l=this.callbacks[t];l()}})}onClick(e){this.callbacks.push(e)}}class L{constructor(e){this.name="div",this.callbacks=[],this.element=document.createElement(this.name),this.element.innerHTML=`
            <label>
                <button class = "button" type = "button">
                    ${e}
                </button>
            </label>
        `,this.button=this.element.querySelector(".button"),this.button.addEventListener("click",()=>{for(let n of this.callbacks)n()})}onClick(e){this.callbacks.push(e)}}class B{constructor(e){this.name="div",this.callbacks=[],this.element=document.createElement(this.name),this.element.innerHTML=`
            <label>
                <input class = "userInput" type = "text">
                    ${e}
                </input>
            </label>
        `,this.typebox=this.element.querySelector(".userInput"),this.typebox.addEventListener("input",()=>{for(let n of this.callbacks)n()})}onInput(e){this.callbacks.push(e)}}class M{constructor(e){let o=document.querySelector("#controls");const n=e.length;this.clone=o.cloneNode(!0),this.cloneContent=this.clone.content.querySelector(".controls");for(let t=0;t<n;++t)this.content=this.cloneContent.querySelector(".controlbox"),this.oldHTML=this.cloneContent.innerHTML,this.content.appendChild(e[t].element)}}class x{constructor(e,o){this.name="div",this.callbacks=[],this.element=document.createElement(this.name),this.element.innerHTML=`
            <label>
                <div class = ${e}>
                    ${o}
                </div>
            </label>
        `}}class E{constructor(){}newButton(e,o){const n=new L(e);return o.push(n),n}newImage(e,o){const n=new k(e);return o.push(n),n}newTypebox(e,o){const n=new B(e);return o.push(n),n}newContainer(e,o){const n=new M(e);return o.push(n),n}newCanvas(e,o){return new y(e,o)}newElement(e,o,n){const t=new x(e,o);return n.push(t),t}}const b=[],h=[],w=document.querySelector("#app");let g=!1;const r=new E;function C(){for(let i=0;i<h.length;++i)w.appendChild(h[i].cloneContent)}function T(i,e,o,n){let t=r.newCanvas(i,e);return t.canvas.style.backgroundColor=n,t.canvas.style.justifyContent="auto",t.ctx.strokeStyle=o,t.onMouseDown(l=>{t.ctx.beginPath(),t.ctx.moveTo(l.offsetX,l.offsetY)}),t.onMouseMove(l=>{if(l.buttons!=1)return t;t.ctx.lineTo(l.offsetX,l.offsetY),t.ctx.stroke()}),t.onMouseUp(l=>{if(g===!0)return t.ctx.fill(),t;t.ctx.stroke()}),t}function S(i,e,o){const n=[],t=[],l=[],c=[],a=[],u=[];for(let s=0;s<p.length;++s)r.newButton(p[s],n).onClick(()=>e.lineCap=p[s]);for(let s=0;s<m.length;++s)r.newButton(m[s],t).onClick(()=>{e.strokeStyle=m[s],e.fillStyle=m[s]});for(let s=0;s<f.length;++s)r.newButton(f[s],l).onClick(()=>e.lineJoin=f[s]);r.newButton("Back",c).onClick(()=>{o.removeChild(i.element);for(let s=0;s<a.length;++s)o.removeChild(a[s].element);C();for(let s=0;s<u.length;++s)o.removeChild(u[s].cloneContent)}),r.newButton("Line",c).onClick(()=>{g=!1}),r.newButton("Fill",c).onClick(()=>{g=!0}),r.newButton("Clear",c).onClick(()=>{e.clearRect(0,0,i.canvas.width,i.canvas.height)}),r.newButton("Save",c).onClick(()=>{const s=i.canvas.toDataURL("image/png"),d=document.getElementById("link");d.setAttribute("download","CanvasImage.png"),d.setAttribute("href",s.replace("image/png","image/octet-stream")),d.click()}),r.newContainer(n,u),r.newContainer(t,u),r.newContainer(l,u),r.newContainer(c,u),r.newElement("namedisplay","insertwordnamehere",a);for(let s=0;s<a.length;++s)o.appendChild(a[s].element);for(let s=0;s<u.length;++s)o.appendChild(u[s].cloneContent)}function q(i){r.newButton("Draw",b).onClick(()=>{for(let n=0;n<h.length;++n)i.removeChild(h[n].cloneContent);const e=T("1280","720","black","lightsteelblue"),o=e.ctx;S(e,o,w),i.appendChild(e.element)}),r.newButton("name2",b).onClick(async()=>{console.log("Clicked button, go fetch...");try{var e=await fetch(`/.netlify/functions/secret?number=${4}`)}catch(o){result.innerHTML=`
            Encountered an error :(
                <pre>${JSON.stringify(o)}</pre>
            )`;return}if(e){let o=await e.json();result.innerHTML=o.result}else result.innerHTML="Null response?"}),r.newContainer(b,h)}q(w);C();