import Multi    from "../../Structure/Multi";
import Canvas   from '../Generic/Canvas'
import Mouse    from '../Generic/Mouse'
import Pellet   from '../Item/Pellet'
import Utils    from '../../Helper/Utils'

/**
 * Board Manager
 */
class Board extends Multi.inherit(Canvas, Mouse) {

    constructor(Persos){
        super()
        this.keyPresses =  this.pellets = []
        this.persos     = Persos

        for(let i=0; i < 30; i++){
            this.pellets.push(new Pellet())
        }
    }

    animate() {

        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height)

        var board  = this
        this.persos.forEach(function(perso){

            let sprite = perso.sprite

            if (board['keyPresses'][sprite.keyUp]) {
                perso.update(0, -sprite.movementSpeed, sprite.facingUp)
                sprite.hasMoved = true
                board['keyPresses'][sprite.keyUp] = false
            } else if (board['keyPresses'][sprite.keyDown]) {
                perso.update(0, sprite.movementSpeed, sprite.facingDown)
                sprite.hasMoved = true
                board['keyPresses'][sprite.keyDown] = false
            }

            if (board['keyPresses'][sprite.keyLeft]) {
                perso.update(-sprite.movementSpeed, 0, sprite.facingLeft)
                sprite.hasMoved = true
                board['keyPresses'][sprite.keyLeft] = false
            } else if (board['keyPresses'][sprite.keyRight]) {
                perso.update(sprite.movementSpeed, 0, sprite.facingRight)
                sprite.hasMoved = true
                board['keyPresses'][sprite.keyRight] = false
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

                if(!sprite.keepWalking.length) {

                    let randomMoves = [sprite.keyUp, sprite.keyDown, sprite.keyLeft, sprite.keyRight]
                    var rand = randomMoves[Math.floor(Math.random() * randomMoves.length)];
                    for (let i = 0; i < sprite.cycleLoop.length * 4; i++) {
                        sprite.keepWalking.push(rand)
                    }
                }

                if(sprite.keepWalking.length){
                    sprite.hasMoved = true
                    let dir = sprite.keepWalking.pop()
                    board['keyPresses'][dir] = true
                }else{
                    sprite.hasMoved = false
                    sprite.loopIndex = 0
                    sprite.direction = sprite.defaultDirection
                }

            } else {
                sprite.hasMoved = false
            }

            perso.drawFrame(sprite.cycleLoop[sprite.loopIndex], sprite.direction, sprite.x, sprite.y)

            board.pellets.forEach(function(pellet){
                pellet.draw()
                if(board.detectCollision(pellet, perso.sprite)){
                    pellet.update()
                }
            })
        })

        window.requestAnimationFrame(this.animate.bind(this))
    }

    detectCollision(item, sprite) {

        if(sprite.x <= item.x && (sprite.x + sprite.width) >= item.x
        && sprite.y <= item.y && sprite.y + sprite.height >= item.y){
            return true
        }
        return false
    }

}

module.exports = Board