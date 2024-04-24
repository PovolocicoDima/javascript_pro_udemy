/**
 * Singleton Pattern
 *
 * The Singleton Pattern assures only one instance of a class
 *
 * The Real-World Examples:
 *
 * - Redux store in React application acts as a Singleton, ensuring a
 *   singular store instance
 * - Node.js module system caches modules, so repeated require calls for the same module
 *   don't recreate the module but return the cached version, acting like a Singleton
 */

const ChickenFarm = (() => {
    let instance
    const createInstance = () => ({ totalChickens: 100 })
    return {
        getInstance: () => {
            if (!instance) {
                instance = createInstance()
            }

            return instance
        },
    }
})()

console.log(ChickenFarm.getInstance())
console.log(ChickenFarm.getInstance())
console.log(ChickenFarm.getInstance() === ChickenFarm.getInstance())

class DatabaseConnection {
    constructor() {
        if (!DatabaseConnection.instance) {
            this.connection = this.createConnection()

            DatabaseConnection.instance = this
        }

        return DatabaseConnection.instance
    }

    createConnection() {
        console.log(`Creating connection to database`)
        return { connection: `I am the database connection object` }
    }
}

const db = new DatabaseConnection()
const db2 = new DatabaseConnection()
