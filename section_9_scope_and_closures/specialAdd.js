/**
 * Write a function called specialAdd. If you give this function a number, it

returns a new function to you. If you give this function no arguments, it

returns the total of all the numbers you've passed to it so far.


Examples:


    specialAdd(); // 0
    specialAdd(1)(2)(); // 3
    specialAdd(2)(8)(5)(1)(); // 16
 */

function specialAdd(total) {
    if (total === undefined) return 0
    return function inner(num) {
        if (num === undefined) return total
        total += num
        return inner
    }
}

// function specialAdd(total) {
//     if (total === undefined) return 0
//     return function addNext(num) {
//         if (num === undefined) return total
//         total += num
//         return addNext
//     }
// }

/**
 * Make sure that your function accepts one argument, 
 * and if the argument is undefined, return 0


Return a new function that accepts a single 
argument as well, and if the argument is undefined, return 0


Inside the inner function, increment your outer 
argument by the inner argument.


Finally, inside the inner function, once you have 
incremented the outer argument by the inner argument, return the inner function so it can be called again
 */

console.log(specialAdd())
