class Luigi {

    constructor() {

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
        this.movementSpeed   = 2
        this.hasMoved        = false
        this.direction       = this.facingDown
        this.scaledWidth     = this.scale * this.width
        this.scaledHeight    = this.scale * this.height
        this.src             = 'https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png'
    }
}

module.exports = Luigi