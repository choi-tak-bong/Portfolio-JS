
class Rewind_Button {
    static rewind = false;

    static setRewindTrue() {
        this.rewind = true;
    }
}

class Save_Button {
    static gameData = [];
    static gameDataJSON = null;

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