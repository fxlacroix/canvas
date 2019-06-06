import Logger from "./Logger"

/**
 * Board Manager
 */
class Board{

    constructor(grid, sprite){

        this.keyPresses  = []
        this.grid        = grid
        this.logger      = new Logger()
    }

}

module.exports = Board