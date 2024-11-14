const btnEntrar = document.getElementById("btn-entrar")
const btnCancelar = document.getElementById("btn-cancel")

const modalForm = document.querySelector(".modalForm")

btnEntrar.addEventListener("click", (e) => {
      e.preventDefault();

      modalForm.style.display = "flex";
      btnEntrar.style.display = "none";
})

btnCancelar.addEventListener("click", (e) => {
      e.preventDefault();

      modalForm.style.display = "none";
      btnEntrar.style.display = "block";
})