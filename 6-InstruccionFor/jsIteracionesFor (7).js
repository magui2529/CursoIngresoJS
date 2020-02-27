function mostrar() {
    var numero = parseInt(prompt("Ingrese un numero"));
    var contadorDivisores = 0;
    var i = 0;


    while (isNaN(numero)) {
        numero = prompt("ERROR. Ingrese un numero");
    }
    for (var i = 1; i <= numero; i++) {
        if (i % 2 == 0) {
            console.log(i);
            contadorDivisores++;
        }
    }
    console.log("Cantidad de divisores encontrados " + contadorDivisores);




}//FIN DE LA FUNCIÓN