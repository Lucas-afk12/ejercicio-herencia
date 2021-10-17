import { Animales } from './Animales';
export class Perro extends Animales {

  private _animal : string;
  private _aptoCaza : string;
  private _problemas_conducta:string;
  

  constructor(animales:string|undefined ,nombreAnimal: string, raza : string  , edad : number  ,  sexo: string , zonaRecogida : string , reservaActual: string ,fecha_de_encuentro:Date, aptoCaza:string , problemas_conducta:string) {
  super ( animales ,nombreAnimal , raza , edad , sexo , zonaRecogida ,reservaActual ,fecha_de_encuentro)
  this._aptoCaza = aptoCaza
  this._problemas_conducta = problemas_conducta
  }

  get Animal () {
    return this._animal
  }

  get Aptocaza () {
    return this._aptoCaza
  }

  set Aptocaza(value:string) {
    this._aptoCaza=value
  }

  get Problemas_conducta () {
    return this._problemas_conducta
  }

  set Problemas_conducta (value:string) {
    this._problemas_conducta = value
  }


}
