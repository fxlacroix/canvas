import Canvas   from "../Generic/Canvas";
import Utils from "../Generic/Utils"

/**
 * default sprite
 */
class MouseListener extends Canvas {

    constructor() {
        super();
    }

    listenMouse(grid, mouse, callback){

        if(mouse.down){

            grid.mouse.down = false

            if(mouse.x  < grid.width && mouse.y < grid.height){

                let cell1 = grid.detectGridCell(grid.sprite)
                let cell2 = grid.detectGridCell(mouse)
                grid.path=Utils.findPath(grid.matrix, Object.values(cell1), Object.values(cell2))
                grid.sprite.pathReal = this.calculatePathReal(grid)
                grid.sprite.move(grid)
            }

            return true
        }

        return false
    }


    calculatePathReal(grid) {

        let stops       = []
        let duplicates  = []
        var xFrom = this.sprite.x
        var yFrom = this.sprite.y

        if(grid.path.length) {

            for(let key in grid.path) {

                for (let i = 0; i + grid.sprite.speed < grid.scale ; i++) {

                    if (xFrom < grid.path[key][0] * grid.scale) {
                        xFrom += i
                    }
                    if (xFrom > grid.path[key][0] * grid.scale) {
                        xFrom -= i
                    }
                    if (yFrom < grid.path[key][1] * grid.scale) {
                        yFrom += i
                    }
                    if (yFrom > grid.path[key][1] * grid.scale) {
                        yFrom -= i
                    }
                    let cell = {x: xFrom, y: yFrom}

                    if(duplicates.indexOf(cell.x + "-" + cell.y) == -1){

                        duplicates.push(cell.x + "-" + cell.y)
                        stops.push(cell)
                    }
                }
            }

            return stops
        }

        return []
    }

}

module.exports = MouseListener