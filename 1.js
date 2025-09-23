// let mahasiswa = {
//     nama: 'afif',
//     energi: 10,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`selamat makan ${this.nama}`);
//     }
// }

// let siswa = {
//     nama: 'misel',
//     energi: 10,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`selamat makan ${this.nama}`);
//     }
// }

//2.  function declaration

// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.nama} selamat mkn`);
//     },

//     laper: function (min) {
//         this.energi -= min;
//         console.log(`laper ${this.nama}`);
//     },

//     tetap: function (min) {
//         this.energi == min;
//         console.log(`sama ${this.energi}`);
//     },

//     tidur: function (min) {
//         this.energi += min * 2;
//         console.log(`hallo ${this.nama} tidur kali 2`)

//     }
// };

// function Mahasiswa (nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.energi = energi;
//     mahasiswa.nama = nama;

//     return mahasiswa;
// }

// let afif = Mahasiswa ('Afif', 10);
// let misel = Mahasiswa ('misel', 10);



//3. constractor function

// function Mahasiswa (nama, energi) {
//     this.energi = energi;
//     this.nama = nama;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.nama} selamat mkn`);
//     }

//     this.laper = function (laper) {
//         this.energi -= laper;
//         console.log(`laper ${this.nama}`)
//     }

//     this.tetap = function (tetap) {
//         this.energi == tetap;
//         console.log(`sama ${this.energi}`)
//     }
// }

// let a1 = new Mahasiswa('afif', 10);
// let a2 = new Mahasiswa ('misel', 10);

// console.log(a1.makan === a2.makan);

// function Mahasiswa (nama, energi) {
//     // let mahasiswa = Object.create(methodMahasiswa);
//     this.nama = nama;
//     this.energi = energi;
//     this.energisekarang = this.energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `halo ${this.nama} selamat makan, sisa energi sekarang ${this.energi}`;
// }

// Mahasiswa.prototype.main = function (porsi) {
//     this.energi -= porsi;
//     return `energi berkurang ${porsi}, sisa energi: ${this.energi}`; 
// }

// Mahasiswa.prototype.tidur = function (porsi) {
//     this.energi += porsi * 2;
//     return `energi sekarang ${this.energisekarang} tidur energi di kali 2 sisa energi ${this.energi}`
// }
// let afif = new Mahasiswa('afif', 10);
// let misel = new Mahasiswa ('misel', 10);

// console.log(afif.makan === misel.makan);



//constractor function dalam versi class
class Mahasiswa {
  constructor (nama, energi) {
    this.nama = nama;
    this.energi = energi;
    }

    makan (porsi) {
    this.energi += porsi;
    return `halo ${this.nama} selamat makan, sisa energi sekarang ${this.energi}`;
}

main (porsi) {
    this.energi -= porsi;
    return `energi berkurang ${porsi}, sisa energi: ${this.energi}`; 
}

tidur (porsi) {
    const energisebelumtidur = this.energi;
    this.energi += porsi * 2;
    return `energi sekarang ${energisebelumtidur}, tidur selama ${porsi} di kali 2 menjadi ${porsi*2}, energi setelah tidur: ${this.energi}`
}
}

let afif = new Mahasiswa('afif', 10);
let misel = new Mahasiswa ('misel', 10);
