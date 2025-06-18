document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    const heroSection = document.querySelector('.header');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            ocultarElementosHeader(); 
        } else {
            exibeElementosHeader();
        }
    })

    //Seção de atração, programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i],this.addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('season__list--is--active');
            removeBotaoAtivo();
            botao.target.classList.add('season__tabs__button--is--active');
        })

    }

})

function ocultarElementosHeader() {
    const header = document.querySelector('header')
    header.classList.add('header--is-hidden');
}

function exibeElementosHeader() {
    const header = document.querySelector('header')
    header.classList.remove('header--is-hidden');
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('season__tabs__button--is--active');
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('season__list--is--active');
    }
}