//GLOBAL STRUCTURE
import Board from './Part/Board'

// mouse definition
let board = new Board(200).init()

// Board Event Listeners
addEventListener('mousemove', event => {
    board.mouse.x = event.clientX
    board.mouse.y = event.clientY
})

addEventListener('resize', () => {
    board.canvas.width = innerWidth
    board.canvas.height = innerHeight

})