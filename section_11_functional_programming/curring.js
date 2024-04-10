function add3(a, b, c) {
    return a + b + c
}

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args)
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2))
            }
        }
    }
}

const curriedAdd = curry(add3)
console.log(curriedAdd(1)(2)(3))
