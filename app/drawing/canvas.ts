export class Canvas {
    w : number
    h : number
    element : HTMLElement
    canvas : HTMLCanvasElement
    ctx
    mousemovecbs = []
    mousedowncbs = []
    mouseupcbs = []
    
    constructor(w, h) {
        this.w = w; 
        this.h = h;
        this.element = document.createElement(this.name);
        this.element.innerHTML = `
        <label>
            <canvas id = "canvas" width = ${this.w} height = ${this.h}></canvas>
        </label>
        `;
        this.canvas = this.element.querySelector("#canvas")
        const canvas = this.canvas
        this.ctx = canvas.getContext("2d")
        canvas.addEventListener("mousemove", () => {
            const len = this.mousemovecbs.length;
            for (let i = 0; i<len; ++i) {
                const c = this.mousemovecbs[i];
                c();
            }
        });
        canvas.addEventListener("mousedown", () => {
            const len = this.mousedowncbs.length;
            for (let i = 0; i<len; ++i) {
                const c = this.mousedowncbs[i];
                c();
            }
        });
        canvas.addEventListener("mouseup", () => {
            const len = this.mouseupcbs.length;
            for (let i = 0; i<len; ++i) {
                const c = this.mouseupcbs.length;
                c();
            }
        });
    }

    onMouseMove(cb) {
        this.mousemovecbs.push(cb)
    }
    onMouseDown(cb) {
        this.mousedowncbs.push(cb)
    }
    onMouseUp(cb) {
        this.mouseupcbs.push(cb)
    }
}