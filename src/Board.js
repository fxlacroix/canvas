import Multi  from "./Structure/Multi"
import Canvas from "./Generic/Canvas"
import Mouse  from "./Generic/Mouse"
import Pellet from "./Item/Pellet"
import Logger from "./Logger"

/**
 * Board Manager
 */
class Board extends Multi.inherit(Canvas, Mouse) {

    constructor(grid, sprite){

        super()

        this.keyPresses  = []
        this.grid        = grid
        this.logger      = new Logger()
    }

}

module.exports = Board