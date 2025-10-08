var array = [1, 2, 3, "apel", "mangga", false, true]
console.log(array[0])
console.log(array[3])
console.log(array[5])
console.log(array)

console.log('-----------------------------------')

/**
 * Array Method
 */

//length: menentukan panjang data dari array
console.log(array.length)

//push: menambah 1 nilai ke array ke index paling belakang
array.push(3.5)
console.log(array)

//pop: menghapus 1 nilai dari array index paling belakang
array.pop()
console.log(array)

//unshift: menambah 1 nilai ke array index paling depan (index 0)
array.unshift(3.5)
console.log(array)

//shift: menghapus 1 nilai dari array index paling depan (index 0)
array.shift()
console.log(array)

//join: menggabungkan seluruh element array menjadi sebuah string dan mengambil parameter sebagai simbol penyambung antar elemen
console.log(array.join("-"))

//split: memecah string dan mengembalikan array sesuai dengan separator / pemisah yang didefinisikan
var fruit = "Apel Jeruk Mangga Pisang"
var arrayFruit = fruit.split(" ")
console.log(arrayFruit)

//sort: mengurutkan elemen di dalam array sesuai alphabet
console.log(arrayFruit.sort())

//slice: mengambil beberapa lapis data
console.log(arrayFruit.slice(0,3))

//splice: mengubah nilai array dengan menghapus dan/atau menambah nilai baru ke array
arrayFruit.splice(3, 2, "Lemon", "Kiwi")
console.log(arrayFruit)

console.log('-----------------------------------')

//Looping array
for (let i = 0; i < arrayFruit.length; i++) {
    console.log(`Buah ke-${i + 1} adalah buah ${arrayFruit[i]}`)    
}

console.log('-----------------------------------')

var i = 0
while (i < arrayFruit.length) {
    console.log("Buah ke-" + (i + 1) + " adalah buah " + arrayFruit[i])
    i++
}
