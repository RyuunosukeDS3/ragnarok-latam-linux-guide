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
  
  // Load Portuguese (default) on page load
  window.onload = () => loadTutorial('pt');
  