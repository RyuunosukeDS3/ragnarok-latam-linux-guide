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
      addCopyButtons(); // Add copy buttons after rendering
      bindImagePopups(); // Bind image zoom after content is injected
      updateStaticTexts(lang); // Update header/footer when language changes
    })
    .catch(error => {
      document.getElementById('tutorial-content').innerHTML = "<p>Falha ao carregar o tutorial.</p>";
    });
}

function addCopyButtons() {
  const codeBlocks = document.querySelectorAll("#tutorial-content pre");

  codeBlocks.forEach(block => {
    const button = document.createElement("button");
    button.className = "copy-button";
    button.innerText = "Copiar"; // fallback
    button.dataset.copyText = "Copiar";
    button.dataset.copiedText = "Copiado!";

    button.addEventListener("click", () => {
      const code = block.querySelector("code");
      if (!code) return;

      navigator.clipboard.writeText(code.innerText).then(() => {
        const copiedText = button.dataset.copiedText || "Copiado!";
        const originalText = button.dataset.copyText || "Copiar";

        button.innerText = copiedText;
        setTimeout(() => {
          button.innerText = originalText;
        }, 1500);
      });
    });

    block.appendChild(button);
  });
}

function showPopup(src) {
  const popupOverlay = document.getElementById("img-popup-overlay");
  const popupImg = document.getElementById("popup-img");

  if (!popupOverlay || !popupImg) {
    console.warn("popup overlay ou imagem não encontrados no DOM.");
    return;
  }

  popupImg.src = src;
  popupOverlay.style.display = "flex";
}

function hidePopup() {
  const overlay = document.getElementById("img-popup-overlay");
  if (overlay) {
    overlay.style.display = "none";
  }
}

function bindImagePopups() {
  const images = document.querySelectorAll("#tutorial-content img");
  images.forEach(img => {
    img.style.cursor = "zoom-in"; // opcional
    img.addEventListener("click", () => showPopup(img.src));
  });
}

marked.setOptions({
  gfm: true,
  breaks: true
});

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

function updateStaticTexts(lang) {
  const titleElement = document.querySelector("header h1");
  const footerText = document.querySelector("footer p");

  const texts = {
    pt: {
      title: "Ragnarok Online LATAM no Linux",
      footer: "Feito com ❤️ para jogadores do Ragnarok Online LATAM",
      copy: "Copiar",
      copied: "Copiado!"
    },
    es: {
      title: "Ragnarok Online LATAM en Linux",
      footer: "Hecho con ❤️ para jugadores de Ragnarok Online LATAM",
      copy: "Copiar",
      copied: "¡Copiado!"
    },
    en: {
      title: "Ragnarok Online LATAM on Linux",
      footer: "Made with ❤️ for Ragnarok Online LATAM players",
      copy: "Copy",
      copied: "Copied!"
    }
  };

  if (texts[lang]) {
    titleElement.textContent = texts[lang].title;
    footerText.textContent = texts[lang].footer;

    // Update all existing copy buttons
    document.querySelectorAll(".copy-button").forEach(btn => {
      btn.innerText = texts[lang].copy;
      btn.dataset.copyText = texts[lang].copy;
      btn.dataset.copiedText = texts[lang].copied;
    });
  }
}

// Load Portuguese (default) on page load
window.onload = () => loadTutorial('pt');

