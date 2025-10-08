/**
 * 1. buatlah variabel seperti di bawah ini:
 */

var sentence = "Saya Sangat Senang Sekali Belajar Programming dan Saya Juga Senang Belajar Javascript";
if (sentence.length < 10) {
    console.log("Pendek")
} else if (sentence.length <= 30) {
    console.log("Sedang")
} else {
    console.log("Panjang")
}

console.log('-----------------------------------')

/**
 * 2. buatlah variabel seperti di bawah ini
 */

var nilai = 20

if (nilai >= 80) {
    console.log("A")
} else if (nilai >= 70 && nilai < 80) {
    console.log("B")
} else if (nilai >= 60 && nilai < 70) {
    console.log("C")
} else if (nilai >= 50 && nilai < 60) {
    console.log("D")
} else if (nilai < 50) {
    console.log("E")
}

console.log('-----------------------------------')

/**
 * 3. ganti tanggal ,bulan, dan tahun sesuai dengan tanggal lahir anda dan buatlah switch case
 */

var tanggal = 14;
var bulan = 9;
var tahun = 2002;

switch (bulan) {
    case 1:
        console.log(`${tanggal} Januari ${tahun}`)
        break;
    case 2:
        console.log(`${tanggal} Februari ${tahun}`)
        break;
    case 3:
        console.log(`${tanggal} Maret ${tahun}`)
        break;
    case 4:
        console.log(`${tanggal} April ${tahun}`)
        break;
    case 5:
        console.log(`${tanggal} Mei ${tahun}`)
        break;
    case 6:
        console.log(`${tanggal} Juni ${tahun}`)
        break;
    case 7:
        console.log(`${tanggal} Juli ${tahun}`)
        break;
    case 8:
        console.log(`${tanggal} Agustus ${tahun}`)
        break;
    case 9:
        console.log(`${tanggal} September ${tahun}`)
        break;
    case 10:
        console.log(`${tanggal} Oktober ${tahun}`)
        break;
    case 11:
        console.log(`${tanggal} November ${tahun}`)
        break;
    case 12:
        console.log(`${tanggal} Desember ${tahun}`)
        break;
    default:
        console.log("Bulan salah. tolong cek lagi")
        break;
}
