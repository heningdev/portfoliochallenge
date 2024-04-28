// validacao.js
document.addEventListener("DOMContentLoaded", function() {
    var btnEnviar = document.querySelector(".formulario button[type='submit']");
    btnEnviar.addEventListener("click", function(event) {
        event.preventDefault();

        var formularioValido = validarFormulario();

        if (formularioValido) {
            alert("Mensagem enviada. Obrigado!");
            window.scrollTo(0, 0);
        }
    });
});

function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var assunto = document.getElementById("assunto").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nome === "") {
        alert("Por favor, preencha o campo Nome.");
        return false;
    }

    if (assunto === "") {
        alert("Por favor, preencha o campo Assunto.");
        return false;
    }

    if (email === "") {
        alert("Por favor, preencha o campo E-mail.");
        return false;
    } else if (!emailRegex.test(email)) {
        alert("Por favor, insira um email válido.");
        return false;
    }

    if (mensagem.trim() === "") {
        alert("Por favor, informe o motivo do contato.");
        return false;
    }

    return true;
}


