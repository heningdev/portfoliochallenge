// validacao.js
document.addEventListener("DOMContentLoaded", function() {
    var btnEnviar = document.querySelector(".formulario button[type='submit']");
    var modal = document.getElementById('modal');
    var span = document.getElementsByClassName('fechar')[0];
    var formulario = document.getElementById('form');

    btnEnviar.addEventListener("click", function(event) {
        event.preventDefault();

        var formularioValido = validarFormulario();

        if (formularioValido) {
            modal.style.display = 'block';
        }
    });

    span.onclick = function() {
        modal.style.display = 'none';
        formulario.reset();
        resetFromStyles();
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'block';
            formulario.reset();
        resetFromStyles();
        }
    }
});

function validarFormulario() {
    var nomeCampo = document.getElementById("nome");
    var emailCampo = document.getElementById("email");
    var mensagemCampo = document.getElementById("mensagem__form");
    var nome = nomeCampo.value;
    var email = emailCampo.value;
    var mensagem = mensagemCampo.value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Resetar os estados anteriores
    nomeCampo.classList.remove('error');
    emailCampo.classList.remove('error');
    emailCampo.placeholder = 'E-mail';

    if (nome === "") {
        nomeCampo.classList.add('error');
        return false;
    } else {
        nomeCampo.classList.remove('error');
    }

    if (email === "") {
        emailCampo.classList.add('error');
        emailCampo.placeholder = 'E-mail é obrigatório';
        emailCampo.value = ''; 
        return false;
    } else if (!emailRegex.test(email)) {
        emailCampo.classList.add('error');
        emailCampo.placeholder = 'Formato de e-mail inválido';
        emailCampo.value = ''; 
        return false;
    } else {
        emailCampo.classList.remove('error');
        emailCampo.placeholder = 'E-mail';
    }

    if (mensagem.trim() === "") {
        mensagemCampo.classList.add('error');
        mensagemCampo.placeholder = 'Informe o motivo do contato...'
        return false;
    }

    return true;
}
