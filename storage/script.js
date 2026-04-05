// Fade-in
document.body.style.opacity = 0;
window.onload = () => {
  document.body.style.transition = "0.5s";
  document.body.style.opacity = 1;
};

// Search filter
const search = document.getElementById("search");
if (search) {
  search.addEventListener("keyup", function() {
    let filter = search.value.toLowerCase();
    let links = document.querySelectorAll("#menu a");

    links.forEach(link => {
      link.style.display = link.textContent.toLowerCase().includes(filter)
        ? "block"
        : "none";
    });
  });
}
