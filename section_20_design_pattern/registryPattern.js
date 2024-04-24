/**
 * Registry Pattern
 *
 * The Registry Pattern is a design pattern used to store and retrieve instance
 * of objects. It acts like a central place to manage the objects, and it is
 * particularly useful when you want to access the instances from differen parts
 * of your application without needing to pass them around as parameters.
 *
 * Real-Worl examples:
 * - Websockets
 */

class Chicken {
    constructor(id, name, age, breed) {
        this.id = id
        this.name = name
        this.age = age
        this.breed = breed
    }
}

class ChickenRegistry {
    #chickens = new Map()

    addChicken(chicken) {
        if (!chicken.id) {
            throw new Error('Chicken must have an id')
        }

        this.#chickens.set(chicken.id, chicken)
    }

    getChicken(id) {
        return this.#chickens.get(id)
    }

    getAllChickens() {
        return [...this.#chickens.values()]
    }
}

const chicken1 = new Chicken(1, 'Henry', 3, 'new')
const chicken2 = new Chicken(2, 'Henrietta', 2, 'old')

const farm = new ChickenRegistry()
farm.addChicken(chicken1)
farm.addChicken(chicken2)
console.log(farm.getAllChickens())
