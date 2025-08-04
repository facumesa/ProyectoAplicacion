let _idContratacion = 1;
class Contratacion {
    constructor(_objCliente, _objPaseador) {
        this.id = _idContratacion++;
        this.objCliente = _objCliente;
        this.objPaseador = _objPaseador;
        this.estado = "Pendiente";
    }
    cambiarEstado(estadoNuevo){
        this.estado = estadoNuevo;
    }
}


