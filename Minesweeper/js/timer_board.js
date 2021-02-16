
class Timer_Board {
    constructor() {
        this.counter = 0;
        this.date = new Date();
        this.prev = new Date();
    }

    checkTime() {
        this.date = new Date();
        let dif = this.date - this.prev;
        if (dif >= 1000) {
            this.counter += parseInt(dif / 1000);
            this.prev = new Date();
        }
    }
}