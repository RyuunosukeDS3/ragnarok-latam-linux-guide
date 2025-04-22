function loadTutorial(lang) {
  const file = `tutorial-${lang}.md`;
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error("File not found");
      return response.text();
    })
    .then(mdText => {
      const converter = new showdown.Converter();
      const html = converter.makeHtml(mdText);
      document.getElementById('tutorial-content').innerHTML = html;

      updateStaticTexts(lang); // Update header/footer when language changes
    })
    .catch(error => {
      document.getElementById('tutorial-content').innerHTML = "<p>Falha ao carregar o tutorial.</p>";
    });
}

// Mode toggle
const modeToggle = document.getElementById("modeToggle");
document.body.classList.add("dark-mode");
modeToggle.textContent = "☀️ Light Mode";

modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  modeToggle.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// Language switcher — fixed list: pt, es, en
const languages = ["pt", "es", "en"];
languages.forEach(lang => {
  const button = document.querySelector(`[onclick="loadTutorial('${lang}')"]`);
  if (button) {
    button.addEventListener("click", () => loadTutorial(lang));
  }
});

// Update title and footer based on language
function updateStaticTexts(lang) {
  const titleElement = document.querySelector("header h1");
  const footerText = document.querySelector("footer p");

  const texts = {
    pt: {
      title: "Ragnarok Online LATAM no Linux",
      footer: "Feito com ❤️ para jogadores do Ragnarok Online LATAM"
    },
    es: {
      title: "Ragnarok Online LATAM en Linux",
      footer: "Hecho con ❤️ para jugadores de Ragnarok Online LATAM"
    },
    en: {
      title: "Ragnarok Online LATAM on Linux",
      footer: "Made with ❤️ for Ragnarok Online LATAM players"
    }
  };

  if (texts[lang]) {
    titleElement.textContent = texts[lang].title;
    footerText.textContent = texts[lang].footer;
  }
}

// Load Portuguese (default) on page load
window.onload = () => loadTutorial('pt');
