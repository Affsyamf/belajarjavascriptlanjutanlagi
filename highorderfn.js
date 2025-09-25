function tugas (matkul, selesai) {
    console.log(`mulai mengerajakan tugas ${matkul}...`);
    selesai();
}

function selesai() {
    alert('tugas selesai');
}

tugas('web', selesai);