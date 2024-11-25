
function countBy(x, n) {
    let z = [];
    z.push(x);
    let newX = x;
    for (let i = 0; z.length < n; i++) {
        newX = newX + x
        z.push(newX)
    }
    return z
  }

countBy(1, 10)
countBy(2, 5)


function Nam(name) {
    let newN = name.split(' ');
    let f = newN[0][0]
    let s = newN[1][0]
    return `${f}.${s}.`.toUpperCase()
}

console.log(Nam('Tory lane'))
Nam('David Dux')

function litres(time) {
    let newt = Math.floor(time / 2)
    return newt;
  }

console.log(litres(3))
console.log('litres =', litres(6.7))

function squareSum(numbers){
    let n = numbers.reduce((a, b) => a + b ** 2);
    return n
  }

console.log(squareSum([0, 3, 4, 5]))
console.log(squareSum([2,]));
console.log(squareSum([1, 2]))