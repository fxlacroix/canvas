/**
 * Easy Path Finding
 */
class EasyPathFinding{

    static find(array, cell1, cell2) {

        let path = []
        for(let i=cell1.x; i<=cell2.x; i++){
            path.push({
                x: i,
                y: cell1.y
            })
        }
        for(let j=cell1.y; j<=cell2.y; j++){
            path.push({
                x: cell2.x,
                y: j
            })
        }

        return path
    }
}

module.exports = EasyPathFinding