const m=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}};m();class d{constructor(e,o){this.mousemovecbs=[],this.mousedowncbs=[],this.mouseupcbs=[],this.w=e,this.h=o,this.element=document.createElement(this.name),this.element.innerHTML=`
        <label>
            <canvas id = "canvas" width = ${this.w} height = ${this.h}></canvas>
        </label>
        `,this.canvas=this.element.querySelector("#canvas");const n=this.canvas;this.ctx=n.getContext("2d"),n.addEventListener("mousedown",t=>{const s=this.mousedowncbs.length;for(let l=0;l<s;++l){const a=this.mousedowncbs[l];a(t)}}),n.addEventListener("mousemove",t=>{const s=this.mousemovecbs.length;for(let l=0;l<s;++l){const a=this.mousemovecbs[l];a(t)}}),n.addEventListener("mouseup",t=>{const s=this.mouseupcbs.length;for(let l=0;l<s;++l){const a=this.mouseupcbs[l];a(t)}})}onMouseMove(e){this.mousemovecbs.push(e)}onMouseDown(e){this.mousedowncbs.push(e)}onMouseUp(e){this.mouseupcbs.push(e)}}class p{constructor(e){this.callbacks=[],this.element.innerHTML=`
        <label>
            <img class = "image" src = ${this.imageName}>
        </label>
        `,this.image=this.element.querySelector(".image"),this.image.addEventListener("click",()=>{const n=this.callbacks.length;for(let t=0;t<n;++t){const s=this.callbacks[t];s()}})}onClick(e){this.callbacks.push(e)}}class b{constructor(e){this.name="div",this.callbacks=[],this.element=document.createElement(this.name),this.element.innerHTML=`
            <label>
                <button class = "button" type = "button">
                    ${e}
                </button>
            </label>
        `,this.button=this.element.querySelector(".button"),this.button.addEventListener("click",()=>{for(let n of this.callbacks)n()})}onClick(e){this.callbacks.push(e)}}class f{constructor(e){this.name="div",this.callbacks=[],this.element=document.createElement(this.name),this.element.innerHTML=`
            <label>
                <input class = "userInput" type = "text">
                    ${e}
                </input>
            </label>
        `,this.typebox=this.element.querySelector(".userInput"),this.typebox.addEventListener("input",()=>{for(let n of this.callbacks)n()})}onInput(e){this.callbacks.push(e)}}class v{constructor(e,o){let n=document.querySelector("#controls");const t=e.length;this.clone=n.cloneNode(!0),this.cloneContent=this.clone.content.querySelector(".controls");for(let s=0;s<t;++s)this.content=this.cloneContent.querySelector(".controlbox"),this.oldHTML=this.cloneContent.innerHTML,this.content.appendChild(e[s].element)}}class g{constructor(e,o){this.name="div",this.callbacks=[],this.element=document.createElement(this.name),this.element.innerHTML=`
            <label>
                <div class = ${e}>
                    ${o}
                </div>
            </label>
        `}}class y{constructor(){}newButton(e,o){const n=new b(e);return o.push(n),n}newImage(e,o){const n=new p(e);return o.push(n),n}newTypebox(e,o){const n=new f(e);return o.push(n),n}newContainer(e,o){const n=new v(e);return o.push(n),n}newCanvas(e,o){return new d(e,o)}newElement(e,o,n){const t=new g(e,o);return n.push(t),t}}const h=[],i=[],u=document.querySelector("#app");function w(c,e,o,n){let t=r.newCanvas(c,e);return t.canvas.style.backgroundColor=n,t.canvas.style.justifyContent="auto",t.ctx.strokeStyle=o,t.onMouseDown(s=>{t.ctx.beginPath(),t.ctx.moveTo(s.offsetX,s.offsetY)}),t.onMouseMove(s=>{s.buttons===1&&(t.ctx.lineTo(s.offsetX,s.offsetY),t.ctx.stroke())}),t.onMouseUp(s=>{t.ctx.stroke()}),t}let r=new y;r.newButton("name",h).onClick(()=>{for(let e=0;e<i.length;++e)u.removeChild(i[e].cloneContent),i.pop();let c=w("1280","720","black","lightsteelblue");u.appendChild(c.element)});r.newButton("name2",h);r.newContainer(h,i);for(let c=0;c<i.length;++c)u.appendChild(i[c].cloneContent);
