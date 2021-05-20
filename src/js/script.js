const menuButton= document.querySelector('.menu-btn');
const icon = document.querySelector('.icon');
const nav = document.querySelector('nav');
menuButton.addEventListener('pointerdown', (event) => {

    nav.classList.toggle('menu-active')
    icon.classList.toggle('menu')
    icon.classList.toggle('close')
})