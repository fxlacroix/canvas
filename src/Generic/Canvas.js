/**
 * Base canvas for convenient
 */
class Canvas{

    constructor() {

        // canvas
        this.canvas         = document.querySelector('canvas')
        this.canvas.width   = innerWidth
        this.canvas.height  = innerHeight

        // context
        this.c              = this.canvas.getContext('2d')
        this.c.font         = "30px Arial"
    }
}

module.exports = Canvas