// let janji = new Promise((resolve, reject) => {
//   let sukses = true; // ubah ke false untuk test error
  
//   if (sukses) {
//     resolve("Makanan sampai! 🍔");
//   } else {
//     reject("Driver cancel 🚫");
//   }
// });

// // Menangani hasil janji
// janji
//   .then((hasil) => {
//     console.log("Sukses:", hasil);
//   })
//   .catch((error) => {
//     console.log("Gagal:", error);
//   });


// fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response))


//contoh1
// let ditepati = false;
// const janji = new Promise((resolve, reject) => {
// if(ditepati){
//     resolve('janji telat ditepati')
// }else{
//     reject('ingkar')
// }

// })

// janji
//     .then(response => console.log('OK: ' + response))
//     .catch(response => console.log('NOT '+ response))


//contoh2

// let ditepati = false

// const janji = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//         resolve('muncul setelah 5 detik')
//     }, 5000)

//     }else{
//         setTimeout(() => {
//         reject('ditolak')
//     }, 5000)

//     }
    
// })

// console.log('mulai')
// console.log(janji)
// console.log('selesai')

// janji
//     .finally(() => console.log('selesai nunggu'))
//     .then(response => console.log('OK: ' + response))
//     .catch(response => console.log('not: ' + response))



//contoh 3
//promise all

const film = new Promise(resolve => {
    setTimeout(() => {
        resolve ([{
            judul: 'marvel',
            tahun: 1998
        }])
    }, 1000)
})

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve ([{
            kondisi: 'cerah',
            jam: 10
        }])
    }, 5000)
})

// film .then(response => console.log(response))
// cuaca .then(response => console.log(response))


Promise.all([film, cuaca])
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
        
    })

