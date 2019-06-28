/**
 * Base canvas for convenient
 */
class Canvas{

    constructor() {

        // canvas
        this.canvas         = document.querySelector('canvas')

        // fixed canvas size for performance
        this.canvas.width   = 800
        this.canvas.height  = 600

        // context
        this.c              = this.canvas.getContext('2d')
        this.c.font         = "20px Arial"
    }
}

module.exports = Canvas