/**
 * Mouse component
 */
class Mouse {

    constructor(){

        this.mouse = {}
        this.mouse.x = innerWidth  / 2
        this.mouse.y = innerHeight / 2
        this.mouse.down = false

        // needed as prototyping object
        this.mouse.width = 0
        this.mouse.height = 0
    }
}

module.exports = Mouse