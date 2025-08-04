//GUARDAMOS AL SISTEMA EN UNA VARIABLE Y DEFINIMOS EL USUARIO LOGUEADO COMO NULL PARA USARLO MAS ADELANTE
let s = new Sistema();
let usuarioLogueado = null;

// PROCESAMOS LAS CONTRATACIONES PRECARGADAS
s.procesarContracionAntes()

// INICIO OCULTAR Y MOSTRAR

function ocultar(id) {
  document.querySelector("#" + id).style.display = "none";
}

function mostrar(id) {
  document.querySelector("#" + id).style.display = "block";
}

function mostrarTabla(id) {
  document.querySelector("#" + id).style.display = "table";
}

ocultar("sectRegistro");
ocultar("sectContrataciones");
mostrar("listadoDeContrataciones");
ocultar("Tabla-Estadistica");
ocultar("contratacionesPendientes");
ocultar("btnCancelarContratacion");
ocultar("btnReiniciarContratacion");
ocultar("listadoDeContrataciones");
ocultar("perrosAsignados")
ocultar("informePaseadores")

function redirigirRegistro() {
  mostrar("sectRegistro")
  ocultar("sectSesion")
  document.querySelector("#txtNombreUsuario").value = "";
  document.querySelector("#txtContrasenia").value = "";
  document.querySelector("#txtNombrePerro").value = "";
  document.querySelector("#slcTamanioPerro").value = "";
  document.querySelector("#pMensaje").innerHTML = "";
}

function redirigirSesion() {
  mostrar("sectSesion")
  ocultar("sectRegistro")
  document.querySelector("#txtNombreUsuarioInicio").value = "";
  document.querySelector("#txtContraseniaInicio").value = "";
}

function cerrarSesion() {
  mostrar("sectSesion");
  ocultar("sectContrataciones");
  ocultar("Tabla-Estadistica");
  ocultar("btnReiniciarContratacion");
  mostrar("slcContratar");
  mostrar("btnContratar");
  mostrar("labelContratar");
  ocultar("listadoDeContrataciones");
  ocultar("contratacionesPendientes");
  ocultar("perrosAsignados")

  
  usuarioLogueado = null;
  document.querySelector("#pMensajeInicio").innerHTML = "";
  document.querySelector("#mensajeContrataciones").innerHTML = "";
  document.querySelector("#txtNombreUsuarioInicio").value = "";
  document.querySelector("#txtContraseniaInicio").value = "";
  document.querySelector("#pProcesar1").innerHTML = "";
}

function cerrarSesion1() {
  mostrar("sectSesion");
  ocultar("sectContrataciones");
  ocultar("Tabla-Estadistica");
  ocultar("btnReiniciarContratacion");
  mostrar("slcContratar");
  mostrar("btnContratar");
  mostrar("labelContratar");
  ocultar("listadoDeContrataciones");
  ocultar("contratacionesPendientes");
  ocultar("perrosAsignados")

  
  usuarioLogueado = null;
  document.querySelector("#pMensajeInicio").innerHTML = "";
  document.querySelector("#mensajeContrataciones").innerHTML = "";
  document.querySelector("#txtNombreUsuarioInicio").value = "";
  document.querySelector("#txtContraseniaInicio").value = "";
  document.querySelector("#pProcesar1").innerHTML = "";
}

function cerrarSesion2() {
  mostrar("sectSesion");
  ocultar("sectContrataciones");
  ocultar("Tabla-Estadistica");
  ocultar("btnReiniciarContratacion");
  mostrar("slcContratar");
  mostrar("btnContratar");
  mostrar("labelContratar");
  ocultar("listadoDeContrataciones");
  ocultar("contratacionesPendientes");
  ocultar("perrosAsignados")

  
  usuarioLogueado = null;
  document.querySelector("#pMensajeInicio").innerHTML = "";
  document.querySelector("#mensajeContrataciones").innerHTML = "";
  document.querySelector("#txtNombreUsuarioInicio").value = "";
  document.querySelector("#txtContraseniaInicio").value = "";
  document.querySelector("#pProcesar1").innerHTML = "";
}

