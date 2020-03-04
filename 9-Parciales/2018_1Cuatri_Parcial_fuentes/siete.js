function mostrar() {
    var notas;
    var sexo;
    var contador;
    var acumulador = 0;
    var promedio;
    var notaMenor;
    var sexoMenor;
    var contVarones=0;

    for (contador = 0; contador < 5; contador++) {

        notas = parseInt(prompt("Ingrese nota del 0 al 10"));
        while (isNaN(notas) || notas < 0 || notas > 10) {
            notas = parseInt(prompt("ERROR, ingrese nota del 0 al 10"));

        }

        sexo = prompt("Ingrese f o m para identificar el sexo");
        while (sexo != "f" && sexo != "m") {
            sexo = prompt("ERROR, ingrese f o m para identificar el sexo");

        }
        acumulador = acumulador + notas;

        if(contador==0)
        {
            notaMenor=notas;
            sexoMenor=sexo;

        }
        else if(notaMenor>notas)
        {
            notaMenor=notas;
            sexoMenor=sexo;

        }
        
        if(sexo=="m" && notas>=6){
            contVarones++;

        }

    }
    promedio=acumulador/contador;

    alert("El promedio de las notas totales es " + promedio);
    alert("La nota mas baja es " + notaMenor  + "y el sexo de esa persona es " + sexoMenor);
    alert("La cantidad de varones que aprobaron " + contVarones);

//CANTIDAD=CONTADOR
//TOTAL=ACUMULADOR



}






























