"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caballo = void 0;
const Animales_1 = require("./Animales");
class Caballo extends Animales_1.Animales {
    constructor(animales, nombreAnimal, raza, edad, sexo, zonaRecogida, reservaActual, fecha_de_encuentro, aptoMonta, aptoTiro) {
        super(animales, nombreAnimal, raza, edad, sexo, zonaRecogida, reservaActual, fecha_de_encuentro);
        this._aptoMonta = aptoMonta;
        this._aptoTiro = aptoTiro;
    }
    get Animal() {
        return this._animales;
    }
    get aptoMonta() {
        return this._aptoMonta;
    }
    set aptoMonta(value) {
        this._aptoMonta = value;
    }
    get Aptotiro() {
        return this._aptoTiro;
    }
    set Aptotiro(value) {
        this._aptoTiro = value;
    }
}
exports.Caballo = Caballo;
