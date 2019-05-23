import Multi from "./Structure/Multi";
import Canvas from "./Generic/Canvas";
import Mouse from "./Generic/Mouse";
import Path from "./Generic/EasyPathFinding"

/**
 * default sprite
 */
class Sprite extends Canvas {

    constructor() {

        super()
        this.img = new Image()

        //right, down, left, up
        this.scenario = [
            'r', 'r', 'r', 'r', 'r'
        ]
        this.path = []
        this.stillMoving = []
    }

    listen(keys, grid, mouse) {

        //this.listenScenario(grid, keys, mouse)
        this.listenKeys(grid, keys)
        this.listenMouse(grid, mouse)
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
        if (keys[this.keyUp]) {
            this.update(grid,0, -this.movementSpeed, this.facingUp)
        }

        // DOWN
        if (keys[this.keyDown]) {
            this.update(grid,0, this.movementSpeed, this.facingDown)
        }

        // LEFT
        if (keys[this.keyLeft]) {
            this.update(grid, -this.movementSpeed, 0, this.facingLeft)
        }

        // KEYRIGHT
        if (keys[this.keyRight]) {
            this.update(grid, this.movementSpeed, 0, this.facingRight)
        }
    }

    listenMouse(grid, mouse){

        if(mouse.down){

            this.isStillMoving = true
            if(mouse.x  < grid.width && mouse.y < grid.height){

                let cell1 = grid.detectGridCell(this)
                let cell2 = grid.detectGridCell(mouse)
                this.path = Path.find(grid.matrix, cell1, cell2)
            }
        }
    }

    update(grid, deltaX, deltaY, direction) {

        if (this.x + deltaX >= 0 && this.x + deltaX <= grid.width - this.width) {
            this.x += deltaX
        }

        if (this.y + deltaY >= 0 && this.y + deltaY <= grid.height - this.width) {
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

    draw(grid) {

        this.drawFrame(grid, this.cycleLoop[this.loopIndex], this.direction, this.x, this.y)
    }

    drawFrame(grid, frameX, frameY, canvasX, canvasY) {

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