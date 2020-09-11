/*
    1. Definisete klasu
    2. Napravi se konstruktor
    3. Napravite setere za sva polja
    4. Napravite getere za sva polja
*/

export class Automobil {
    
    constructor(mar, mod , b, ik){
        this.marka = mar; //pozivamo seter za marku
        this.model = mod;
        this.boja = b;
        this.imaKrov = ik; 
    }
/*
BITNO
metode koje su geteri i seteri pristupamo kao da su polja a ne kao funkcijama
znaci ne pristupamo samom polju jer treba da budu privatni i da im se 
pristupa samo u klasi
ovako pristupamo samo metodi
*/



//seter postavlja,setuje vrednost
    set marka(m){
        if(m ==""){
            alert("los unos")
        }else {
        this._marka = m;
        }
    }
//geter vraca vrednost(return)
    get marka(){
        return this._marka;
    }
    //model
    set model(m){
        this._model = m;
    }
    get model(){
        return this._model;
    }

    //boja
    set boja(b){
        this._boja = b;
    }
    get boja(){
        return this._boja;
    }
    //imakrov
    set imaKrov(i){
        this._imaKrov = i;
    }
    get imaKrov(){
        return this._imaKrov;
    }

//u klasama nema arow funkcija
    sviraj(){
        console.log("Beeeep beeeep !!!!");
    }
}