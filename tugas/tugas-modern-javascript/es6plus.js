/**
 * (Arrow Function)
buatlah dua fungsi yaitu fungsi luas lingkaran dan keliling lingkaran dengan arrow function (wajib ada parameternya)  lalu gunakan let atau const di dalam soal ini
 */

const pi = 22/7
const luasLingkaran = (r) => pi * r * r
const kelilingLingkaran = (r) => 2 * pi * r

console.log("Luas Lingkaran", luasLingkaran(7))
console.log("Keliling Lingkaran", kelilingLingkaran(7))

console.log('-----------------------------------')

/**
 * 1. Tulislah sebuah arrow function dengan nama introduce yang parameternya menggunakan rest parameter
 */
const introduce = (...args) => {
    const [name, age, gender, job] = args
    const call = gender.toLowerCase() === "laki-laki" ? "Pak" : "Bu"

    return `${call} ${name} adalah seorang ${job} yang berusia ${age} tahun`
}
const perkenalanJohn = introduce("john", "30", "Laki-Laki", "penulis")
console.log(perkenalanJohn)

console.log('-----------------------------------')

/**
 * 2. Tulislah sebuah arrow function dengan nama introduce yang parameternya menggunakan rest parameter
 */
const perkenalanSarah = introduce("sarah", "28", "Perempuan", "guru")
console.log(perkenalanSarah) 

console.log('-----------------------------------')

/**
 * 3. return dalam fungsi di bawah ini masih menggunakan object literal dalam ES5, ubahlah menjadi bentuk yang lebih sederhana di ES6.
 */

const newFunction = (firstName, lastName) => ({
    firstName,
    lastName,
    fullName: function(){
      console.log(`${firstName} ${lastName}`)
  }
})

console.log(newFunction("John", "Doe").firstName)
console.log(newFunction("Richard", "Roe").lastName)
newFunction("William", "Imoh").fullName()

console.log('-----------------------------------')

/**
 * 4. (Menggunakan Destructuring) Diberikan sebuah objek sebagai berikut:
 */
let phone = {
   name: "Galaxy Note 20",
   brand: "Samsung",
   year: 2020,
   colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
}

const {name:phoneName, brand:phoneBrand, year, colors} = phone
const [colorBronze, colorWhite, colorBlack] = colors

console.log(phoneBrand, phoneName, year, colorBlack, colorBronze)

console.log('-----------------------------------')

/**
 * 5. (Menggunakan Spread Operator)
 */
let warna = ["biru", "merah", "kuning" , "hijau"]
let dataBukuTambahan= {
  penulis: "john doe",
  tahunTerbit: 2020 
}

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul:["hitam"]
}

const books = {...buku, ...dataBukuTambahan, warnaSampul: [...buku.warnaSampul, ...warna]}

console.log(books)

console.log('-----------------------------------')

/**
 * 6. (Mengisi data products)
 */

function addProducts(samsung, newProducts) {
    const result = {...samsung, products: [...samsung.products, ...newProducts]}

    return result
}

let samsung ={
 name: "Samsung",
 products :[
  {name: "Samsung Galaxy Note 10", colors: ["black", "gold", "silver"]},
  {name: "Samsung Galaxy Note 10s", colors: ["blue", "silver"]},
  {name: "Samsung Galaxy Note 20s", colors: ["white", "black"]}
 ]
 }

let newProducts = [
 {name: "Samsung Galaxy A52", colors: ["white", "black"]},
 {name: "Samsung Galaxy M52", colors: ["blue", "grey", "white"]}
]

samsung = addProducts(samsung, newProducts)
console.log(samsung)

console.log('-----------------------------------')

/**
 * 7. (Konversi Object) 
Buatlah sebuah function (dengan arrow function) . function tersebut menerima tiga parameter yang pertama adalah nama, yang kedua adalah domisili, dan yang ketiga adalah umur. Function akan mengolah parameter menjadi object literal. 
Gunakanlah fitur ES6 berikut ini: Destructuring array, enhanced object Literal, dan arrow function
 */

const konversiObjec = (nama, domisili, umur) => {
    return {
        nama,
        domisili,
        umur
    }
}

let data = ["Bondra", "Medan", 25]
const [nama, domisili, umur] = data

console.log(konversiObjec(nama, domisili, umur))

console.log('-----------------------------------')

/**
 * 8. Buatlah sebuah function graduate yang bisa menerima banyak parameter berupa data kumpulan siswa dan kelasnya. function akan mengembalikan sebuah object yang memfilter data input sesuai dengan kelompok kelas. Gunakan fitur ES6 berikut : Rest parameter, spread operator, arrow function
 */
const graduate = (...data) => {
  const allStudents = [].concat(...data);
  const result = {};

  allStudents.forEach(({ name, class: className }) => {
    if (!result[className]) {
      result[className] = [];
    }

    result[className].push(name);
  });

  return result;
};

const data1 = [
  { name: "Ahmad", class: "adonis"},
  { name: "Regi", class: "laravel"},
  { name: "Bondra", class: "adonis"},
  { name: "Iqbal", class: "vuejs" },
  { name: "Putri", class: "laravel" }
]

const data2 = [
  { name: "Yogi", class: "react"},
  { name: "Fikri", class: "agile"},
  { name: "Arief", class: "agile"}
]

console.log(graduate(data1));
console.log(graduate(data2));

const test = (name, age, gender, job) => {
    if (gender == "Laki-laki") {
        return `Pak ${name} adalah seorang ${job} yang berusia ${age} tahun`
    } else {
        return `Bu ${name} adalah seorang ${job} yang berusia ${age} tahun`
    }
    
}
const kenal = test("john", "30", "Laki-laki", "penulis")
console.log(kenal)

console.log('-----------------------------------')
