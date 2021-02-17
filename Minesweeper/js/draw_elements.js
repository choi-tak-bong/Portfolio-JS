
class Draw_Elements {
    static context = CTX;
    static mine_offset = GRID;
    static mine_box_w = GRID * 4;
    static mine_box_h = GRID * 4;

    /**
     * 
     * @param {number} w 윈도우의 너비
     * @param {number} h 윈도우의 높이
     */
    static clearRect(w, h) {
        CTX.clearRect(0, 0, w, h);
    }
    /**
     * 
     * @param {number} mine_column 
     * @param {number} mine_row 
     */
    static setWindow(mine_column, mine_row) {
        let canvas = document.getElementById("main_canvas");
        canvas.width = GRID * (1 + 5 * mine_column);
        canvas.height = GRID * (10 + 5 * mine_row);
    }
    /**
     * 
     * @param {number} mine_column 
     * @param {number} mine_row 
     */
    static drawMines(mine_column, mine_row) {
        CTX.fillStyle = "#BBBBBB";
        for (let i = 0; i < mine_row; i++) {
            for (let j = 0; j < mine_column; j++) {
                CTX.fillRect(GRID * (1 + 5 * j), GRID * (10 + 5 * i), GRID * 4, GRID * 4);
            }
        }
    }
    /**
     * 
     * @param {Array<Array<int>>} boardArray 
     * @param {Array<Array<int>>} boardStateArray 
     */
    static drawNumbers(boardArray, boardStateArray) {
        
    }
}