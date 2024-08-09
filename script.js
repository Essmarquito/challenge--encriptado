// Función para encriptar el texto
function encriptarTexto(texto) {
    return texto.replace(/a/g, 'ai')
                .replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    return texto.replace(/ai/g, 'a')
                .replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
}

document.addEventListener('DOMContentLoaded', function() {
    // Selecciona solo los elementos específicos
    const inputTexto = document.getElementById('inputTexto');
    const encriptarBtn = document.getElementById('encriptarBtn');
    const desencriptarBtn = document.getElementById('desencriptarBtn');
    const resultMessage = document.querySelector('.result-message');

    if (inputTexto && encriptarBtn && desencriptarBtn && resultMessage) {
        // Evento para encriptar el texto
        encriptarBtn.addEventListener('click', function(event) {
            event.preventDefault();
            const texto = inputTexto.value;
            const textoEncriptado = encriptarTexto(texto);
            resultMessage.textContent = textoEncriptado || 'Ingrese el texto que desees encriptar.';
        });

        // Evento para desencriptar el texto
        desencriptarBtn.addEventListener('click', function(event) {
            event.preventDefault();
            const texto = inputTexto.value;
            const textoDesencriptado = desencriptarTexto(texto);
            resultMessage.textContent = textoDesencriptado || 'Ingrese el texto que desees desencriptar.';
        });
    }
});
