document.addEventListener('DOMContentLoaded', function () {
    const inputTexto = document.getElementById('inputTexto');
    const outputTexto = document.getElementById('outputTexto');
    const copiarBtn = document.getElementById('copiarBtn');
    const encriptarBtn = document.getElementById('encriptarBtn');
    const desencriptarBtn = document.getElementById('desencriptarBtn');

    // Cargar el resultado almacenado en localStorage si existe
    const resultado = localStorage.getItem('resultado');
    if (resultado) {
        outputTexto.value = resultado;
    }

    encriptarBtn.addEventListener('click', function() {
        const texto = inputTexto.value;
        const textoEncriptado = encriptarTexto(texto);
        outputTexto.value = textoEncriptado;
        // Guardar el resultado en localStorage
        localStorage.setItem('resultado', textoEncriptado);
    });

    desencriptarBtn.addEventListener('click', function() {
        const texto = inputTexto.value;
        const textoDesencriptado = desencriptarTexto(texto);
        outputTexto.value = textoDesencriptado;
        // Guardar el resultado en localStorage
        localStorage.setItem('resultado', textoDesencriptado);
    });

    copiarBtn.addEventListener('click', function () {
        navigator.clipboard.writeText(outputTexto.value)
            .then(() => alert('Texto copiado al portapapeles'))
            .catch(err => console.error('Error al copiar el texto:', err));
    });

    function encriptarTexto(texto) {
        // Lógica de encriptación
        return texto.replace(/a/g, 'ai').replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    }

    function desencriptarTexto(texto) {
        // Lógica de desencriptación
        return texto.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    }
});
