"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perro = void 0;
const Animales_1 = require("./Animales");
class Perro extends Animales_1.Animales {
    constructor(animales, nombreAnimal, raza, edad, sexo, zonaRecogida, reservaActual, fecha_de_encuentro, aptoCaza, problemas_conducta) {
        super(animales, nombreAnimal, raza, edad, sexo, zonaRecogida, reservaActual, fecha_de_encuentro);
        this._aptoCaza = aptoCaza;
        this._problemas_conducta = problemas_conducta;
    }
    get Animal() {
        return this._animal;
    }
    get Aptocaza() {
        return this._aptoCaza;
    }
    set Aptocaza(value) {
        this._aptoCaza = value;
    }
    get Problemas_conducta() {
        return this._problemas_conducta;
    }
    set Problemas_conducta(value) {
        this._problemas_conducta = value;
    }
}
exports.Perro = Perro;
