// 2.1 excution context

// let nama = 'afif';
// let umur = 21;
// console.log(sayHello());

// function sayHello () {
//     return `halo nama saya ${nama} umur saya ${umur}`;
// }

// var nama = 'afif';
// var ig = "@affsyamf";

// function cetakIg() {
//     var instagramUrl = 'https://instagram.com.affsyamf ';
//     return instagramUrl + ig;
// }

// console.log(cetakIg(ig));

// function a () {
//     console.log('ini a');

//     function b () {
//         console.log('ini b');

//         function c () {
//             console.log('ini c');
//         }
//         c();
//     }
//     b();
// }

// a();

// tes

function satu(){
    let nama = 'afif';
    console.log(nama);
}

function dua() { // dua('ddy') dari line 53 melihat tidak ada yang menerima maka turun ke lokal
    //lokal
    // console.log();
    console.log(nama); //line 53 cek ke lokal karna tidak ada var/let/const yang ada hanya konsol nama
                        // dicari di lokal tidak ada nama, maka cari ke argumen (lokal parameter) tidak ada maka cari ke global
}

console.log(nama); //jika line 51 memakai let harus di tuker posisi inisialisasi
var nama = 'misel';
// satu();
dua(satu());
console.log(nama);
