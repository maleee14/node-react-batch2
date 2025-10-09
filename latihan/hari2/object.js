// Deklarasi Objek
var car = {
    brand:  "Ferrari",
    type: "Sport Car",
    price: 50000000,
    "horse power" : 986
}

// Akses Nilai Pada Object
console.log(car.brand)
console.log(car["horse power"])

//Array of Object
var people =[
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
]

/**
 * Array Iteration
 */

//foreach
people.forEach(function(p) {
    console.log(`name ${p.name}`)
})

//map
var arrayJob = people.map(function(p){
    return p.job
})

console.log(arrayJob)

//filter
var filterPeople = people.filter(function(p) {
    return p.age > 25
})

console.log(filterPeople)