document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("themeToggle");
  const body = document.body;

  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-theme");
    toggleButton.textContent = "🌙 Night";
  } else {
    toggleButton.textContent = "🌞 Day";
  }

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
      toggleButton.textContent = "🌙 Night";
    } else {
      localStorage.setItem("theme", "light");
      toggleButton.textContent = "🌞 Day";
    }
  });
});