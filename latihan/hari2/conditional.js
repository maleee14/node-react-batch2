// Conditional If
const boolean = false;

if (boolean === true) {
    console.log("Hasil adalah true")
}

if (boolean === false) {
    console.log("Hasil adalah false")
}

console.log('-----------------------------------')

// Conditional if else
var weather = "mendung"
if (weather == "cerah") {
    console.log("Cuaca hari ini cerah")
} else {
    console.log("Cuaca hari ini tidak menentu")
}

console.log('-----------------------------------')

// Conditional if else dan else if
if (weather == "cerah") {
    console.log("Cuaca hari ini cerah")
} else if (weather == "mendung"){
    console.log("Cuaca hari ini mendung")
} else {
    console.log("Cuaca hari ini tidak menentu")
}

console.log('-----------------------------------')

//Conditional Nested if
var miniMarketStatus = "open"
var telur = "ready"
var buah = "soldout"

if (miniMarketStatus == "open") {
    console.log("Saya akan membeli telur dan buah")
    if (telur == "soldout" && buah == "soldout") {
        console.log("telur dan buah habis, saya tidak jadi belanja")
    } else if (telur == "soldout" || buah == "soldout") {
        if (telur == "soldout") {
            console.log("telur habis, buah tersedia")
        } else if (buah == "soldout") {
            console.log("buah habis, telur tersedia")
        }
        console.log("belanjaan saya tidak lengkap")
    }
} else {
    console.log("minimarket tutup, saya pulang aja")
}

console.log('-----------------------------------')

//Conditional switch case
var carColor = "hitam" 

switch (carColor) {
    case "merah":
        console.log("Mobil itu berwarna merah")
        break;
    case "biru":
        console.log("Mobil itu berwarna biru")
        break;
    case "kuning":
        console.log("Mobil itu berwarna kuning")
        break;
    case "ungu":
        console.log("Mobil itu berwarna ungu")
        break;
    default:
        console.log(`Mobil itu berwarna ${carColor}`)
        break;
}

console.log('-----------------------------------')

// Teranry Operator
const age = 17
var vote = age >= 17 ? "Bisa vote" : "Belum bisa vote"
console.log(vote)

const number = 2
var oddEvent = number % 2 === 0 ? "Angka genap" : "Angka ganjil"
console.log(oddEvent)

console.log('-----------------------------------')