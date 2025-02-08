// começo do script para o menu
const menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsivo');
    menu.classList.toggle('change');

    if (menu.classList.contains('change')) {
        nav.style.display = 'block';
    }
    else {
        nav.style.display = 'none';
    }
}

