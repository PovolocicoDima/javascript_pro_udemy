// const largeArray = Array.from({ length: 10_000 }, () => {
//     return Math.floor(Math.random() * 1000)
// })

// const arrayBubbleSort = [...largeArray]
// const arrayNativeSort = [...largeArray]

// const bubbleSort = (arr) => {
//     let j = 0

//     function swap(arr, idx1, idx2) {
//         const temp = arr[idx1]
//         arr[idx1] = arr[idx2]
//         arr[idx2] = temp
//     }

//     function iteration(arr) {
//         for (let i = 0; i < arr.length - j; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 swap(arr, i, i + 1)
//             }
//         }
//     }

//     iteration(arr)

//     return arr
// }

// performance.mark('nativeSortStart')
// arrayNativeSort.sort((a, b) => a - b)
// performance.mark('nativeSortEnd')

// performance.measure('Native Sort time', 'nativeSortStart', 'nativeSortEnd')

// performance.mark('bubbleSortStart')
// bubbleSort(arrayBubbleSort)
// performance.mark('bubbleSortEnd')

// performance.measure('Bubble Sort time', 'bubbleSortStart', 'bubbleSortEnd')

// const nativeSortTime =
//     performance.getEntriesByName('Native Sort time')[0].duration
// const bubbleSortTime =
//     performance.getEntriesByName('Bubble Sort time')[0].duration

// console.log(`Native sort took: ${nativeSortTime}`)
// console.log(`Bubble sort took: ${bubbleSortTime}`)

function bubbleSort(arr) {
    let len = arr.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

const largeArray = Array.from({ length: 10000 }, () => {
    return Math.floor(Math.random() * 1000)
})

const arrayForBubbleSort = [...largeArray]
const arrayForNativeSort = [...largeArray]

performance.mark('nativeSortStart')
arrayForNativeSort.sort((a, b) => a - b)
performance.mark('nativeSortEnd')

performance.measure('Native Sort Time', 'nativeSortStart', 'nativeSortEnd')

performance.mark('bubbleSortStart')
bubbleSort(arrayForBubbleSort)
performance.mark('bubbleSortEnd')
performance.measure('Bubble Sort Time', 'bubbleSortStart', 'bubbleSortEnd')

const nativeDuration =
    performance.getEntriesByName('Native Sort Time')[0].duration
const bubbleDuration =
    performance.getEntriesByName('Bubble Sort Time')[0].duration

console.log(`Native Sort Took ${nativeDuration}ms`)
console.log(`Bubble Sort Took ${bubbleDuration}ms`)
