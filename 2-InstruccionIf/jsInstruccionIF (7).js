function mostrar()
{
//tomo la edad  
var edad=parseInt(document.getElementById("edad").value);
var estadocivil=document.getElementById("estadoCivil").value;

if(edad<18 && !(estadocivil=="Soltero")) {
    alert("Es muy pequeño para NO ser soltero");
}

	


}//FIN DE LA FUNCIÓN