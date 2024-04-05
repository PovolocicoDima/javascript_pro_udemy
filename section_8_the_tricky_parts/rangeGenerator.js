/**
 * rangeGenerator Exercise

Implement a generator function rangeGenerator that takes two arguments 
start and end and yields numbers in the range[start, end].


If start is greater than end, the generator should yield 
numbers in a reverse order.
 */

function* rangeGenerator(start, end) {
    if (end < start) {
        for (let i = start; i >= end; i--) {
            yield i
        }
    } else if (end > start) {
        for (let i = start; i <= end; i++) {
            yield i
        }
    } else {
        yield start
    }
}

// const gen = rangeGenerator(0, 4)
// console.log(gen.next().value) // 0 -> 1 -> 2 -> 3 -> 4
// const gen2 = rangeGenerator(5, 2)
// console.log(gen2.next().value) // 2 -> 3 -> 4 -> 5

// const gen = rangeGenerator(0, 3)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)

const gen2 = rangeGenerator(5, 1)
console.log(gen2.next())
console.log(gen2.next())
console.log(gen2.next())
