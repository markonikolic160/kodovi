console.log("klasa knjige");

import {Knjiga} from "./knjige.js";

let k1 = new Knjiga("Na drini cuprija","Ivo Andric",1945,421,2500);
let k2 = new Knjiga("Hari Poter", "Zoan Ketling Rouling" , 1997 ,850,1450);
let k3 = new Knjiga("Hari Poter kolekcija","Zoan ketling Rouling",2015,5000,10050);


k1.stampaj();
console.log(k1.obimna());
console.log(k1.skupa());
console.log(k1.dugackoIme());


let knjige = [k1,k2,k3];
knjige.forEach(k =>{
    if(k.dugackoIme()){
        console.log(k.autor);
    }
});

//i skupe i obimne knjige
knjige.forEach(k =>{
    if(k.skupa() && k.obimna()){
        k.stampaj();
    }
});

//funkcija koja odredjuje ukupnu cenu knjiga

let ukupnaCena = niz =>{
    let sum = 0;
    niz.forEach(elem =>{
        sum += elem.cena;
    });
    return sum;
}
console.log(ukupnaCena(knjige));

//funkcija za prosecnu cenu kjnige

let prosecnaCena = niz =>{
    let arsr = ukupnaCena(niz)/niz.length;
    return arsr;
}
console.log(prosecnaCena(knjige));

//funkcija za prosecnu cenu stranice knjige(koliko kosta jedna stranica)

let prosecnaStranica = niz =>{
    let uc = ukupnaCena(niz);
    let brStr = 0;
    niz.forEach(elem => {
        brStr += elem.brojStrana;
    });
    let arSrStr = uc / brStr;
    return arSrStr;
}
console.log(prosecnaStranica(knjige));
