    const itens = document.querySelectorAll('.aparecer');

const mostrarItens = () => {
    itens.forEach(item => {
        const topoItem = item.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;

        if (topoItem < alturaTela - 100) {
            item.classList.add('visivel');
        }
    });
};

window.addEventListener('scroll', mostrarItens);
window.addEventListener('load', mostrarItens);

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.addEventListener("load", () => {
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, 1);
});