function cerrarSesion3() {
  mostrar("sectSesion");
  ocultar("sectContrataciones");
  ocultar("Tabla-Estadistica");
  ocultar("btnReiniciarContratacion");
  mostrar("slcContratar");
  mostrar("btnContratar");
  mostrar("labelContratar");
  ocultar("listadoDeContrataciones");
  ocultar("contratacionesPendientes");
  ocultar("perrosAsignados");
  ocultar("informePaseadores");

  
  usuarioLogueado = null;
  document.querySelector("#pMensajeInicio").innerHTML = "";
  document.querySelector("#mensajeContrataciones").innerHTML = "";
  document.querySelector("#txtNombreUsuarioInicio").value = "";
  document.querySelector("#txtContraseniaInicio").value = "";
  document.querySelector("#pProcesar1").innerHTML = "";
}


// FIN OCULTAR Y MOSTRAR

// INICIO VOLVER ATRAS

function volver() {
  mostrar("listadoDeContrataciones");
  ocultar("perrosAsignados");
}

function volver1() {
  mostrar("sectContrataciones");
  ocultar("informePaseadores");
}

// FIN VOLVER ATRAS

//INICIO CARGAR COMBO

function precargarPaseadores(tamanioPerro) {
  let tamanio = s.obtenerTamanioPerro(tamanioPerro);
  let opciones = "";

  for(let i = 0; i < s.paseadores.length; i++) {
      let p = s.paseadores[i];
  
      if (tamanio <= p.cupoDisponible) {
        opciones += `<option value="${p.id}">${p.nombre}</option>`;
      }
  }
  
  document.querySelector("#slcContratar").innerHTML = opciones;
}

//FIN CARGAR COMBO

// CARGAR LISTADO CON BOTONES

function cargarListado(nombre) {

  document.querySelector("#tblContrataciones").innerHTML = `  
                                                            <thead>
                                                            <tr>
                                                              <th>ID</th>
                                                              <th>Cliente</th>
                                                              <th>Paseador seleccionado</th>
                                                              <th>Tamaño del perro</th>
                                                              <th>Estado</th>
                                                              <th>Acción</th>
                                                            </tr>
                                                            </thead>`;

  for (let i = 0; i < s.contrataciones.length; i++) {
    let c = s.contrataciones[i];

    if (c.objPaseador.nombre === nombre) {
      document.querySelector("#tblContrataciones").innerHTML += `   
                                                            <tr>
                                                              <td>${c.id}</td>
                                                              <td>${c.objCliente.nombreUsuario}</td>
                                                              <td>${c.objPaseador.nombre}</td>
                                                              <td>${c.objCliente.tamanioPerro}</td>
                                                              <td>${c.estado}</td>
                                                              <td><input type="button" value="Procesar" data-id-contratacion="${c.id}" class="btnProcesar"></td>
                                                            </tr>`;

    }
  }

  bindearBotones()
}

function bindearBotones() {
  let botones = document.querySelectorAll(".btnProcesar");

  for (let i = 0; i <botones.length; i++) {
    let boton = botones[i];
    boton.addEventListener("click", procesar);
 
  }

}

// FIN CARGAR LISTADO CON BOTONES

// INICIO CARGAR LISTADO DE PERROS ASIGNADOS

function cargarAsignados(nombre) {
  let contadorAprobadas = 0;
  document.querySelector("#tblAsignados").innerHTML = `     <thead>
                                                            <tr>       
                                                              <th>Nombre del perro</th>
                                                              <th>Tamaño del perro</th>
                                                            </tr>
                                                            </thead>`;                                                                                                                 
  for (let i = 0; i < s.contrataciones.length; i++) {
    let c = s.contrataciones[i];
    let objClienteC = c.objCliente;
    
    if (c.objPaseador.nombre === nombre && c.estado === "Aceptado") { 
      document.querySelector("#tblAsignados").innerHTML += `   
                                                            <tr>
                                                              <td>${objClienteC.nombrePerro}</td>
                                                              <td>${objClienteC.tamanioPerro}</td>                                                 
                                                            </tr>`;
    contadorAprobadas++                                                                                                                                                                                                                                                                                               
    } 
  }
  mostrarTabla("tblAsignados");
  ocultar("pProcesar2");

  if (contadorAprobadas <= 0) {
     document.querySelector("#pProcesar2").innerHTML = "No hay perros asignados actualmente."
     ocultar("tblAsignados");
     mostrar("pProcesar2");   
  }
    
  document.querySelector("#tblCupos").innerHTML =           `
                                                            <thead>
                                                              <tr>
                                                              <th>Total de cupos ocupados</th>
                                                              <th>Total de cupos maximos</th>
                                                              <th>Porcentaje de cupos actualmente</th>
                                                            </tr>
                                                            </thead>`;                                                       

    for (let i = 0; i < s.paseadores.length; i++) {
      let p = s.paseadores[i];   

      if (p.nombre === nombre) {
      document.querySelector("#tblCupos").innerHTML += `   
                                                            <tr>
                                                              <td>${s.cuposOcupados(p.cupoMaximo, p.cupoDisponible)}</td>
                                                              <td>${p.cupoMaximo}</td>
                                                              <td>${s.porcentajeCupos(p.cupoMaximo, p.cupoDisponible).toFixed(1)}%</td>                                                 
                                                            </tr>`;
    }
    
  }                                                            
  
                                                          
}


