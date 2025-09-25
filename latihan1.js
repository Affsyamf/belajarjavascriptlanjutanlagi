//ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration'));
console.log(videos); 

//pilih teknik 
let teknik = videos.filter(video => video.textContent.includes('Teknik A'))


//ambil durasi
.map(item => item.dataset.duration)

//ubah durasi
.map(waktu => {
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0] * 60) +  parts[1];
})

//jumlahkan semua detik
.reduce((total, detik) => total + detik);

//ubah format
const jam = Math.floor(teknik / 3600);
teknik = teknik - jam * 3600;
const menit = Math.floor(teknik / 60);
const detik = Math.floor(teknik - menit * 60);

//simpan di dom
const pdurasi = document.querySelector('.total-durasi');
pdurasi.textContent = `${jam} Jam : ${menit} Menit : ${detik} Detik `;
const jmlvid = videos.filter(video => video.textContent.includes('Teknik A')).length;
const pjmlvid = document.querySelector('.jumlah-video');
pjmlvid.textContent = `${jmlvid} Video`;

console.log(jmlvid);