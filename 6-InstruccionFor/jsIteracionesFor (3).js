function mostrar() {

    var repeticion = parseInt(prompt("Ingrese la cantidad de veces que quiera repetir el msj"));
    var cont = 0;

    while (isNaN(repeticion)) {

        repeticion = parseInt(prompt("ERROR. Ingrese la cantidad de veces que quiera repetir el msj"));
    }
    for (i = 0; i < repeticion; cont++) {
        document.write("UTN FRA <br>" + repeticion);
    }



}//FIN DE LA FUNCIÓN