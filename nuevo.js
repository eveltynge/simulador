const tasa = 0.0125;
const iva = 0.21;

const solicitantes = [];

class Prestamo {
    constructor (nombre, apellido, monto, plazo, dni, mail){
        this.nombre=nombre,
        this.apellido=apellido,
        this.monto=monto,
        this.plazo=plazo,
        this.dni=dni,
        this.mail=mail,
        this.id = 1;
        this.pagar = 0;
        this.cuotaUno = 0;
    }
    nroId(){
      this.id = this.id + 1;
      return this.id;
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
  let monto = parseInt(document.getElementById("mntSlc").value);
  let mesesSelec = document.querySelector('option[name="cuotas"]:checked');
  let meses = parseInt(mesesSelec.value);
  let dni = document.getElementById("dni").value;
  let mail = document.getElementById("mail").value;
  let situacion = document.querySelector('option[name="situacion"]:checked');

  let prestamoObj = new Prestamo(nombre, apellido, monto, meses, dni, mail, situacion);
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

//ESTO FUNCIONA OK!!!
$('.btnDatos').click(function(){
  $('.modal-body').empty();
})
//Por que necesito que este dos veces??
const guardados = JSON.stringify(solicitantes);
localStorage.setItem("solicitantes", guardados);
//Borra Todo otra vez
$('#btnC').click(function(){
  localStorage.removeItem("solicitantes", guardados);
})

//GUARDAR INFO SOLICITANTES AL APRETAR BOTON GUARDAR
/* const guardados = JSON.stringify(solicitantes);
console.log(guardados);
$('#btnG').click(function(){
  localStorage.setItem("solicitantes", guardados)
}) */