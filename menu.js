// Seleciona todos os elementos com a classe '.item-menu'
var menuItems = document.querySelectorAll('.item-menu');

function selectLink() {
    // Remove a classe 'ativo' de todos os elementos com a classe '.item-menu'
    menuItems.forEach((item) => {
        item.classList.remove('ativo');
        // Verifica se o elemento .icon i existe antes de tentar removê-lo
        var icon = item.querySelector('.icon i');
        if (icon) {
            icon.classList.remove('ativo-icon');
        }
    });

    // Adiciona a classe 'ativo' ao item de menu clicado
    this.classList.add('ativo');

    // Adiciona a classe 'ativo-icon' ao ícone do item de menu clicado, se existir
    var clickedIcon = this.querySelector('.icon i');
    if (clickedIcon) {
        clickedIcon.classList.add('ativo-icon');
    }
}

// Adiciona o evento de clique para cada item de menu
menuItems.forEach((item) => {
    item.addEventListener('click', selectLink);
});

// Seleciona o botão de expansão do menu
var btnExpandir = document.querySelector('#btn-exp');
// Seleciona o menu lateral
var menuLateral = document.querySelector('.menu-lateral');

// Adiciona o evento de clique para o botão de expansão do menu
btnExpandir.addEventListener('click', function () {
    // Alterna a classe 'expandir' no menu lateral (para expandir/retrair)
    menuLateral.classList.toggle('expandir');
});