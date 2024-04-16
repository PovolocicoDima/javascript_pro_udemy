/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('ballCanvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const ctx = canvas.getContext('2d')
const balls = []

class Ball {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.xVel = (Math.random() - 0.5) * 10
        this.yVel = (Math.random() - 0.5) * 10
        this.radius = Math.random() * 30 + 10
        this.color = this.getRandomColor()
    }

    getRandomColor() {
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        return `rgb(${r}, ${g}, ${b})`
    }

    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
    }

    update() {
        // check if it's about to hit the canvas border
        // right corner                                  left corner
        if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
            this.xVel = -this.xVel
        }

        if (
            this.y - this.radius <= 0 || //top
            this.y + this.radius >= canvas.height //bottom
        ) {
            this.yVel = -this.yVel
        }

        this.x += this.xVel
        this.y += this.yVel

        if (this.y + this.radius < canvas.height) {
            this.yVel += 0.5
        }
    }
}

function loop() {
    ctx.fillStyle = '#f2f2f2'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    for (let ball of balls) {
        ball.update()
        ball.draw()
    }

    requestAnimationFrame(loop)
}

loop()

canvas.addEventListener('click', (e) => {
    const ball = new Ball(e.clientX, e.clientY)
    balls.push(ball)
})
