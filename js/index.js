let nombre = prompt ("Por favor ingrese su nombre");
let espacio = " ";
if (nombre == "") {
    alert ("Por favor ingrese su nombre para continuar");
} else {
   alert ("Hola" + espacio + nombre + "." + espacio + "Bienvenido a tu simulador de préstamos"); 
}
class Prestamo {
    constructor (monto, meses, interes) {
        this.monto = monto;
        this.meses = meses;
        this.interes = interes;
    }
    montoFinal(){
        this.montoTotal = this.monto + this.monto*this.interes;
    }
    cuotaFinal(){
        this.cuota = this.montoTotal / this.meses;
    }
}
monto = (parseInt(prompt("Ingrese el monto a simular")));
meses = (parseInt(prompt("Seleccione entre 12, 24 o 36 meses")));
switch (meses) {
    case 12:
        alert ("Ud ingresó " + monto + " " + "en" + " " + meses + " meses");
        break;
    case 24:
        alert ("Ud ingresó " + monto + " " + "en" + " " + meses + " meses");
        break;
    case 36:
        alert ("Ud ingresó " + monto + " " + "en" + " " + meses + " meses");
        break;
    default:
        alert ("La cantidad de meses seleccionados no está disponible")
}   

const prestamo1 = new Prestamo (monto, 12, 0.20);
const prestamo2 = new Prestamo (monto, 24, 0.30);
const prestamo3 = new Prestamo (monto, 36, 0.40);

console.log(prestamo1);
prestamo1.montoFinal();
prestamo1.cuotaFinal();

console.log(prestamo2);
prestamo2.montoFinal();
prestamo2.cuotaFinal();

console.log(prestamo3);
prestamo3.montoFinal();
prestamo3.cuotaFinal();


