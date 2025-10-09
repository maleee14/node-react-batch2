/**
 * 1. (Hitung Bangun Datar)  buatlah function perhitungan bangun datar berdasarkan kode dibawah yang didalamnya ada function luas dan keliling terapkan first class function
 */

function hitungPersegi(s) {
    const luas = (s) => s * s
    const keliling = (s) => 4 * s

    console.log("Luas Persegi:", luas(s))
    console.log("Keliling Persegi:", keliling(s))
}

function hitungPersegiPanjang(p, l) {
    const luas = (p, l) => p * l
    const keliling = (p, l) => 2 * (p + l)

    console.log("Luas Persegi Panjang:", luas(p, l))
    console.log("Keliling Persegi Panjang:", keliling(p, l))
}

hitungPersegi(8)
hitungPersegiPanjang(12,7)

console.log('-----------------------------------')

/**
 * 2. (Hitung Bangun Ruang)  buatlah function perhitungan bangun ruang berdasarkan kode dibawah yang didalamnya ada function volume dan luas permukaan terapkan first class function
 */

function hitungKubus(s) {
    const luas = (s) =>  6 * s * s 
    const keliling = (s) => 4 * s

    console.log("Luas Kubus:", luas(s))
    console.log("Keliling Kubus:", keliling(s))
}

function hitungBalok(p, l, t) {
    const luas = (p, l, t) => 2 * (p * l + p * t + l * t)
    const keliling = (p, l) => 2 * (p + l)

    console.log("Luas Balok:", luas(p, l, t))
    console.log("Keliling Balok:", keliling(p, l))
}

hitungKubus(8)
hitungBalok(12,7, 5)

console.log('-----------------------------------')

/**
 * 3. urutkan data diatas berdasarkan umur lalu munculkan hanya nama saja beserta nomor urut nya
 */

var people =[
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
]

var filterByAge = people.sort((a, b) => a.age - b.age)

filterByAge.forEach((fa, index) => {
    console.log(`${index + 1}. ${fa.name}`)
})

console.log('-----------------------------------')

/**
 * 4. tampilkan data phones yang memiliki warna black dan dan urutkan berdasarkan tahun terkecil hingga terbesar lalu tampilkan namanya saja dengan recursive function dan tampilkan colors nya
 */

var phones=[
  {name: "Samsung Galaxy A52", brand: "Samsung", year: 2021, colors: ["black", "white"]},
  {name: "Redmi Note 10 Pro", brand: "Xiaomi", year: 2021, colors: ["white", "blue"]},
  {name: "Redmi Note 9 Pro", brand: "Xiaomi", year: 2020, colors: ["white", "blue", "black"]},
  {name: "Iphone 12", brand: "Apple", year: 2020, colors: ["silver", "gold"]},
  {name: "Iphone 11", brand: "Apple", year: 2019, colors: ["gold", "black", "silver"]},
]

function displayPhonesRecursive(phones, index = 0) {
  if (index >= phones.length) {
    return
  }

  const filterPhone = phones.filter(function (p) {
    return Array.isArray(p.colors) && p.colors.includes("black")
  }).sort((a,b) => a.year - b.year)

  const phone = filterPhone[index]
  console.log(`${index + 1}. ${phone.name}, colors available : ${phone.colors.join(", ")}`)

  // recursive call
  displayPhonesRecursive(filterPhone, index + 1)
}

displayPhonesRecursive(phones)
