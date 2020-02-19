function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while(!(sexo=="f" || sexo=="m")){
    sexo=prompt("INVÁLIDO. Ingrese nuevamente el sexo.");
}

document.getElementById('Sexo').value=sexo;

/* A) Mientras sexo no sea f o m
B) Mientras sexo sea distinto de f y distinto de m */
}//FIN DE LA FUNCIÓN