/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
// ctx.fillStyle = 'rgb(255, 0, 0)'
// ctx.fillRect(0, 90, 90, 90)
// ctx.fillRect(90, 0, 90, 90)
// ctx.fillRect(90, 30, 150, 90)

// ctx.fillRect(50, 50, 200, 200)
// ctx.clearRect(50, 50, 100, 100)
// ctx.strokeStyle = 'purple'
// ctx.lineWidth = 4
// ctx.strokeRect(50, 50, 100, 100)

// ctx.beginPath()
// ctx.moveTo(50, 50)
// ctx.lineTo(100, 200)
// ctx.lineTo(200, 200)
// ctx.lineTo(200, 50)
// ctx.lineTo(50, 50)
// ctx.fillStyle = 'green'
// ctx.stroke()

// ctx.fillStyle = 'purple'
// ctx.strokeStyle = 'green'
// ctx.beginPath()
// ctx.arc(145, 145, 100, 20, 2 * Math.PI)
// ctx.fill()

// Устанавливаем размеры холста
canvas.width = 300
canvas.height = 300

// Рисуем красное сердечко
ctx.beginPath()
ctx.moveTo(150, 75)
ctx.bezierCurveTo(150, 37.5, 112.5, 0, 75, 0)
ctx.bezierCurveTo(37.5, 0, 0, 37.5, 0, 75)
ctx.bezierCurveTo(0, 150, 150, 225, 150, 225)
ctx.bezierCurveTo(150, 225, 300, 150, 300, 75)
ctx.bezierCurveTo(300, 37.5, 262.5, 0, 225, 0)
ctx.bezierCurveTo(187.5, 0, 150, 37.5, 150, 75)
ctx.fillStyle = 'red'
ctx.fill()
