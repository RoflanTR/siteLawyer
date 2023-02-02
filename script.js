var burgerMenu=document.querySelector(".burger-menu");
var popup = document.querySelector(".popup");
var close = document.querySelector(".close");

burgerMenu.addEventListener('click',function(){
    popup.style.display="block";
})
close.addEventListener('click',function(){
    popup.style.display="none";
})

burgerMenu.addEventListener('click', function(){
    document.querySelector("body").style.overflowY= "hidden";
})
close.addEventListener('click', function(){
    document.querySelector("body").style.overflowY= "scroll";
})