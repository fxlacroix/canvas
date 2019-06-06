// JS Libs
import Multi from '../Generic/Multi'
import Canvas from '../Generic/Canvas'
import Gravity from '../Generic/Gravity'

// JS Libs
import utils from '../Generic/Utils'

class BallManager extends Canvas{

    constructor(nCount) {

        super()

        // colors
        this.colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']
        this.heap = []
        for(let i = 0; i < nCount; i++) {

            // ball props
            let x       = utils.randomIntFromRange(0, this.canvas.width)
            let y       = utils.randomIntFromRange(0, this.canvas.height)
            let dx      = utils.randomIntFromRange(-2, 2)
            let dy      = utils.randomIntFromRange(-2, 2)
            let size    = utils.randomIntFromRange(0, 30)
            let ball = new Ball(x, y, dx, dy, size, utils.randomColor(this.colors))

            this.heap.push(ball)
        }
    }
}

class Ball extends Multi.inherit(Canvas, Gravity){

    constructor(x, y, dx, dy, radius, color) {

        super()
        // ball props
        this.x      = x
        this.y      = y
        this.dx     = dx
        this.dy     = dy
        this.radius = radius
        this.color  = color
    }

    draw() {
        this.c.beginPath()
        this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        this.c.fillStyle = this.color
        this.c.fill()
        this.c.closePath()
    }

    update() {

        if(this.y + this.radius > this.canvas.height)
        {
            this.dy = -this.dy * this.frictionY
        } else {
            this.dy += this.gravity
        }

        if(this.x + this.radius > this.canvas.width || this.x - this.radius <= 0)
        {
            this.dx = - this.dx  * this.frictionX
        }

        this.x += this.dx
        this.y += this.dy
        this.draw()
    }
}

module.exports = {BallManager}