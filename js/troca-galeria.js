function ajustarElementos() {
    const larguraTela = window.innerWidth;
    const elementoMaior = document.getElementById('galeria');
    const elementoMenor = document.getElementById('galeria-mobile');
  
    if (larguraTela > 1025) {
      elementoMaior.style.display = 'flex';
      elementoMenor.style.display = 'none';
    } else {
      elementoMaior.style.display = 'none';
      elementoMenor.style.display = 'flex';
    }
  }
  
  // Chama a função ao carregar a página
  ajustarElementos();
  
  // Chama a função sempre que a janela é redimensionada
  window.addEventListener('resize', ajustarElementos);