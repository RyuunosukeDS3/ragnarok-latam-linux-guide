function loadTutorial(lang) {
  const file = `tutorial-${lang}.md`;
  fetch(file)
    .then(response => response.text())
    .then(mdText => {
      const converter = new showdown.Converter();
      const html = converter.makeHtml(mdText);
      document.getElementById('tutorial-content').innerHTML = html;
      addCopyButtons(); // Add copy buttons after rendering
      bindImagePopups(); // Bind image zoom after content is injected
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
    button.innerText = "Copiar";
    
    button.addEventListener("click", () => {
      const code = block.querySelector("code");
      if (!code) return;

      navigator.clipboard.writeText(code.innerText).then(() => {
        button.innerText = "Copiado!";
        setTimeout(() => {
          button.innerText = "Copiar";
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

window.onload = () => loadTutorial('pt');
