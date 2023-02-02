var burgerMenu=document.querySelector(".burger-menu");
var popup = document.querySelector(".popup");
var close = document.querySelector(".close");

burgerMenu.addEventListener('click',function(){
    popup.style.display="block";
})
close.addEventListener('click',function(){
    popup.style.display="none";
})
window.onload = function () {
    hideAddressBar();
    window.addEventListener("orientationchange", function () {
        hideAddressBar();
    }, false);
}

function hideAddressBar() {
    setTimeout(function () {
        document.body.style.height = window.outerHeight + 'px';
        setTimeout(function () {
            window.scrollTo(0, 1);
        }, 1100);
    }, 1000);
    return false;
}