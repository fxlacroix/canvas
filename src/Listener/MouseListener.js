import Canvas from "../Generic/Canvas";
import EasyStar from "../Vendor/easystarjs/src/easystar"

/**
 * default sprite
 */
class MouseListener extends Canvas {

    constructor() {
        super();
    }

    listenMouse(grid, mouse){

        if(mouse.down){

            grid.mouse.down = false

            if(mouse.x  < grid.width && mouse.y < grid.height){

                let cell1 = grid.detectGridCell(grid.sprite)
                let cell2 = grid.detectGridCell(mouse)
                let easystar = new EasyStar.js()

                easystar.setGrid(grid.matrix)
                easystar.setAcceptableTiles([0])
                easystar.enableSync()
                easystar.enableDiagonals()


                easystar.findPath(0,0,0,4, function(path){
                    grid.path     = path
                    grid.pathReal = this.calculatePathReal(grid)
                    grid.sprite.move(grid)

                }.bind(this))
            }
            return true
        }
        return false
    }


    calculatePathReal(grid) {

        let stops       = []
        let duplicates  = []
        let xFrom = this.sprite.x
        let yFrom = this.sprite.y

        if(grid.path.length) {

            grid.path.forEach(function (direction) {

                for (var i = 0; i + grid.sprite.speed < grid.scale; i++) {

                    if (xFrom < direction.x * grid.scale) {
                        xFrom += i
                    }
                    if (yFrom < direction.y * grid.scale) {
                        yFrom += i
                    }
                    let cell = {x: xFrom, y: yFrom}

                    if(duplicates.indexOf(cell.x + "-" + cell.y) == -1){
                        duplicates.push(cell.x + "-" + cell.y)
                        stops.push(cell)
                    }
                }

            }.bind(this))

            grid.path = null

            return stops
        }

        return []
    }

}

module.exports = MouseListener