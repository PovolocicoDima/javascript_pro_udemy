const url = 'https://pokeapi.co/api/v2/pokemon'

Promise.all([
    fetch(`${url}/1`),
    fetch(`${url}/2`),
    fetch(`${url}/3`),
    fetch(`${url}/4`),
    fetch(`https://test.com/lol`),
])
    .then((data) => {
        console.log('data')
    })
    .catch((e) => {
        console.log('have error')
        console.log(e)
    })
    .then((data) => {
        console.log('new data')
        console.log(data)
    })
    .then((data) => {
        console.log('here')
        console.log(data)
    })
    .catch((e) => {
        console.log(`err`)
    })
