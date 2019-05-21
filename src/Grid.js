import Canvas from "./Generic/Canvas"

/**
 * Grid component
 */
class Grid extends Canvas{

    constructor(width, height, scale){

        super()

        this.width  = width
        this.height = height
        this.scale  = scale
        this.matrix = []

        for(let i=0; i < height / scale; i ++){
            this.matrix[i] = []
            for(let j=0;j < width / scale; j++){
                this.matrix[i][j] = 0;
            }
        }
    }

    detectGridCell(item){

        let x = Math.ceil((item.x) / this.scale)
        let y = Math.ceil((item.y) / this.scale)

        return {x: x, y: y}
    }

    hightlightSquare(item){

        let cell = this.detectGridCell(item)
        this.colorCell(cell)
    }

    draw(){

        this.drawGrid(this.width, this.height, this.scale)
    }

    colorCell(cell){

        this.c.fillStyle = "#FF0000";
        this.c.fillRect(cell.x * this.scale, cell.y * this.scale, this.scale, this.scale);
        this.c.stroke();
    }

    drawGrid(bw, bh, p) {

        for (var x = 0; x <= bw; x += p) {
            this.c.moveTo(x + p, p);
            this.c.lineTo(x + p, bh + p);
        }

        for (var x = 0; x <= bh; x += p) {
            this.c.moveTo(p, x + p);
            this.c.lineTo(bw + p, x + p);
        }
        this.c.strokeStyle = "black";
        this.c.stroke();
    }
}

module.exports = Grid