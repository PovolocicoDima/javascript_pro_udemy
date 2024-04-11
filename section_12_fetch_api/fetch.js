const POKE_URL = 'https://pokeapi.co/api/v2/pokemon/blah'

async function fetchPokemon() {
    try {
        const response = await fetch(POKE_URL)
        if (response.ok) {
            const data = await response.json()

            console.log(data)
        } else {
            throw new Error(`smth went wrong, statuscode: ${response.status}`)
        }
    } catch (e) {
        console.log(`Something went wrong with this request`)
        console.log(e)
    }
}

fetchPokemon()

// fetch(POKE_URL)
//     .then((data) => data.json())
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e))
