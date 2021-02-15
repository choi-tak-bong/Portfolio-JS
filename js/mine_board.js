
class Mine_Board {
    constructor(width, height, mineNum) {
        this.width = width;
        this.height = height;
        this.mineNum = mineNum;
        this.flagNum = 0;
        this.mineDetected = false;
        this.boardArray = Array.from(Array(height), () => Array(width).fill(0));
        this.boardStateArray = Array.from(Array(height), () => new Array(width).fill(0));
        this.mineCoords = Array(mineNum);
        this.putMines();
        this.putMinesNumber();
    }

    putMines() {
        for (let i = 0; i < this.mineNum; i++) {
            while (true) {
                let x = Math.floor(Math.random() * this.width);
                let y = Math.floor(Math.random() * this.height);

                if (this.boardArray[y][x] != MINE) {
                    this.boardArray[y][x] = MINE;
                    this.mineCoords[i] = [x, y];
                    break;
                }
            }
        }
    }

    putMinesNumber() {
        for (let i = 0; i < this.mineNum; i++) {
            for (let j = 0; j < DIRECTIONS.length; j++) {
                let dx = this.mineCoords[i][0] + DIRECTIONS[j][0];
                let dy = this.mineCoords[i][1] + DIRECTIONS[j][1];

                if (dx < 0 || dy < 0 || dx > this.width - 1 || dy > this.height - 1) {
                    continue;
                }

                if (this.boardArray[dy][dx] != MINE) {
                    this.boardArray[dy][dx] += 1;
                }
            }
        }
    }

    searchMine(x, y) {
        if (this.boardArray[y][x] == 0 && this.boardStateArray[y][x] != KNOWN) {
            this.boardStateArray[y][x] = 1;

            for (let i = 0; i < DIRECTIONS.length; i++) {
                let dx = x + DIRECTIONS[i][0];
                let dy = y + DIRECTIONS[i][1];

                if (dx < 0 || dy < 0 || dx > this.width - 1 || dy > this.height - 1) {
                    continue;
                }

                this.searchMine(dx, dy);
            }
        }
        else if (this.boardArray[y][x] > 0 && this.boardArray[y][x] < 8 && this.boardStateArray[y][x] != KNOWN) {
            this.boardStateArray[y][x] = 1;
        }
        else if (this.boardArray[y][x] == MINE && this.boardStateArray[y][x] != KNOWN) {
            this.boardStateArray[y][x] = KNOWN;
            this.mineDetected = true;
        }
    }

    setBoardState(x, y) {
        if (this.boardStateArray[y][x] == UNKNOWN) {
            this.boardStateArray[y][x] = FLAG;
            this.flagNum += 1;
        }
        else if (this.boardStateArray[y][x] == FLAG) {
            this.boardStateArray[y][x] = QUESTION;
            this.flagNum -= 1;
        }
        else if (this.boardStateArray[y][x] == QUESTION) {
            this.boardStateArray[y][x] = UNKNOWN;
        }
    }
}