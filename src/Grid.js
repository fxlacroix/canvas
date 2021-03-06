import Multi from "./Generic/Multi";
import Canvas from "./Generic/Canvas"
import Mouse from "./Generic/Mouse"
import Utils from "./Generic/Utils"

/**
 * Grid component
 */
class Grid extends Multi.inherit(Canvas, Mouse){

    constructor(xGrid, yGrid, scale, sprite, computer){

        super()

        this.sprite         = sprite
        this.computer       = computer
        this.scale          = scale

        this.width          = xGrid * scale
        this.height         = yGrid * scale

        this.matrix         = []
        this.blocks         = []

        for(let i=0; i < xGrid; i ++){
            this.matrix[i] = []
            for(let j=0;j < yGrid; j++){

                // ugly ;)
                if(i!=0 && j!=0 && i!=xGrid-1 && j!=yGrid-1  && ! Utils.randomIntFromRange(0, 2)){

                    this.matrix[i][j] = 1
                    this.blocks.push({x:i, y:j})
                } else {
                    this.matrix[i][j] = 0
                }
            }
        }
        this.init()
    }

    init(){

        // draw grid
        this.draw()

        // draw obstacles
        this.blocks.forEach(function(cell){
            this.colorCell(cell)
        }.bind(this))

        // draw player
        this.sprite.draw(this)

        // draw computer
        this.computer.draw(this)

        // loop
        this.listen()
    }

    listen(){

        this.listenMouse()

        // @todo: draw only the concerned part

        this.sprite.delete(this.scale)
        this.computer.delete(this.scale)
        this.draw()

        this.sprite.move(this)
        this.sprite.draw(this)

        this.computer.move(this)
        this.computer.draw(this)

        if(this.sprite.detectCollision(this.computer)){
            alert("you loose :( !!")
            return
        }

        requestAnimationFrame(this.listen.bind(this))
    }

    listenMouse(){

        if(this.mouse.down){

            if(this.mouse.x  < this.width && this.mouse.y < this.height){
                // put that is a callback function
                let cellMouse    = this.detectGridCell(this.mouse)
                let cellUser     = this.detectGridCell(this.sprite)
                let cellComputer = this.detectGridCell(this.computer)

                this.sprite.path     = Utils.findPath(this.matrix, Object.values(cellUser), Object.values(cellMouse))
                this.sprite.pathReal = this.calculatePathReal(this.sprite)

                //if(Utils.randomIntFromRange(0, 2)) {
                    this.computer.path = Utils.findPath(this.matrix, Object.values(cellComputer), Object.values(cellMouse))
                    this.computer.pathReal = this.calculatePathReal(this.computer)
                //}
            }
        }
    }

    calculatePathReal(sprite) {

        let stops       = []
        let duplicates  = []
        let xFrom       = sprite.x
        let yFrom       = sprite.y
        let direction

        if(sprite.path.length) {

            for(let key in sprite.path) {

                for (let i = 0; i + sprite.speed < this.scale ; i += sprite.speed) {

                    if (xFrom < sprite.path[key][0] * this.scale) {
                        xFrom += i
                        direction = sprite.facingRight
                    }
                    if (xFrom > sprite.path[key][0] * this.scale) {
                        xFrom -= i
                        direction = sprite.facingLeft
                    }
                    if (yFrom < sprite.path[key][1] * this.scale) {
                        yFrom += i
                        direction = sprite.facingDown
                    }
                    if (yFrom > sprite.path[key][1] * this.scale) {
                        yFrom -= i
                        direction = sprite.facingUp
                    }

                    let cell = {x: xFrom, y: yFrom, direction: direction}

                    if(duplicates.indexOf(cell.x + "-" + cell.y) == -1){

                        duplicates.push(cell.x + "-" + cell.y)
                        stops.push(cell)
                    }
                }
            }

            stops[stops.length - 1].direction = sprite.defaultDirection

            // @todo: calibrate last movement to middle cell
            return stops
        }
        return []
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

        this.c.stroke()
    }

    detectGridCell(item){

        let x = Math.floor((item.x + item.width)  / this.scale)
        let y = Math.floor((item.y + item.height) / this.scale)

        return {x: x, y: y}
    }

    colorCell(cell){

        this.c.fillRect(cell.x * this.scale, cell.y * this.scale, this.scale, this.scale);
        this.c.stroke();
    }
}

module.exports = Grid