import Multi from "./Structure/Multi";
import Canvas from "./Generic/Canvas";
import Mouse from "./Generic/Mouse";

/**
 * default sprite
 */
class Sprite extends Multi.inherit(Canvas, Mouse) {

    constructor() {

        super()

        //must be defined
        this.x                  = 0
        this.y                  = 0
        this.scale              = 0
        this.width              = 0
        this.height             = 0
        this.hasMoved           = false
        this.frameCount         = 0
        this.loopIndex          = 0
        this.cycleLoop          = []
        this.frameLimit         = 0
        this.defaultDirection   = 0

        this.img                = new Image()
    }

    listen(keys, grid) {

        if (keys[this.keyUp]) {
            this.update(grid,0, -this.movementSpeed, this.facingUp)
        } else if (keys[this.keyDown]) {
            this.update(grid,0, this.movementSpeed, this.facingDown)
        }

        if (keys[this.keyLeft]) {
            this.update(grid, -this.movementSpeed, 0, this.facingLeft)
        } else if (keys[this.keyRight]) {
            this.update(grid, this.movementSpeed, 0, this.facingRight)
        }

        this.calibrateFrame()
    }

    //canvas is temporary
    update(grid, deltaX, deltaY, direction) {

        if (this.x + deltaX >= 0 && this.x + deltaX <= grid.width) {
            this.x += deltaX
        }

        if (this.y + deltaY >= 0 && this.y + deltaY <= grid.height) {
            this.y += deltaY
        }

        this.direction = direction
        this.hasMoved = true
    }

    detectCollision(item) {

        if(this.x < item.x && this.x + this.width  > item.x
            && this.y < item.y && this.y + this.height > item.y){
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