console.log("Website SIAP PKL aktif!");

// Interaksi tabel
document.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll("table tr");

  rows.forEach((row, index) => {
    if (index !== 0) { // skip header
      row.addEventListener("click", () => {
        const nama = row.cells[1].textContent;
        alert("Kamu memilih siswa: " + nama);
      });
    }
  });
});
