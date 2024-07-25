let lastScroll = 0;
const navBar = document.querySelector("nav");
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;  
    if(currentScrollY > lastScroll) {
        navBar.classList.add('hide');
    }
    else{
        navBar.classList.remove('hide');
    }
    lastScroll = currentScrollY;
})