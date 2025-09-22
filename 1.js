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

function Mahasiswa (nama, energi) {
    let mahasiswa = {};
    mahasiswa.energi = energi;
    mahasiswa.nama = nama;

    mahasiswa.makan = function (porsi) {
        this.energi += porsi;
        console.log(`halo ${this.nama} selamat mkn`);
    }

    mahasiswa.laper = function (laper) {
        this.energi -= laper;
        console.log(`laper ${this.nama}`)
    }
    return mahasiswa;
}

let afif = Mahasiswa ('Afif', 10);
let misel = Mahasiswa ('misel', 10);
