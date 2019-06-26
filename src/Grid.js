import Multi from "./Generic/Multi";
import Canvas from "./Generic/Canvas"
import Mouse from "./Generic/Mouse"
import Utils from "./Generic/Utils"
import MouseListener from "./Listener/MouseListener"

/**
 * Grid component
 */
class Grid extends Multi.inherit(Canvas, MouseListener, Mouse){

    constructor(x, y, scale, sprite, computer){

        super()

        this.sprite         = sprite
        this.computer       = computer
        this.x              = x
        this.y              = y
        this.width          = x * scale
        this.height         = y * scale
        this.scale          = scale
        this.matrix         = []
        this.blocks         = []
        this.path           = null

        for(let i=0; i < x; i ++){
            this.matrix[i] = []
            for(let j=0;j < y; j++){

                if(i!=0 && j!=0 && i!=14 && j!=9  && ! Utils.randomIntFromRange(0, 2)){
                    this.matrix[i][j] = 1
                    this.blocks.push({x:i, y:j})
                } else {
                    this.matrix[i][j] = 0
                }
            }
        }
        this.init()
    }

    detectGridCell(item){

        let x = Math.floor((item.x + item.width)  / this.scale)
        let y = Math.floor((item.y + item.height) / this.scale)

        return {x: x, y: y}
    }


    listen() {

        this.listenMouse(this, this.mouse)

        if(! this.computer.isMoving) {
            this.computer.path      = Utils.findPath(this.matrix, [this.computer.x, this.computer.y], [this.sprite.x, this.sprite.y])
            this.computer.pathReal  = this.calculatePathReal(this)
            this.computer.isMoving  = true
        }


        this.sprite.move(this)
        this.computer.move(this)

        requestAnimationFrame(this.listen.bind(this))
    }


    init(){

        for (let x = 0; x <= this.width; x += this.scale) {
            this.c.moveTo(x, 0);
            this.c.lineTo(0 + x, 0 + this.height);
        }

        for (let y = 0; y <= this.height; y += this.scale) {
            this.c.moveTo(0, 0 + y);
            this.c.lineTo(0 + this.width, 0 + y);
        }

        this.c.stroke()

        this.blocks.forEach(function(cell){
            this.colorCell(cell)
        }.bind(this))

        this.sprite.draw(this)
        this.computer.draw(this)
        this.listen()
    }

    draw(grid) {

        for (let x = 0; x <= grid.width; x += grid.scale) {
            grid.c.moveTo(x, 0);
            grid.c.lineTo(0 + x, 0 + grid.height);
        }

        for (let y = 0; y <= grid.height; y += grid.scale) {
            grid.c.moveTo(0, 0 + y);
            grid.c.lineTo(0 + grid.width, 0 + y);
        }

        grid.c.stroke()
    }

    colorCell(cell){

        this.c.fillRect(cell.x * this.scale, cell.y * this.scale, this.scale, this.scale);
        this.c.stroke();
    }


}

module.exports = Grid