/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var num1
    var resultado

    num1=parseInt(document.getElementById("importe").value);
    
    resultado=(num1 * 25 / 100);
    (document.getElementById("resultado").value)=num1 - resultado;


}
