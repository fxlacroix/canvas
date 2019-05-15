//GLOBAL STRUCTURE
import Style from './canvas.css'
//GLOBAL STRUCTURE
import Board from './Part/Board'
// mouse definition
var board = new Board()

addEventListener('resize', (event) => {
    board.canvas.width = innerWidth
    board.canvas.height = innerHeight
})

addEventListener('mousemove', function(event) {
    board.mouse.x = event.clientX
    board.mouse.y = event.clientY
})

addEventListener('keydown', (event) => {
    board.keyPresses[event.key] = true;
})

addEventListener('keyup', (event) => {
    board.keyPresses[event.key] = false;
})
