import Multi from "../../Structure/Multi";
import Canvas from '../Generic/Canvas'
import Mouse from '../Generic/Mouse'

/**
 * Board Manager
 */
class Board extends Multi.inherit(Canvas, Mouse) {

    constructor(Persos){
        super()
        this.keyPresses = []
        this.persos     = Persos
    }

    animate() {

        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height)

        //for(let perso in this.perso){
        var board  = this
        this.persos.forEach(function(perso){

            let sprite = perso.sprite

            if (board['keyPresses'][sprite.keyUp]) {
                perso.update(0, -sprite.movementSpeed, sprite.facingUp)
                sprite.hasMoved = true
            } else if (board['keyPresses'][sprite.keyDown]) {
                perso.update(0, sprite.movementSpeed, sprite.facingDown)
                sprite.hasMoved = true
            }

            if (board['keyPresses'][sprite.keyLeft]) {
                perso.update(-sprite.movementSpeed, 0, sprite.facingLeft)
                sprite.hasMoved = true
            } else if (board['keyPresses'][sprite.keyRight]) {
                perso.update(sprite.movementSpeed, 0, sprite.facingRight)
                sprite.hasMoved = true
            }

            if (sprite.hasMoved) {
                sprite.frameCount++
                if (sprite.frameCount >= sprite.frameLimit) {
                    sprite.frameCount = 0
                    sprite.loopIndex++
                    if (sprite.loopIndex >= sprite.cycleLoop.length) {
                        sprite.loopIndex = 0
                    }
                }
            }

            if (!sprite.hasMoved) {
                sprite.loopIndex = 0
                sprite.direction = sprite.defaultDirection
            } else {
                sprite.hasMoved = false
            }

            perso.drawFrame(sprite.cycleLoop[sprite.loopIndex], sprite.direction, sprite.x, sprite.y)
        })

        window.requestAnimationFrame(this.animate.bind(this))
    }

}

module.exports = Board