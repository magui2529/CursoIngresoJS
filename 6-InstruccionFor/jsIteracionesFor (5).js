function mostrar()
{
    var numero=parseInt(prompt("Ingrese un numero"));
    var cont=0;

    while(isNaN(numero)){
        numero=parseInt(prompt("ERROR. Ingrese un numero"));
    }

    if(!(numero==9)){
        alert("Ingrese un numero");
        cont++;
    }else{
        alert("Finalmente ingresó el número 9!");
    }






}//FIN DE LA FUNCIÓN