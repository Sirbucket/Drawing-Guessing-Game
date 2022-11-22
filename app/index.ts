import {Utils} from './util'

const buttonList = []
const containerList = []
const app = document.querySelector("#app")

let utils = new Utils()
utils.newButton("name", buttonList).onClick(
    () => {
        for (let i = 0; i<containerList.length; ++i) {
            app.removeChild(containerList[i].cloneContent)
        }
        let canvas = utils.newCanvas("600", "600")
        app.appendChild(canvas.element)
        canvas.canvas.style.backgroundColor = "blue"
        
        
    }
)
utils.newButton("name2", buttonList)

utils.newContainer(buttonList, containerList)

for (let i = 0; i<containerList.length; ++i) {
    app.appendChild(containerList[i].cloneContent)
}