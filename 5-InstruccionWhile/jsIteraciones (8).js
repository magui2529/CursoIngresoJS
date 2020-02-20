function mostrar() {

	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	var respuesta;
	var numero;
	var flag = 0;


	do {
		numero = parseInt(prompt("Ingrese un numero: "));

		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero : "));

		}

		if (numero >= 0) {
			positivo = positivo + numero;

		} else {

			negativo = negativo * numero;
			flag = 1;
			/*contador++;*/
		}

		respuesta = prompt("Quiere continuar ingresando numeros?");

	} while (respuesta == 's');

	/* if (contador==0)*/

	if (flag == 0) {
		negativo = 0;
	}


	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN