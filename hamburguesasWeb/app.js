let navbar= document.querySelector(".navbar");
let menu = document.querySelector("#menu-icon");

menu.addEventListener("click", function () 
{navbar.classList.toggle("active");

});
window.onscroll =() => {
navbar.classList.remove("active");
}