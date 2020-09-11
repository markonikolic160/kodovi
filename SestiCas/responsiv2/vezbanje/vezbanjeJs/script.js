let a=17; //sati
let b=37; //minuti
let c= a * 60 + b;
console.log(c);


let d= 459; //minuta od ponoci
let f= Math.floor (d / 60); //sati
let g= d % 60; // minuti
console.log(f,g);

let j= 105 //cena robe
let k= 200 // novcanica
let l= Math.round(k-j); //zaokruzuje 
console.log(l);

// izvlacimo trenutne sate i minute
let q = new Date().getHours();
let w = new Date().getMinutes();
let e = q*60 + w;
console.log(e);

let datum = new Date();
let godina = datum.getFullYear();
let mesec = datum.getMonth() + 1;
let dan = datum.getDate();
let danUNedelji = datum.getDay(); // vraca broj dana 0-6
console.log(godina, mesec,dan);
console.log(`${dan}.${mesec}.${godina}`);
console.log(`${godina}/${mesec}/${dan}`);


let sreKurs = 117.5;
let euri = 100;
let dinari = 14500;

let promenaUDinare = Math.trunc(euri * sreKurs);
let promenaUEure = Math.trunc(dinari / sreKurs);

console.log(promenaUDinare);
console.log(promenaUEure);

let dolar = 250 ;
let sreDolar = 101.5 ;
let dolUEuro = Math.trunc(dolar * sreDolar / sreKurs);
console.log(dolUEuro);


let celzijus = 31;
let farenhajt=70;
let tUFarenhajte = Math.round(celzijus * 1.8 + 32);
let tUCelzijuse = Math.round((farenhajt-32)/1.8);
console.log(tUFarenhajte);
console.log(tUCelzijuse);

let kelvin = 300;
let kelvinUCel = Math.round(kelvin - 273.15);
let celzijusUKel= Math.round(celzijus + 273.15);
console.log(kelvinUCel);
console.log(celzijusUKel);
let nesto=18;
console.log(`Imam nesto godina`);
console.log(1 % 3);