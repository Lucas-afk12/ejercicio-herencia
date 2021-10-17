import { Animales } from './Animales';
export class Caballo extends Animales {

  private _aptoMonta : string;
  private _aptoTiro:string;
  

  constructor(animales: string| undefined,nombreAnimal: string, raza : string , edad : number  , sexo: string, zonaRecogida : string ,  reservaActual: string , fecha_de_encuentro:Date, aptoMonta:string , aptoTiro:string ) {
  super ( animales ,nombreAnimal , raza , edad , sexo , zonaRecogida , reservaActual , fecha_de_encuentro )
  this._aptoMonta = aptoMonta
  this._aptoTiro = aptoTiro
  }

  get Animal () {
    return this._animales
  }

  get aptoMonta () {
    return this._aptoMonta
  }

  set aptoMonta (value:string) {
     this._aptoMonta = value
  }

  get Aptotiro () {
    return this._aptoTiro
  }

  set Aptotiro (value:string) {
    this._aptoTiro = value
  }



}
