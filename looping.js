// const mhs = ['afif', 'misel', 'dika'];

//menggunakan for
// for (let i = 0; i < mhs.length; i++){
//     console.log(mhs[i]);
// }


//menggunakan foreach
// mhs.forEach(m => console.log(m))

//looping string

// const nama = 'afif';

// for(const n of nama) {
//     console.log(n);
// }


// const mhs = ['afif', 'misel', 'dika'];
// mhs.forEach((m, i) => 
//     console.log(`m adalah nama mahasiswa ${m}, i adalah urutan mahasiswa ${i + 1} `));


const nama = document.querySelectorAll('.nama');
// nama.forEach(n => console.log(n.textContent));

// for(n of nama) {
//     console.log(n.innerHTML);
// }


//arguments
// function angka(){
//    return arguments.reduce((a, i) => a + i);
// }

// angka(1, 2, 3);

const mhs = {
    nama: 'afif',
    nim: 6702223011,
    email: 'afif21.work@gmail.com'
}

for(m in mhs){
    console.table(mhs[m]);
}