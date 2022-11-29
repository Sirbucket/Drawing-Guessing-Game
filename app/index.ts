import { Utils } from './util'

const buttonList = []
const containerList = []
const app = document.querySelector("#app")
let fm = false;

function makeNewDrawingCanvas(w : string, h : string, color : string, bgcolor : string) {
    let canvas = utils.newCanvas(w, h)
    canvas.canvas.style.backgroundColor = bgcolor
    canvas.canvas.style.justifyContent = "auto"
    canvas.ctx.strokeStyle = color

    canvas.onMouseDown((event) => {
        canvas.ctx.beginPath();
        canvas.ctx.moveTo(event.offsetX, event.offsetY);
    });
    canvas.onMouseMove((event) => {
        if (event.buttons === 1) {
            canvas.ctx.lineTo(event.offsetX, event.offsetY);
            canvas.ctx.stroke();
        }
    });
    canvas.onMouseUp((event) => {
        if (fm === true) {
            canvas.ctx.fill();
            return;
        }
        else {
            canvas.ctx.stroke();
        }
    });
    
    return canvas
}

let utils = new Utils()
utils.newButton("name", buttonList).onClick(
    () => {
        for (let i = 0; i < containerList.length; ++i) {
            app.removeChild(containerList[i].cloneContent)
            containerList.pop()
        }
        let canvas = makeNewDrawingCanvas("1280", "720", "black", "lightsteelblue")
        
        app.appendChild(canvas.element)
    }
)
utils.newButton("name2", buttonList)

utils.newContainer(buttonList, containerList)

for (let i = 0; i < containerList.length; ++i) {
    app.appendChild(containerList[i].cloneContent)
}