import Grid     from "./Grid"
import Luigi    from "./Sprite/Luigi"
import Charles  from "./Sprite/Charles"

/**
 * Game Manager
 */
class Game {

    constructor() {

        let sprite   = new Luigi()
        let computer = new Charles()
        this.grid    = new Grid(15, 10, 50, sprite, computer)
    }
}

// create canvas
var game = new Game()

// Generic events
addEventListener('resize', (event) => {
    game.grid.canvas.width  = innerWidth
    game.grid.canvas.height = innerHeight

})

addEventListener('mousemove', function(event) {
    game.grid.mouse.x = event.clientX
    game.grid.mouse.y = event.clientY
})

addEventListener('mousedown', function() {
    game.grid.mouse.down = true
})

addEventListener('mouseup', function() {
    game.grid.mouse.down = false
})

addEventListener('keydown', (event) => {
    game.keyPresses[event.key] = true
})

addEventListener('keyup', (event) => {
    delete game.keyPresses[event.key]
})
