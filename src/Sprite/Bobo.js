import Sprite from '../Sprite'
import src from '../Image/Bobo.png'

class Bobo extends Sprite{

    constructor() {

        super()

        this.x               = 1
        this.y               = 1

        this.score           = 0

        this.scale           = 0.8
        this.width           = 118
        this.height          = 270
        this.cycleLoop       = [0, 1, 2, 3, 4]

        this.facingLeft      = 2
        this.facingRight     = 0
        this.facingUp        = 1
        this.facingDown      = 3

        this.frameLimit      = 20
        this.frameCount      = 0
        this.loopIndex       = 0
        this.movementSpeed   = 1
        this.hasMoved        = false
        this.src             = src //'https://www.info-d-74.com/wp-content/uploads/2015/02/sprite.png'
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
        this.movementSpeed++
    }
}

module.exports = Bobo