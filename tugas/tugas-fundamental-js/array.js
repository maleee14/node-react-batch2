/**
 * 1. Diberikan sebuah array sebagai berikut :
 */
var dataPeserta = ["john", "laki-laki", "programmer", "30"]
var output = `Halo, nama saya ${dataPeserta[0]}. saya ${dataPeserta[1]} berumur ${dataPeserta[3]} bekerja sebagai seorang ${dataPeserta[2]}`
console.log(output)

console.log('-----------------------------------')

/**
 * 2. tambahkanlah data di bawah ini ke variabel sayuran ( gunakanlah method menambahkan nilai di belakang elemen terakhir di array ) 
 */

var sayuran = []
sayuran.push("Kangkung")
sayuran.push("Bayam")
sayuran.push("Buncis")
sayuran.push("Kubis")
sayuran.push("Timun")
sayuran.push("Seledri")
sayuran.push("Tauge")
console.log(sayuran)

console.log('-----------------------------------')

/**
 * 3.  urutkan ( gunakanlah method ) berdasarkan alfabet
 */

sayuran.sort()

for (let i = 0; i < sayuran.length; i++) {
    console.log( (i + 1) + ". " + sayuran[i])
    
}

console.log('-----------------------------------')

/**
 * 4. Tulis program Javascript sederhana yang menghasilkan sebuah subset dari sebuah string
 */

var word = "car";
var subsets = [];

for (let i = 0; i < word.length; i++) {
  let sub = "";
  for (let j = i; j < word.length; j++) {
    sub += word[j];
    subsets.push(sub);
  }
}

console.log(subsets); 

console.log('-----------------------------------')

/**
 * 5. tentukan jumlah dari kumpulan angka
 */

var numbers = [ 4,5,1,4,6,8,9,21]
var total = numbers.reduce((sum, num) => sum + num, 0);
console.log(total);

console.log('-----------------------------------')

/**
 * 6. terdapat variabel seperti dibawah ini
 */

var kumpulanAngka = [
 [1,3,5,7,8,9],
 [4,5,6,2,3,1],
 [6,7,8,1,3,5],
]

var hasil = kumpulanAngka.map((baris) => {
   return baris.reduce((sum, num) => sum + num, 0);
})

console.log(hasil)
