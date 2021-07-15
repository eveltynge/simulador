const tasa = 0.0125;
const iva = 0.21;

const solicitantes = [];

class Prestamo {
    constructor (nombre, apellido, monto, plazo){
        this.nombre=nombre,
        this.apellido=apellido,
        this.monto=monto,
        this.plazo=plazo,
        this.pagar = 0;
        this.cuotaUno = 0;
    }
    pagarFinal(){
        this.pagar = this.monto + this.monto * iva + this.monto * tasa;
        return this.pagar;
    }
    cuotaInicial(){
        this.cuotaUno = this.pagar / this.plazo;
        return this.cuotaUno;
    }
}
$('.calculator').append('<button id="btn" type="submit" class="btn btn-success col-2" value="Simular" style="margin: 15px 0px;">Simular</button>');
$('#btn').on('click', function Simular(e){
    e.preventDefault(); 
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let monto = parseInt(document.getElementById("mntSlc").value);
    let mesesSelec = document.querySelector('option[name="cuotas"]:checked');
    let meses = parseInt(mesesSelec.value);

    let prestamoObj = new Prestamo(nombre, apellido, monto, meses);
    prestamoObj.pagarFinal();
    prestamoObj.cuotaInicial();
    solicitantes.push(prestamoObj);
    console.log(solicitantes);

    $('.contenedorSolicitantes').append(`
    <div id="datos" class="btnForm border border-success" style="padding: 3px">
    <p>Usuario: ${prestamoObj.nombre} ${prestamoObj.apellido}</p>
    <p>Monto Solicitado: ${prestamoObj.monto}</p>
    <p>Plazo en meses: ${prestamoObj.plazo} </p>
    <p>Monto a devolver: ${prestamoObj.pagar} </p>
    <p>Valor primera cuota: ${prestamoObj.cuotaUno.toFixed(2)} </p>
    </div>`)

    const guardados = JSON.stringify(solicitantes);
    localStorage.setItem("solicitantes", guardados);
});

solicitantes.forEach(solicitante => {
    removeAllChildNodes(div);
    $('.contenedor').append( `
    <div class="btnForm"><p>Usuario: ${solicitante.nombre} ${solicitante.apellido}</p>
    <p>Monto Solicitado: ${solicitante.monto}</p>
    <p>Cuota: ${solicitante.plazo} </p>
    <p>Monto a devolver: ${solicitante.pagar} </p>
    <p>Valor cuota: ${solicitante.cuotaUno.toFixed(2)} </p>
    </div>`);

    section.appendChild(div);
})

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
const guardados = JSON.stringify(solicitantes);
localStorage.setItem("solicitantes", guardados);

const url = "https://jsonplaceholder.typicode.com/posts";
$('.contenedorSolicitantes').after('<button id="btnDatos" type="submit" class="btn btn-success" value="Simular" style="margin:10px">Guardar Solicitud</button>');
$("#btnDatos").click(() => {    
    $.post(url, solicitantes,(respuesta, estado) => {
        if(estado === "success"){
            $('.btnForm').after(`<div>
            Su solicitud quedó guardada con el id:${respuesta.id}
            </div>`);
        }  
    });
    
});
$('.hide').after('<button id="btn1" class="btn btn-success">Informacion de usuarios</button>')
$('#btn1').click(()=> {
    $('.hide').toggle('slow');
})

