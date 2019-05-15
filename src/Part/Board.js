import Multi from "./Structure/Multi";
import BaseCanvas from './Component/BaseCanvas'
import Mouse from './Component/Mouse'
import Perso from './Perso'
import Luigi from './Component/Sprite/Luigi'
import Link from './Component/Sprite/Link'

/**
 * Board Manager
 */
class Board extends Multi.inherit(BaseCanvas, Mouse) {

    constructor(){
        super()
        this.perso = []
        this.perso[0]   = new Perso(new Link()).init()
        this.perso[1]   = new Perso(new Luigi()).init()
        this.keyPresses = []

        this.animate()
    }

    animate() {

        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height)

        //for(let perso in this.perso){
        var board  = this
        this.perso.forEach(function(perso){

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
                sprite.direction = 3
            } else {
                sprite.hasMoved = false
            }

            perso.drawFrame(sprite.cycleLoop[sprite.loopIndex], sprite.direction, sprite.x, sprite.y)
        })

        window.requestAnimationFrame(this.animate.bind(this))
    }

}


module.exports = Board