
let $d = 1
let $difficulty_W = [10, 25, 40]
let $difficulty_H = [10, 20, 30]
let $difficulty_Mine = [10, 30, 50]

let $mine_board = new Mine_Board($difficulty_W[$d], $difficulty_H[$d], $difficulty_Mine[$d]);

Draw_Elements.setWindow($difficulty_W[$d], $difficulty_H[$d]);

function main() {
    Draw_Elements.clearRect($difficulty_W[$d], $difficulty_H[$d]);
    Draw_Elements.drawMines($difficulty_W[$d], $difficulty_H[$d]);
}

setInterval(main, 1);