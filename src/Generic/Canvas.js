/**
 * Base canvas for convenient
 */
class Canvas{

    constructor() {

        // canvas & context defition
        this.canvas         = document.querySelector('canvas')
        this.canvas.width   = innerWidth
        this.canvas.height  = innerHeight
        this.c              = this.canvas.getContext('2d')
    }
}

module.exports = Canvas