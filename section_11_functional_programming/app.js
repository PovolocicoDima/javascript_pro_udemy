function say() {
    console.log('hello, we want you')
}

function sayItTwice(fn) {
    fn()
    fn()
}

sayItTwice(say)
