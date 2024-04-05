function* evens(n) {
    while (true) {
        yield n
        n += 2
    }
}

const gen = evens(5)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)

function* myCatsGenerator() {
    yield 'Chip'
    yield 'Dasha'
    yield 'CAT'
    yield 'Blue'
}

const randomCat = myCatsGenerator()
// console.log(randomCat.next().value)
// console.log(randomCat.next().value)
// console.log(randomCat.next().value)
// console.log(randomCat.next().value)
// console.log(randomCat.next().done)

function* fibonacci() {
    let a = 0
    let b = 1

    while (true) {
        yield a
        ;[a, b] = [b, a + b]
    }
}

const fibGen = fibonacci()
// console.log(fibGen.next().value)
// console.log(fibGen.next().value)

const allImages = Array.from(
    { length: 1000 },
    (_, i) => `https://placeimg.com/640/480/any?image=${i}`
)

function* imageGenerator(images, batchSize = 10) {
    let currentIndex = 0
    while (currentIndex < images.length) {
        yield images.slice(currentIndex, currentIndex + batchSize)
        currentIndex += batchSize
    }
}

const imgGen = imageGenerator(allImages)

// console.log(imgGen.next().value)
// console.log(imgGen.next().value)
// console.log(imgGen.next().value)

const result = Array.from(
    { length: 1000 },
    (el, idx) => `https://test.com/user/${idx}`
)
console.log(result)
