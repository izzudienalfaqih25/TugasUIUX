function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let userBenar = "ahmad2017";
  let passBenar = "integrity";

  if (username === userBenar && password === passBenar) {
    alert("Login Berhasil!");
    window.location.href = "sukses.html";
  } else {
    alert("Login Gagal! Username atau Password salah.");
  }
}
