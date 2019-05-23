/**
 * Mouse component
 */
class Mouse {

    constructor(){

        this.mouse = {}
        this.mouse.x = innerWidth  / 2
        this.mouse.y = innerHeight / 2
        this.mouse.down = false
    }
}

module.exports = Mouse