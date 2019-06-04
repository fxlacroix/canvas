import Multi from "./Structure/Multi";
import Canvas from "./Generic/Canvas"
import Mouse from "./Generic/Mouse"
import MouseListener from "./Listener/MouseListener"
import Utils from "./Helper/Utils"

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

        this.animate()
    }


    listen(sprite) {
        this.sprite = sprite
        if(this.listenMouse(this, this.mouse)){
            this.mouse.down = false
            this.pathReal = this.calculatePathReal()
            this.moveSprite()
            return true
        }
        return false
    }

    animate() {

        if(! this.listen(this.sprite, this.keyPresses, this.mouse)) {
            this.c.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.draw()
            this.sprite.drawReal(this)
            this.animationId = window.requestAnimationFrame(this.animate.bind(this))
        }
    }


    moveSprite() {

        if(this.pathReal.length) {

            let cell = this.pathReal.shift()
            this.sprite.x = cell.x
            this.sprite.y = cell.y

            this.c.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.draw(this)
            this.sprite.drawReal(this)

            window.requestAnimationFrame(this.moveSprite.bind(this))
        } else {
            this.animate()
        }
    }


    calculatePathReal() {

        let stops       = []
        let duplicates  = []
        let xFrom = this.sprite.x
        let yFrom = this.sprite.y

        if(this.path.length) {

            this.path.forEach(function (direction) {

                for (var i = 0; i + this.sprite.speed < this.scale; i = i + this.sprite.speed) {

                    if (xFrom < direction.x * this.scale) {
                        xFrom += i
                    }
                    if (yFrom < direction.y * this.scale) {
                        yFrom += i
                    }
                    let cell = {x: xFrom, y: yFrom}

                    if(duplicates.indexOf(cell.x + "-" + cell.y) == -1){
                        duplicates.push(cell.x + "-" + cell.y)
                        stops.push(cell)
                    }
                }

            }.bind(this))

            delete this.path

            return stops
        }

        return []
    }

    compare(item1, item2) {

        // Get the object type
        let itemType = Object.prototype.toString.call(item1);

        // If an object or array, compare recursively
        if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
            if (!Utils.isEqual(item1, item2)) return false;
        }
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