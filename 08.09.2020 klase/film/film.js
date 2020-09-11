export class Film{

    constructor(na , re , giz, o){
        this.naslov = na;
        this.reziser = re;
        this.godIzdanja = giz;
        this.ocene = o;

    }
    //seteri postavljaju vrednosti poljima
    set naslov(n){
        this._naslov = n;
    }
    set reziser(r){
        this._reziser = r;
    }
    set godIzdanja(gi){
        
        this._godIzdanja = gi;
        
    }
    set ocene(o){
        this._ocene = o;
    }


    //geteri - vracaju vrednosti polja
    get naslov(){
        return this._naslov;
    }
    get reziser(){
        return this._reziser;
    }
    get godIzdanja(){
        return this._godIzdanja;
    }
    get ocene(){
        return this._ocene;
    }


    stampaj(){
        console.log(this.naslov);
    }

    prosek(){
        let sum = 0 ;
        this.ocene.forEach( o =>{
            sum += o;
        });
        return sum / this.ocene.length;
    }

}