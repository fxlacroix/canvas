import utils from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

var gravity = 1;
var frictionY = 0.80;
var frictionX = 0.20;

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

// Objects
function Ball(x, y, dx, dy,radius, color) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.color = color
}

Object.prototype.draw = function() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
}

Object.prototype.update = function() {

    if(this.y + this.radius > canvas.height)
    {
        this.dy = -this.dy * frictionY
    } else {
        this.dy += gravity
    }

    if(this.x + this.radius > canvas.width || this.x - this.radius <= 0)
    {
        this.dx = - this.dx  * frictionX
    }

    this.x += this.dx
    this.y += this.dy
    this.draw()
}

// Implementation


var ball;
var balls = []

function init() {
    for(var i = 0; i < 500; i++){
        var x = utils.randomIntFromRange(0, canvas.width)
        var y = utils.randomIntFromRange(0, canvas.height)
        var dx = utils.randomIntFromRange(-2, 2)
        var dy = utils.randomIntFromRange(-2, 2)
        var size = utils.randomIntFromRange(0, 30)

        balls.push(new Ball(x, y, dx, dy, size, utils.randomColor(colors) ))
    }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    for(var i=0; i < balls.length; i++) {
        balls[i].update();
    }
}

init()
animate()
