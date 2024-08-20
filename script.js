document.addEventListener('DOMContentLoaded', function() {

    const inputTexto = document.getElementById('inputTexto');
    const encriptarBtn = document.getElementById('encriptarBtn');
    const desencriptarBtn = document.getElementById('desencriptarBtn');

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

    encriptarBtn.addEventListener('click', function() {
        const texto = inputTexto.value; 
        const textoEncriptado = encriptarTexto(texto);
        localStorage.setItem('resultado', textoEncriptado);
        window.location.href = 'index__encriptado__result.html';  // Asegúrate de que el archivo tenga este nombre exacto
    });

    desencriptarBtn.addEventListener('click', function() { 
        const texto = inputTexto.value; 
        const textoDesencriptado = desencriptarTexto(texto);
        localStorage.setItem('resultado', textoDesencriptado);
        window.location.href = 'index__encriptado__result.html';  // Igual que arriba, verifica el nombre del archivo
    });

});

