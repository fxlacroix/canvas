import Multi from "./Structure/Multi";
import BaseCanvas from './Component/BaseCanvas'
import Mouse from './Component/Mouse'

/**
 * Board Manager
 */
class Board extends Multi.inherit(BaseCanvas, Mouse) {

    constructor(nCount){
        super()
    }

    init() {
        this.animate();
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this))
        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}

module.exports = Board;