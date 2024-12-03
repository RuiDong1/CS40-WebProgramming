let menuIcon = document.getElementById("menuIcon");
let navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.classList.toggle("active");
}

// function toggleMenu(){
//     if(navLinks.style.display === "none"){
//         navLinks.style.display = "flex";
//     } else {
//         navLinks.style.display = "none";
//     }
// }

menuIcon.addEventListener("click", showMenu);
