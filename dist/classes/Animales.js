"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animales = void 0;
class Animales {
    constructor(animales, nombreAnimal, raza, edad, sexo, zonaRecogida, reservaActual, fecha_de_encuentro) {
        this._animales = animales;
        this._nombreAnimal = nombreAnimal;
        this._raza = raza;
        this._edad = edad;
        this._sexo = sexo;
        this._zonaRecogida = zonaRecogida;
        this._reservaActual = reservaActual;
        this._fecha_de_encuentro = fecha_de_encuentro;
    }
    set Nombreanimal(value) {
        this._nombreAnimal = value;
    }
    get Nombreanimal() {
        return this._nombreAnimal;
    }
    set Raza(value) {
        this._raza = value;
    }
    set ZonaRecogida(value) {
        this._zonaRecogida = value;
    }
    set Edad(value) {
        this._edad = value;
    }
    set Sexo(value) {
        this._sexo = value;
    }
    set ReservaActual(value) {
        this._reservaActual = value;
    }
    set fechaDeEncuentro(value) {
        this._fecha_de_encuentro = value;
    }
    get Raza() {
        return this._raza;
    }
    get ZonaRecogida() {
        return this._zonaRecogida;
    }
    get Edad() {
        return this._edad;
    }
    get Sexo() {
        return this._sexo;
    }
    get ReservaActual() {
        return this._reservaActual;
    }
    get fechaDeEncuentro() {
        return this._fecha_de_encuentro;
    }
}
exports.Animales = Animales;
