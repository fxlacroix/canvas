import Canvas   from "../Generic/Canvas";
import Utils from "../Generic/Utils"

/**
 * default sprite
 */
class MouseListener {

    listenMouse(grid, mouse, callback){

        let sprite = grid.sprite
        if(mouse.down){

            grid.mouse.down = false

            if(mouse.x  < grid.width && mouse.y < grid.height){

                // put that is a callback function
                let cell1 = grid.detectGridCell(sprite)
                let cell2 = grid.detectGridCell(mouse)

                sprite.path     = Utils.findPath(grid.matrix, Object.values(cell1), Object.values(cell2))
                sprite.pathReal = this.calculatePathReal(grid)

                sprite.move(grid)
            }

            return true
        }

        return false
    }

    calculatePathReal(grid) {

        let stops       = []
        let duplicates  = []
        let sprite      = grid.sprite
        let xFrom       = grid.sprite.x
        let yFrom       = grid.sprite.y
        let direction

        if(sprite.path.length) {

            for(let key in sprite.path) {

                for (let i = 0; i + sprite.speed < grid.scale ; i += sprite.speed) {

                    if (xFrom < sprite.path[key][0] * grid.scale) {
                        xFrom += i
                        direction = sprite.facingRight
                    }
                    if (xFrom > sprite.path[key][0] * grid.scale) {
                        xFrom -= i
                        direction = sprite.facingLeft
                    }
                    if (yFrom < sprite.path[key][1] * grid.scale) {
                        yFrom += i
                        direction = sprite.facingDown
                    }
                    if (yFrom > sprite.path[key][1] * grid.scale) {
                        yFrom -= i
                        direction = sprite.facingUp
                    }

                    let cell = {x: xFrom, y: yFrom, direction: direction}

                    if(duplicates.indexOf(cell.x + "-" + cell.y) == -1){

                        duplicates.push(cell.x + "-" + cell.y)
                        stops.push(cell)
                    }
                }
            }

            stops[stops.length - 1].direction = sprite.defaultDirection

            return stops
        }

        return []
    }

}

module.exports = MouseListener