/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var num1
    var resultado

    num1=parseInt(document.getElementById("sueldo").value);
    
    resultado=(num1 * 10 / 100);
    (document.getElementById("resultado").value)=resultado+ num1;
	
}
