var sidenav = document.getElementById("sidenav")
var menubtn = document.getElementById("menubtn")
var closenav = document.getElementById("closenav")

menubtn.addEventListener("click",function(){
    sidenav.style.right=0
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})