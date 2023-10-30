class SVG {
    constructor(text,text_color,shape) {
        this.text = text;
        this.text_color = text_color;
        this.shape = shape
    }
    rendSVG() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.shape}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text}</text>
        </svg>
        `
    }
}

module.exports = SVG;
