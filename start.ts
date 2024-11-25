import * as readLine from 'readline-sync'

function greet(name : string) : string | void {
    return name ? name : 'wrong name' 
}

// let one: string = readLine.question('what is your name')

// console.log(greet(one))

function urvn(a: number, b: number, move: string) : number{
    switch (move) {
        case 'adding':
            return a+b
        case 'mult' :
            return a*b
        default:
            return 0
    }
}

console.log(urvn(10, 5, 'mult'))

const new_ur = (lst: number[]) : number=> {
    return lst.reduce((a, b) => {
        return a + b
    }, 0 )
}

console.log(new_ur([1,2,3,4,4]))

function fff(x: number, y: number): number;
function fff(x: number[]): number;
function fff(x: any, y?: any): any {
    if (y) {
        return (x > y ? x : y )
    } else {
        return Math.max(...x)
    }
}

console.log(fff(10, 40))
console.log(fff([10, 40, 34, 70]))



class Vehicle {
    make: string;
    model: string; 

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    move(): void {
        console.log('move from vechile' + this.make )
    }
}

class Car extends Vehicle {
    name: string;

    constructor(name: string) {
        super('first', name)
        this.name = name;
    }

    honk() {
        console.log('move from vechile' + this.make + this.name)
    }
}


class Bike extends Vehicle {
    constructor(make: string) {
        super(make, 'bike')
    }

    move() {
        console.log('move from vechile' + this.make + this.make)
        super.move()
    }
}

let bibi = new Car('haval')
bibi.honk()
bibi.move()

let lili = new Bike('huuiny')
lili.move()
console.log(lili.model, lili.make)


interface IVechile {
    make: string;
    model: string;
    year?: string;
}

interface IdescVechile {
    (ob: IVechile): string;
}


let desVec: IdescVechile = (ob: IVechile) => {
    return ob.make
}


let first: IVechile = {
    make: 'some',
    model: 'new'
}

console.log(first.make, desVec(first))


function RevArray<T>(arg: T[]): T[] {
    return arg.reverse()
}

let newE = RevArray

let arr = [1, 4, 4, 55, 6, 7]
let aaa = ['asdf', 'asdfas', 'fff']
console.log(RevArray(arr), newE(aaa))

class Stack<T> {
    items: T[] = []

    push(item: T): void {
        this.items.push(item)
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1]
    }

    pop(): T | undefined {
        return this.items.pop()
    }

    isEmpty(): boolean {
        return this.items.length == 0 ? true : false
    }
}

let newSt = new Stack<number>()

for (let i = 0; i < 4; i++) {
    newSt.push(i)
}

for (let i = 0; i < 4; i++) {
    console.log(newSt.peek(), newSt.pop(), newSt.isEmpty())
}


interface IKey<K, V> {
    key: K,
    value: V
}

function creaKV<K, V>(key: K, value: V): IKey<K, V> {
    return {key, value};
}

let pair = creaKV<string, number>('diomn', 45)
console.log(pair)

const test = {
    step: 0,

    stepUp() {
        this.step++
        console.log('step up', test.step)
    },

    stepDown() {
        this.step--
        this.step--
        console.log('step down', this.step)
    },

    showStep() {
        console.log('show step', this.step)
    }
}

test.stepUp()
test.stepDown()
test.showStep()