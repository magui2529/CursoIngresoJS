function mostrar()
{

	var numero;
	var negativo=0;
	var positivo=0;
	var cero=0;
	var acumuladorpos=0;
	var acumuladorneg=0;
	var par=0;
	var impar;
	var acumpar;
	var acumimpar;
	var promediopos;
	var promedioneg;
	var diferencia;
	

	do{
		numero=parseInt(prompt("Ingrese un numero"));
		while(isNaN(numero)){
			numero=parseInt(prompt("No es un numero. Ingrese un numero."));
		}
			if(numero==0){
				cero++;
				
			 }else if(numero<0){
			negativo++;
			acumuladorneg=acumuladorneg+numero;
		}else{
			positivo++;
			acumuladorpos=acumuladorpos+numero;
	
		} if(numero%2==0){
		par++;
	
	}else{
		impar++;
		
		
	}respuesta = prompt("Quiere continuar ingresando numeros?");	
}    while (respuesta == 's');

promediopos=acumuladorpos/positivo;
promedioneg=acumuladorneg/negativo;
diferencia=acumuladorpos+acumuladorneg;

document.write("La suma de los negativos es " + acumuladorneg);
document.write("<br>La suma de los positivos es " + acumuladorpos);
document.write("<br>La cantidad de ceros ingresados es " + cero);
document.write("<br>La cantidad de numeros pares es " + par);
document.write("<br>El promedio de los numeros positivos es " + promediopos); 
document.write("<br>El promedio de los numeros negativos es " + promedioneg);
document.write("<br>La diferencia entre positivos y negativos es " + diferencia);

	
	
		
	
	



}//FIN DE LA FUNCIÓN