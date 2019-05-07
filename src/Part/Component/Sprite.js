class Sprite {

    constructor() {

        this.sprite                 = {}
        this.sprite.scale           = 2
        this.sprite.width           = 16
        this.sprite.height          = 18
        this.sprite.cycleLoop       = [0, 1, 0, 2]
        this.sprite.facingDown      = 0
        this.sprite.facingUp        = 1
        this.sprite.facingLeft      = 2;
        this.sprite.facingRight     = 3;
        this.sprite.frameLimit      = 12;
        this.sprite.movementSpeed   = 1;


    }

    scaledWidth() {
        return this.scale * this.width
    }

    scaledHeight() {
        return this.scale * this.height
    }

}

module.exports = Sprite