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

$('section').prepend('<button id="btn" type="submit" class="btn btn-success" value="Simular">Simular</button>');
$('#btn').on('click', function Simular(e) {
    e.preventDefault();    
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let monto = parseInt(document.getElementById("mntSlc").value);
    let mesesSelec = document.querySelector('input[name="cuotas"]:checked');
    let meses = parseInt(mesesSelec.value);
        
    let solicitantesObj = new Solicitud(nombre, apellido, monto, meses);
    solicitantesObj.montoFinal();
    solicitantesObj.cuotaFinal();
    solicitantes.push(solicitantesObj);
    console.log(solicitantes);
    
    $('.contenedor').append(`
    <div class="contenedor border border-success" style="padding: 3px"><p>Usuario: ${solicitantesObj.nombre} ${solicitantesObj.apellido}</p>
    <p>Monto Solicitado: ${solicitantesObj.monto}</p>
    <p>Cuota: ${solicitantesObj.meses} </p>
    <p>Monto a devolver: ${solicitantesObj.montoTotal} </p>
    <p>Valor cuota: ${solicitantesObj.cuota.toFixed(2)} </p>
    </div>`)
    
const guardados = JSON.stringify(solicitantes);
localStorage.setItem("solicitantes", guardados);
});

solicitantes.forEach(solicitante => {
    removeAllChildNodes(div);
    $('.contenedor').append(`
    <div><p>Usuario: ${solicitante.nombre} ${solicitante.apellido}</p>
    <p>Monto Solicitado: ${solicitante.monto}</p>
    <p>Cuota: ${solicitante.meses} </p>
    <p>Monto a devolver: ${solicitante.montoTotal} </p>
    <p>Valor cuota: ${solicitante.cuota.toFixed(2)} </p>
    </div>`)
})

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
const guardados = JSON.stringify(solicitantes);
localStorage.setItem("solicitantes", guardados);