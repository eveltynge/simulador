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
$('.calculator').append('<button id="btn" type="button" data-toggle="modal" data-target="#staticBackdrop" class="btn btn-success col-2" value="Simular" style="margin: 15px 0px;">Simular</button>');
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

  const url = "https://jsonplaceholder.typicode.com/posts";
  
  $('.modal-body').append(`
    <div id="datos" class="modal-body">
        ${$.post(url, solicitantes,(respuesta, estado) => {
          if(estado === "success") {
            $('#datos').append(`<div>
            <p>${prestamoObj.nombre} ${prestamoObj.apellido}</p>
            <p>Su nro de solicitud es: ${respuesta.id}</p>
            Nos comunicaremos con Ud dentro de los proximos 5 dias habiles.</div>`)
          }
      })}                
    </div>`)

  const guardados = JSON.stringify(solicitantes);
  localStorage.setItem("solicitantes", guardados);
});

$('.btnDatos').click(function(){
    $('.modal-body').empty();
  })
  
const guardados = JSON.stringify(solicitantes);
localStorage.setItem("solicitantes", guardados);

/* const url = "https://jsonplaceholder.typicode.com/posts";
//$('.contenedorSolicitantes').after('<button id="btnDatos" type="submit" class="btn btn-success" value="Simular" style="margin:10px">Guardar Solicitud</button>');
$("#btnDatos").click(() => {    
    $.post(url, solicitantes,(respuesta, estado) => {
        if(estado === "success"){
            $('.btnForm').after(`<div>
            Su solicitud quedó guardada con el id:${respuesta.id}
            En la brevedad nos contactaremos con Ud para completar la solicitud del préstamo.
            </div>`);
        }  
    });
    
}); */


