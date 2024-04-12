const btn = document.getElementById('getGeolocation')
const content = document.getElementById('locationDisplay')
btn.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                content.innerText = `longtitude: ${position.coords.longitude} and latitude: ${position.coords.latitude}`
            },
            (error) => {
                content.innerText = error.message
            }
        )
    }
})
