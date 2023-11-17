function mostrarNombresVerticales() {
    var Nombres = document.getElementById('Nombres').value;
    var nombres = Nombres.split('').map(function(nombre) {
        return nombre.trim();
    });
    var resultadoDiv = document.getElementById('resultado');
    nombres.forEach(function(nombre) {
        for (var i = 0; i < nombre.length; i++) {
            var parrafo = document.createElement('p');
            parrafo.textContent = nombre[i];
            resultadoDiv.appendChild(parrafo);
        }
    });
}