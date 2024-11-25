"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name) {
    return name ? name : 'wrong name';
}
// let one: string = readLine.question('what is your name')
// console.log(greet(one))
function urvn(a, b, move) {
    switch (move) {
        case 'adding':
            return a + b;
        case 'mult':
            return a * b;
        default:
            return 0;
    }
}
console.log(urvn(10, 5, 'mult'));
var new_ur = function (lst) {
    return lst.reduce(function (a, b) {
        return a + b;
    }, 0);
};
console.log(new_ur([1, 2, 3, 4, 4]));
function fff(x, y) {
    if (y) {
        return (x > y ? x : y);
    }
    else {
        return Math.max.apply(Math, x);
    }
}
console.log(fff(10, 40));
console.log(fff([10, 40, 34, 70]));
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model) {
        this.make = make;
        this.model = model;
    }
    Vehicle.prototype.move = function () {
        console.log('move from vechile' + this.make);
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(name) {
        var _this = _super.call(this, 'first', name) || this;
        _this.name = name;
        return _this;
    }
    Car.prototype.honk = function () {
        console.log('move from vechile' + this.make + this.name);
    };
    return Car;
}(Vehicle));
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike(make) {
        return _super.call(this, make, 'bike') || this;
    }
    Bike.prototype.move = function () {
        console.log('move from vechile' + this.make + this.make);
        _super.prototype.move.call(this);
    };
    return Bike;
}(Vehicle));
var bibi = new Car('haval');
bibi.honk();
bibi.move();
var lili = new Bike('huuiny');
lili.move();
console.log(lili.model, lili.make);
var desVec = function (ob) {
    return ob.make;
};
var first = {
    make: 'some',
    model: 'new'
};
console.log(first.make, desVec(first));
function RevArray(arg) {
    return arg.reverse();
}
var newE = RevArray;
var arr = [1, 4, 4, 55, 6, 7];
var aaa = ['asdf', 'asdfas', 'fff'];
console.log(RevArray(arr), newE(aaa));
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.isEmpty = function () {
        return this.items.length == 0 ? true : false;
    };
    return Stack;
}());
var newSt = new Stack();
for (var i = 0; i < 4; i++) {
    newSt.push(i);
}
for (var i = 0; i < 4; i++) {
    console.log(newSt.peek(), newSt.pop(), newSt.isEmpty());
}
function creaKV(key, value) {
    return { key: key, value: value };
}
var pair = creaKV('diomn', 45);
console.log(pair);
var test = {
    step: 0,
    stepUp: function () {
        this.step++;
        console.log('step up', this.step);
    },
    stepDown: function () {
        this.step--;
        this.step--;
        console.log('step down', this.step);
    },
    showStep: function () {
        console.log('show step', this.step);
    }
};
test.stepUp();
test.stepDown();
test.showStep();


