const tasa = 0.0125;
const iva = 0.21;
let nroId = 0;

const solicitantes = [];

class Prestamo {
    constructor (nombre, apellido, monto, plazo, dni, mail, nroId, situacion){
        this.nombre=nombre,
        this.apellido=apellido,
        this.monto=monto,
        this.plazo=plazo,
        this.dni=dni,
        this.mail=mail,
        this.nroId = nroId;
        switch (this.situacion){
          case "empleado":
            this.situasion = aprobado;
          case "publico":
            this.situacion = aprobado;
          case "monotributo":
            this.situacion = aprobado;
          case "independiente":
            this.situacion = pendiente;
          case "jubilado":
            this.situacion = pendiente;
          case "autonomo": 
            this.situacion = pendiente;
          case "desempleado":
            this.situacion = rechazado;
          case "otro":
            this.situacion = pendiente;
        }
        this.pagar = 0;
        this.cuotaUno = 0;
    }
   /*  nroId(){
      //this.nroId = this.nroId + 1;
      this.nroId = (this.nroId || 0) + 1;
      return this.nroId;
    } */
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
  let situacion = document.querySelector('option[name="situacion"]:checked');
  let monto = parseInt(document.getElementById("mntSlc").value);
  let mesesSelec = document.querySelector('option[name="cuotas"]:checked');
  let meses = parseInt(mesesSelec.value);
  nroId = nroId + 1;

  let prestamoObj = new Prestamo(nombre, apellido, monto, meses, dni, mail, nroId, situacion);
  /* prestamoObj.pagarFinal();
  prestamoObj.cuotaInicial(); */ 

  $('.modal-body').append(`
    <div id="datos" class="modal-body">
      <div>
          <p>${prestamoObj.nombre} ${prestamoObj.apellido}</p>
          <p>Su nro de solicitud es: ${prestamoObj.nroId}</p>
          Nos comunicaremos con Ud dentro de los proximos 5 dias habiles.
      </div>              
    </div>`)

  solicitantes.push(prestamoObj);
  //console.log(solicitantes);
});
//ESTO FUNCIONA OK!!!
$('.btnDatos').click(function(){
  $('.modal-body').empty();
})

//GUARDAR
$('#btnG').click(function(){    
  const guardados = JSON.stringify(solicitantes);
  localStorage.setItem("solicitantes", guardados);
  
//RECUPERAR OBJETO DEL STORAGE
$('#btn1').click(function(){
  $('.buscador').append(`
  ${JSON.parse(localStorage.getItem("solicitantes"))}  //me guarda [object Object]
  `)})

})


//BORRAR ULTIMO
$('#btnC').click(function(){
  solicitantes.pop(nroId-1);
})

///////////////////////////////


