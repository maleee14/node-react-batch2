/**
 * Callback
 */
function periksaDokter(nomerAntri, callback) {
  if (nomerAntri >= 10) {
    callback(false);
  } else if (nomerAntri < 10) {
    callback(true);
  }
}

periksaDokter(5, function (check) {
  if (check) {
    console.log("sebentar lagi giliran saya");
  } else {
    console.log("saya jalan-jalan dulu");
  }
});

//Callback dengan setTimeout
function periksaAntrianDokter(nomerAntri, callback) {
  console.log(`sekarang antrian ke-${nomerAntri}`);

  setTimeout(function () {
    if (nomerAntri === 10) {
      console.log("saya masuk ruangan dokter");
      callback(0);
    } else {
      console.log("saya masih menunggu");
      callback(nomerAntri + 1);
    }
  }, 1000);
}

periksaAntrianDokter(9, function (nomerAntriBaru) {
  return nomerAntriBaru;
});

// Callback Hell
periksaAntrianDokter(7, function (nomerAntriBaru) {
  periksaAntrianDokter(nomerAntriBaru, function (nomerAntriBaru) {
    periksaAntrianDokter(nomerAntriBaru, function (nomerAntriBaru) {
      periksaAntrianDokter(nomerAntriBaru, function (nomerAntriBaru) {
        return nomerAntriBaru;
      });
    });
  });
});

//Recrusive function callback
function execute(nomerAntri) {
  periksaAntrianDokter(nomerAntri, function (nomerAntriBaru) {
    if (nomerAntriBaru !== 0) {
      execute(nomerAntriBaru);
    }
  });
}

execute(6);

/**
 * Promise
 */

var isMomHappy = false;

var willGetNewPhone = new Promise(function (resolve, reject) {
  if (isMomHappy) {
    var phone = {
      brand: "Samsung",
      color: "Black",
    };
    resolve(phone);
  } else {
    var reason = new Error("mom is not happy");
    reject(reason);
  }
});

function askMom() {
  willGetNewPhone
    .then(function (fulfilled) {
      console.log(fulfilled);
    })
    .catch(function (error) {
      console.log(error.message);
    });
}

askMom();

//Promise dengan parameter
function periksaDataPasien(nomorIdPasien) {
  var dataPasien = [
    {
      id: 1,
      nama: "John",
      jenisKelamin: "Laki-laki",
    },
    {
      id: 2,
      nama: "Michael",
      jenisKelamin: "Laki-laki",
    },
    {
      id: 3,
      nama: "Sarah",
      jenisKelamin: "Perempuan",
    },
    {
      id: 4,
      nama: "Frank",
      jenisKelamin: "Laki-laki",
    },
  ];

  return new Promise(function (resolve, reject) {
    var pasien = dataPasien.find((x) => x.id === nomorIdPasien);
    if (pasien === undefined) {
      reject("dara pasien tidak ada");
    } else {
      resolve(pasien);
    }
  });
}

periksaDataPasien(1)
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err.message);
  });

/**
 * Async Await
 */

function doAsync() {
  return new Promise((resolve, reject) => {
    var check = true;
    if (check) {
      resolve("berhasil");
    } else {
      reject("gagal");
    }
  });
}

// Penggunaan async await
async function hello() {
  var result = await doAsync();
  console.log(result);
}

hello();

// Menerapkan error handling
async function helloWithErrorHandling() {
  try {
    var result = await doAsync();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

helloWithErrorHandling();
