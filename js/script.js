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

  observer.observe(secaoAlvo);






  document.addEventListener("DOMContentLoaded", function() {
    const content = document.querySelector('.content');
    const desaparece = document.querySelector('.logo-jasper')
    
    // Depois de 0.5s, as setas se movem para os lados e o nome aparece
    setTimeout(() => {
        content.classList.add('active');
    }, 600);  // As setas se movem após 0.5s e o nome aparece logo em seguida
    
    // Primeiro, define display block (simulado pela altura e opacidade)
    setTimeout(() => {
        desaparece.classList.add('desaparecer');
    }, 3000);  // Aparecem logo após o carregamento
});