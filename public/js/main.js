
const BP = 641;
const toggleMenuButton = document.getElementById('toggleMenu');
const overlay = document.getElementsByClassName('overlay')[0];
const mobileNav = document.getElementsByClassName('mobile-nav')[0];

// add event listeners here
window.addEventListener('resize', ()=>{
  if (window.innerWidth > BP) {
    overlay.classList.remove('overlay-open');
    mobileNav.classList.remove('mobile-nav-open');
  }
});

toggleMenuButton.addEventListener('click', () => {
  toggleOverlays();
});

overlay.addEventListener('click', ()=> {
  toggleOverlays();
});

//functions
function toggleOverlays() {
  overlay.classList.toggle('overlay-open');
  mobileNav.classList.toggle('mobile-nav-open');
}