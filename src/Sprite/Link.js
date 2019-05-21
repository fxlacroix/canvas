import Sprite from '../Sprite'

class Link extends Sprite{

    constructor() {

        super()

        this.x               = 1
        this.y               = 1

        this.score           = 0

        this.scale           = 1
        this.width           = 90
        this.height          = 90
        this.cycleLoop       = [0, 1, 2, 3, 4]

        this.facingLeft      = 0
        this.facingRight     = 1
        this.facingUp        = 2
        this.facingDown      = 3

        this.frameLimit      = 12
        this.frameCount      = 0
        this.loopIndex       = 0
        this.movementSpeed   = 4
        this.hasMoved        = false
        this.src             = 'https://www.info-d-74.com/wp-content/uploads/2015/02/sprite.png'
        this.img.src         = this.src

        this.direction       = this.facingDown
        this.defaultDirection= this.facingDown

        // how to extract game control
        this.keyLeft         = 'ArrowLeft'
        this.keyRight        = 'ArrowRight'
        this.keyUp           = 'ArrowUp'
        this.keyDown         = 'ArrowDown'

    }

    // joke
    consume(item){
        this.score++
    }
}

module.exports = Link