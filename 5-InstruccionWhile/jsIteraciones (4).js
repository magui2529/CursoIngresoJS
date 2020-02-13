function mostrar()
{

	var numero =parseInt(prompt("ingrese un número entre 0 y 9."));

	while(numero>9 || numero < 0 || isNaN(numero) ){
		
		numero=parseInt(prompt("ERROR, ingrese nuevamente un numero"));

	}
	document.getElementById("Numero").value=numero;                                                                                 


}//FIN DE LA FUNCIÓN