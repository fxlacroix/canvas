import Canvas from "./Canvas"

/**
 * Logger display informaiton
 */
class Logger extends Canvas {

    constructor(){
        super()
    }

    show(grid, sprite) {

        let cell = grid.detectGridCell(sprite)
        let messages = [
            ["Canvas position: " + sprite.x + "/" + sprite.y],
            ["Grid Position: " + cell.x + "/" + cell.y]
        ]

        var scaleY = 50;
        messages.forEach(function(msg){
            this.c.fillText(msg, 0, grid.height + scaleY)
            scaleY += scaleY
        }.bind(this))
    }
}

module.exports = Logger

