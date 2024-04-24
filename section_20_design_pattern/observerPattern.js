/**
 * Observer Pattern
 *
 * The Observ Pattern enables a subscription model where objects (observers)
 * 'listen' to events and get notified when events occur.
 *
 * Real-World examples:
 * - Javascript's event handling in browsers (DOM event listeners) is build upon
 *   the Observer Pattern
 * - Vue.js uses a reactive data model where component re-renders are triggered
 *   by data changes, which is an application of the Observer Patters.
 * - RxJS is a library that provides utilities for working with observables, making
 *   extensive use of the Observer Pattern
 *
 */

class Subject {
    constructor() {
        this.observers = []
    }

    subscribe(fn) {
        this.observers.push(fn)
    }

    unsubscribe(fn) {
        this.observers.filter((o) => o !== fn)
    }

    notify(data) {
        this.observers.forEach((fn) => fn(data))
    }
}

const observer1 = (data) => console.log(`Observer1! ${data}`)
const observer2 = (data) => console.log(`Observer2! ${data}`)
const observer3 = (data) => console.log(`Observer3! ${data}`)

// const subject = new Subject()
// subject.subscribe(observer1)
// subject.subscribe(observer2)
// subject.subscribe(observer3)
// subject.notify('click')

class Blog {
    constructor() {
        this.subscribers = []
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber)
    }

    unsubscribe(subscriber) {
        this.subscribers = this.subscribers.filter((s) => s !== subscriber.name)
    }

    publish(post) {
        this.subscribers.forEach((s) => s.notify(post))
    }
}

class Subscriber {
    constructor(name) {
        this.name = name
    }

    notify(post) {
        console.log(`subscriber - ${this.name} is reading new post: ${post}`)
    }
}

const blog = new Blog()
const dima = new Subscriber('Dima')
const vasea = new Subscriber('Vasea')
blog.subscribe(dima)
blog.subscribe(vasea)
blog.publish(`New POST!`)
