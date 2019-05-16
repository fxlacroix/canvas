import Multi from './Structure/Multi'
import Canvas from './Component/Canvas'
import Mouse from './Component/Mouse'
import Link from './Component/Sprite/Link'

class Perso extends Multi.inherit(Canvas, Mouse) {

    constructor(Sprite) {
        super()

        this.img         = new Image()
        this.sprite      = Sprite
        this.img.src    = this.sprite.src
    }

    update(deltaX, deltaY, direction) {

        if (this.sprite.x + deltaX > 0 && this.sprite.x + this.sprite.scaledWidth + deltaX < this.canvas.width) {
            this.sprite.x += deltaX
        }
        if (this.sprite.y + deltaY > 0 && this.sprite.y + this.sprite.scaledHeight + deltaY < this.canvas.height) {
            this.sprite.y += deltaY
        }

        this.sprite.direction = direction
    }

    drawFrame(frameX, frameY, canvasX, canvasY) {

        this.c.drawImage( this.img,
            frameX * this.sprite.width, frameY * this.sprite.height, this.sprite.width, this.sprite.height,
            canvasX, canvasY, this.sprite.scaledWidth, this.sprite.scaledHeight)
    }
}

module.exports = Perso