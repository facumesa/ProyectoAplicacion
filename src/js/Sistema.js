class Sistema {
  constructor() {
    //CLIENTES PRECARGADOS
    this.clientes = [
      new Cliente("patricia_silva", "Patty_123", "Bambi", "Pequeño"),
      new Cliente("juan_perez", "Juan456", "Rocky", "Grande"),
      new Cliente("carlos_mendez", "Cm2025", "Toby", "Pequeño"),
      new Cliente("maria_fernandez", "Mfpass1", "Luna", "Mediano"),
      new Cliente("andrea.lopez", "123Andrea", "Max", "Grande"),
      new Cliente("diego_sanchez", "Diegoxd1", "Coco", "Pequeño"),
      new Cliente("fernando_ruiz", "Ruiz321", "Zeus", "Grande"),
      new Cliente("valeria_martin", "Valepass1", "Nina", "Pequeño"),
      new Cliente("sofia_torres", "Sofiatorres99", "Simba", "Mediano"),
      new Cliente("javier_molina", "Javi1234", "Bruno", "Grande"),
      new Cliente("laura_rios", "Laurita1!", "Maya", "Mediano"),
      new Cliente("ricardo_vega", "Rvvega2", "Chispa", "Pequeño"),
      new Cliente("camila_moreno", "Camila2023", "Tango", "Mediano"),
      new Cliente("alejandro_nava", "Ale_nava2", "Rex", "Grande"),
      new Cliente("karla_delgado", "KarlaD!4", "Lola", "Pequeño"),
      new Cliente("sebastian_cano", "Sebpass1", "Thor", "Grande"),
      new Cliente("monica_quintero", "MonicaQ#2", "Kira", "Mediano"),
      new Cliente("daniel_arce", "Daniarce22", "Balto", "Grande"),
      new Cliente("lucia_hernandez", "Supermatch123", "Firulais", "Mediano"),
      new Cliente("victor_hernandez", "Vic2025!", "Shadow", "Mediano"),
    ];

    //PASEADORES PRECARGADOS
  this.paseadores = [
      new Paseador("Carlitos", "xXCarlitosXx", "Polent44", "1"),
      new Paseador("Jeremias", "jere_ludo", "AllIn78", "10"),
      new Paseador("Osvaldo", "OsvaldoCastañas_", "Almen55", "4"),
      new Paseador("Matias", "MatiSniper11", "Pelu122", "5"),
      new Paseador("Mateo", "mateo567", "Alfa101", "7"),
    ];
  

    //CONTRATACIONES PRECARGADAS
    let objC1 = this.clientes[0];
    let objC2 = this.clientes[1];
    let objC3 = this.clientes[2];
    let objC4 = this.clientes[3];
    let objC5 = this.clientes[4];
    let objC6 = this.clientes[5];
    let objC7 = this.clientes[6];
    let objC8 = this.clientes[7];
    let objC9 = this.clientes[8];
    let objC10 = this.clientes[16];

    let objP1 = this.paseadores[1];
    let objP2 = this.paseadores[1];
    let objP3 = this.paseadores[1];
    let objP4 = this.paseadores[1];
    let objP5 = this.paseadores[4];
    let objP6 = this.paseadores[2];
    let objP7 = this.paseadores[2];
    let objP8 = this.paseadores[2];
    let objP9 = this.paseadores[2];
    let objP10 = this.paseadores[2];

    this.contrataciones = [
      new Contratacion(objC1, objP1),
      new Contratacion(objC2, objP2),
      new Contratacion(objC3, objP3),
      new Contratacion(objC4, objP4),
      new Contratacion(objC5, objP5),
      new Contratacion(objC6, objP6),
      new Contratacion(objC7, objP7),
      new Contratacion(objC8, objP8),
      new Contratacion(objC9, objP9),
      new Contratacion(objC10, objP10),
    ];

    //ESTADOS PRECARGADOS, TENIENDO EN CUENTA LA CONSISTENCIA DE LOS DATOS
    this.contrataciones[0].cambiarEstado("Aceptado");
    this.contrataciones[1].cambiarEstado("Rechazado por incompatibilidad")
    this.contrataciones[7].cambiarEstado("Aceptado");
    this.contrataciones[9].cambiarEstado("Aceptado");
    this.contrataciones[6].cambiarEstado("Rechazado por incompatibilidad");
    this.contrataciones[8].cambiarEstado("Rechazado por falta de cupos");
  
  }

 // FUNCIONES

  agregarCliente(nombreUsuario, contra, perro, tamanioPerro) {
    this.clientes.push(new Cliente(nombreUsuario, contra, perro, tamanioPerro));
  }

  vacio(nombreUsuario, perro, tamanioPerro) {
    let vacio = false
    if (nombreUsuario === "" || perro === "" || tamanioPerro === "") {
      vacio = true
    }
    return vacio;
  }


  existeCliente(nombreUsuarioABuscar) {
    let registroCliente = false;

    for (let i = 0; i < this.clientes.length; i++) {
      let c = this.clientes[i];
      if (c.nombreUsuario === nombreUsuarioABuscar) {
        registroCliente = true;
      }
    }
    return registroCliente;
  }

  validarContrasenia(contra) {
    let contraseniaValida = false;
    let contraConMayus = false;
    let contraConNumero = false;
    let contraConMin = false;

    if (this.ContarMayus(contra) > 0) {
      contraConMayus = true;
    }

    if (this.ContarNumeros(contra)) {
      contraConNumero = true;
    }

    if (this.ContarMinus(contra) > 0) {
      contraConMin = true;
    }

    if (
      contra.length >= 5 &&
      contraConMayus &&
      contraConNumero &&
      contraConMin
    ) {
      contraseniaValida = true;
    }

    return contraseniaValida;
  }

  ContarMayus(contra) {
    let contadorMay = 0;

    for (let i = 0; i < contra.length; i++) {
      let car = contra.charAt(i);

      if (car >= "A" && car <= "Z") {
        contadorMay++;
      }
    }
    return contadorMay;
  }

  ContarNumeros(contra) {
    let contraConNumero = false;

    for (let i = 0; i < contra.length; i++) {
      if (contra.charCodeAt(i) >= 48 && contra.charCodeAt(i) <= 57) {
        contraConNumero = true;
      }
    }

    return contraConNumero;
  }

  ContarMinus(contra) {
    let contadorMin = 0;

    for (let i = 0; i < contra.length; i++) {
      let car = contra.charAt(i);

      if (car >= "a" && car <= "z") {
        contadorMin++;
      }
    }
    return contadorMin;
  }

  obtenerCliente(usuario, contraseniaInicio) {
    let objCliente = null;

    for (let i = 0; i < this.clientes.length; i++) {
      let c = this.clientes[i];
      let nombreUsuarioAux = c.nombreUsuario.toLowerCase();

      if (nombreUsuarioAux === usuario && c.Contrasenia === contraseniaInicio) {
        objCliente = c;
      }
    }
    return objCliente;
  }

  obtenerPaseador(usuarioP, contraseniaInicioP) {
    let objPaseador = null;

    for (let i = 0; i < this.paseadores.length; i++) {
      let p = this.paseadores[i];
      let nombreUsuarioAux = p.nombreUsuario.toLowerCase();

      if (nombreUsuarioAux === usuarioP && p.contrasenia === contraseniaInicioP) {
        objPaseador = p;
      }
    }
    return objPaseador;
  }

  obtenerPaseadorID(id) {
    let objPaseadorC = null;

    for (let i = 0; i < this.paseadores.length; i++) {
      let p = this.paseadores[i];

      if (p.id === id) {
        objPaseadorC = p;
      }
    }
    return objPaseadorC;
  }

  agregarContratacion(usuario, id) {
    let objPaseador = this.obtenerPaseadorID(id);
    this.contrataciones.push(new Contratacion(usuario, objPaseador));
  }

  cancelarContratacion(usuario) {

    for (let i = 0; i < this.contrataciones.length; i++) {
      let c = this.contrataciones[i];

      if (usuario === c.objCliente.nombreUsuario) {
        c.cambiarEstado("Cancelado");
      }
    }
  }

  existeContratacion(usuario) {
    let usuarioEnContratacion = null;

    for (let i = 0; i < this.contrataciones.length; i++) {
      let c = this.contrataciones[i];

      if (usuario === c.objCliente.nombreUsuario) {
        usuarioEnContratacion = c
      }
    }
    return usuarioEnContratacion;
  }

  obtenerTamanioPerro(tamanioPerro){
    let tamanio = 0;
  
    for (let i = 0; i < s.clientes.length; i++) {
      let c = s.clientes[i];
      
  
      if (tamanioPerro === "Grande") {
        tamanio = 4;
      }
  
      if (tamanioPerro === "Mediano") {
        tamanio = 2;
      }
  
      if (tamanioPerro === "Pequeño") {
        tamanio = 1;
      }
    }
  
    return tamanio;
  }

  obtenerEstadoContratacionYUsuario(estado, usuario) {
    let estadoContratacion = ""

    for (let i = 0; i < this.contrataciones.length; i++) {
      let c = this.contrataciones[i];

      if (estado === c.estado && usuario === c.objCliente.nombreUsuario) {
        estadoContratacion = c.estado
      }
    }

    return estadoContratacion;
  }

  obtenerContratacionPorID(id){
    let contratacion = null

    for (let i = 0; i < this.contrataciones.length; i++) {
      let c = this.contrataciones[i];

        if (c.id === id) {
          contratacion = c
        }
    }

    return contratacion;
  }
  
  procesarContratacion(id){
  let contratacion = this.obtenerContratacionPorID(id)
  let objClienteC = contratacion.objCliente;
  let objPaseadorC = contratacion.objPaseador;
  let tamanioPerroC = this.obtenerTamanioPerro(objClienteC.tamanioPerro);
  let cupoDisponible = objPaseadorC.cupoDisponible;

    if (this.tienePerroChico(objPaseadorC.id) === true && tamanioPerroC === 4) {
      contratacion.cambiarEstado("Rechazado por incompatibilidad");
    } else if(this.tienePerroGrande(objPaseadorC.id) === true && tamanioPerroC === 1){
      contratacion.cambiarEstado("Rechazado por incompatibilidad");
    } else if(tamanioPerroC > cupoDisponible){
      contratacion.cambiarEstado("Rechazado por falta de cupos");
    } else {
      contratacion.cambiarEstado("Aceptado")
      cupoDisponible -= tamanioPerroC;
      objPaseadorC.cupoDisponible = cupoDisponible
    }

 }

 procesarContracionAntes(){
      for (let i = 0; i < s.contrataciones.length; i++) {
      let c = s.contrataciones[i];
      if (c.estado === "Aceptado") {
          this.procesarContratacion(c.id) 
      } 
    }
 }

 cuposOcupados(maximo, disponible){
      let cuposOcupados = 0;
      let cupoMaximo = maximo
      let cupoDisponible = disponible
      cuposOcupados = cupoMaximo - cupoDisponible;

    return cuposOcupados;
 }
 
 porcentajeCupos(maximo, disponible) {
    let porcentaje = 0
    let cuposOcupados = 0;
    let cupoMaximo = maximo
    let cupoDisponible = disponible
    
    cuposOcupados = cupoMaximo - cupoDisponible;
    
    let division = cuposOcupados / cupoMaximo
    porcentaje = division * 100

    return porcentaje;
 }

 cantidadDePerros(nombre){
  let cantidad = 0;

  for (let i = 0; i < this.contrataciones.length; i++) {
    let c = this.contrataciones[i];
    
    if (c.estado === "Aceptado" && c.objPaseador.nombre === nombre) {
        cantidad++
    }
  }
  return cantidad;
 }

tienePerroChico(id){
  let perroChico = false;

  for (let i = 0; i < this.contrataciones.length; i++) {
    let c = this.contrataciones[i];
    
    if (c.objPaseador.id === id && c.objCliente.tamanioPerro === "Pequeño" && c.estado === "Aceptado") {
      perroChico = true;
    }

  }

  return perroChico;

}

tienePerroGrande(id){
  let perroGrande = false;

  for (let i = 0; i < this.contrataciones.length; i++) {
    let c = this.contrataciones[i];
    
    if (c.objPaseador.id === id && c.objCliente.tamanioPerro === "Grande" && c.estado === "Aceptado") {
      perroGrande = true;
    }

  }

  return perroGrande;
}

 
 










}







