function mostrarSenha() {
  var eye = document.getElementById("eye");
  var eyeSlash = document.getElementById("eye-slash");
  var fieldPassword = document.getElementById("field-password");
  var email = document.getElementById("email");

  if (eye.style.display === "none") {
    eye.style.display = "block";
    eyeSlash.style.display = "none";
    fieldPassword.type = "text";
  } else {
    eye.style.display = "none";
    eyeSlash.style.display = "block";
    fieldPassword.type = "password";
  }

  return { pswd: fieldPassword, eml: email };
}

document.getElementById("btn-login").addEventListener("click", function (e) {
  e.preventDefault();
  alert("Logado!");
});

function exigeSenha() {
  var retorno = mostrarSenha();
  console.log("mostra o retorno da função: ", retorno.eml, retorno.pswd);
  if (retorno.eml && retorno.pswd === "") {
    alert("insira email|senha");
  }
}

console.log(
  "mostra o evento: ",
  document.getElementById("btn-login").addEventListener("click", function () {
    exigeSenha();
  })
);
console.log(
  "mostra o primeiro evento: ",
  document.getElementById("btn-login").addEventListener("click", function (e) {
    e.preventDefault();
    alert("Logado!");
  })
);

console.log("mostra a função: ", exigeSenha);
