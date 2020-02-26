function mostrar()
{
var notas;
var sexo;
var cont=0;
var promedio;
var acumulador=0;

do
{
notas=(parseInt(prompt("Ingrese nota del 0 al 10")));

while(isNaN(notas) || notas<0 || notas>10)
{
    notas=prompt("Nota inválida. Ingrese nota entre 0 y 10");
    
}
    sexo=prompt("Ingrese f o m indicando el sexo");
    
    while (sexo!="f" && sexo!="m")
    {
        
        sexo=prompt("INVÁLIDO. Ingrese nuevamente el sexo.");

    } 
    cont++;
    acumulador=acumulador+notas;
 
    
} while(cont<5);

promedio=acumulador/cont;

alert("El promedio es " + promedio);
}