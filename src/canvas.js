//CSS
import style from './canvas.css'

// JS Libs
import utils from './utils'

// Logical Part
import Board from './Part/Board'

let board = new Board();

// Board Event Listeners
addEventListener('mousemove', event => {
    board.mouse.x = event.clientX
    board.mouse.y = event.clientY
})

addEventListener('resize', () => {
    board.canvas.width = innerWidth
    board.canvas.height = innerHeight

})

board.animate();