// Looping for-Loop
for (i = 1 ; i < 10; i++) {
    console.log(`Iterasi ke-${i}`)   
}

var word = "javascript"
for (i = 0 ; i < word.length; i++) {
    console.log(word[i])   
}

var count = 0
for (var i = 5 ; i > 0; i--) {
    count += i  
    console.log(`Jumlah saat ini: ${count}`)   
}
console.log(`Jumlah terakhir: ${count}`)

console.log('-----------------------------------')

// Looping while-Loop
var flag = 1;
while (flag < 10) {
    console.log(`Iterasi ke-${flag}`) 
    flag++
}

var flag = 9;
do {
    console.log(`Iterasi ke-${flag}`) 
    flag--
} while(flag > 0)