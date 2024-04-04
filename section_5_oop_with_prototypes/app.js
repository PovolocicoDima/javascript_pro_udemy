const grandparent = {
    greet() {
        return `Hi there!!`
    }
}

const parent = {
    color: 'purple',
    sing() {
        return `LA LA LA !`
    },
    __proto__: grandparent
}

const child = {
    num: 2,
    __proto__: parent
}

console.log(child.greet())