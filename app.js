const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.menu-list ul')
menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});