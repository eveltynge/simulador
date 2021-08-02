const tasa = 0.0125;
const iva = 0.21;
let nroId = 10;

const solicitantes = [];

class Prestamo {
    constructor (nombre, apellido, monto, plazo, dni, mail, nroId){
        this.nombre=nombre,
        this.apellido=apellido,
        this.monto=monto,
        this.plazo=plazo,
        this.dni=dni,
        this.mail=mail,
        this.nroId = nroId;
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

$('#btn').on('click', function Simular(e){
  e.preventDefault(); 
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let dni = document.getElementById("dni").value;
  let mail = document.getElementById("mail").value;
  let monto = parseInt(document.getElementById("mntSlc").value);
  let mesesSelec = document.querySelector('option[name="cuotas"]:checked');
  let meses = parseInt(mesesSelec.value);
  nroId = nroId + 1;

  let prestamoObj = new Prestamo(nombre, apellido, monto, meses, dni, mail, nroId);
  prestamoObj.pagarFinal();
  prestamoObj.cuotaInicial();

  $('.modal-body').append(`
    <div id="datos" class="modal-body">
      <div>
          <p>${prestamoObj.nombre} ${prestamoObj.apellido}</p>
          <p>Su nro de solicitud es: ${prestamoObj.nroId}</p>
          Por favor no olvide de agendar el nro de gestión.
          Nos comunicaremos con Ud dentro de los proximos 5 dias habiles.
      </div>              
    </div>`)

  solicitantes.push(prestamoObj);
  console.log("Solicitantes:", solicitantes);
  
});

//ESTO FUNCIONA OK!!!
$('.btnDatos').click(function(){
  $('.modal-body').empty();
});

//GUARDAR
$('#btnG').click(function(){  
  const guardados = JSON.stringify(solicitantes);  
  localStorage.setItem("solicitantes", guardados);
})
//BORRAR ULTIMO
$('#btnC').click(function(){
  solicitantes.pop(nroId-1)
});

let solicitudBuscada = [];

// VERSION BUSCA CON MODAL
//al apretar el boton btnModal me muestra en un Modal los datos que se corresponden con el input
$("#btnModal").click(function(){ 
    const busca = JSON.parse(localStorage.getItem("solicitantes"));
    let idBuscado = parseInt(document.getElementById("busca").value);
    console.log(idBuscado)
    let solicitud1 = busca.filter(persona => persona.nroId == idBuscado); //me da una de los componentes que sea igual a lo ingresado por el input 
    solicitudBuscada.push(solicitud1);
    console.log(solicitud1);
    if (solicitud1.length != 0){
        $('.modal-body2').append(`
        <div>
        <p>${solicitud1[0].nombre} ${solicitud1[0].apellido}</p>
        <p>Ud solicitó: ${solicitud1[0].monto}, en un plazo de ${solicitud1[0].plazo} meses.</p>
        <p>El monto final a abonar será de ${solicitud1[0].pagar}, y la primera cuota será ${solicitud1[0].cuotaUno}</p>
        </div>`);    
    }else {
        $('.modal-body2').append(`
        <p>El nro de ID no existe</p>`);
    }  
}); 

$('.btnBusca').click(function(){
    $('.modal-body2').empty();
})

//BOTON MOSTRAR SOLICITUDES PENDIENTES EN LOCAL STORAGE
let mostrar = JSON.parse(localStorage.getItem("solicitantes"));
let txt = "";
$("#btnPendiente").click(function(){
    for(i = 0; i < mostrar.length; i++){
        $(".tabla").append(`
        <tr></tr>`)
        for(let zz in mostrar[i]){
          $(".tabla").append(`
          <td> ${mostrar[i][zz]}</td>`)      
        };
    }    
});
//VER HISTORIAL DE JSON
const dataJSON = "../json/data.json";
$("#btnHistorico").click(function(){
    $.getJSON(dataJSON, function(data, status){
        if(status === "success"){
            let misDatos = data;
            let txt2 = "";
            for(i = 0; i < misDatos.length; i++){
                $(".tabla2").append(`
                <tr></tr>`)
                for(let y in misDatos[i]){
                    $(".tabla2").append(`
                    <td> ${misDatos[i][y]}</td>`);
                }
            }
        }
    })
});

