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
exports.menuPral = void 0;
const entradaTeclado_1 = require("../util/entradaTeclado");
const menuPral = () => __awaiter(void 0, void 0, void 0, function* () {
    let n;
    console.log('\n');
    console.log('1.- poner animal en adopcion');
    console.log('2.- Ver animales en adopcion');
    console.log('3.- Modificar informacion de un animal');
    console.log('4.- Eliminar animal de la lista');
    console.log('5.- ver ficha tecnica de un animal');
    console.log('0.- Salir');
    n = parseInt(yield (0, entradaTeclado_1.leer)('opción: '));
    return n;
});
exports.menuPral = menuPral;