// FIN CARGAR LISTADO DE PERROS ASIGNADOS

// CARGAR LISTADO DE PASEADORES PARA EL CLIENTE

function cargarInformePaseadores() {
  document.querySelector("#tblPaseadores").innerHTML = `     <thead>
                                                              <tr>       
                                                              <th>Paseadores</th>
                                                              <th>Cantidad de perros asignados</th>
                                                              </tr>
                                                            </thead>`;
                                                            
    for (let i = 0; i < s.paseadores.length; i++) {
      let p = s.paseadores[i];
      let cantidadDePerros = s.cantidadDePerros(p.nombre)
      document.querySelector("#tblPaseadores").innerHTML += `   
                                                            <tr>
                                                              <td>${p.nombre}</td>
                                                              <td>${cantidadDePerros}</td>                                                
                                                            </tr>`;
  
  
  }                                                              
}

// FIN CARGAR LISTADO DE PASEADORES PARA EL CLIENTE

//INICIO CODIGO

document.querySelector("#btnRegistrarse").addEventListener("click", registrar);
document.querySelector("#btnInicioSesion").addEventListener("click", iniciarSesion);
document.querySelector("#btnContratar").addEventListener("click", Contrato);
document.querySelector("#btnRedirigirRegistro").addEventListener("click", redirigirRegistro);
document.querySelector("#btnRedirigirSesion").addEventListener("click", redirigirSesion);
document.querySelector("#btnCerrarSesion").addEventListener("click", cerrarSesion);
document.querySelector("#btnCerrarSesion1").addEventListener("click", cerrarSesion1);
document.querySelector("#btnCerrarSesion2").addEventListener("click", cerrarSesion2);
document.querySelector("#btnCerrarSesion3").addEventListener("click", cerrarSesion3);
document.querySelector("#btnCancelarContratacion").addEventListener("click", cancelarContratacion);
document.querySelector("#btnReiniciarContratacion").addEventListener("click", reiniciarContratacion);
document.querySelector("#contratacionesPendientes").addEventListener("click", listarPaseador);
document.querySelector("#Tabla-Estadistica").addEventListener("click", listarCliente);
document.querySelector("#btnVolver").addEventListener("click", volver);
document.querySelector("#btnVolver1").addEventListener("click", volver1);


// INICIO REGISTRO DE USUARIO
function registrar() {
  let nombreUsuario = document.querySelector("#txtNombreUsuario").value.toLowerCase();
  let contrasenia = document.querySelector("#txtContrasenia").value;
  let nombrePerro = document.querySelector("#txtNombrePerro").value;
  let tamanioPerro = document.querySelector("#slcTamanioPerro").value;

  if (s.vacio(nombreUsuario, nombrePerro, tamanioPerro)) {
    document.querySelector("#pMensaje").innerHTML = "No pueden haber campos vacios.";
  } else if (s.existeCliente(nombreUsuario)) {
    document.querySelector("#pMensaje").innerHTML = "El nombre de usuario ya esta en uso.";
  } else if (s.validarContrasenia(contrasenia) === false) {
    document.querySelector("#pMensaje").innerHTML = "La contraseña debe tener al menos una mayuscula, una minuscula, un numero y al menos 5 letras.";
  } else {
    s.agregarCliente(nombreUsuario, contrasenia, nombrePerro, tamanioPerro);
    document.querySelector("#pMensaje").innerHTML = "Se registro el cliente correctamente.";
  }
}
// FIN INICIO REGISTRO DE USUARIO

