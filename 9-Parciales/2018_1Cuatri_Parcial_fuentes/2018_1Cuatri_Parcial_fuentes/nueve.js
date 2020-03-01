function mostrar() {
    var marca;
    var peso;
    var temperatura;
    var respuesta;
    var contTempePar = 0;
    var cont = 0;
    var pesoMaximo;
    var marcaMaximo;
    var contTemperatura = 0;
    var acumuladorPeso = 0;
    var promedio;
    var pesoMinimo;

    do {
        marca = prompt("Ingrese la marca");
        peso = parseInt(prompt("Ingrese el peso del producto entre 1 y 100"));
        while (isNaN(peso) || peso < 1 || peso > 100) {
            peso = parseInt(prompt("ERROR. Ingerese el peso del producto entre 1 y 100"));

        }
        temperatura = parseInt(prompt("Ingrese la temperatura de almacenamiento entre -30 y 30"));
        while (isNaN(temperatura) || temperatura < -30 || temperatura > 30) {
            temperatura = parseInt(prompt("ERROR. Ingrese temperatura de almacenamiento entre -30 y 30"));


            if (temperatura % 2 == 0) {
                contTempePar++;

            }

            if (cont == 0) {
                pesoMaximo = peso;
                marcaMaximo = marca;

            } else if (pesoMaximo < peso) {
                pesoMaximo = peso;
                marcaMaximo = marca;

            }
            
            
            if (temperatura < 0) {
                contTemperatura++;

            }

         

            if (cont == 0) {
                pesoMinimo = peso;
            } else if (pesoMinimo > peso) {
                pesoMinimo = peso;


            }

            cont++;

            

            acumuladorPeso=acumuladorPeso+peso;


        }

        respuesta = prompt("¿Desea ingresar mas datos?");

    } while (respuesta == 's');

    promedio = acumuladorPeso/cont;

}
//CANTIDAD=CONTADOR (ATRODEN)
 //TOTAL=ACUMULADOR(ATRODEN)
/*Maximos y minimos paso 1: guardo el dato en la primera iteracion
paso 2 : comparo la variable menor o mayor con el nuevo dato ingresado y guardo el dato ingresado en la variable menor o mayor
//NO OLVIDAR ISNAN
/*1) Pedir datos
2)Validar si lo pide
3)Dentro del DO preguntar si el usuario quiere seguir ingresando datos
4)En el WHILE que cierra el DO dar la respuesta a la pregunta anterior

PROMEDIO: EL ACUMULADOR / CONTADOR(tiene  que estar dentro del do) y el resultado de proemdio va fuera del do while 
MAXIMOS Y MINIMOS
En la primer iteracion va como condicion cont==0 y en la siguiente iteraciones se hace
la comparacion al menor o mayor agregando la condicion con else if
*/
