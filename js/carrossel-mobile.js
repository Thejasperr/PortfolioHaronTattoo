let indice = 0;

    function mover(direcao) {
        const galeria = document.getElementById("galeriaImagens");
        const totalImagens = document.querySelectorAll(".box").length;
        indice += direcao;

        // Verifica se o índice está fora do limite e reinicia
        if (indice < 0) {
            indice = totalImagens - 1; // Volta para a última imagem
        } else if (indice >= totalImagens) {
            indice = 0; // Volta para a primeira imagem
        }

        const deslocamento = -indice * 100; // Ajustado para mostrar uma imagem por vez
        galeria.style.transform = `translateX(${deslocamento}%)`;
    }