/**
 * mobil berwarna hitam tahun 2019
mobil berwarna silver tahun 2017 
mobil berwarna abu-abu tahun 2019 (gunakan async/await untuk kondisi ini)
mobil berwarna abu-abu tahun 2018 (gunakan async/await untuk kondisi ini)
mobil berwarna hitam tahun 2020 (gunakan async/await untuk kondisi ini)
 */

var filterCarsPromise = require("./promise3.js");

filterCarsPromise("black", 2019)
  .then(function (cars) {
    console.log(cars);
  })
  .catch(function (error) {
    console.log(error.message);
  });

filterCarsPromise("silver", 2017)
  .then(function (cars) {
    console.log(cars);
  })
  .catch(function (error) {
    console.log(error.message);
  });

async function filterGreyCar1() {
  try {
    const cars = await filterCarsPromise("grey", 2019);
    console.log(cars);
  } catch (error) {
    console.log(error.message);
  }
}

filterGreyCar1();

async function filterGreyCar2() {
  try {
    const cars = await filterCarsPromise("grey", 2018);
    console.log(cars);
  } catch (error) {
    console.log(error.message);
  }
}

filterGreyCar2();

async function filterBlackCar() {
  try {
    const cars = await filterCarsPromise("black", 2020);
    console.log(cars);
  } catch (error) {
    console.log(error.message);
  }
}

filterBlackCar();
