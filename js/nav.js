// Selecionar o menu hamburguer e o menu
const menuHamburguer = document.getElementById('menu-hamburguer');
const menu = document.getElementById('menu');

// Alternar o menu ao clicar no hamburguer
menuHamburguer.addEventListener('click', () => {
    menuHamburguer.classList.toggle('active');  // Alterna o ícone de hamburguer para X
    menu.classList.toggle('active');            // Alterna a exibição do menu
});