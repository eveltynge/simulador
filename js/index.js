const solicitantes = [];

class Solicitud {
    constructor(nombre, apellido, monto, meses){
        this.nombre=nombre,
        this.apellido=apellido,
        this.monto=monto;
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
        this.montoTotal = this.monto + this.monto*this.interes;
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
    let monto = parseInt(document.getElementById("mntSlc").value);
    let mesesSelec = document.querySelector('input[name="cuotas"]:checked');
    let meses = parseInt(mesesSelec.value);
    console.log(meses);
    
    
    let solicitantes = new Solicitud(nombre, apellido, monto, meses);
    solicitantes.montoFinal();
    solicitantes.cuotaFinal();
    console.log(solicitantes);
    console.log(solicitantes.interes);


    const section = document.querySelector('.contenedor');
    const div = document.createElement('div');
    div.className = 'usuarios';
    div.innerHTML = `
    <div><p>Usuario: ${solicitantes.nombre} ${solicitantes.apellido}</p>
    <p>Monto Solicitado: ${solicitantes.monto}</p>
    <p>Cuota: ${solicitantes.meses} </p>
    <p>Monto a devolver: ${solicitantes.montoTotal} </p>
    <p>Valor cuota: ${solicitantes.cuota.toFixed(2)} </p></div>`;

    section.appendChild(div);

const guardados = JSON.stringify(solicitantes);
localStorage.setItem("solicitantes", guardados);
}