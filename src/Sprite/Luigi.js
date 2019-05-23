import Sprite from '../Sprite'

class Luigi extends Sprite {

    constructor() {

        super()

        this.x               = 0
        this.y               = 0

        this.scale           = 2
        this.width           = 16
        this.height          = 18
        this.cycleLoop       = [0, 1, 0, 2]
        this.facingDown      = 0
        this.facingUp        = 1
        this.facingLeft      = 2
        this.facingRight     = 3
        this.frameLimit      = 12
        this.frameCount      = 0
        this.loopIndex       = 0
        this.movementSpeed   = 5
        this.hasMoved        = false
        this.direction       = this.facingDown
        this.defaultDirection= this.facingDown
        this.src             = 'https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png'
        this.img.src            = this.src

        // how to extract game control
        this.keyLeft         = 'ArrowLeft'
        this.keyRight        = 'ArrowRight'
        this.keyUp           = 'ArrowUp'
        this.keyDown         = 'ArrowDown'

    }
}

module.exports = Luigi