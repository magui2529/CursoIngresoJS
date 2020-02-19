function mostrar()
{

	var contador=1;
	var acumulador=0;
	 var num;
	while(contador < 5 ) {
		num=parseInt(prompt("Ingrese un numero"));
		acumulador=acumulador + num;
		contador ++;
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN,
