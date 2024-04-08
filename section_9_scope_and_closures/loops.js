for (let i = 1; i < 6; i++) {
    ;(function (idx) {
        setTimeout(function () {
            console.log(idx)
        }, idx * 1000)
    })(i)
    // setTimeout(function () {
    // console.log(i)
    // }, i * 1000)
}
