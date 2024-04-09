function queryAPI(val) {
    console.log(`SEARCHING: ${val}`)
}

const searchInput = document.querySelector('#inputId')

function debounce(callback, delay) {
    let timeoutId

    return (args) => {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }

        timeoutId = setTimeout(() => {
            callback(args)
        }, delay)
    }
}

const debouncedQueryAPI = debounce(queryAPI, 1000)
searchInput.addEventListener('input', (e) => {
    debouncedQueryAPI(e.target.value)
})
