// function jumlahkali(a, b) {
//     return [a + b, a * b];
// }

// const [kali, tambah] = jumlahkali(2, 3);
// console.log(kali);

function jumlahkali(a, b) {
    return {
        tambah: a + b,
        kurang: a - b,
        kali: a * b
    }
}

const {tambah, kali, kurang} = jumlahkali(2, 3);
console.log(kurang);