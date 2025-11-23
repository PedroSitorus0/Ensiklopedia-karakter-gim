document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Ambil elemen form
    const form = document.getElementById('requestForm');

    // 2. Tambahkan Event Listener saat tombol diklik
    if (form) {
        form.addEventListener('submit', function(event) {
            
            // Mencegah browser refresh otomatis
            event.preventDefault();

            // 3. Ambil Nilai dari Input
            const nama      = document.getElementById('nama').value;
            const email     = document.getElementById('email').value;
            const nohp      = document.getElementById('nohp').value;
            const chara     = document.getElementById('chara').value; // Nama Karakter
            const game      = document.getElementById('game').value;  // Nama Band
            
            // Ambil radio button yang sedang dipilih
            const gender    = document.querySelector('input[name="gender"]:checked');

            // 4. Validasi (Pengecekan Data Kosong)
            
            if (nama === "") {
                alert("Nama pengunjung wajib diisi!");
                return;
            }

            if (email === "") {
                alert("Email wajib diisi!");
                return;
            }

            if (nohp === "") {
                alert("Nomor WA wajib diisi!");
                return;
            }

            if (chara === "") {
                alert("Nama Karakter yang direquest tidak boleh kosong!");
                return;
            }

            if (game === "") {
                alert("Silakan pilih Nama Band dari dropdown!");
                return;
            }

            if (!gender) {
                alert("Mohon pilih jenis kelamin karakter (Male/Female)!");
                return;
            }

            // 5. Pesan Sukses
            alert("Sukses! Request karakter " + chara + " (" + gender.value + ") dari band " + game + " berhasil dikirim.\n\nTerima kasih, " + nama + "!");
            
            // 6. Bersihkan Form
            form.reset();
        });
    } else {
        console.error("Form tidak ditemukan! Pastikan ID form di HTML adalah 'requestForm'");
    }
});