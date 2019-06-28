import Multi    from "../Generic/Multi";
import Sprite   from "../Sprite"
import src      from "../Public/Image/charles.png"

class Charles extends Sprite {

    constructor(x, y) {

        super(x, y)

        this.img.src        = src
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

        this.isMoving = 0

        // not dynamic
        this.xGrid      = 15
        this.yGrid      = 11
        this.x          = 750
        this.y          = 550
        this.last       = {x: this.x, y: this.y}
    }
}

module.exports = Charles