import Multi from "./Structure/Multi";
import Canvas from "./Generic/Canvas";
import Mouse from "./Generic/Mouse";

/**
 * default sprite
 */
class Sprite extends Canvas {

    constructor() {

        super()
        this.img                = new Image()

        //right, down, left, up
        this.scenario = [
            'r'
        ]

        this.stillMoving = []
    }

    listen(keys, grid, mouse) {

        //this.listenScenario(grid, keys, mouse)
        this.listenKeys(grid, keys )
        //this.listenMouse(grid, mouse)

        this.calibrateFrame()
    }

    listenScenario(grid, keys, mouse){

        if(this.scenario.length){

            let current = this.scenario.shift()

            delete keys[this.lastMvmt]

            switch(current) {
                // right
                case 'r':
                    // keys[this.keyRight] = true
                    // this.lastMvmt = this.keyRight
                    break
                // left
                case 'l':
                    // keys[this.keyLeft] = true
                    // this.lastMvmt = this.keyLeft
                    break
                // up
                case 'u':
                    // keys[this.keyUp] = true
                    // this.lastMvmt = this.keyUp
                    break
                // down
                case 'd':
                    // keys[this.keyDown] = true
                    // this.lastMvmt = this.keyDown
                    break
            }
        } else {
            keys = []
            this.hasMoved = false
        }
    }

    listenKeys(grid, keys){

        // UP
        if (keys[this.keyUp] ||
            (this.stillMoving[this.keyUp] && this.stillMoving[this.keyUp].length)) {

            if(this.stillMoving[this.keyUp] && this.stillMoving[this.keyUp].length){
                let mvmt = this.stillMoving[this.keyUp].shift()
                if(! this.stillMoving[this.keyUp].length) {
                    keys[this.keyUp] = false;
                }
            } else {
                this.stillMoving[this.keyUp] = [1, 1, 1, 1, 1]
            }

            this.update(grid,0, -this.movementSpeed, this.facingUp)

        }

        // DOWN
        if (keys[this.keyDown] ||
            (this.stillMoving[this.keyDown] && this.stillMoving[this.keyDown].length)) {

            if(this.stillMoving[this.keyDown] && this.stillMoving[this.keyDown].length){
                let mvmt = this.stillMoving[this.keyDown].shift()
                if(! this.stillMoving[this.keyDown].length) {
                    keys[this.keyDown] = false;
                }
            } else {
                this.stillMoving[this.keyDown] = [1, 1, 1, 1, 1]
            }

            this.update(grid,0, this.movementSpeed, this.facingDown)
        }

        // LEFT
        if (keys[this.keyLeft] ||
            (this.stillMoving[this.keyLeft] && this.stillMoving[this.keyLeft].length)) {
            if(this.stillMoving[this.keyLeft]  && this.stillMoving[this.keyLeft].length){
                let mvmt = this.stillMoving[this.keyLeft].shift()
                if(! this.stillMoving[this.keyLeft].length) {
                    keys[this.keyLeft] = false;
                }
            } else {
                this.stillMoving[this.keyLeft] = [1, 1, 1, 1, 1]
            }

            this.update(grid, -this.movementSpeed, 0, this.facingLeft)

        }

        // KEYRIGHT
        if (keys[this.keyRight] ||
            (this.stillMoving[this.keyRight] && this.stillMoving[this.keyRight].keyRight)) {

            if(this.stillMoving[this.keyRight] && this.stillMoving[this.keyRight].keyRight){
                let mvmt = this.stillMoving[this.keyRight].shift()
                if(! this.stillMoving[this.keyRight].length) {
                    keys[this.keyRight] = false;
                }
            } else {
                this.stillMoving[this.keyRight] = [1, 1, 1, 1, 1]
            }

            this.update(grid, this.movementSpeed, 0, this.facingRight)
        }
    }

    listenMouse(grid, mouse){

        if(mouse.down){
            if(mouse.x < grid.width && mouse.y < grid.height){

                grid.hightlightSquare(mouse)

                let cell = grid.detectGridCell(mouse)
                this.updateToGrid(grid, {
                    x: 10,
                    y: 30
                })
            }
        }
    }

    //
    // updateToGrid(grid, cell){
    //
    //     this.x = cell.x * grid.scale
    //     this.y = cell.y * grid.scale
    //     this.hasMoved = true
    //
    // }

    update(grid, deltaX, deltaY, direction) {

        if (this.x + deltaX > 0 && this.x + deltaX < grid.width) {
            this.x += deltaX
        }

        if (this.y + deltaY > 0 && this.y + deltaY < grid.height) {
            this.y += deltaY
        }

        this.direction = direction
        this.hasMoved = true
    }

    detectCollision(item) {

        if(this.x <= item.x && this.x + this.width >= item.x
            && this.y <= item.y && this.y + this.height >= item.y){
            return true
        }
        return false
    }

    calibrateFrame() {

        if (this.hasMoved) {
            this.frameCount++
            if (this.frameCount >= this.frameLimit) {
                this.frameCount = 0
                this.loopIndex++
                if (this.loopIndex >= this.cycleLoop.length) {
                    this.loopIndex = 0
                }
            }
        }

        if (!this.hasMoved) {
            this.loopIndex = 0
            this.direction = this.defaultDirection
        } else {
            this.hasMoved = false
        }
    }

    draw() {

        this.drawFrame(this.cycleLoop[this.loopIndex], this.direction, this.x, this.y)
    }

    drawFrame(frameX, frameY, canvasX, canvasY) {

        this.c.drawImage(
            this.img,
            frameX * this.width,
            frameY * this.height,
            this.width,
            this.height,
            canvasX,
            canvasY,
            this.scaledWidth(),
            this.scaledHeight()
        )
    }

    scaledWidth() {
        return this.scale * this.width
    }

    scaledHeight() {
        return this.scale * this.height
    }
}

module.exports = Sprite