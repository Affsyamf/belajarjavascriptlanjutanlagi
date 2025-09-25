// const Mahasiswa = function() {
//     this.nama = 'afif';
//     this.umur = 21;
//     this.sayhello = function () {
//         console.log(`hallo nama saya ${this.nama}, umur saya ${this.umur} tahun`);
//     }
// }
// const afif = new Mahasiswa();


// const Mahasiswa = function() {
//     this.nama = 'afif';
//     this.umur = 21;
//     this.sayhello = function () {
//         console.log(`hallo nama saya ${this.nama}, umur saya ${this.umur} tahun`);
//     }

//     setInterval (() => {
//         console.log(this.umur++);
//     }, 1000);
// }
// const afif = new Mahasiswa();

const box = document.querySelector('.box');

box.addEventListener('click', function() {

    let satu = 'size';
    let dua = 'caption'

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
setTimeout(() => {
    this.classList.toggle(dua);
}, 500);

});