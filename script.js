let slideMenu = document.querySelector('.menu-slide')
let navBar = document.querySelector('nav');

function openMenu()
{
    slideMenu.style.display = 'block';
    navBar.style.display = 'static';
}
  
function closeMenu()
{
    slideMenu.style.display = 'none';
    navBar.style.display = 'fixed';
}
