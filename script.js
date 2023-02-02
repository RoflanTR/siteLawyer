var burgerMenu=document.querySelector(".burger-menu");
var popup = document.querySelector(".popup");
var close = document.querySelector(".close");
var body = document.querySelector("body");
var html = document.querySelector("html");
burgerMenu.addEventListener('click',function(){
    popup.style.display="block";
})
close.addEventListener('click',function(){
    popup.style.display="none";
})

burgerMenu.addEventListener('click', function(){
    body.classList.add("open-menu");
    html.classList.add("open-menu");
})
close.addEventListener('click', function(){
    body.classList.remove("open-menu");
    html.classList.remove("open-menu");
})