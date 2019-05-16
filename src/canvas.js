//GLOBAL STRUCTURE
import Game from './Part/Game'
// mouse definition
var game = new Game()

addEventListener('resize', (event) => {
    game.board.canvas.width = innerWidth
    game.board.canvas.height = innerHeight
})

addEventListener('mousemove', function(event) {
    game.board.mouse.x = event.clientX
    game.board.mouse.y = event.clientY
})

addEventListener('keydown', (event) => {
    game.board.keyPresses[event.key] = true
})

addEventListener('keyup', (event) => {
    game.board.keyPresses[event.key] = false
})
