 let nombre = prompt ("Por favor ingrese su nombre");
        if (nombre == "") {
            alert ("Por favor ingrese su nombre para continuar");
        } else {
        alert ("Hola " + nombre + ". " + "Bienvenido a tu simulador de préstamos"); 
}
/* const listaNombres = [];
let   cantidad     = 5;
//Empleo de do...while para cargar nombres en el array por prompt()
do{
    let nombre = prompt ("Por favor ingrese su nombre");
   listaNombres.push(nombre.toUpperCase());
   console.log(listaNombres.length);
}while(listaNombres.length != cantidad) */


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
monto = 0;
do {
    monto = (parseInt(prompt("Ingrese un monto mayor a 0 para simular su préstamo")));
} while (monto <= 0);
meses = 0;
do {
    meses = (parseInt(prompt("Seleccione entre 12, 24 o 36 meses")));
} while ((meses != 12) && (meses != 24) && (meses != 36));


/* monto = (parseInt(prompt("Ingrese el monto a simular")));
if (monto <= 0) {
    alert("El monto ingresado no puede ser menor a 0");
}else {
    meses = (parseInt(prompt("Seleccione entre 12, 24 o 36 meses")));
    if ((meses == 12) || (meses == 24) || (meses == 36)) {
        alert("Ud ingresó " + monto + " " + "en" + " " + meses + " meses");
    }else {
        alert("La cantidad de meses seleccionados no está disponible");
    }
} */
/* switch (meses) {
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
} */
const prestamo1 = new Prestamo (monto, 12, 0.20);
const prestamo2 = new Prestamo (monto, 24, 0.30);
const prestamo3 = new Prestamo (monto, 36, 0.40);

console.log(prestamo1);
prestamo1.montoFinal();
prestamo1.cuotaFinal();




