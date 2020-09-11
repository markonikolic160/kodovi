console.log("klasa pacijenti");

import {Pacijent} from "./pacijent.js";

let p1 = new Pacijent("Pera Peric",180,75);
p1.stampaj();
console.log(p1.bmi());
console.log(p1.kritican());

let p2 = new Pacijent("Zika Zikic",175,90);
p2.stampaj();
console.log(p2.bmi());
console.log(p2.kritican());

let p3 = new Pacijent("Jovan Jovanovic",195,70);
p3.stampaj();
console.log(p3.bmi());
console.log(p3.kritican());

let pacijenti = [p1,p2,p3];


//najmanja tezina pacijenta 
let najmanjaT = pacijenti[0].tezina;
pacijenti.forEach(p =>{
    if(p.tezina<najmanjaT){
        najmanjaT = p.tezina;
    
    }  
});
console.log(najmanjaT);


//najveca bmi vrednost
let najveciBmi = pacijenti[0].bmi();
let maxBmiPacijent = pacijenti[0]; //cuva ceo objekat
pacijenti.forEach(pacijent =>{
    if(pacijent.bmi()>najveciBmi){
        najveciBmi = pacijent.bmi();
        maxBmiPacijent = pacijent;
    }
});
maxBmiPacijent.stampaj();


//pacijenti koji sadrze slovo a

pacijenti.forEach(pacijent =>{
    if(pacijent.ime.includes("a")){
        console.log(pacijent.ime);
    }
});

//srednja visina 

let srednjaVisina = niz =>{
    let sum = 0;
    niz.forEach(elem =>{
        sum += elem.visina;
    });
    return sum / niz.length;
}
console.log(srednjaVisina(pacijenti));
