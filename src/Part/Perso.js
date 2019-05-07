import Multi from './Structure/Multi'
import BaseCanvas from './Component/BaseCanvas'
import Mouse from './Component/Mouse'
import Sprite from './Component/Sprite'

class Perso extends Multi.inherit(BaseCanvas, Mouse, Sprite) {

    constructor() {
        super()

        this.x                  = 0
        this.y                  = 0
        this.loopIndex          = 0
        this.frameCount         = 0;
        this.direction          = this.sprite.facingDown
        this.img                = new Image();
    }

    init() {
        img.src = 'https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png'
        img.onload = function() {
            window.requestAnimationFrame(this.animate().bind(this));
        }

        return this
    }

    update(deltaX, deltaY, direction) {

        if (this.x + deltaX > 0 && this.x + this.sprite.scaledWidth() + deltaX < this.canvas.width) {
            this.x += deltaX;
        }
        if (this.y + deltaY > 0 && this.y + this.sprite.scaledHeight() + deltaY < this.canvas.height) {
            this.y += deltaY;
        }

        this.direction = direction;
    }

    animate() {

        this.c.clearRect(0, 0, canvas.width, canvas.height);

        let hasMoved = false;

        if (keyPresses.a) {
            this.update(0, -this.sprite.movementSpeed, this.sprite.facingUp);
            hasMoved = true;
        } else if (keyPresses.s) {
            this.update(0, this.sprite.movementSpeed, this.sprite.facingDown);
            hasMoved = true;
        }

        if (keyPresses.a) {
            this.update(-this.sprite.movementSpeed, 0, this.sprite.facingLeft);
            hasMoved = true;
        } else if (keyPresses.d) {
            this.update(this.sprite.movementSpeed, 0, this.sprite.facingRight);
            hasMoved = true;
        }

        if (hasMoved) {
            this.frameCount++;
            if (this.frameCount >= this.sprite.frameLimit) {
                this.frameCount = 0;
                this.loopIndex++;
                if (this.loopIndex >= this.sprite.cycleLoop.length) {
                    this.loopIndex = 0;
                }
            }
        }

        if (!hasMoved) {
            this.loopIndex = 0;
        }

        this.drawFrame(this.sprite.cycleLoop[this.loopIndex], this.direction, this.x, this.y);

        window.requestAnimationFrame(this.animate().bind(this));
    }


    drawFrame(frameX, frameY, canvasX, canvasY) {

        ctx.drawImage( this.img,
            frameX * this.sprite.width, frameY * this.sprite.height, this.sprite.width, this.sprite.height,
            canvasX, canvasY, this.sprite.scaledWidth(), this.sprite.scaledHeight());
    }
}

