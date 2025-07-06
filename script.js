
document.getElementById("mode-toggle").onclick = function() {
  document.body.classList.toggle("dark");
};

document.getElementById("search").onkeyup = function() {
  const q = this.value.toLowerCase();
  document.querySelectorAll(".card").forEach(card => {
    card.style.display = card.textContent.toLowerCase().includes(q) ? "inline-block" : "none";
  });
};
