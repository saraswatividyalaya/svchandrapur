// Load Header
fetch("header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
  });

// Load Footer
fetch("footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });

// Mobile Menu Toggle
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
  const toggle = document.querySelector(".menu-toggle");
  const isExpanded = menu.classList.contains("active");
  toggle.setAttribute("aria-expanded", isExpanded);
}

// Close menu when clicking a link (on mobile)
document.addEventListener("click", function(e) {
  if (e.target.closest("nav ul li a") && window.innerWidth <= 768) {
    const menu = document.getElementById("menu");
    if (menu) {
      menu.classList.remove("active");
      document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false");
    }
  }
});