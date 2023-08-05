class Square {
    constructor(shapeColor, textColor, text) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="100" y="50" width="150" height="150" fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    }
}

module.exports = Square;