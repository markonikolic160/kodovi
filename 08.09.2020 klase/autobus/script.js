console.log("autobusi");

import {Autobus} from "./autobus.js"

let autobus1 = new Autobus('123-43-FS', 72);
let autobus2 = new Autobus('653-37-CH', 40);
let autobus3 = new Autobus('143-62-HT', 54);

let autobusi = [autobus1,autobus2,autobus3];

//ukupno sedista svih autobusa
let ukupnoSedista = niz =>{
    let sum = 0;
    niz.forEach(autobus =>{
        sum += autobus.brSedista;
    });
    return sum;
}
console.log(ukupnoSedista(autobusi));

//autobus sa najvise sedista
let najviseSedista = autobusi[0].brSedista;
let najveci = autobusi[0];
let maksSedista = niz => {
    niz.forEach(elem =>{
        if(elem.brSedista>najviseSedista){
            najviseSedista = elem.brSedista;
            najveci = elem;
        }
    });
    return najveci.info();
}
maksSedista(autobusi);


// na osnovu prosledjenog broja ljudi provera da li mogu da stanu u sve autobuse

let ljudi = (brojLjudi,niz) =>{
    let ukupno = 0;
    niz.forEach(elem =>{
        ukupno += elem.brSedista;
    });
    if(ukupno>=brojLjudi){
        return true;
    } else{
        return false;
    }
}
console.log(ljudi(100,autobusi));