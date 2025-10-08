// Function sederhana
function hello() {
    console.log("Hallo World!")
}
hello()

console.log('-----------------------------------')

// Function dengan parameter dan parameter default
function equalsNumber(a, b = 10) {
    return a + b
}
console.log(equalsNumber(2, 5))
console.log(equalsNumber(2))

console.log('-----------------------------------')

// Anonymous function
var timesNumber = function (a, b) {
    return a * b
}
console.log(timesNumber(5,5))

console.log('-----------------------------------')

//Arrow function
const minusNumber = (a, b) => a - b
console.log(minusNumber(10,4))