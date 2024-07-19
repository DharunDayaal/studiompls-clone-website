var lastscrollposition = 0;

let navbar = document.getElementById("hide-nav");
window.addEventListener(scroll, function(){
    var scrollTop = window.scrollY || this.document.documentElement.scrollTop;
    if(scrollTop > lastscrollposition){
        navbar.style.top="-80px";
    }
    else {
        navbar.style.top="0";
    }
    lastscrollposition = scrollTop;
});