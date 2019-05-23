import Canvas from "./Generic/Canvas"

/**
 * Grid component
 */
class Grid extends Canvas{

    constructor(x, y, scale){

        super()
        this.x      = x
        this.y      = y
        this.width  = x * scale
        this.height = y * scale
        this.scale  = scale
        this.matrix = []

        for(let i=1; i < x; i ++){
            this.matrix[i] = []
            for(let j=1;j < y; j++){
                this.matrix[i][j] = 0;
            }
        }
    }

    detectGridCell(item){

        let x = Math.trunc((item.x) / this.scale)
        let y = Math.trunc((item.y) / this.scale)

        return {x: x, y: y}
    }

    draw(){
        this.drawGrid(this.width, this.height, this.scale)
    }

    colorCell(cell){

        this.c.fillRect(cell.x * this.scale, cell.y * this.scale, this.scale, this.scale);
        this.c.stroke();
    }

    drawGrid(width, height, scale) {

        for (let x = 0; x <= width; x += scale) {
            this.c.moveTo(x, 0);
            this.c.lineTo(0 + x, 0 + height);
        }

        for (let y = 0; y <= height; y += scale) {
            this.c.moveTo(0, 0 + y);
            this.c.lineTo(0 + width, 0 + y);
        }

        this.c.stroke();
    }
}

module.exports = Grid