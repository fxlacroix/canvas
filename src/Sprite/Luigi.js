import Multi    from "../Generic/Multi";
import Sprite   from "../Sprite"
import src      from "../Public/Image/luigi.png"

class Luigi extends Sprite {

    constructor(x, y) {

        super(x, y)

        this.img.src        = src //'https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png'
        this.cycleLoop      = [0, 1, 0, 2]
        this.scale          = 2
        this.width          = 16
        this.height         = 18
        this.facingDown     = 0
        this.facingUp       = 1
        this.facingLeft     = 2
        this.facingRight    = 3

        this.defaultDirection = this.facingDown
        this.direction        = this.defaultDirection

        this.speed = 1
        this.life  = 10

    }
}

module.exports = Luigi