import Multi from "./Structure/Multi";
import BaseCanvas from './Component/BaseCanvas'
import Mouse from './Component/Mouse'
import Perso from './Perso'
import Boots from './Component/Goodie/Boots'

/**
 * Board Manager
 */
class Board extends Multi.inherit(BaseCanvas, Mouse) {

    constructor(){
        super()
        this.perso = new Perso().init()
//        this.goodie = new Boots().init()

    }
}


module.exports = Board