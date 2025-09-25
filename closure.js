// function salam(waktu) {
//     return function(nama) {
//         console.log (`halo ${nama} selamat ${waktu}`);
//     }
// }

// let pagi = salam('pagi');
// let siang = salam('siang');
// let malam = salam ('malam');

// pagi ('afif');

 
// let add = (function () {
//     let counter = 0;
//     return function () {
//         return ++ counter;
//     }
// }) ();

// // let a = add();

// counter = 100;

// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());


//tes const bisa berubah
// const namaa = {nama: 'afif', umur: 21};
// namaa.nama = 'dika';

// console.log(namaa);

// //tes const global scope
// const nama = 'afif';
// const umur = 21;

// if (umur === 21) {
//     const nama = 'dika';
// }
//  console.log(nama);
// const umur = 21;

// if(umur ===21) {
//     const nama = 'dika';
// }

// console.log(nama);

//tes var let
function nama() {
   var nama = 'doko';
   var nama = 'dika';
  if (true) {
    let nama1 = 'afif';
    nama1 = 'dilan';
    const nama2 = 'misel';
    console.log(nama2);
    console.log(nama);
    console.log(nama1);
  }
  console.log(nama);
  
}
nama();

// if (true) {
//     var nama = 'afif'
//     let nama2 = 'doko';
//     console.log(nama2);
// }

// console.log(nama);



// if(true) {
//     var x = 'misel';
//     let y = 'doko';
// }
// console.log(x);
// console.log(y);
// panggilNama();

// console.log()













// function init () {
//     // let nama = 'afif';
//    return function tampilNama(nama) {
//         console.log(nama);
//     }
// }
// let panggilNama = init();
// panggilNama('dika');