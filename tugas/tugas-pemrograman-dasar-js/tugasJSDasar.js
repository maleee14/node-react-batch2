/**
 * Soal No. 1 (Menyusun kata menjadi kalimat)
 */
var perkenalan =  "Nama saya adalah"
var nama = "Akmal"
var kata1 = "saya"
var kata2 = "berharap"
var kata3 = "untuk"
var kata4 = "menjadi"
var kata5 = "seorang"
var kata6 = "software"
var kata7 = "engineer"

const text = perkenalan + " " + nama + ". " + kata1 + " " + kata2 + " " + kata3 + " " + kata4 + " " + kata5 + " " + kata6 + " " + kata7 + "."
console.log(text)

console.log('-----------------------------------')

/**
 * Soal No.2 Kombinasi Huruf & Angka Password (Akses karakter dalam string)
 */
var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var angka = "0123456789"

// 1. password1 = "TES123"
var password1 = abjad[19] + abjad[4] + abjad[18] + abjad[19] + angka[1] + angka[2] + angka[3]
console.log("password ke satu: " + password1)

// 2. password2 = "B3B3K"
var password2 = abjad[1] + angka[3] + abjad[1] + angka[3] + abjad[10]
console.log("password ke dua: "+ password2 )

// 3. password3 = "R4H4514"
var password3 = abjad[17] + angka[4] + abjad[7] + angka[4] + angka[5] + angka[1] + angka[4]
console.log("password ke tiga: " + password3)

console.log('-----------------------------------')

/**
 * Soal No. 3 Mengurai Kalimat (Substring)
 */
var sentence2 = 'wow JavaScript is so cool';

var exampleFirstWord2 = sentence2.substring(0, 3);
var secondWord2 = sentence2.substring(4, 14);
var thirdWord2 = sentence2.substring(15, 17);
var fourthWord2 = sentence2.substring(18, 20);
var fifthWord2 = sentence2.substring(21, 25);

console.log('First Word: ' + exampleFirstWord2);
console.log('Second Word: ' + secondWord2);
console.log('Third Word: ' + thirdWord2);
console.log('Fourth Word: ' + fourthWord2);
console.log('Fifth Word: ' + fifthWord2);

console.log('-----------------------------------')

/**
 * Soal No. 4 Mengurai Kalimat dan Menentukan Panjang String
 */
var sentence3 = 'wow JavaScript is so cool';

var exampleFirstWord3 = sentence3.substring(0, 3);
var secondWord3 = sentence3.substring(4, 14);
var thirdWord3 = sentence3.substring(15, 17);
var fourthWord3 = sentence3.substring(18, 20);
var fifthWord3 = sentence3.substring(21, 25);

var firstWordLength = exampleFirstWord3.length
var secondWordLenght = secondWord3.length
var thirdWordLenght = thirdWord3.length
var fourthWordLenght = fourthWord3.length
var fifthWordLenght = fifthWord3.length

console.log('First Word: ' + exampleFirstWord3 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord3 + ', with length: ' + secondWordLenght);
console.log('Third Word: ' + thirdWord3 + ', with length: ' + thirdWordLenght);
console.log('Fourth Word: ' + fourthWord3 + ', with length: ' + fourthWordLenght);
console.log('Fifth Word: ' + fifthWord3 + ', with length: ' + fifthWordLenght);

console.log('-----------------------------------')

/**
 * Soal No. 5 Kode Password (Mencari indeks karakter)
 */
var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// 1. password pertama : HELLO
var kode1 = abjad.indexOf("H") + "-" + abjad.indexOf("E") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("O")
console.log("kode 1: " + kode1)

// 2. password kedua : WORLD
var kode2 = abjad.indexOf("W") + "-" + abjad.indexOf("O") + "-" + abjad.indexOf("R") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("D") 
console.log("kode 2: " + kode2)

// 3. password ketiga : IMREADY
var kode3 = abjad.indexOf("I") + "-" + abjad.indexOf("M") + "-" + abjad.indexOf("R") + "-" + abjad.indexOf("E") + "-" + abjad.indexOf("A")  + "-" + abjad.indexOf("D") + "-" + abjad.indexOf("Y")  
console.log("kode 3: " + kode3)

console.log('-----------------------------------')

/**
 * Soal No. 6 Mengubah string
 */
var pertama = "saya";
var kedua = "senang";
var ketiga = "belajar";
var keempat = "javascript";

var kata =  pertama + " " + kedua + " " + ketiga + " "
var kata = kata.replaceAll("s", "S")
var kata = kata.replace("g", "G")
var kata = kata.replace("b", "B")
var kata = kata.replace("r", "R")
var keempat = keempat.toUpperCase()

console.log(kata + keempat)

console.log('-----------------------------------')

/**
 * Soal No. 7 Konversi String ke integer
 */
var panjang= "12";
var lebar = "7";
var alas = "6";
var tinggi = "13";

var panjang = parseInt(panjang)
var lebar = parseInt(lebar)
var alat = parseInt(alat)
var tinggi = parseInt(tinggi)

const luasPersegiPanjang = panjang * lebar
const luasSegitiga = 0.5 * alas * tinggi

console.log("Luas Persegi Panjang: " + luasPersegiPanjang)
console.log("Luas Segitiga: " + luasSegitiga)

console.log('-----------------------------------')

/**
 * Soal No. 8 Konversi String menggunakan Number dan parseFloat
 */
var sisi= " 1 2 ";
var jariJari= "7.5";

var sisi = sisi.replaceAll(" ","")
var sisi = Number(sisi)

var jariJari = parseFloat(jariJari)

const luasPersegi = sisi * sisi
const luasLingkaran = 3.14 * jariJari * jariJari

console.log("Luas Persegi: " + luasPersegi)
console.log("Luas Lingkaran: " + luasLingkaran)



