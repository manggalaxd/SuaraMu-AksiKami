// function sendMail() {
//   const message = document.getElementById("message").value;
  
//   if (!message.trim()) {
//     Swal.fire({
//       icon: 'warning',
//       title: 'Pesan Kosong!',
//       text: 'Silakan tulis pesan terlebih dahulu!',
//     });
//     return;
//   }
  
//   fetch(WEB_APP_URL, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ message: message })
//   })
//   .then(response => {
//     if (!response.ok) {
//       return response.json().then(err => { throw new Error(err.message) });
//     }
//     return response.json();
//   })
//   .then(data => {
//     Swal.fire({
//       icon: 'success',
//       title: 'Berhasil!',
//       text: 'Pesan telah terkirim!',
//       timer: 2000,
//       showConfirmButton: false
//     }).then(() => {
//       window.location.reload();
//     });
//   })
//   .catch(error => {
//     Swal.fire({
//       icon: 'error',
//       title: 'Gagal!',
//       text: error.message || 'Terjadi kesalahan. Silakan coba lagi!',
//     });
//   });
// }