function generator(prefix) {
    let id = 0
    return function () {
        id += 1
        return `${prefix}-${id}`
    }
}

const book = generator('book')
const user = generator('user')

console.log(book())
console.log(book())
console.log(book())
console.log(user())
console.log(user())
console.log(user())
