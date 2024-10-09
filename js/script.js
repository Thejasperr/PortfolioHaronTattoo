window.onscroll = function() {
    let header = document.getElementById("seta");
    if (window.scrollY > 100) { // Quando rolar mais de 100px, o cabeçalho some
        header.style.opacity = "0";
    } else {
        header.style.opacity = "1"; // Quando voltar para menos de 100px, ele aparece novamente
    }
    
  };
  
  // Seleciona o elemento a ser ocultado
  const elemento = document.getElementById('botaowpp');
  // Seleciona a seção alvo
  const secaoAlvo = document.getElementById('Contato');
  
  // Cria o observador
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Se a seção está visível, oculta o elemento
              elemento.style.opacity = "0";;
          } else {
              // Se a seção não está visível, mostra o elemento
              elemento.style.opacity = "1";
          }
      });
  });
  
  // Observa a seção alvo
  observer.observe(secaoAlvo);