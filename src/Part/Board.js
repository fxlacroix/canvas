/**
 * Board Manager
 */
class Board {

    constructor(){

        // canvas
        this.canvas = document.querySelector('canvas')
        this.canvas.width = innerWidth
        this.canvas.height = innerHeight

        // context
        this.c = this.canvas.getContext('2d')

        // mouse
        this.mouse = {
            x: innerWidth / 2,
            y: innerHeight / 2
        }

        this.colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']
    }

    animate() {

        requestAnimationFrame(this.animate.bind(this))
        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.c.fillText('HTML CANVAS BOILERPLATE '+ this.mouse.x + '-'+ this.mouse.y, this.mouse.x, this.mouse.y)
        // objects.forEach(object => {
        //  object.update()
        // })
    }
}

module.exports = Board;