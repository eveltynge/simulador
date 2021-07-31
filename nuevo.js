const tasa = 0.0125;
const iva = 0.21;
let nroId = 0;

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
})

//console.log(busca)

//GUARDAR
$('#btnG').click(function(){  
  const guardados = JSON.stringify(solicitantes);  
  localStorage.setItem("solicitantes", guardados);
})
//BORRAR ULTIMO
/* $('#btnC').click(function(){
  solicitantes.pop(nroId-1)
});
*/
let solicitudBuscada = [];

// VERSION BUSCA CON MODAL
//al apretar el boton btnModal me muestra en un Modal los datos que se corresponden con el input
$('#btnModal').click(function(){ 
  const busca = JSON.parse(localStorage.getItem("solicitantes"));
  let idBuscado = parseInt(document.getElementById("busqueda").value); //levanta del html el valor del input ingresado por el usuario
  let solicitud1 = busca.filter(persona => persona.nroId == idBuscado); //me da una de los componentes que sea igual a lo ingresado por el input 
  solicitudBuscada.push(solicitud1);
  //console.log(solicitudBuscada);
  console.log(solicitud1)
  $("#bsqMdl").append(`
  ${solicitud1[0].nombre} 
  ${solicitud1[0].cuotaUno} y esto `)
}) //ESTO FUNCIONA OK, ME MUESTRA LA INFO SOLICITADA PERO!! TENGO Q HACER Q ME BORRE Y DEJE SOLO EL NRO DE SOLICITUD Q QUIERO, YOU KNOW

//RECUPERAR INFO DEL STORAGE // VERSION PREVIA A BUSCAR CON MODAL

/* let solicitudBuscada = [];

$('#btn1').click(function(){  
  //solicitudBuscada = [];
  let idBuscado = $("#busca").val()
  //const idBuscado = parseInt(document.getElementById("busca").value);
  console.log(idBuscado);
  let solicitud1 = solicitantes.filter(persona => persona.nroId == idBuscado) //|| persona.dni == idBuscado)
  console.log(solicitud1)
  solicitudBuscada.push(solicitud1);
  $('.buscador').append(`
  <div>${idBuscado}
  ${solicitud1} </div>
  `);
}) */


///////////////////////////////


