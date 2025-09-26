// const mhs = ['afif', '670222'];
// const [nama, nim, alamat] = mhs;
// // const nama = mhs[0];
// // const nim = mhs[1];

// console.log(nim);


//swap

// let a = 1;
// let b = 2;

// [a, b] = [b, a];
// console.log(b);

//destrucing object

// const mhs = {
//     nama: 'afif',
//     nim: 6702223011
// };

// const {nama, nim} = mhs;
// console.log(mhs);

//nilai default
// const mhs = {
//     nama: 'afif',
//     nim: 6702223011,
//     email: 'afif@gmail.com'
// }

// const {nama, nim, email = 'default@gmail.com'} = mhs;
// console.log(mhs);

//by element
const mhs = {
    nama: 'afif',
    nim: 6702223011,
    email: 'afif@gmail.com'
}

function getnamaMhs ({nama, nim}){
    return `${nama}, ${nim}`;
}

console.log(getnamaMhs(mhs));