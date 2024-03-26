// Perbedaan var,let dan const

const number = 10;
// number = 100;
console.log(number);

// Tiga car untuk deklarasi function
// Fanction Arrow

// Declaration
function hello() {
  console.log("Hellow");
}

// Expression
const hellow = function () {
  console.log("Hellow");
};

// Arrow
const helloo = () => {
  console.log("Hello");
};

// ES5
function tambahh(a, b) {
  return a + b;
}

// ES6
const tambah = (a, b) => a + b;

console.log(tambah(5, 9));

// Contoh ES5
let numbers = [1, 2, 3];
angka = numbers;

for (let i = 0; i < angka.length; i++) {
  console.log(angka[i]);
}

// Contoh ES6
numbers.forEach((Element) => {
  console.log(Element);
});

hello();
