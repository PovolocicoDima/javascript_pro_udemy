const fs = require('fs')
const path = require('path')

// fs.readFile(path.join(__dirname, 'test1.txt'), 'utf-8', (err, data) => {
//     if (err) {
//         console.log(`Err! ${err}`)
//     } else {
//         console.log(`File 1`)
//         console.log(data)
//         fs.readFile(path.join(__dirname, 'test2.txt'), 'utf-8', (err, data) => {
//             if (err) {
//                 console.log(`Err! ${err}`)
//             } else {
//                 console.log(`File 2`)
//                 console.log(data)
//                 fs.readFile(path.join(__dirname, 'test3.txt'), 'utf-8', (err, data) => {
//                     if (err) {
//                         console.log(`Err! ${err}`)
//                     } else {
//                         console.log(`File 3`)
//                         console.log(data)
//                     }
//                 })
//             }
//         })
//     }
// })

function asyncReadFile(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, fileName), 'utf-8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

// asyncReadFile('test1.txt')
//     .then((data) => {
//         console.log('File 1', data)
//         return asyncReadFile('test2.txt')
//     })
//     .then((data) => {
//         console.log('File 2', data)
//         return asyncReadFile('test3.txt')
//     })
//     .then((data) => {
//         console.log('File 3', data)
//     })
//     .catch(e => {
//         console.log(e)
//     })

async function getAllFiles() {
    const file1 = asyncReadFile('test1.txt')
    const file2 = asyncReadFile('test2.txt1')
    const file3 = asyncReadFile('test3.txt')

    const result = await Promise.all([file1, file2, file3]).catch((e) => e)
    console.log(result)
}

getAllFiles()
