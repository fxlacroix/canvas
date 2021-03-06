import Canvas from "./Generic/Canvas"

/**
 * Logger display informaiton
 */
class Logger extends Canvas {

    constructor(){
        super()
    }

    show(grid, sprite) {

        let cellSprite = grid.detectGridCell(sprite)

        let messages = [
            "Sprite",
            "       position: " + sprite.x + "/" + sprite.y,
            "       direction " + sprite.direction,
            "       grid: " + cellSprite.x + "/" + cellSprite.y
        ]
        //
        var msgSpacing = 30;

        this.c.clearRect(grid.width, grid.scale, grid.width + grid.scale, grid.scale+ grid.height)

        messages.forEach(function(msg){

            this.c.fillText(msg, grid.width + grid.scale, grid.scale + msgSpacing)
            //console.log(msg)
            msgSpacing += 30
        }.bind(this))
        //
        // sprite.path.forEach(function(cell){
        //     grid.colorCell(cell)
        // }.bind(this))
    }
}

module.exports = Logger

