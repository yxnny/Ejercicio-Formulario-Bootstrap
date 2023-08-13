
// demas
const identificacion= document.getElementById("dni");
const nombre = document.getElementById("myname");
const apellidos = document.getElementById("surname");
const correo = document.getElementById("email");
const clave1 = document.getElementById("password");
const clave2 = document.getElementById("repeatPassword");
const terminosYcondiciones = document.getElementById("termsAndConditions");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let condicion = validacionForm();
  if (condicion) {
    enviarFormulario();
  }

});
// idenfiticacion
function validarid(){
  let numero;
  numero=parseInt(document.getElementById("dni").value);
  if(numero>=2000000 && numero<1999999999){
    Ridentificacion.innerHTML="✓";
  }else{
    Ridentificacion.innerHTML="X";
  }
}

function validacionForm() {
  form.lastElementChild.innerHTML = "";
  let condicion = true;
  listInputs.forEach((element) => {
    element.lastElementChild.innerHTML = "";
  });
  
  if (identificacion.value.length >= 2000000 && identificacion.value.length<1999999999){
    mostrarMensajeError("dni", "Celular no valido*");
    condicion = false;
  } 

  if (nombre.value.length <= 1 || nombre.value.trim() == "") {
    mostrarMensajeError("myname", "Nombre no valido*");
    condicion = false;
  }
  if (apellidos.value.length <= 1 || apellidos.value.trim() == "") {
    mostrarMensajeError("surname", "Apellido no valido");
    condicion = false;
  }
  
  if (correo.value.length < 1 || correo.value.trim() == "") {
    mostrarMensajeError("email", "Correo no valido*");
    condicion = false;
  }

  if (clave1.value.length < 1 || clave1.value.trim() == "") {
    mostrarMensajeError("password", "Contraseña no valido*");
    condicion = false;
  }
  if (clave2.value != clave1.value) {
    mostrarMensajeError("repeatPassword", "Contraseña error*");
    condicion = false;
  }
  
  return condicion;
}

function mostrarMensajeError(claseInput, mensaje) {
  let elemento = document.querySelector(`.${claseInput}`);
  elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario() {
  form.reset();
  form.lastElementChild.innerHTML = " ";
}


// Edad

const fechaNacimiento= document.getElementById("FechaNacimiento");
const edad= document.getElementById("edad");

const calcularEdad = (fechaNacimiento) => {
  const fechaActual = new Date();
  const anoActual = parseInt(fechaActual.getFullYear());
  const mesActual = parseInt(fechaActual.getMonth()) + 1;
  const diaActual = parseInt(fechaActual.getDate());

  
  const anoNacimiento = parseInt(String(fechaNacimiento).substring(0, 4));
  const mesNacimiento = parseInt(String(fechaNacimiento).substring(5, 7));
  const diaNacimiento = parseInt(String(fechaNacimiento).substring(8, 10));

  let edad = anoActual - anoNacimiento;
  if (mesActual < mesNacimiento) {
    edad--;
  } else if (mesActual === mesNacimiento) {
      if (diaActual < diaNacimiento) {
        edad--;
      }
  }
  return edad;
};

window.addEventListener('load', function () {

  fechaNacimiento.addEventListener('change', function (){
    if (this.value) {
      edad.innerText = `Tiene: ${calcularEdad(this.value)} años`;
    }
  });

});