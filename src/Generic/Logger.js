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

        this.c.fillText("Canvas position: " + sprite.x + "/" + sprite.y, 1000, 75)
        this.c.fillText("Grid Position: " + cell.x + "/" + cell.y, 1000, 150)
        // this.c.fillText("Eatings: " + sprite.score, 1000, 225)
    }
}

module.exports = Logger

