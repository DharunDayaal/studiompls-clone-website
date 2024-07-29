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

function handleStartProject(linkToProjecPage){
    window.location.href = linkToProjecPage.value;
}

function handleSidebar() {
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.display = 'flex';
}

function handleHideSidebar() {
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.display = 'none';
}
