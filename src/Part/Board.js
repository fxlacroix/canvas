import Multi from "./Structure/Multi";
import BaseCanvas from './Component/BaseCanvas'
import Mouse from './Component/Mouse'
import Perso from './Perso'

/**
 * Board Manager
 */
class Board extends Multi.inherit(BaseCanvas, Mouse) {

    constructor(){
        super()
    }

    init() {

        this.perso= new Perso()
        perso.init()

        return this
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this))
        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}


module.exports = Board