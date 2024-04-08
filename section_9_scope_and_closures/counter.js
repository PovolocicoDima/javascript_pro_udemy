function createCounterButton(id) {
    const btn = document.getElementById(id)

    let counter = 0
    btn.addEventListener('click', function () {
        counter += 1
        btn.innerText = `Clicked ${counter} times`
    })
}

createCounterButton('btn1')
createCounterButton('btn2')
createCounterButton('btn3')
