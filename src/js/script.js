const menuButton= document.querySelector('.menu-btn');
const icon = document.querySelector('.icon');
const nav = document.querySelector('nav');


function toggleMobileNavigation() {
    nav.classList.toggle('menu-active');
    icon.classList.toggle('menu');
    icon.classList.toggle('close');
}

//close nav menu if use clicks anywhere else on page
document.addEventListener('pointerdown', (event) =>{
    if (event.target.closest('.menu-btn')) {
        toggleMobileNavigation();
        return;
    }
    if (!event.target.closest('.menu-active')) {
        nav.classList.remove('menu-active');
        icon.className='icon menu';
    }
   
  
} )

// menuButton.addEventListener('pointerdown', (event) => {

//     toggleMobileNavigation();
// })



