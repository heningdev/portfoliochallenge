//MUDANÇA DE CORES DA PAGINA
const pageTheme = document.querySelector('html[data-theme="light"]');
const themeBtn = document.querySelector('.tema');
const moonIcon = document.querySelector('.fa-moon');
const sunIcon = document.querySelector('.fa-sun');

themeBtn.addEventListener('click', () => {
    const activeTheme = pageTheme.getAttribute('data-theme');
    const newTheme = activeTheme === 'light' ? 'dark' : 'light';
    pageTheme.setAttribute('data-theme', newTheme);

    if (newTheme === 'dark') {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    } else {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    }

});

//ALEATORIEDADE DE IMAGEM DO TOPO
document.addEventListener('DOMContentLoaded', function() {
    const images = [
        '/assets/img/fundo.jpg',
        '/assets/img/fundo1.jpg',
        '/assets/img/fundo2.jpg',
        '/assets/img/fundo3.jpg'
    ];

    const randomImage = images[Math.floor(Math.random() * images.length)];

    const bannerElement = document.getElementById('apresentacao');
    bannerElement.style.backgroundImage = `url(${randomImage})`;
});

// TRANSIÇÃO DO MENU DE NAVEGAÇÃO AO ROLAR
window.addEventListener('scroll', function () {
    var cabecalho = document.getElementById('cabecalho');
    var cabecalho__logo = document.getElementById('cabecalho__logo');
    var altura = window.scrollY;
    var apresentacao = document.getElementById('apresentacao');
    var alturaApresentacao = apresentacao.offsetTop + apresentacao.offsetHeight;

    if (altura > alturaApresentacao) {
        cabecalho.classList.add('fixed');
        cabecalho__logo.classList.add('fixed');
    } else {
        cabecalho__logo.classList.remove('fixed');
        cabecalho.classList.remove('fixed');
    }
});

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
document.getElementById('codf').addEventListener("click", function () {
    window.open("https://heningdev.github.io/decodificador-de-texto/", "_blank");
})

// LINK GO TO TOP
document.getElementById('botao__voltar').addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
})

//LINK CONTATO
document.getElementById('contato__btn').addEventListener('click', ()  => {
    document.getElementById('contato').scrollIntoView({ behavior: 'smooth'});
});

