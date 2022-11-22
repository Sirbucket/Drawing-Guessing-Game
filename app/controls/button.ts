
export class Button {
    name: string = 'div';
    element: HTMLElement;
    button: HTMLButtonElement;
    callbacks = [];
    constructor(html: string) {
        this.element = document.createElement(this.name);
        this.element.innerHTML = `
            <label>
                <button class = "button" type = "button">
                    ${html}
                </button>
            </label>
        `
        this.button = this.element.querySelector(".button")
        const button = this.button
        button.addEventListener("click", () => {
            for (let c of this.callbacks) {
                c()
            }
        });
    }

    onClick(cb: any) {
        this.callbacks.push(cb)
    }
}