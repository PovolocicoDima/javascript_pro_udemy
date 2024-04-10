function compose(...functions) {
    return function (data) {
        return functions.reduce((val, func) => func(val), data)
    }
}

function toUpper(str) {
    return str.toUpperCase()
}

function double(str) {
    return `${str}${str}`
}

function additional(str) {
    return `<<${str}>>`
}

console.log(compose(toUpper, double, additional)('dima'))
