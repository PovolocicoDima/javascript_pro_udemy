/**
 * The Module Pattern ensures private and public incapsulation in JavaScript
 * protecting the global namespace and diminishing naming conflicts
 *
 * Real-World examples
 * - JQuery uses the Module Pattern to protect internal detaild and reveal only the public API
 * - RequireJS is an open-source library that manages module loading and dependencies,
 *   implementing a vatiation of the Module Pattern
 */

const ChickenModule = (() => {
    const eggColor = 'white' // private variable
    const cluck = () => console.log('Cluck! Cluck!') // private function
    return {
        layEgg: () => {
            console.log(`Laid a ${eggColor}, egg`)
            cluck()
        },
    }
})()

ChickenModule.layEgg()

const myModule = (() => {
    const privateVar = 'I am private'
    const privateMethod = () => console.log('I am private method')
    return {
        publicVar: 'I am public',
        publicMethod: privateMethod,
    }
})()

myModule.publicMethod()

const counter = (() => {
    let count = 1

    return {
        count,
        increment: () => ++count,
        decriment: () => --count,
    }
})()

console.log(counter.count)
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decriment())
console.log(counter.count)
