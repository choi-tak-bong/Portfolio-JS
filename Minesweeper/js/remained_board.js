
class Remained_Board {
    constructor() {
        this.counter = 0;
    }

    checkMine(flags, mines) {
        this.counter = mines - flags;
    }
}