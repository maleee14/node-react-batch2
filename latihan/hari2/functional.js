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
}