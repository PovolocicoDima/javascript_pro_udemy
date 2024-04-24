/**
 * Когда мы не хотим создавать подклассы, а хотим только добавить нестандартную
 * функциональность нашим объектам от основного класса. Либо нам это
 * нужно сделать только в каком-то конкретном месте. То мы можем воспользоваться
 * миксином и подлить свойства / методы, которые необходимы в данный момент времени.
 */

const fly = {
    fly() {
        return `${this.name} fies!`
    },
    land() {
        return `${this.name} lands`
    },
}

class Animal {
    constructor(name, species) {
        this.name = name
        this.species = species
    }

    greet() {
        return `${this.name} says Hi!`
    }
}

const simpleAnimal = new Animal('Dima', 'Tiger')
const bernie = new Animal('Bernie', 'Pelican')
Object.assign(bernie, fly)
console.log(bernie.land())
console.log(simpleAnimal.greet())
