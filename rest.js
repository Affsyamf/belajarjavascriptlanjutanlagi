// function angka (a, b, ...args) {
//     return args;
// }

// console.log(angka(1, 2, 3));

// function jumlah(...angka) {
//     // let total = 0;
//     // for(const a of angka) {
//     //     total += a;
//     // }

//     // return total;

//     //memakai reduce
// return angka.reduce((a, b) => a + b);


// }

// console.log(jumlah(1, 2, 3, 4, 5));


//case
//objrct destructuring
// const team = {
//     manager: 'afif',
//     asistant: 'misel',
//     dev: 'dika'
// }

// const { manager, ...a} = team;
// console.log(a);


//array destructuring
// const kelompok = ['afif', 'misel'];
// const [ketua, ...a] = kelompok;
// console.log(ketua)