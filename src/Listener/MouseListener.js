import Canvas from "../Generic/Canvas";
import Path from "../Generic/EasyPathFinding"

/**
 * default sprite
 */
class MouseListener extends Canvas {

    constructor() {
        super();
    }

    listen(keys, grid, mouse) {

        this.listenMouse(grid, mouse)
    }

    listenMouse(grid, mouse){

        if(mouse.down){

            this.isStillMoving = true
            if(mouse.x  < grid.width && mouse.y < grid.height){

                let cell1 = grid.detectGridCell(this)
                let cell2 = grid.detectGridCell(mouse)
                this.path = Path.find(grid.matrix, cell1, cell2)

            }
        }
    }
}

module.exports = MouseListener