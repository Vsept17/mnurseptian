const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.menu-list ul')
menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});

const ftProfile = document.querySelector('.ftprofile');
ftProfile.addEventListener('click', (event) => {
  if (document.fullscreenElment) {
    document.exitFullscreen();
  } else {
    document.querySelector('.ftprofile').requestFullscreen();
  }
})
