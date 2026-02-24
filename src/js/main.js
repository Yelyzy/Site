document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".header-btn");
  const details = document.querySelector(".details-summary");
  if (!btn || !details) return;

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    details.classList.toggle("open");
    // hide header description while details are open (use class for animation)
    const headerDesc = document.querySelector(".header-text .description");
    if (headerDesc) {
      if (details.classList.contains("open"))
        headerDesc.classList.add("hidden");
      else headerDesc.classList.remove("hidden");
    }
    // update button label
    if (details.classList.contains("open")) {
      btn.textContent = "Fermer";
      btn.setAttribute("aria-expanded", "true");
    } else {
      btn.textContent = "Voir les details du projet";
      btn.setAttribute("aria-expanded", "false");
    }
  });
});
