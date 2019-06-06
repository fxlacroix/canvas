import Multi from "./Structure/Multi";
import Canvas from "./Generic/Canvas"
import Mouse from "./Generic/Mouse"
import MouseListener from "./Listener/MouseListener"

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
        this.path           = null

        for(let i=0; i < x; i ++){
            this.matrix[i] = []
            for(let j=0;j < y; j++){
                this.matrix[i][j] = 0;
            }
        }

        this.animate()
    }

    detectGridCell(item){

        let x = Math.trunc((item.x) / this.scale)
        let y = Math.trunc((item.y) / this.scale)

        return {x: x, y: y}
    }


    listen() {

        if(this.listenMouse(this, this.mouse, function(path){
            grid.path     = path
            grid.pathReal = this.calculatePathReal(grid)
            grid.sprite.move(grid)

        })){
            return true
        }

        return false
    }

    animate() {

        if(! this.listen()) {

            this.c.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.draw()
            this.sprite.drawReal(this)
            window.requestAnimationFrame(this.animate.bind(this))
        }
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

    colorCell(cell){

        this.c.fillRect(cell.x * this.scale, cell.y * this.scale, this.scale, this.scale);
        this.c.stroke();
    }


}

module.exports = Grid