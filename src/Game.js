import Grid     from "./Grid"
import Luigi    from "./Sprite/Luigi"
import Charles  from "./Sprite/Charles"
import Styles   from "./Public/css/style.scss"

/**
 * Game
 */
new class Game {

    constructor() {

        let sprite   = new Luigi(0, 0)
        let computer = new Charles(15, 11)
        this.grid    = new Grid(16, 12, 50, sprite, computer)

        this.addEvents()
    }

    addEvents() {

        addEventListener('mousemove', function(event) {
            this.grid.mouse.x = event.clientX
            this.grid.mouse.y = event.clientY
        }.bind(this))

        addEventListener('mousedown', function() {
            this.grid.mouse.down = true
        }.bind(this))

        addEventListener('mouseup', function() {
            this.grid.mouse.down = false
        }.bind(this))
    }
}
