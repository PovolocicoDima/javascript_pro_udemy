const content = document.querySelector('.content')

function getRandomColor() {
    const colors = [
        '#FF0000', // красный
        '#00FF00', // зелёный
        '#0000FF', // синий
        '#FFFF00', // жёлтый
        '#FF00FF', // пурпурный
        '#00FFFF', // голубой
        '#800080', // фиолетовый
        '#FFA500', // оранжевый
        '#008000', // тёмно-зелёный
        '#800000', // тёмно-красный
    ]
    const randomNumber = Math.floor(Math.random() * colors.length)
    return colors[randomNumber]
}

function loadMoreItems() {
    const scrollDistanceToBottom =
        document.documentElement.scrollHeight -
        window.scrollY -
        window.innerHeight

    if (scrollDistanceToBottom <= 200) {
        console.log('LOADING DATA FROM API!')
        for (let i = 0; i < 10; i++) {
            const item = document.createElement('div')
            item.classList.add('item')
            item.textContent = `Item ${content.children.length + 1}`
            item.style.backgroundColor = getRandomColor()
            content.appendChild(item)
        }
    }
}

function throttle(callback, delay = 500) {
    let isThrottled = false
    let savedArgs = null

    const executeCallback = () => {
        if (savedArgs === null) {
            isThrottled = false
        } else {
            callback(...savedArgs)
            savedArgs = null
            setTimeout(executeCallback, delay)
        }
    }

    return (...args) => {
        if (isThrottled) {
            savedArgs = args
            return
        }

        callback(...args)
        isThrottled = true
        setTimeout(executeCallback, delay)
    }
}

const throttledLoad = throttle(loadMoreItems, 2000)

window.addEventListener('scroll', () => {
    throttledLoad()
})

throttledLoad()
