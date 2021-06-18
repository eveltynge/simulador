class Prestamo {
    constructor (monto, meses) {
        this.monto = monto;
        this.meses = meses;
        switch (this.meses) {
            case 12:
                this.interes = 0.20;
                break;
            case 24:
                this.interes = 0.30;
                break;
            case 36:
                this.interes = 0.40;
                break;
        }
    }
    montoFinal(){
        this.montoTotal = this.monto + this.monto*this.interes;
        return this.montoTotal;
    }
    cuotaFinal(){
        this.cuota = this.montoTotal / this.meses;
        return this.cuota;
    }
}

/* const solicitudes = [];
let cantidad = 3;
while (solicitudes.length < cantidad) {
    let nombre = "";
    while (nombre == ""){
        nombre = prompt ("Por favor ingrese su nombre");
    }
    alert ("Hola " + nombre + ". " + "Bienvenido a tu simulador de préstamos");
    solicitudes.push(nombre);
    let monto = 0;
    do {
        monto = (parseInt(prompt("Ingrese un monto mayor a 0 para simular su préstamo")));
    } while (monto <= 0);
    let meses = 0;
    do {
        meses = (parseInt(prompt("Seleccione entre 12, 24 o 36 meses")));
    } while ((meses != 12) && (meses != 24) && (meses != 36));

    const prestamo1 = new Prestamo (monto, meses);
    alert ("Ud ingresó " + prestamo1.monto + " en " + prestamo1.meses + " meses");
    alert ("Ud abonará "+ prestamo1.montoFinal() + " en cuotas de " + prestamo1.cuotaFinal() + " con un interes de " + prestamo1.interes);
}
console.log(solicitudes); */
