// Recursive function
function countDown(number) {
    console.log(number)

    var newNumber = number - 1

    if (newNumber > 0) {
        countDown(newNumber)
    }
}

countDown(7)

// First-class function
function HitungLingkarang(radius) {
    var pi = 22/7

   const luas = (r) => pi * r * r
   const keliling = (r) => 2* pi * r

   console.log("Luas:", luas(radius))
   console.log("Keliling:", keliling(radius))
}

HitungLingkarang(7)

// Currying function
function tambah(a, b) {
    return a+ b
} // Sebelum menerapkan currying function

console.log(tambah(2,2))

function equals(a) {
    return function(b) {
        return a + b
    }
} // Setelah menerapkan currying function

console.log(equals(2)(2))