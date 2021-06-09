
/* 
alert ("Para realizar la simulación ingrese el monto deseado y elija la cantidad de cuotas a abonar (12, 24 o 36 meses)")

let monto = parseInt(prompt("Por favor ingrese el monto deseado"));
if (monto <= 0) {
    alert ("El monto ingresado es menor o igual a 0, reingrese");
}
let meses = parseInt(prompt("Elija entre 12, 24 o 36 meses"));
switch (meses) {
    case 12:
        alert ("Ud ingresó" + espacio + monto + espacio + "en" + espacio + "12 meses");
        break;
    case 24:
        alert ("Ud ingresó" + espacio + monto + espacio + "en" + espacio + "24 meses");
        break;
    case 36:
        alert ("Ud ingresó" + espacio + monto + espacio + "en" + espacio + "36 meses");
        break;
    default:
        alert ("La cantidad de meses seleccionados no está disponible")
}   

const interes = x => x * 0.37;
const suma = (a, b) => a + b;
const division = (a, b) => a / b;

let prestamo = suma(monto, interes(monto));
let cuota = division(prestamo, meses);
alert ("El valor final de su préstamo es " + prestamo + espacio + "en " + meses + espacio + "cuotas finales de " + cuota); */

// La idea seria que el usuario ingrese un monto 
//y se le calcule 3 opciones de cuotas con su interes