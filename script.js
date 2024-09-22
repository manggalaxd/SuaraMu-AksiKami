function sendMail(){
  let params = {
     message : document.getElementById ("message").value,
  }
  emailjs.send("service_iscge6g","template_hqycuuk",params).then(alert("Berhasil Mengirim Suara Mu!"))
}