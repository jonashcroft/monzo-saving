const INTERVAL = 1000;

class Timer {
    constructor(element) {
        this.element = element;
        this.time = this.element.querySelector('[data-time-el]')
    }

    getTime() {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();

        return hours + ':' + minutes;
    }

    onInit() {
        console.log(this.time)

        this.time.textContent = this.getTime();

        setInterval(() => {
            this.time.textContent = this.getTime();
        }, INTERVAL);
    }
}

export default Timer;