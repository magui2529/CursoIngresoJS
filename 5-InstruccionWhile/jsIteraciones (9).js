function mostrar() {

	var contador = 0;
	var maximo;
	var minimo;
	var numero;

	var respuesta;

	do {
		numero = parseInt(prompt("Ingrese un numero"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Esto no es numero. Ingrese un numero"));
		}
		if(contador==0){
			maximo=numero;
			minimo=numero;
			contador++;
		
		}
	if ( numero > maximo) {
		maximo=numero;
		
	} else if ( numero < minimo) {
		minimo=numero;

	} respuesta = prompt("Quiere continuar ingresando numeros?");

} while (respuesta == 'si');
	
document.getElementById('maximo').value = maximo;
document.getElementById('minimo').value = minimo;	




}//FIN DE LA FUNCIÓN