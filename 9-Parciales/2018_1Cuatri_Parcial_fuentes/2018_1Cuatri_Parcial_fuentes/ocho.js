function mostrar() {
    var letra;
    var numero;
    var cero;
    var promedioPositivos;
    var par;
    var impar;
    var negativos;
    var numMaximo;
    var letraMaximo;
    var numMinimo;
    var letraMinimo;
    var respuesta;
    var cont=0;
    var contPar=0;
    var contImpar=0;
    var contCeros=0;
    var contPos=0;
    var totalPos=0;
    var contNeg=0;
    var totalNeg=0;
    var numMaximo;
    var letraMaximo;
    var acumLetraMaximo;
    var numMinimo;
    var letraMinimo;
    var sumaNeg;

    do {
        numero = parseInt(prompt("Ingrese un numero del -100 al 100"));
        while (isNaN(numero) || numero < -100 && numero < 100) {
            numero = parseInt(prompt("ERROR. Ingrese un numero del -100 al 100"));
        }
        letra = prompt("Ingrese una letra");

        if(numero%2==0){
            contPar++;

        }else{
            contImpar++;
        }
    
        if(numero==0){
            contCeros++;

        }
        if(numero>0){
            contPos++;
            totalPos=totalPos+numero;
        }else{
            contNeg++;
            totalNeg=totalNeg+numero;
            
        }
        if(cont==0)
        {
            numMaximo=numero;
            letraMaximo=letra;
        
        }else if(numMaximo<numero){
            numMaximo=numero;
            letraMaximo=letra;
            
        
        }
        if(cont==0)
        {
            numMinimo=numero;
            letraMinimo=letra;
        
        }else if(numMinimo>numero){
            numMinimo=numero;
            letraMinimo=letra;
        }
        
        cont++;

        respuesta = prompt("¿Quiere seguir ingresando datos?");
    }while (respuesta == "si");

    promedioPositivos=totalPos / contPos;
    


    document.write("<br>La cantidad de numeros pares es " + contPar );
    document.write("<br>La cantidad de numeros impares es " + contImpar);
    document.write("<br>El promedio de todos los numeros positivos es " + promedioPositivos);
    document.write("<br> La suma de todos los numeros negativos es " + totalNeg);
    document.write("<br> El numero maximo es " + numMaximo + " y la letra es " + letraMaximo);
    document.write("<br>El numero minimo es " + numMinimo + " y  la letra es " + letraMinimo);


   






}
//CANTIDAD=CONTADOR (ATRODEN)
 //TOTAL=ACUMULADOR(ATRODEN)
//PROMEDIO (ARAFUE)
/*Maximos y minimos paso 1: guardo el dato en la primera iteracion 
paso 2 : comparo la variable menor o mayor con el nuevo dato ingresado y guardo el dato ingresado en la variable menor o mayor


*/
