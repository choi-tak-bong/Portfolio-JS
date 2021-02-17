
const MINE = 64;

const UNKNOWN = 0;
const FLAG = 1;
const QUESTION = 2;
const KNOWN = 3;

const GRID = 4;

const DIRECTIONS = [
    [1, 0], // Right.
    [1, 1], // Lower Right.
    [0, 1], // Lower.
    [-1, 1], // Lower Left.
    [-1, 0], // Left.
    [-1, -1], // Upper Left.
    [0, -1], // Upper.
    [1, -1] // Upper Right.
]

const CANVAS = document.getElementById("main_canvas");
const CTX = CANVAS.getContext("2d");

const GRAY = "#7B7B7B";
const RED  = "#FE0000";
const BLUE = "#0800FE";
