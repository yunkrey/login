// Seleciona todos os elementos com a classe '.item-menu'
var menuitem = document.querySelectorAll('.item-menu');

function selectlink() {
    // Remove a classe 'ativo' de todos os elementos com a classe '.item-menu'
    menuitem.forEach((item) => {
        item.classList.remove('ativo');
        // Verifica se o elemento .icon i existe antes de tentar removê-lo
        var icon = item.querySelector('.icon i');
        if (icon) {
            icon.classList.remove('ativo');
        }
    });

    // Adiciona a classe 'ativo' ao item de menu clicado
    this.classList.add('ativo');
    
    // Adiciona a classe 'ativo' ao ícone do item de menu clicado, se existir
    var clickedIcon = this.querySelector('.icon i');
    if (clickedIcon) {
        clickedIcon.classList.add('ativo');
    }
}

// Adiciona o evento de clique para cada item de menu
menuitem.forEach((item) => {
    item.addEventListener('click', selectlink);
});

// Seleciona o botão de expansão do menu
var btnexp = document.querySelector('#btn-exp');
// Seleciona o menu lateral
var menuside = document.querySelector('.menu-lateral');

// Adiciona o evento de clique para o botão de expansão do menu
btnexp.addEventListener('click', function () {
   // Alterna a classe 'expandir' no menu lateral (para expandir/retrair)
   menuside.classList.toggle('expandir');
   var header = document.querySelector("header");
});