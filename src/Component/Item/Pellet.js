// JS Libs
import Multi from '../Structure/Multi'
import Canvas from '../Generic/Canvas'
import utils from '../Helper/Utils'

class Pellet extends Canvas{

    constructor(x, y, dx, dy, radius, color) {

        super()

        this.init()
    }

    init() {
        this.x = utils.randomIntFromRange(0, innerWidth)
        this.y = utils.randomIntFromRange(0, innerHeight)
        this.radius = 5
    }

    update() {
        this.init()
    }

    draw() {
        this.c.beginPath()
        this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        this.c.fill()
        this.c.closePath()
    }

}

module.exports = Pellet