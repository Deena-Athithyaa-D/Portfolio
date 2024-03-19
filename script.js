var typed = new Typed(".typing", {
  strings: [
    "Web Developer",
    "Creative Thinker",
    "Problem Solver",
    "Tech Enthusiast",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
  fadeOut: true,
});
var typed = new Typed(".typing-2", {
  strings: [
    "Web Developer",
    "Creative Thinker",
    "Problem Solver",
    "Tech Enthusiast",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
  fadeOut: true,
});
function proj2open() {
  var githubUrl = "https://github.com/Deena-Athithyaa-D/bank-App.git";

  window.open(githubUrl, "_blank");
}
function proj1open() {
  var githubUrl = "https://github.com/Deena-Athithyaa-D/MapApp.git";

  window.open(githubUrl, "_blank");
}
// Media Querys
const menuIcon = document.querySelector(".menu_icon");
const navLinks = document.querySelector(".nav");
const sidebar = document.querySelector(".sidebar");
function handleScreenWidth() {
  if (window.innerWidth <= 600) {
    menuIcon.style.display = "block";
    navLinks.style.display = "none"; // Ensure navigation links 
    sidebar.style.display = "block";
  } else {
    menuIcon.style.display = "none";
    navLinks.style.display = "block"; // Ensure navigation links are shown on resize
    sidebar.style.display = "none"; 
  }
}
handleScreenWidth();
window.addEventListener("resize", handleScreenWidth);

menuIcon.addEventListener("click", toggleSidebar);

function toggleSidebar() {
  sidebar.classList.toggle("active");
}
const sideNavLinks = document.querySelectorAll(".nav-Links li a");
sideNavLinks.forEach(function (link) {
  link.addEventListener("click", toggleSidebar);
});
