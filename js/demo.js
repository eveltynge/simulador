//Version previa a la entrega del 2da TP
/* const solicitantes = [];
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

let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", Simular);

function Simular(e){
    e.preventDefault();
    console.log(document.getElementById("mntSlc").value);
    if(document.getElementById("opciona").checked == true) {   
        console.log("opciona");   
    } else if (document.getElementById("opcionb").checked == true){  
        console.log("opcionb"); 
    } else if (document.getElementById("opcionc").checked == true) 
        console.log("opcionc");
} 

const section = document.getElementsByClassName('contenedor');

for (let element of solicitantes){

    let div = document.createElement('div');
    div.className = 'usuarios'
    div.innerHTML = `
    <p>Usuario: ${element.nombre}</p>
    <p>Monto solicitado: ${element.montos}</p>
    <p>Cantidad de cuotas: ${element.meses}</p>
    <p>Monto a pagar: ${element.montoTotal}</p>
    <p>Monto de la cuota: ${element.cuota}</p>`
 
    section[0].appendChild(div);
   
}
console.log(section); */


//version entregada para 2da TP
const solicitantes = [];

class Solicitud {
    constructor(nombre, apellido, monto, meses){
        this.nombre=nombre,
        this.apellido=apellido,
        this.montos=monto;
        this.meses=meses;
        this.montoTotal = 0;
        this.cuota = 0;
        this.interes = 0;
        switch (this.meses){
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

let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", Simular);

function Simular(e) {
    e.preventDefault();    
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let monto = document.getElementById("mntSlc").value;
    let cuotasSelec = document.querySelector('input[name="cuotas"]:checked');
    let cuota = cuotasSelec.value;
    
    let solicitantes = new Solicitud(nombre, apellido, monto, cuota);
    solicitantes.montoFinal();
    solicitantes.cuotaFinal();
    console.log(solicitantes);

    const section = document.querySelector('.contenedor');
    const div = document.createElement('div');
    div.className = 'usuarios';
    div.innerHTML = `
    <p>Usuario: ${solicitantes.nombre} ${solicitantes.apellido}</p>
    <p>Monto Solicitado: ${solicitantes.monto}</p>
    <p>Cuota: ${solicitantes.cuota} </p>
    <p>Monto a devolver: ${solicitantes.montoTotal} </p>
    <p>Valor cuota: ${solicitantes.cuota} </p>`;

    section.appendChild(div);

const guardados = JSON.stringify(solicitantes);
localStorage.setItem("solicitantes", guardados);
}

