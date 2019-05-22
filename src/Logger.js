import Canvas from "./Generic/Canvas"

/**
 * Logger display informaiton
 */
class Logger extends Canvas {

    constructor(){
        super()
    }

    show(grid, sprite, mouse) {

        let cellSprite = grid.detectGridCell(sprite)
        let cellMouse = grid.detectGridCell(mouse)

        let messages = [
            "Sprite",
            "       position: " + sprite.x + "/" + sprite.y,
            "       grid: " + cellSprite.x + "/" + cellSprite.y,
            "Mouse",
            "       position: " + mouse.x + "/" + mouse.y,
            "       grid: " + cellMouse.x + "/" + cellMouse.y
        ]
        //
        // var msgSpacing = 30;
        // messages.forEach(function(msg){
        //     this.c.fillText(msg, grid.width + grid.scale, grid.scale + msgSpacing)
        //     msgSpacing += 30
        // }.bind(this))
        //
        // sprite.path.forEach(function(cell){
        //     grid.colorCell(cell)
        // }.bind(this))
    }
}

module.exports = Logger

