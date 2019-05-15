class Luigi {

    constructor() {

        this.sprite                 = {}
        this.sprite.scale           = 1
        this.sprite.width           = 90
        this.sprite.height          = 90
        this.sprite.cycleLoop       = [0, 1, 0, 2]

        this.sprite.facingDown      = 3
        this.sprite.facingUp        = 2
        this.sprite.facingLeft      = 0
        this.sprite.facingRight     = 1

        this.sprite.frameLimit      = 12
        this.sprite.frameCount      = 0
        this.sprite.loopIndex       = 0
        this.sprite.movementSpeed   = 2
        this.sprite.hasMoved        = false
        this.sprite.direction       = this.sprite.facingDown
        this.sprite.scaledWidth     = this.sprite.scale * this.sprite.width
        this.sprite.scaledHeight    = this.sprite.scale * this.sprite.height
        this.sprite.src             = 'https://www.info-d-74.com/wp-content/uploads/2015/02/sprite.png'
    }
}

module.exports = Luigi