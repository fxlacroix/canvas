//CSS
import style from './canvas.css'

// Logical Part
import Board from './Part/Board'


// mouse definition
var mouse = {x: innerWidth / 2, y: innerHeight / 2}


// Board Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

})

var board = new Board(200);
board.init();