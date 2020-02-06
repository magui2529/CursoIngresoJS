/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {
    var n1 = document.getElementById("numeroUno").value;
    var n2 = document.getElementById("numeroDos").value;
    var result;

    result = parseInt(n1) + parseInt(n2);
    alert("El resultado de la suma es " + result);

}

function restar() {
    var n1 = document.getElementById("numeroUno").value;
    var n2 = document.getElementById("numeroDos").value;
    var result;

    result = parseInt(n1) - parseInt(n2);
    alert("El resultado de la resta es " + result);
}

function multiplicar() {
    var n1 
    var n2
    var result;
    num1=parseInt(document.getElementById("numeroUno").value);
    num2=parseInt(document.getElementById("numeroDos").value);
    alert("El resultado de la multiplicación es " + result);

}

function dividir() {
    var n1 = document.getElementById("numeroUno").value;
    var n2 = document.getElementById("numeroDos").value;
    var result;

    result = parseInt(n1) / parseInt(n2);
    alert("El resultado de la división es " + result);

}

