document.getElementById("mode-toggle").onclick = function() {
  document.body.classList.toggle("dark");
  const icon = document.getElementById("mode-icon");
  if(document.body.classList.contains("dark")) {
    icon.src = "images/dark_mode_black.png";
    icon.alt = "وضع داكن";
  } else {
    icon.src = "images/light_mode_white.png";
    icon.alt = "وضع فاتح";
  }
};

document.getElementById("search").onkeyup = function() {
  const q = this.value.toLowerCase();
  document.querySelectorAll(".card").forEach(card => {
    card.style.display = card.textContent.toLowerCase().includes(q) ? "inline-block" : "none";
  });
};
