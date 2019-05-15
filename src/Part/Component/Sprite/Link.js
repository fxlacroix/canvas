class Link {

    constructor() {

        this.scale           = 1
        this.width           = 90
        this.height          = 90
        this.cycleLoop       = [0, 1, 2, 3, 4]

        this.facingDown      = 3
        this.facingUp        = 2
        this.facingLeft      = 0
        this.facingRight     = 1

        this.frameLimit      = 12
        this.frameCount      = 0
        this.loopIndex       = 0
        this.movementSpeed   = 3
        this.hasMoved        = false
        this.scaledWidth     = this.scale * this.width
        this.scaledHeight    = this.scale * this.height
        this.src             = 'https://www.info-d-74.com/wp-content/uploads/2015/02/sprite.png'

        this.direction       = this.facingDown
    }
}

module.exports = Link