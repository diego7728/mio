function imprimirNumeros() {

    var inicio = parseInt(document.getElementById('inicio').value);
    var fin = parseInt(document.getElementById('fin').value);

    if (!isNaN(inicio) && !isNaN(fin) && inicio < fin) {
        var resultadoDiv = document.getElementById('resultado');
        for (var i = inicio; i <= fin; i += 2) {
            var parrafo = document.createElement('p');
            parrafo.textContent = i;
            resultadoDiv.appendChild(parrafo);
        }
    } else {
        alert('Ingresa valores válidos. Asegúrate de que el inicio sea menor que el fin.');
    }
}