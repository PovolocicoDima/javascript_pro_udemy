const boxInterval = document.getElementById('boxInterval')
const boxAnimationFrame = document.getElementById('boxAnimationFrame')

let intervalAngle = 0
let intervalAnimationFrameAngle = 0

function animateWithInterval() {
    boxInterval.style.transform = 'rotate(' + intervalAngle + 'deg)'
    intervalAngle += 2
}

function animateWithAnimationFrame() {
    boxAnimationFrame.style.transform = 'rotate(' + intervalAngle + 'deg)'
    intervalAnimationFrameAngle += 2
    requestAnimationFrame(animateWithAnimationFrame)
}

setInterval(animateWithInterval, 16)

requestAnimationFrame(animateWithAnimationFrame)