// INICIO SESION GENERAL

function iniciarSesion() {
  let usuario = document.querySelector("#txtNombreUsuarioInicio").value.toLowerCase();
  let contrasenia = document.querySelector("#txtContraseniaInicio").value;

  let objCliente = s.obtenerCliente(usuario, contrasenia);
  let objPaseador = s.obtenerPaseador(usuario, contrasenia);


//INICIO SESION CLIENTE

  if (objCliente === null && objPaseador === null) {
    document.querySelector("#pMensajeInicio").innerHTML = "Usuario y/o contraseña incorrectos";
  } else if(objCliente !== null){
    document.querySelector("#pMensajeInicio").innerHTML = "Bienvenid@ cliente";
    mostrar("sectContrataciones")
    ocultar("sectSesion")
    mostrar("Tabla-Estadistica")
    ocultar("btnCancelarContratacion");
    
    usuarioLogueado = objCliente;

    if (s.existeContratacion(usuarioLogueado.nombreUsuario) === null) {
      mostrar("sectContrataciones")
      ocultar("sectSesion")
      mostrar("Tabla-Estadistica")
      precargarPaseadores(usuarioLogueado.tamanioPerro)

    } else if(s.existeContratacion(usuarioLogueado.nombreUsuario) !== null){

      //Si el estado de la contratacion es "Cancelado"
      if(s.existeContratacion(usuarioLogueado.nombreUsuario).estado === "Cancelado") {
        mostrar("sectContrataciones")
        ocultar("sectSesion")
        mostrar("Tabla-Estadistica")
        precargarPaseadores(usuarioLogueado.tamanioPerro)

      //Si el estado de la contratacion es "Rechazado"
      } else if(s.existeContratacion(usuarioLogueado.nombreUsuario).estado === "Rechazado por falta de cupos" || s.existeContratacion(usuarioLogueado.nombreUsuario).estado === "Rechazado por incompatibilidad"){
        mostrar("sectContrataciones")
        ocultar("sectSesion")
        mostrar("Tabla-Estadistica")
        precargarPaseadores(usuarioLogueado.tamanioPerro)
        document.querySelector("#mensajeContrataciones").innerHTML = "Su solicitud ha sido rechazada, seleccione otro paseador.";

      //Si el estado de la contratacion es "Pendiente"
      } else if(s.existeContratacion(usuarioLogueado.nombreUsuario).estado === "Pendiente") {
      mostrar("sectContrataciones")
        //Mostramos la informacion de la contratacion
      let contratacion = s.existeContratacion(usuarioLogueado.nombreUsuario);
      document.querySelector("#mensajeContrataciones").innerHTML = "Contratación en estado Pendiente<br>" + "<br>Id de su contratacion: " + contratacion.id + "<br>Solicitante: " + contratacion.objCliente.nombreUsuario + "<br>Paseador solicitado:  " + contratacion.objPaseador.nombre + "<br>Estado de la contratacion: " + contratacion.estado;                 
      mostrar("btnCancelarContratacion");
      ocultar("slcContratar");
      ocultar("btnContratar");
      ocultar("labelContratar")
      
      //Si el estado de la contratacion es "Aceptado"
    } else if(s.existeContratacion(usuarioLogueado.nombreUsuario).estado === "Aceptado"){
      mostrar("sectContrataciones")
        //Mostramos la informacion de la contratacion
      let contratacion = s.existeContratacion(usuarioLogueado.nombreUsuario);
      document.querySelector("#mensajeContrataciones").innerHTML = "Tu contratacion fue aceptada<br>" + "<br>Id de su contratacion: " + contratacion.id + "<br>Solicitante: " + contratacion.objCliente.nombreUsuario + "<br>Paseador solicitado:  " + contratacion.objPaseador.nombre + "<br>Estado de la contratacion: " + contratacion.estado;
      ocultar("btnCancelarContratacion");
      ocultar("slcContratar");
      ocultar("btnContratar");
      ocultar("labelContratar")
    }
  }
// FIN INICIO SESION CLIENTE


//INICIO SESION PASEADOR
  } else if(objPaseador !== null){
    document.querySelector("#pMensajeInicio").innerHTML = "Bienvenid@ paseador";
    usuarioLogueado = objPaseador;
    ocultar("sectSesion")
    mostrar("listadoDeContrataciones")
    mostrar("contratacionesPendientes")
    cargarListado(usuarioLogueado.nombre)
  }
}
// FIN INICIO SESION PASEADOR

