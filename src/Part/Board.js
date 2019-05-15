import Multi from "./Structure/Multi";
import BaseCanvas from './Component/BaseCanvas'
import Mouse from './Component/Mouse'
import Perso from './Perso'
import Luigi from './Component/Sprite/Luigi'
import Link from './Component/Sprite/Link'

/**
 * Board Manager
 */
class Board extends Multi.inherit(BaseCanvas, Mouse) {

    constructor(){
        super()
        this.perso = new Perso(new Luigi()).init()
    }
}


module.exports = Board