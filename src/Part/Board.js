// JS Libs
import BaseCanvas from './Component/BaseCanvas'
import BallFactory from './Ball'

/**
 * Board Manager
 */
class Board extends BaseCanvas {

    constructor(nCount){
        super()
        this.ballManager = new BallFactory.BallManager(nCount);
    }

    init() {

        this.animate();
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this))
        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height)

        for(var i=0; i < this.ballManager.heap.length; i++) {
            this.ballManager.heap[i].update();
        }
    }
}

module.exports = Board;