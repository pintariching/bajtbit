const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

navToggle.addEventListener("click", () => {
  const open = siteNav.classList.toggle("open");
  navToggle.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", String(open));
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const currentYear = document.querySelector(".footer-copy");
if (currentYear) {
  currentYear.textContent = currentYear.textContent.replace("2025", String(new Date().getFullYear()));
}

const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (form.checkValidity()) {
    note.hidden = false;
    form.reset();
  }
});
