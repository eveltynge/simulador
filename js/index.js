const solicitantes = [];
let condicion = true;

class Solicitud {
    constructor(nombre, montos, meses){
        this.nombre=nombre,
        this.montos=montos,
        this.meses=meses;
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
        this.montoTotal = this.montos + this.montos*this.interes;
        return this.montoTotal;
    }
    cuotaFinal(){
        this.cuota = this.montoTotal / this.meses;
        return this.cuota;
    }
}
do {
    let nombre = "";
    while (nombre == ""){
        nombre = prompt ("Por favor ingrese su nombre");
    }
    alert ("Hola " + nombre + ". " + "Bienvenido a tu simulador de préstamos");

    let montos = 0;
    do {
        montos = (parseInt(prompt("Ingrese un monto mayor a 0 para simular su préstamo")));
    } while (montos <= 0);

    let meses = 0;
    do {
        meses = (parseInt(prompt("Seleccione entre 12, 24 o 36 meses")));
    } while ((meses != 12) && (meses != 24) && (meses != 36));

    let SolicitudIngresada = new Solicitud(nombre, montos, meses);

    solicitantes.push(SolicitudIngresada)

    alert ("Ud ingresó " + SolicitudIngresada.montos + " en " + SolicitudIngresada.meses + " meses");
    alert ("Ud abonará "+ SolicitudIngresada.montoFinal() + " en cuotas de " + SolicitudIngresada.cuotaFinal() + " con un interes de " + SolicitudIngresada.interes);

    condicion = confirm("Quiere simular un nuevo préstamo?")

} while (condicion != false);

console.log(solicitantes);

const section = document.getElementsByClassName('contenedor');

for (let element of solicitantes){

    let div = document.createElement('div');
    div.className = 'usuarios'
    div.innerHTML = `
    <h1>${element.nombre}</h1>
    <p>${element.montos}</p>
    <p>${element.meses}</p>`

    section.appendChild(div);
   
}
console.log(section);