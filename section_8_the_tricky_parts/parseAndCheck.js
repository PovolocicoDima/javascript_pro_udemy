/**
 * parseAndCheck Exercise

Create a function parseAndCheck that takes an array of values.

The function should return a new array with all values parsed to a number using parseFloat .

If the parsing results in a NaN, throw an error with the message "Invalid Number"
 */

function parseAndCheck(arr) {
    return Array.from(arr, (item) => {
        if (Number.isNaN(parseFloat(item))) throw new Error(`Invalid Number`)
        return parseFloat(item)
    })
}

console.log(parseAndCheck(['1', '2', '3', '4', 'a5']))
