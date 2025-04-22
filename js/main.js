function loadTutorial(lang) {
  const file = `tutorial-${lang}.md`;
  fetch(file)
    .then(response => response.text())
    .then(mdText => {
      const converter = new showdown.Converter();
      const html = converter.makeHtml(mdText);
      document.getElementById('tutorial-content').innerHTML = html;
    })
    .catch(error => {
      document.getElementById('tutorial-content').innerHTML = "<p>Falha ao carregar o tutorial.</p>";
    });
}

// Existing marked config
marked.setOptions({
  gfm: true,
  breaks: true
});

// Mode toggle
const modeToggle = document.getElementById("modeToggle");

// Set dark mode by default
document.body.classList.add("dark-mode");
modeToggle.textContent = "☀️ Light Mode";

modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    modeToggle.textContent = "☀️ Light Mode";
  } else {
    modeToggle.textContent = "🌙 Dark Mode";
  }
});


// Load Portuguese (default) on page load
window.onload = () => loadTutorial('pt');
  