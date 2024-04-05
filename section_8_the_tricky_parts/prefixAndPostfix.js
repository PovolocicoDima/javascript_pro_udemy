/**
 * Prefix and Postfix Exercise

    Fix the buggy code! Right now the starter code has a small bug in it. 
    Here is what we need to do.

    Create a function named decrementArrayElements that takes an array 
    of integers as an argument. The function should decrement each element 
    of the array by 1. The array should be modified in place, and the function 
    should return the modified array.


    Each element in the array should be decremented by 1.

    The array should be modified in place. The function should not create a new array.

    If the array is empty, it should remain unchanged.
 */

function decrementArrayElements(arr) {
    return Array.from(arr, (item) => item - 1)
}

console.log(decrementArrayElements([]))
