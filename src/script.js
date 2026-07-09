/* ================================
   CARROSSEL EXTERNO (entre projetos)
   ================================ */
let slideAtual = 0;
const slidesContainer = document.getElementById('slides');
const totalSlides = document.querySelectorAll('.projeto-card').length;
const indicadores = document.querySelectorAll('.indicador');

function atualizarCarrossel() {
    if (!slidesContainer) return;
    // Move o container horizontalmente baseado no slide atual
    slidesContainer.style.transform = `translateX(-${slideAtual * 100}%)`;

    // Atualiza as barrinhas indicadoras
    indicadores.forEach((ind, index) => {
        if (index === slideAtual) {
            ind.classList.add('ativo');
        } else {
            ind.classList.remove('ativo');
        }
    });
}

function mudarSlide(direcao) {
    slideAtual += direcao;

    // Cria o efeito infinito (vai do ultimo pro primeiro e vice-versa)
    if (slideAtual >= totalSlides) slideAtual = 0;
    if (slideAtual < 0) slideAtual = totalSlides - 1;

    atualizarCarrossel();
}

function irParaSlide(index) {
    slideAtual = index;
    atualizarCarrossel();
}

/* ==========================================
   SLIDER INTERNO DE IMAGENS (dentro de cada card)
   Ex: as 7 telas do projeto SAY NOW
   ========================================== */
function iniciarSlidersInternos() {
    const grupos = document.querySelectorAll('.slider-imagens');

    grupos.forEach((grupo) => {
        const imagens = grupo.querySelectorAll('img');
        if (imagens.length <= 1) return; // nada a fazer se só tem 1 imagem

        let indiceAtual = 0;

        // garante que só a primeira comece ativa
        imagens.forEach((img, i) => img.classList.toggle('ativo', i === 0));

        setInterval(() => {
            imagens[indiceAtual].classList.remove('ativo');
            indiceAtual = (indiceAtual + 1) % imagens.length;
            imagens[indiceAtual].classList.add('ativo');
        }, 2500); // troca de imagem a cada 2.5s — ajuste esse valor se quiser mais rápido/lento
    });
}

/* Inicializa tudo quando o DOM estiver pronto */
document.addEventListener('DOMContentLoaded', () => {
    atualizarCarrossel();
    iniciarSlidersInternos();
});