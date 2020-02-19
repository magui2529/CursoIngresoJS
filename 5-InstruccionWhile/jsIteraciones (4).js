function mostrar()
{
	/* A)Mientras el numero sea menor a 0 o mayor a 9 o no sea un numero.

	/*var numero =parseInt(prompt("ingrese un número entre 0 y 9."));

	while(numero>9 || numero < 0 || isNaN(numero) ){
		
		numero=parseInt(prompt("ERROR, ingrese nuevamente un numero"));

	}
	document.getElementById("Numero").value=numero;    */

	/* B) Mientras el numero no este entre 0 y 9*/

	var numero =parseInt(prompt("ingrese un número entre 0 y 9."));

	while(!(numero<9 && numero > 0 )){
		
		numero=parseInt(prompt("ERROR, ingrese nuevamente un numero"));

	}
	document.getElementById("Numero").value=numero; 
	
	


}//FIN DE LA FUNCIÓN