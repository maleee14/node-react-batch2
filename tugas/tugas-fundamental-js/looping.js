/**
 * 1. Pada soal ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while
 */

console.log("LOOPING PERTAMA");
var i = 1;
while (i <= 20) {
  if (i % 2 === 0) {
    console.log(`${i} - I love coding`);
  }
  i++;
}

console.log("LOOPING KEDUA");
var i = 20;
do {
  if (i % 2 === 0) {
    console.log(`${i} - I will become a MERN Stack developer`);
  }
  i--;
} while (i > 0);

console.log("-----------------------------------");

/**
 * 2. Pada soal ini kamu dimint untuk melakukan looping secara selang seling
 */

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} - Angka Genap`);
  } else {
    console.log(`${i} - Angka Ganjil`);
  }
}

console.log("-----------------------------------");

/**
 * 3. Pada soal ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for
 */

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 2 !== 0) {
    console.log(`${i} - I Love Coding`);
  } else if (i % 3 === 0 && i % 2 === 0) {
    console.log(`${i} - ToT`);
  } else if (i % 2 === 0) {
    console.log(`${i} - Berkualitas`);
  } else {
    console.log(`${i} - Santai`);
  }
}

console.log("-----------------------------------");

/**
 * Kali ini kamu diminta untuk menampilkan sebuah segitiga dengan tanda pagar (#) dengan dimensi tinggi 7 dan alas 7
 */
for (let i = 1; i < 8; i++) {
  let space = "";
  for (let j = 0; j < i; j++) {
    space += "#";
  }
  console.log(space);
}

console.log("-----------------------------------");

/**
 * 5. pada soal ini kamu diminta untuk menampilkan huruf konsonan saja dari variabel di bawah ini dengan looping
 */

var sentence = "Fullstack Developer";
var vowels = "aiueoAIUEO";

for (var i = 0; i < sentence.length; i++) {
  var huruf = sentence[i];
  if (!vowels.includes(huruf) && huruf !== " ") {
    console.log(huruf);
  }
}
