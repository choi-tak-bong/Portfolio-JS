
class Rewind_Button {
    static rewind = false;

    static setRewindTrue() {
        this.rewind = true;
    }
}

class Save_Button {
    static gameData = [];
    static gameDataJSON = null;

    /**
     * @param {number} id 데이터 아이디
     * @param {Array<Array<number>>} boardArray 지뢰 정보 배열
     * @param {Array<Array<number>>} boardStateArray 상태 배열
     * @param {number} timer 타이머
     * @param {number} remained 남은 지뢰의 개수
     */
    static setGameData(id, boardArray, boardStateArray, timer, remained) {
        let tempData = {
            "id": id,
            "boardArray": boardArray,
            "boardStateArray": boardStateArray,
            "timer": timer,
            "remained": remained
        }
        this.gameData[id] = tempData;
    }

    static saveGameData() {
        this.gameDataJSON = JSON.stringify(this.gameData);
    }
}