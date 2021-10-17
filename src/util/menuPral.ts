import { leer } from '../util/entradaTeclado'

export const menuPral = async () => {
    let n: number
    console.log('\n')
    console.log('1.- poner animal en adopcion')
    console.log('2.- Ver animales en adopcion')
    console.log('3.- Modificar informacion de un animal')
    console.log('4.- Eliminar animal de la lista')
    console.log('5.- ver ficha tecnica de un animal')
    console.log('0.- Salir')
    n = parseInt( await leer('opción: '))
    return n
}