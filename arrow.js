// //function ekspresion
// function pesan (nama) {
//     alert ('halo ' + nama)
// }
// pesan('afif');

// //memakai arrow
// let tampilpesan = (nama) => {
//     alert ('halo ' + nama);
// }
// tampilpesan('afif');

// //variabel function
// const tampilnama = function (nama) {
//     return `hello + ${nama}`;
// }

// console.log(tampilnama('afif'));


// //menggunakan arrow
// const tampilNama = (nama) => {
//     return `hallo ${nama}`;
// }
// console.log(tampilNama('afif'));

// const tampilNama = (nama, umur) => {
//     return `hallo nama saya ${nama}, umur saya ${umur}`;
// }

// console.log(tampilNama('afif', 21));


// implisit return
// const tampilNama = (nama) => { return `hallo ${nama}`; }
// console.log(tampilNama('afif'));

// const tampilnama = () => 'hellow';
// console.log(tampilnama())

let mahasiswa = ['afif', 'misel'];

let tampilNama = mahasiswa.map(nama => ({nama: nama, jmlhuruf: nama.length})); 

console.table(tampilNama);

//kalau makai 1 parameter bisa atau tidak memakai tanda kurung dan bisa hilangkan return
//kalau memakai 2 parameter wajib memakai (nama, umur) => {}
//kalau tidak pakai parameter tetap buat () => {}
//kalau 