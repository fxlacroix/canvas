import Utils from './../../Utils'
import BaseCanvas from "../BaseCanvas";

class Boots extends BaseCanvas{

    constructor() {

        super()

        this.boots            = {}
        this.boots.x          = Utils.randomIntFromRange(0, innerWidth)
        this.boots.y          = Utils.randomIntFromRange(0, innerHeight)
        this.boots.image      = new Image()
        //todo: temp very bad
        this.boots.image.src  = 'http://10.80.72.147/image/boots.jpg'
    }
}

module.exports = Boots