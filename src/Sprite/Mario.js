import Sprite from '../Sprite'

class Mario extends Sprite {

    constructor() {

        super()

        this.x               = 200
        this.y               = 100

        this.scale           = 1
        this.width           = 50
        this.height          = 69
        this.cycleLoop       = [0, 1, 2, 3]

        this.facingDown      = 0
        this.facingUp        = 3
        this.facingLeft      = 1
        this.facingRight     = 2

        this.frameLimit      = 16
        this.frameCount      = 0
        this.loopIndex       = 0
        this.movementSpeed   = 4
        this.hasMoved        = false

        this.defaultDirection= this.facingDown

        this.scaledWidth     = this.scale * this.width
        this.scaledHeight    = this.scale * this.height
        this.src             = 'http://www.demonixis.net/wp-content/uploads/2012/04/spritesheet-mario.png'
        this.img.src            = this.src

        // how to extract game control
        this.keyLeft         = 'ArrowLeft'
        this.keyRight        = 'ArrowRight'
        this.keyUp           = 'ArrowUp'
        this.keyDown         = 'ArrowDown'

    }
}

module.exports = Mario