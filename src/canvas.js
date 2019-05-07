//GLOBAL STRUCTURE
import Board from './Part/Board'
// mouse definition
var board = new Board(200).init()

addEventListener('resize', (event) => {
    board.canvas.width = innerWidth
    board.canvas.height = innerHeight
})

addEventListener('mousemove', function(event) {
    board.mouse.x = event.clientX
    board.mouse.y = event.clientY
})
