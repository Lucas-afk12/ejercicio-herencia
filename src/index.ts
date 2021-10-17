import { Animales } from './classes/Animales'
import {Caballo} from "./classes/caballo"
import {Perro} from "./classes/Perro"
import { leer } from './util/entradaTeclado'
import {menuPral} from './util/menuPral'


let animales: Array<Animales> = new Array<Animales>();
let perro: Perro;
let caballo : Caballo

const main = async () => {
    let n: number
    do {
        n = await menuPral()
        switch(n){
            case 1:
                 await nuevo()
                break
            case 2:
                 await mostrar()
                break
            case 3:
                await modificar()
                break
            case 4:
                await eliminar()
                break
            case 5:
                await ficha()
                break
            case 0:
                console.log('\nAdios')
        }
    }while (n != 0)
}

const nuevo = async () =>  {
    
    let x  : number

    let nombreAnimal: string , raza : string , zonaRecogida : string , edad : number  , sexo: string , reservaActual: string , aptoCaza:string , problemas_conducta:string , aptoMonta:string , aptoTiro:string , fecha:Date

        console.log("1.-perro")
        console.log("2.-caballo")
        x = parseInt( await leer("introduzca su opcion"))
        switch(x){
            
            case 1:
                
                nombreAnimal =  await leer("introduzca El nombre de su perro")

                raza =  await leer("introduzca la raza de su perro")

                edad =  parseInt(await leer("introduzca la edad del perro"))

                sexo =  await leer("introduzca el sexo de su perro")

                zonaRecogida =  await leer("introduzca la zona donde el perro fue encontrado")

                reservaActual =  await leer("Introduzca la reserva donde se encuentra el perro")

                aptoCaza =  await leer("introduzca si el perro es apto para labores de caza")

                problemas_conducta =  await leer("introduzca si el perro tiene algun problema de conducta")

                fecha = new Date(await leer("Introduzca la fecha en la cual fue recojida el perro"))

                perro=new Perro("perro",nombreAnimal,raza,edad,sexo,zonaRecogida,reservaActual,fecha,aptoCaza,problemas_conducta)

                animales.push(perro)
                break

                case 2:

                    nombreAnimal =  await leer("introduzca El nombre de su caballo")

                    raza =  await leer("introduzca la raza de su caballo")
    
                    edad =  parseInt(await leer("introduzca la edad del caballo"))
    
                    sexo =  await leer("introduzca el sexo de su caballo")
    
                    zonaRecogida =  await leer("introduzca la zona donde fue encontrada el caballo")
    
                    reservaActual =  await leer("Introduzca la reserva donde se encuentra el caballo")
    
                    aptoMonta =  await leer("introduzca si el caballo es apto para la monta")
    
                    aptoTiro =  await leer("introduzca si el caballo es apto para labores  de tiro ")

                    fecha = new Date(await leer("Introduzca la fecha en la cual fue recojida el caballo"))
                    
                    caballo =new Caballo("caballo",nombreAnimal,raza,edad,sexo,zonaRecogida,reservaActual,fecha,aptoMonta,aptoTiro)
    
                    animales.push(caballo)

                    break            
        }
}

const mostrar = async () => {

    console.table(animales)

}

const eliminar = async () => {

        mostrar()
        let x = await leer("Introduzca el nombre del animal que quieres eliminar")
        animales = animales.filter(function(a) {
        return a.Nombreanimal !== x; 
    })
}

const ficha = async () => {

    let x:string
     x = await leer("Introduzca el nombre del animal del cual quieres ver su ficha")
    for (let a of animales) {
        if ( x == a.Nombreanimal){
            console.table(a)
        }
      }
      
    
}

const modificar = async() => {
    let o = 1

    let x= "apdaspdadapsdp" 

    mostrar()

     x = await leer("Introduzca el nombre del animal el cual quieres modificar")

        for (let a of animales){
            
            if(a.Nombreanimal == x){

                while(o!=0){

                console.log("1.-Nombre del animal")
                console.log("2.-raza del animal")
                console.log("3.-edad del animal")
                console.log("4.-sexo del animal")
                console.log("5.-zona de recogida del animal")
                console.log("6.-reserva actual del animal")
                console.log("7.-fecha de encuentro del animal")
                console.log("8.-caballo= Apto para montar , Perro = apto para cazar")
                console.log("9.-caballo= apto para carga , perro = problemas de comportamiento")
                console.log("10.-Salir")

                let y = parseInt(await leer("que valor quiere modificar"))

                switch (y){
                    case 1:
                     a.Nombreanimal = await leer("Introduce un nuevo nombre")
                    break
                    case 2:
                     a.Raza = await leer ("introduce una nueva raza")
                     break
                    case 3: 
                     a.Edad = parseInt (await leer("introduce una nueva edad"))
                     break
                    case 4:
                     a.Sexo = await leer("introduce un nuevo sexo")
                     break
                    case 5:
                     a.ZonaRecogida = await leer("cambie el area donde fue recojido el animal")
                     break
                     case 6:
                     a.ReservaActual= await leer("cambie el area de donde se hospeda el animal")
                     break
                     case 7:
                     a.fechaDeEncuentro= new Date(await leer("Cambie la fecha donde fue encontrado el animal"))
                     break
                     case 8:
                        if (a instanceof Perro == true){
                     perro.Aptocaza = await leer("cambie si el animal es apto para caza o no")
                        }else{
                     caballo.aptoMonta = await leer("cambie si el caballo es apto para la monta")
                        }
                     break
                     case 9:
                        if (a instanceof Perro == true){
                        perro.Problemas_conducta = await leer("cambie si el animal tiene problemas de conducta")
                               }else{
                        caballo.Aptotiro = await leer("cambie si el caballo es apto para el tiro")
                               } 
                        break
                    case 10:
                        o=0
                        break
                     

   
                }
            }}
        }
        
                
        
        }
main()

