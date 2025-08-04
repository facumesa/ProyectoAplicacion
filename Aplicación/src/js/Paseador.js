let _idPaseador = 1;
class Paseador {
    constructor(_nombre, _nombreUsuario, _contrasenia, _cupoMaximo, _cupoDisponible) {
        this.id = _idPaseador++
        this.nombre = _nombre
        this.nombreUsuario = _nombreUsuario
        this.contrasenia = _contrasenia
        this.cupoMaximo = Number(_cupoMaximo);
        this.cupoDisponible = Number(this.cupoMaximo);
    }
}