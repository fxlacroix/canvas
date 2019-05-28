import Multi from "./Structure/Multi";
import Canvas from "./Generic/Canvas"
import Mouse from "./Generic/Mouse"
import MouseListener from "./Listener/MouseListener"
import Compare from "./Structure/Object/Compare"

/**
 * Grid component
 */
class Grid extends Multi.inherit(Canvas, MouseListener, Mouse){

    constructor(x, y, scale, sprite){

        super()

        this.sprite        = sprite
        this.x              = x
        this.y              = y
        this.width          = x * scale
        this.height         = y * scale
        this.scale          = scale
        this.matrix         = []

        for(let i=1; i < x; i ++){
            this.matrix[i] = []
            for(let j=1;j < y; j++){
                this.matrix[i][j] = 0;
            }
        }

        this.animationId = window.requestAnimationFrame(this.animate.bind(this))
    }


    listen(sprite) {
        this.sprite = sprite
        if(this.listenMouse(this, this.mouse)){

            cancelAnimationFrame(this.animationId)
            this.pathReal = this.calculatePathReal()
            this.spriteAnimationId = window.requestAnimationFrame(this.moveSprite.bind(this))
        }
    }

    animate() {

        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.draw()
        this.listen(this.sprite, this.keyPresses, this.mouse)
        this.sprite.draw(this)
        this.animationId = window.requestAnimationFrame(this.animate.bind(this))
    }

    calculatePathReal() {

        let stops = []
        let xFrom = this.sprite.x
        let yFrom = this.sprite.y

        this.path.forEach(function(direction){

            for(let i=0; i < this.scale; i++) {

                if (xFrom < direction.x * this.scale) {
                    xFrom++
                }
                if (yFrom < direction.y * this.scale) {
                    yFrom++
                }
                let cell = {x: xFrom, y: yFrom}

                let found = false
                for(let x = 0; x < stops.length; i++) {
                    if (Object.compare(stops[x], cell)) {
                        found = true
                        break
                    }
                }

                if(! found) {
                    stops.push(cell)
                }
            }
        }.bind(this))

        return stops
    }

    moveSprite() {

        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height)

        if(this.pathReal.length) {

            let cell = this.pathReal.shift()
            this.sprite.x = cell.x
            this.sprite.y = cell.y

            this.draw(this)
            this.sprite.draw(this)

        } else {
            cancelAnimationFrame(this.spriteAnimationId)
            this.animationId = window.requestAnimationFrame(this.animate.bind(this))
        }

        this.sprite.draw(this)

    }

    colorCell(cell){

        this.c.fillRect(cell.x * this.scale, cell.y * this.scale, this.scale, this.scale);
        this.c.stroke();
    }

    detectGridCell(item){

        let x = Math.trunc((item.x) / this.scale)
        let y = Math.trunc((item.y) / this.scale)

        return {x: x, y: y}
    }

    draw(){

        for (let x = 0; x <= this.width; x += this.scale) {
            this.c.moveTo(x, 0);
            this.c.lineTo(0 + x, 0 + this.height);
        }

        for (let y = 0; y <= this.height; y += this.scale) {
            this.c.moveTo(0, 0 + y);
            this.c.lineTo(0 + this.width, 0 + y);
        }

        this.c.stroke();
    }

}

module.exports = Grid