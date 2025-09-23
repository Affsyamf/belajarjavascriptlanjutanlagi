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

const methodMahasiswa = {
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`halo ${this.nama} selamat mkn`);
    },

    laper: function (min) {
        this.energi -= min;
        console.log(`laper ${this.nama}`);
    },

    tetap: function (sama) {
        this.energi == sama;
        console.log(`sama ${this.energi}`);
    },

    tidur: function (min) {
        this.energi += min * 2;
        console.log(`hallo ${this.nama} tidur kali 2`)

    }
};

function Mahasiswa (nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.energi = energi;
    mahasiswa.nama = nama;

    return mahasiswa;
}

let afif = Mahasiswa ('Afif', 10);
let misel = Mahasiswa ('misel', 10);



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

// let afif = new Mahasiswa('afif', 10);