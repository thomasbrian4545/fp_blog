let inputGambarProfil = document.getElementById('gambar_profil');
let displayGambarProfil = document.getElementById('display_gambar_profil');

if (inputGambarProfil) {
    inputGambarProfil.addEventListener("change", previewGambar);

    function previewGambar() {
        const [file] = inputGambarProfil.files;
        displayGambarProfil.src = URL.createObjectURL(file);
    }

    // agar ketika gambar profil di klik, file upload juga langsung terbuka
    displayGambarProfil.addEventListener("click", () =>
        inputGambarProfil.click()
    );
}
