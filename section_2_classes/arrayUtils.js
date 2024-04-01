/**
 * Implement a class named ArrayUtils that cannot be instantiated 
 * and contains static methods average and max. If the class 
 * is instantiated throw an error with the message 
 * 'ArrayUtils cannot be instantiated.'


 * The average method should return the average of an 
    array of numbers. If the array is empty, throw an 
    error with the message 'Array cannot be empty.'


    The max method should return the largest number from
     an array of numbers. You can assume you will always get
      passed an arrray of numbers
 */

class ArrayUtils {
    constructor() {
        throw new Error(`ArrayUtils cannot be instantiated.`)
    }

    static average(arr) {
        if (!arr.length) throw new Error(`Array cannot be empty.`)
        const sum = arr.reduce((acc, item) => (acc += item))
        return sum / arr.length
    }

    static max(arr) {
        return Math.max(...arr)
    }
}

const avg = ArrayUtils.average([10, 10, 10, 10, 10])
console.log(avg)
