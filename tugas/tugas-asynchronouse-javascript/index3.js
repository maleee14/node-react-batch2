/**
 * gunakan promise dengan kondisi seperti di bawah ini:
bukunya berwarna dan jumlah halamannya 50
bukunya tidak berwarna dan jumlah halamannya 250 (gunakan async/await untuk kondisi ini)
bukunya berwarna dan jumlah halamannya 30 (gunakan async/await untuk kondisi ini) 
 */

var filterBooksPromise = require("./promise2.js");

filterBooksPromise(true, 50)
  .then(function (books) {
    console.log(books);
  })
  .catch(function (error) {
    console.log(error);
  });

async function filterUncoloredBooks() {
  try {
    const books = await filterBooksPromise(false, 250);
    console.log(books);
  } catch (error) {
    console.log(error.message);
  }
}

filterUncoloredBooks();

async function filterBookNofFound() {
  try {
    const books = await filterBooksPromise(true, 30);
    console.log(books);
  } catch (error) {
    console.log(error.message);
  }
}

filterBookNofFound();
