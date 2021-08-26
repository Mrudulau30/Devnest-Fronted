var a=10;

console.log(a);

let s: string = 'hello'
let b: boolean = true
let nu: null = null
let un: undefined = undefined

let arrayOfNumber: number[] = [1, 2, 3]
let arrayOfString: string[] = ['a', 'b', 'c']

console.log(arrayOfNumber)
console.log(arrayOfString)

// node main.js
// tsc main.ts

let arrayofMixed: (number | string | boolean)[] = [1, 2, 'a', true]

class App {
    printHello() {
        console.log('Hello')
    }
}

const app = new App()
app.printHello()

function add(a: number, b: number): number {
    return a + b
}

add(1, 3)

export {}