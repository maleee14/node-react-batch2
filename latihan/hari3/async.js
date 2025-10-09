/**
 * Callback
 */
function periksaDokter(nomerAntri, callback) {
    if (nomerAntri >= 10) {
        callback(false)
    } else if (nomerAntri < 10){
        callback(true)
    }
}

periksaDokter(5, function(check) {
    if (check) {
        console.log("sebentar lagi giliran saya")
    } else {
        console.log("saya jalan-jalan dulu")
    }
})

//Callback dengan setTimeout
function periksaAntrianDokter(nomerAntri, callback) {
    console.log(`sekarang antrian ke-${nomerAntri}`)

    setTimeout(function () {
        if (nomerAntri === 10) {
            console.log("saya masuk ruangan dokter")
            callback(0)
        } else {
            console.log("saya masih menunggu")
            callback(nomerAntri + 1)
        }
    }, 1000)
}

periksaAntrianDokter(9, function(nomerAntriBaru) {
    return nomerAntriBaru
})

// Callback Hell
periksaAntrianDokter(7, function(nomerAntriBaru) {
    periksaAntrianDokter(nomerAntriBaru, function(nomerAntriBaru) {
        periksaAntrianDokter(nomerAntriBaru, function(nomerAntriBaru) {
            periksaAntrianDokter(nomerAntriBaru, function(nomerAntriBaru) {
                return nomerAntriBaru
            })
        })
    })
})

//Recrusive function callback
function execute(nomerAntri) {
    periksaAntrianDokter(nomerAntri, function(nomerAntriBaru) {
        if (nomerAntriBaru !== 0) {
            execute(nomerAntriBaru)
        }
    })
}

execute(6)

/**
 * Promise
 */

var isMomHappy = false

var willGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: "Samsung",
                color: "Black"
            }
            resolve(phone)
        } else {
            var reason = new Error("mom is not happy")
            reject(reason)
        }
    }
)

function askMom() {
    willGetNewPhone
        .then(function (fulfilled){
            console.log(fulfilled)
        })
        .catch(function (error){
            console.log(error.message)
        })
}

askMom()