 const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// //mencari angka >= 3

// //for
// const newAngka = [];

// for (let i = 0; i < angka.length; i++){
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }

// console.log(newAngka);


//filter function
// const newAngka = angka.filter(function (a) {
//     return a >= 3;
// });

// console.log(newAngka);

//filter arrow

// const newAngka = angka.filter (a => a >= 3);
// console.log(newAngka);



//filter map function
//kalikan angka dengan 2

// const newAngka = angka.map (function(a) {
//     return a * 2;
// })
// console.log(newAngka);


//filter map arrow

// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);



//reduce 
//jumlah semua
// const newAngka = angka.reduce((accumulator, currentvalue) => 
//     accumulator + currentvalue);
// console.log(newAngka);

//method chaining
//cari angka > 5
//kalikan 3
//jumlahkan

const hasil = angka.filter(a => a > 5)
.map(a => a * 3)
.reduce((acc, cur) => acc + cur, 2);

console.log(hasil);