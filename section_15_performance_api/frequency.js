const context = new AudioContext()

const slider = document.getElementById('freqSlider')
const playBtn = document.getElementById('playBtn')
const stopBtn = document.getElementById('stopBtn')

let oscillator = null

playBtn.addEventListener('click', () => {
    oscillator = context.createOscillator()
    oscillator.type = 'sawtooth'
    oscillator.frequency.value = slider.value
    oscillator.connect(context.destination)
    oscillator.start()
})

slider.addEventListener('input', (e) => {
    const frequency = e.target.value
    if (oscillator) {
        oscillator.frequency.value = frequency
    }
})

stopBtn.addEventListener('click', () => {
    if (oscillator) {
        oscillator.stop()
        oscillator = null
    }
})
