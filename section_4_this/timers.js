/**
 * Buggy Code `this` Timers Exercise

In the Timer class, modify the start method to log 
the tick property at one - second intervals correctly 
and add a stop method to clear the interval.


The timer should stop after 5 ticks.


Here is the starter code:
 */

class Timer {
    constructor() {
        this.tick = 0
        this.timerId = null
    }

    start() {
        this.timerId = setInterval(() => {
            if (this.tick === 5) this.stop()
            console.log(this.tick++)
        }, 1000)
    }

    stop() {
        clearInterval(this.timerId)
    }
}

const timer = new Timer()
timer.start()
