function mostrar() {
    var numero = parseInt(prompt("Ingrese un numero"));
    var contadorPares = 0;
    var i=0;


    while (isNaN(numero)) {
        numero = prompt("ERROR. Ingrese un numero");
    }
    for( var i=1; i<=numero; i++){
        if(i%2==0){
            console.log(i);
            contadorPares++;
        }
    }
    console.log("Cantidad de pares encontrados " +contadorPares);





}//FIN DE LA FUNCIÓN