// INICIO CONTRATAR, CANCELAR Y REINCIAR CONTRATACION POR PARTE DEL CLIENTE

function Contrato() {
    let paseador = Number(document.querySelector("#slcContratar").value);
  
    if (paseador === 0) {
      document.querySelector("#mensajeContrataciones").innerHTML = "Seleccione un paseador";
    } else {
      s.agregarContratacion(usuarioLogueado, paseador)
      //Mostramos la informacion de la contratacion
      let contratacion = s.existeContratacion(usuarioLogueado.nombreUsuario);
      document.querySelector("#mensajeContrataciones").innerHTML = "Contratación en estado Pendiente<br>" + "<br>Id de su contratacion: " + contratacion.id + "<br>Solicitante: " + contratacion.objCliente.nombreUsuario + "<br>Paseador solicitado:  " + contratacion.objPaseador.nombre + "<br>Estado de la contratacion: " + contratacion.estado;

      mostrar("btnCancelarContratacion");
      ocultar("slcContratar");
      ocultar("btnContratar");
      ocultar("labelContratar")
    }
}

function cancelarContratacion() {
  s.cancelarContratacion(usuarioLogueado.nombreUsuario);
  document.querySelector("#mensajeContrataciones").innerHTML = "Contratación cancelada con exito, ya no hay contrataciones pendientes";
  ocultar("btnCancelarContratacion");
  mostrar("btnReiniciarContratacion");
  
}

function reiniciarContratacion() {
    ocultar("btnCancelarContratacion");
    ocultar("btnReiniciarContratacion");
    mostrar("slcContratar");
    mostrar("btnContratar");
    mostrar("labelContratar");
    precargarPaseadores(usuarioLogueado.tamanioPerro)
    document.querySelector("#mensajeContrataciones").innerHTML= "";
}

// FIN CONTRATAR, CANCELAR Y REINCIAR CONTRATACION POR PARTE DEL CLIENTE

// PROCESAMIENTO DE CONTRATACIONES POR PARTE DEL PASEADOR

function procesar() {
  let idContratacion = Number(this.getAttribute("data-id-contratacion"));
  let contratacion = s.obtenerContratacionPorID(idContratacion);

  if (contratacion.estado === "Aceptado") {
    document.querySelector("#pProcesar1").innerHTML = "Ya se proceso esta solicitud"
  } else if (contratacion.estado === "Pendiente"){
      document.querySelector("#pProcesar1").innerHTML = "Se proceso la solicitud"
      s.procesarContratacion(idContratacion);
  } else if(contratacion.estado === "Rechazado por falta de cupos"){
    document.querySelector("#pProcesar1").innerHTML = "Esta solicitud se ha sido rechazada por falta de cupos"
  } else if(contratacion.estado === "Rechazado por incompatibilidad"){
    document.querySelector("#pProcesar1").innerHTML = "Esta solicitud ha sido rechazada por incompatibilidad de perros"
  } else if(contratacion.estado === "Cancelado"){
    document.querySelector("#pProcesar1").innerHTML = "El cliente canceló esta solicitud"
  } else {
    document.querySelector("#pProcesar1").innerHTML = "No se pudo realizar la solicitud"
  }

  cargarListado(usuarioLogueado.nombre)
}

// FIN PROCESAMIENTO DE CONTRATACIONES PARTE DEL PASEADOR

// INICIO LISTA DEL PASEADOR

function listarPaseador(){
  ocultar("listadoDeContrataciones")
  mostrar("perrosAsignados")
  cargarAsignados(usuarioLogueado.nombre);
}

// FIN LISTA DEL PASEADOR

// INICIO LISTA DEL CLIENTE

function listarCliente() {
  ocultar("sectContrataciones");
  mostrar("informePaseadores");
  cargarInformePaseadores()
}

// FIN LISTA DEL CLIENTE

// FIN CODIGO




