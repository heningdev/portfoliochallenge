// validacao.js
document.addEventListener("DOMContentLoaded", function() {
    var btnEnviar = document.querySelector(".formulario button[type='submit']");
    var formulario = document.getElementById('form');

    btnEnviar.addEventListener("click", function(event) {
        event.preventDefault();

        var formularioValido = validarFormulario();

        if (formularioValido) {
            openSnack();
            formulario.reset();
        }
    });
});

function openSnack() {
    var snackbar = document.getElementById('snackbar');
    snackbar.className = 'show';
    setTimeout(function() {
        snackbar.className = snackbar.className.replace('show', '');
    }, 3000);
}

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
        nomeCampo.placeholder =  'Nome é obrigatório';
        return false;
    } else {
        nomeCampo.classList.remove('error');
        nomeCampo.placaholder = 'Nome';
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
