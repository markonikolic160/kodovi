export class Pacijent{

    constructor(name , vis , tez){
        this.ime = name;
        this.visina = vis;
        this.tezina = tez;
    }

    set ime(i){
        this._ime = i;
    }
    set visina(v){
        if(v>0 && v<250){
        this._visina = v;
        }else {
            alert("Visina mora biti izmedju 0-250");
        }
    }
    set tezina(t){
        if(t>0 && t<550){
        this._tezina = t;
        }else {
            alert("Tezina mora biti izmedju 0-550");
        }
    }

    get ime(){
        return this._ime;
    }
    get visina(){
        return this._visina;
    }
    get tezina(){
        return this._tezina;
    }

    stampaj(){
        console.log(this.ime, this.visina, this.tezina);
    }

    bmi(){
      
        let bmi = this.tezina/((this.visina/100)**2);
        return bmi;
    }

    kritican(){
        if(this.bmi()<15 || this.bmi()>40){
            return true;
        } else {
            return false;
        }
    }

}
