export class Knjiga{
    constructor(nas , aut , giz , brstr , c){
        this.naslov = nas;
        this.autor = aut;
        this.godIzdanja = giz;
        this.brojStrana = brstr;
        this.cena = c;
    }
    set naslov(n){
        this._naslov = n;
    }
    set autor(a){
        this._autor = a;
    }
    set godIzdanja(g){
        this._godIzdanja = g;
    }
    set brojStrana(b){
        this._brojStrana = b;
    }
    set cena(c){
        this._cena = c;
    }

    get naslov(){
        return this._naslov;
    }
    get autor(){
        return this._autor;
    }
    get godIzdanja(){
        return this._godIzdanja;
    }
    get brojStrana(){
        return this._brojStrana;
    }
    get cena(){
        return this._cena;
    }

    stampaj(){
        console.log(this.naslov, this.autor, this.godIzdanja, this.brojStrana, this.cena);
    }

    obimna(){
        if(this.brojStrana>600){
            return true;
        } else {
            return false;
        }
    }

    skupa(){
        if(this.cena>8000){
            return true;
        }else {
            return false;
        }
    }

    dugackoIme(){
        if(this.autor.length>18){
            return true;
        } else {
            return false;
        }
    }
}