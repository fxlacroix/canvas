import Multi from "./Structure/Multi"
import BaseCanvas from './Component/BaseCanvas'
import Mouse from './Component/Mouse'
import BallFactory from './Ball'

/**
 * Board Manager
 */
class Board extends Multi.inherit(Mouse, BaseCanvas) {

    constructor(nCount){
        super()
        this.ballManager = new BallFactory.BallManager(nCount)
    }

    init() {

        this.animate()
        return this
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this))
        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height)

        for(let i=0; i < this.ballManager.heap.length; i++) {
            this.ballManager.heap[i].update()
        }
    }

}

module.exports = Board