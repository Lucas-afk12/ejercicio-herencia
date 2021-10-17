"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const caballo_1 = require("./classes/caballo");
const Perro_1 = require("./classes/Perro");
const entradaTeclado_1 = require("./util/entradaTeclado");
const menuPral_1 = require("./util/menuPral");
let animales = new Array();
let perro;
let caballo;
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    let n;
    do {
        n = yield (0, menuPral_1.menuPral)();
        switch (n) {
            case 1:
                yield nuevo();
                break;
            case 2:
                yield mostrar();
                break;
            case 3:
                yield modificar();
                break;
            case 4:
                yield eliminar();
                break;
            case 5:
                yield ficha();
                break;
            case 0:
                console.log('\nAdios');
        }
    } while (n != 0);
});
const nuevo = () => __awaiter(void 0, void 0, void 0, function* () {
    let x;
    let nombreAnimal, raza, zonaRecogida, edad, sexo, reservaActual, aptoCaza, problemas_conducta, aptoMonta, aptoTiro, fecha;
    console.log("1.-perro");
    console.log("2.-caballo");
    x = parseInt(yield (0, entradaTeclado_1.leer)("introduzca su opcion"));
    switch (x) {
        case 1:
            nombreAnimal = yield (0, entradaTeclado_1.leer)("introduzca El nombre de su perro");
            raza = yield (0, entradaTeclado_1.leer)("introduzca la raza de su perro");
            edad = parseInt(yield (0, entradaTeclado_1.leer)("introduzca la edad del perro"));
            sexo = yield (0, entradaTeclado_1.leer)("introduzca el sexo de su perro");
            zonaRecogida = yield (0, entradaTeclado_1.leer)("introduzca la zona donde el perro fue encontrado");
            reservaActual = yield (0, entradaTeclado_1.leer)("Introduzca la reserva donde se encuentra el perro");
            aptoCaza = yield (0, entradaTeclado_1.leer)("introduzca si el perro es apto para labores de caza");
            problemas_conducta = yield (0, entradaTeclado_1.leer)("introduzca si el perro tiene algun problema de conducta");
            fecha = new Date(yield (0, entradaTeclado_1.leer)("Introduzca la fecha en la cual fue recojida el perro"));
            perro = new Perro_1.Perro("perro", nombreAnimal, raza, edad, sexo, zonaRecogida, reservaActual, fecha, aptoCaza, problemas_conducta);
            animales.push(perro);
            break;
        case 2:
            nombreAnimal = yield (0, entradaTeclado_1.leer)("introduzca El nombre de su caballo");
            raza = yield (0, entradaTeclado_1.leer)("introduzca la raza de su caballo");
            edad = parseInt(yield (0, entradaTeclado_1.leer)("introduzca la edad del caballo"));
            sexo = yield (0, entradaTeclado_1.leer)("introduzca el sexo de su caballo");
            zonaRecogida = yield (0, entradaTeclado_1.leer)("introduzca la zona donde fue encontrada el caballo");
            reservaActual = yield (0, entradaTeclado_1.leer)("Introduzca la reserva donde se encuentra el caballo");
            aptoMonta = yield (0, entradaTeclado_1.leer)("introduzca si el caballo es apto para la monta");
            aptoTiro = yield (0, entradaTeclado_1.leer)("introduzca si el caballo es apto para labores  de tiro ");
            fecha = new Date(yield (0, entradaTeclado_1.leer)("Introduzca la fecha en la cual fue recojida el caballo"));
            caballo = new caballo_1.Caballo("caballo", nombreAnimal, raza, edad, sexo, zonaRecogida, reservaActual, fecha, aptoMonta, aptoTiro);
            animales.push(caballo);
            break;
    }
});
const mostrar = () => __awaiter(void 0, void 0, void 0, function* () {
    console.table(animales);
});
const eliminar = () => __awaiter(void 0, void 0, void 0, function* () {
    mostrar();
    let x = yield (0, entradaTeclado_1.leer)("Introduzca el nombre del animal que quieres eliminar");
    animales = animales.filter(function (a) {
        return a.Nombreanimal !== x;
    });
});
const ficha = () => __awaiter(void 0, void 0, void 0, function* () {
    let x;
    x = yield (0, entradaTeclado_1.leer)("Introduzca el nombre del animal del cual quieres ver su ficha");
    for (let a of animales) {
        if (x == a.Nombreanimal) {
            console.table(a);
        }
    }
});
const modificar = () => __awaiter(void 0, void 0, void 0, function* () {
    let o = 1;
    let x = "apdaspdadapsdp";
    mostrar();
    x = yield (0, entradaTeclado_1.leer)("Introduzca el nombre del animal el cual quieres modificar");
    for (let a of animales) {
        if (a.Nombreanimal == x) {
            while (o != 0) {
                console.log("1.-Nombre del animal");
                console.log("2.-raza del animal");
                console.log("3.-edad del animal");
                console.log("4.-sexo del animal");
                console.log("5.-zona de recogida del animal");
                console.log("6.-reserva actual del animal");
                console.log("7.-fecha de encuentro del animal");
                console.log("8.-caballo= Apto para montar , Perro = apto para cazar");
                console.log("9.-caballo= apto para carga , perro = problemas de comportamiento");
                console.log("10.-Salir");
                let y = parseInt(yield (0, entradaTeclado_1.leer)("que valor quiere modificar"));
                switch (y) {
                    case 1:
                        a.Nombreanimal = yield (0, entradaTeclado_1.leer)("Introduce un nuevo nombre");
                        break;
                    case 2:
                        a.Raza = yield (0, entradaTeclado_1.leer)("introduce una nueva raza");
                        break;
                    case 3:
                        a.Edad = parseInt(yield (0, entradaTeclado_1.leer)("introduce una nueva edad"));
                        break;
                    case 4:
                        a.Sexo = yield (0, entradaTeclado_1.leer)("introduce un nuevo sexo");
                        break;
                    case 5:
                        a.ZonaRecogida = yield (0, entradaTeclado_1.leer)("cambie el area donde fue recojido el animal");
                        break;
                    case 6:
                        a.ReservaActual = yield (0, entradaTeclado_1.leer)("cambie el area de donde se hospeda el animal");
                        break;
                    case 7:
                        a.fechaDeEncuentro = new Date(yield (0, entradaTeclado_1.leer)("Cambie la fecha donde fue encontrado el animal"));
                        break;
                    case 8:
                        if (a instanceof Perro_1.Perro == true) {
                            perro.Aptocaza = yield (0, entradaTeclado_1.leer)("cambie si el animal es apto para caza o no");
                        }
                        else {
                            caballo.aptoMonta = yield (0, entradaTeclado_1.leer)("cambie si el caballo es apto para la monta");
                        }
                        break;
                    case 9:
                        if (a instanceof Perro_1.Perro == true) {
                            perro.Problemas_conducta = yield (0, entradaTeclado_1.leer)("cambie si el animal tiene problemas de conducta");
                        }
                        else {
                            caballo.Aptotiro = yield (0, entradaTeclado_1.leer)("cambie si el caballo es apto para el tiro");
                        }
                        break;
                    case 10:
                        o = 0;
                        break;
                }
            }
        }
    }
});
main();
