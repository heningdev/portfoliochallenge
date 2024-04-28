// TRANSIÇÃO DO MENU DE NAVEGAÇÃO AO ROLAR
window.addEventListener('scroll', function () {
    var cabecalho = document.getElementById('cabecalho');
    var cabecalho__logo = document.getElementById('cabecalho__logo');
    var altura = window.scrollY;

    if (altura > 0) {
        cabecalho.classList.add('fixed');
        cabecalho__logo.classList.add('fixed');
    } else {
        cabecalho__logo.classList.remove('fixed');
        cabecalho.classList.remove('fixed');
    }
});
// EXIBIÇÃO PALAVRA CHAVE CARDS SOBRE MIM
function showMessage() {
    document.getElementById("mensagemFlut").style.visibility = "visible";
}
function hideMessage() {
    document.getElementById("mensagemFlut").style.visibility = "hidden";
}

// LINKS DOS PROJETOS
document.getElementById('petlife').addEventListener("click", function () {
    window.open("https://pet-life-gamma.vercel.app/", "_blank");
})
document.getElementById('jogosecreto').addEventListener("click", function () {
    window.open("https://jogo-al8wvi6bx-heningdevs-projects.vercel.app/", "_blank");
})
document.getElementById('portfolio').addEventListener("click", function () {
    window.location.href = "#apresentacao";
})


