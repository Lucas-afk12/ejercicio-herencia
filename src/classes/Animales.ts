export class Animales {

    protected _nombreAnimal: string; 
    private _raza : string;
    private _edad : number ;
    private _sexo : string;
    private _zonaRecogida : string;
    private _reservaActual : string;
    public _animales:string;
    private _fecha_de_encuentro : Date


    constructor( animales : string , nombreAnimal: string, raza : string , edad : number , sexo:string , zonaRecogida : string , reservaActual : string , fecha_de_encuentro : Date) {
        
        this._animales = animales
        this._nombreAnimal = nombreAnimal;
        this._raza = raza;
        this._edad = edad;
        this._sexo = sexo;
        this._zonaRecogida = zonaRecogida;
        this._reservaActual = reservaActual
        this._fecha_de_encuentro = fecha_de_encuentro
    }

    set Nombreanimal(value:string) {
        this._nombreAnimal = value
    }

        
    get Nombreanimal() {
        return  this._nombreAnimal 
     }
 

    set Raza(value:string) {
        this._raza = value
    }

    set ZonaRecogida(value:string) {
        this._zonaRecogida = value
    }

    set Edad (value:number) {
        this._edad = value
    }

    set Sexo (value:string) {
        this._sexo = value
    }

    set ReservaActual (value:string) {
        this._reservaActual = value
    }

    set fechaDeEncuentro (value: Date){
        this._fecha_de_encuentro = value
    }

    get Raza() {
        return this._raza 
    }

    get ZonaRecogida() {
        return this._zonaRecogida
    }

    get Edad () {
        return this._edad 
    }

    get Sexo () {
        return this._sexo
    }
    
    get ReservaActual () {
        return this._reservaActual
    }

    
    get fechaDeEncuentro (){
        return this._fecha_de_encuentro 
    }

  }
  