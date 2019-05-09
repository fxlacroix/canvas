class Luigi {

    constructor() {

        this.sprite                 = {}
        this.sprite.scale           = 2
        this.sprite.width           = 16
        this.sprite.height          = 18
        this.sprite.cycleLoop       = [0, 1, 0, 2]
        this.sprite.facingDown      = 0
        this.sprite.facingUp        = 1
        this.sprite.facingLeft      = 2
        this.sprite.facingRight     = 3
        this.sprite.frameLimit      = 12
        this.sprite.frameCount      = 0
        this.sprite.loopIndex       = 0
        this.sprite.movementSpeed   = 2
        this.sprite.scaledWidth     = this.sprite.scale * this.sprite.width
        this.sprite.scaledHeight    = this.sprite.scale * this.sprite.height
        this.sprite.src             = 'https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png'
    }
}

module.exports = Luigi