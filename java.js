const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    const email = document.getElementById("email").value;
    const nome = document.getElementById("nome").value;
    const pergunta = document.getElementById("pergunta").value;

    if (email === "" || nome === "" || pergunta === "") {
        event.preventDefault();
        alert("Preencha todos os campos!");
    }

});