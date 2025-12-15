let hamburger = document.getElementById("hamburger");
let navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("active"); 
    navLinks.classList.toggle("active");
});
