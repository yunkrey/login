// Seleciona todos os elementos com a classe '.item-menu'
var menuitem = document.querySelectorAll('.item-menu');

// Função que é chamada quando um item de menu é clicado
function selectlink(){
    // Remove a classe 'ativo' de todos os elementos com a classe '.item-menu'
    menuitem.forEach((item) => {
        item.classList.remove('ativo');
    });

    // Adiciona a classe 'ativo' ao item de menu clicado
    this.classList.add('ativo');
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
btnexp.addEventListener('click', function(){
   // Alterna a classe 'expandir' no menu lateral (para expandir/retrair)
   menuside.classList.toggle('expandir');
   var header = document.querySelector("header");
   header.style.width = "82.43%";
});
