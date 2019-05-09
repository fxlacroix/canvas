import Multi from './Structure/Multi'
import BaseCanvas from './Component/BaseCanvas'
import Mouse from './Component/Mouse'
import Luigi from './Component/Sprite/Luigi'

class Perso extends Multi.inherit(BaseCanvas, Mouse, Luigi) {

    constructor() {
        super()

        this.x                  = 0
        this.y                  = 0
        this.loopIndex          = 0
        this.frameCount         = 0
        this.direction          = this.sprite.facingDown
        this.img                = new Image()
        this.keyPresses         = []
    }

    init() {
        this.img.src = this.sprite.src
        this.animate();
        return this
    }

    update(deltaX, deltaY, direction) {

        if (this.x + deltaX > 0 && this.x + this.sprite.scaledWidth + deltaX < this.canvas.width) {
            this.x += deltaX;
        }
        if (this.y + deltaY > 0 && this.y + this.sprite.scaledHeight + deltaY < this.canvas.height) {
            this.y += deltaY;
        }

        this.direction = direction;
    }

    animate() {

        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height)

        let hasMoved;

        if (this.keyPresses.ArrowUp) {
            this.update(0, -this.sprite.movementSpeed, this.sprite.facingUp)
            hasMoved = true
        } else if (this.keyPresses.ArrowDown) {
            this.update(0, this.sprite.movementSpeed, this.sprite.facingDown)
            hasMoved = true
        }

        if (this.keyPresses.ArrowLeft) {
            this.update(-this.sprite.movementSpeed, 0, this.sprite.facingLeft)
            hasMoved = true
        } else if (this.keyPresses.ArrowRight) {
            this.update(this.sprite.movementSpeed, 0, this.sprite.facingRight)
            hasMoved = true
        }

        if (hasMoved) {
            this.sprite.frameCount++
            if (this.sprite.frameCount >= this.sprite.frameLimit) {
                this.sprite.frameCount = 0
                this.sprite.loopIndex++
                if (this.sprite.loopIndex >= this.sprite.cycleLoop.length) {
                    this.sprite.loopIndex = 0
                }
            }
        }

        if (!hasMoved) {
            this.loopIndex = 0
        } else {
            hasMoved = false
        }

        this.drawFrame(this.sprite.cycleLoop[this.sprite.loopIndex], this.direction, this.x, this.y)

        window.requestAnimationFrame(this.animate.bind(this))
    }


    drawFrame(frameX, frameY, canvasX, canvasY) {

        this.c.drawImage( this.img,
            frameX * this.sprite.width, frameY * this.sprite.height, this.sprite.width, this.sprite.height,
            canvasX, canvasY, this.sprite.scaledWidth, this.sprite.scaledHeight)
    }
}

module.exports = Perso