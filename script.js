// script.js with memory
const toggle = document.getElementById('themeToggle');
const isDark = localStorage.getItem("darkMode") === "true";

if (isDark) {
  document.body.classList.add("dark-mode");
  toggle.checked = true;
}

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});
