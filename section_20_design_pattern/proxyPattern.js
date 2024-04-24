/**
 * Proxy - это объект, который позволяет создвать копию объекта или функции,
 * а также позвляет отслеживать то, как производится работа с объектом или с
 * функцией. Если это объект:
 * - мы можем перехватывать обращения на чтения через хэндлер с методом get(obj, property)
 * - мы можем перехватывать обращения на попытку изменения значений свойств(set(ojb, property, value))
 *
 * Если нужно настроить Proxy для функции мы можем в хэндлере указать методы
 * - apply(targetFunction, thisArg, argsList) : будет работать
 * - constructor
 */

const cat = {
    name: 'Blue',
    age: 7,
    breed: 'Scottish fold',
}

const handler = {
    get: (obj, property) => {
        console.log(`We're trying to get ${obj[property]}...`)
        return obj[property]
    },
    set: (obj, property, value) => {
        console.log(`We're are trying to set ${property} to ${value}`)
        return (obj[property] = value)
    },
}

const catProxy = new Proxy(cat, handler)
// console.log((catProxy.name = 'dima'))

const multiply = (a, b) => console.log(a * b)
const sum = (a, b) => console.log(a + b)
const proxyhandler = {
    apply: function (targetFunc, thisArg, argsList) {
        console.log(`You ran the function..!`)
        targetFunc(...argsList)
    },
}

const multiplyProxy = new Proxy(multiply, proxyhandler)
const sumProxy = new Proxy(sum, proxyhandler)
multiplyProxy(1, 3)
sumProxy(1, 3)
